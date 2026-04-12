'use server';

import { supabaseAdmin } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function updateApplicationStatus(formData: FormData) {
  const applicationId = formData.get('applicationId') as string;
  const status = formData.get('status') as string;

  await supabaseAdmin
    .from('applications')
    .update({ status })
    .eq('id', applicationId);

  revalidatePath('/dashboard/employer/applications');
  revalidatePath('/admin/applications');
}
