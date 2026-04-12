'use server';

import { createSupabaseServerClient } from '@/lib/supabase-server';
import { supabaseAdmin } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function signUp(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const full_name = formData.get('full_name') as string;
  const phone = formData.get('phone') as string;
  const role = formData.get('role') as string;
  const company_name = formData.get('company_name') as string;

  // 1. Create the auth user
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return { error: error.message };

  const user = data.user;
  if (!user) return { error: 'Could not create account. Please try again.' };

  // 2. Create profile using admin client (bypasses RLS)
  const { error: profileError } = await supabaseAdmin.from('profiles').insert({
    id: user.id,
    email,
    full_name,
    phone,
    role,
  });
  if (profileError) return { error: 'Account created but profile setup failed: ' + profileError.message };

  // 3. Create role-specific profile
  if (role === 'employer') {
    await supabaseAdmin.from('employer_profiles').insert({
      id: user.id,
      company_name: company_name || full_name,
    });
  } else {
    await supabaseAdmin.from('jobseeker_profiles').insert({ id: user.id });
  }

  revalidatePath('/');
  redirect(role === 'employer' ? '/dashboard/employer' : '/dashboard/jobseeker');
}

export async function signIn(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', (await supabase.auth.getUser()).data.user!.id).single();

  revalidatePath('/');
  if (profile?.role === 'employer') redirect('/dashboard/employer');
  else if (profile?.role === 'admin') redirect('/admin');
  else redirect('/dashboard/jobseeker');
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  revalidatePath('/');
  redirect('/');
}
