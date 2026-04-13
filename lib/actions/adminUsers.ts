'use server';

import { supabaseAdmin } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function changeUserRole(formData: FormData) {
  const userId = formData.get('userId') as string;
  const role   = formData.get('role') as string;

  if (!['jobseeker', 'employer', 'admin'].includes(role)) return { error: 'Invalid role' };

  const { error } = await supabaseAdmin
    .from('profiles')
    .update({ role })
    .eq('id', userId);

  if (error) return { error: error.message };

  revalidatePath('/admin/users');
  return { success: true };
}
