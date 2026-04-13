import { supabaseAdmin } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import BlogEditor from '../../BlogEditor';

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data: post } = await supabaseAdmin.from('blog_posts').select('*').eq('id', id).single();
  if (!post) notFound();
  return <BlogEditor post={post} />;
}
