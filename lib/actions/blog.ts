'use server';

import { supabaseAdmin } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function saveBlogPost(formData: FormData) {
  const id          = formData.get('id') as string | null;
  const title       = formData.get('title') as string;
  const slug        = formData.get('slug') as string;
  const excerpt     = formData.get('excerpt') as string;
  const content     = formData.get('content') as string;
  const category    = formData.get('category') as string;
  const author      = formData.get('author') as string;
  const read_time   = formData.get('read_time') as string;
  const is_published = formData.get('is_published') === 'true';

  const payload = {
    title, slug, excerpt, content, category, author, read_time, is_published,
    updated_at: new Date().toISOString(),
    ...(is_published ? { published_at: new Date().toISOString() } : {}),
  };

  if (id) {
    const { error } = await supabaseAdmin.from('blog_posts').update(payload).eq('id', id);
    if (error) return { success: false, error: error.message };
  } else {
    const { error } = await supabaseAdmin.from('blog_posts').insert({ ...payload, published_at: new Date().toISOString() });
    if (error) return { success: false, error: error.message };
  }

  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  revalidatePath('/admin/blog');
  return { success: true };
}

export async function deleteBlogPost(id: string) {
  await supabaseAdmin.from('blog_posts').delete().eq('id', id);
  revalidatePath('/blog');
  revalidatePath('/admin/blog');
  redirect('/admin/blog');
}
