'use server';

import { supabaseAdmin } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createJob(formData: FormData) {
  const title = formData.get('title') as string;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    + '-' + (formData.get('country') as string).toLowerCase().replace(/\s+/g, '-');

  const { error } = await supabaseAdmin.from('jobs').insert({
    slug,
    title,
    country: formData.get('country'),
    country_code: formData.get('country_code'),
    visa_type: formData.get('visa_type'),
    category: formData.get('category'),
    salary_min: Number(formData.get('salary_min')),
    salary_max: Number(formData.get('salary_max')),
    salary_currency: formData.get('salary_currency') || 'USD',
    salary_period: formData.get('salary_period') || 'monthly',
    description: formData.get('description'),
    requirements: (formData.get('requirements') as string).split('\n').filter(Boolean),
    benefits: (formData.get('benefits') as string).split('\n').filter(Boolean),
    is_featured: formData.get('is_featured') === 'on',
    is_active: true,
    expires_at: formData.get('expires_at') || '2026-12-31T00:00:00Z',
  });

  if (error) throw new Error(error.message);
  revalidatePath('/admin/jobs');
  revalidatePath('/jobs');
  redirect('/admin/jobs');
}

export async function updateJob(id: string, formData: FormData) {
  const { error } = await supabaseAdmin.from('jobs').update({
    title: formData.get('title'),
    country: formData.get('country'),
    country_code: formData.get('country_code'),
    visa_type: formData.get('visa_type'),
    category: formData.get('category'),
    salary_min: Number(formData.get('salary_min')),
    salary_max: Number(formData.get('salary_max')),
    salary_currency: formData.get('salary_currency') || 'USD',
    salary_period: formData.get('salary_period') || 'monthly',
    description: formData.get('description'),
    requirements: (formData.get('requirements') as string).split('\n').filter(Boolean),
    benefits: (formData.get('benefits') as string).split('\n').filter(Boolean),
    is_featured: formData.get('is_featured') === 'on',
    expires_at: formData.get('expires_at') || '2026-12-31T00:00:00Z',
  }).eq('id', id);

  if (error) throw new Error(error.message);
  revalidatePath('/admin/jobs');
  revalidatePath('/jobs');
  redirect('/admin/jobs');
}

export async function deleteJob(id: string) {
  await supabaseAdmin.from('jobs').delete().eq('id', id);
  revalidatePath('/admin/jobs');
  revalidatePath('/jobs');
  redirect('/admin/jobs');
}
