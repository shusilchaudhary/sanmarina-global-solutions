import { supabaseAdmin } from '@/lib/supabase';
import Link from 'next/link';
import { Plus, Pencil, Trash2, Eye, EyeOff } from 'lucide-react';
import DeleteBlogButton from './DeleteBlogButton';

export default async function AdminBlogPage() {
  const { data: posts } = await supabaseAdmin
    .from('blog_posts')
    .select('id, slug, title, category, is_published, published_at, read_time')
    .order('created_at', { ascending: false });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '26px', fontWeight: 800, color: '#0B1628' }}>Blog Posts</h1>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>{posts?.length ?? 0} total posts</p>
        </div>
        <Link href="/admin/blog/new" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '11px 20px', background: '#CC2229', color: '#fff',
          borderRadius: '10px', fontSize: '14px', fontWeight: 700, textDecoration: 'none',
        }}>
          <Plus size={16} /> New Post
        </Link>
      </div>

      <div style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #F3F4F6', overflow: 'hidden' }}>
        {(!posts || posts.length === 0) ? (
          <div style={{ padding: '48px', textAlign: 'center', color: '#9CA3AF' }}>
            No blog posts yet. <Link href="/admin/blog/new" style={{ color: '#CC2229', fontWeight: 700 }}>Create your first post →</Link>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F9FAFB', borderBottom: '1px solid #F3F4F6' }}>
                {['Title', 'Category', 'Read Time', 'Published', 'Status', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <tr key={post.id} style={{ borderBottom: i < posts.length - 1 ? '1px solid #F9FAFB' : 'none' }}>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: '#0B1628' }}>{post.title}</div>
                    <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '2px' }}>{post.slug}</div>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ padding: '3px 10px', borderRadius: '999px', background: '#F3F4F6', fontSize: '12px', fontWeight: 600, color: '#374151' }}>
                      {post.category ?? '—'}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6B7280' }}>
                    {post.read_time ?? '—'}
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6B7280' }}>
                    {post.published_at ? new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 700,
                      background: post.is_published ? '#F0FDF4' : '#F3F4F6',
                      color: post.is_published ? '#16A34A' : '#9CA3AF',
                    }}>
                      {post.is_published ? <><Eye size={11} /> Published</> : <><EyeOff size={11} /> Draft</>}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <Link href={`/blog/${post.slug}`} target="_blank" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        padding: '6px 12px', background: '#F0FDF4', color: '#16A34A',
                        borderRadius: '7px', fontSize: '12px', fontWeight: 700, textDecoration: 'none',
                      }}>
                        <Eye size={12} /> View
                      </Link>
                      <Link href={`/admin/blog/${post.id}/edit`} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        padding: '6px 12px', background: '#EFF6FF', color: '#2563EB',
                        borderRadius: '7px', fontSize: '12px', fontWeight: 700, textDecoration: 'none',
                      }}>
                        <Pencil size={12} /> Edit
                      </Link>
                      <DeleteBlogButton postId={post.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
