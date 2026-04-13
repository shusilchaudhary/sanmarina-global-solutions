'use client';

import { Trash2 } from 'lucide-react';
import { deleteBlogPost } from '@/lib/actions/blog';

export default function DeleteBlogButton({ postId }: { postId: string }) {
  return (
    <form
      action={deleteBlogPost.bind(null, postId)}
      onSubmit={e => { if (!confirm('Delete this post?')) e.preventDefault(); }}
      style={{ display: 'inline' }}
    >
      <button type="submit" style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        padding: '6px 12px', background: '#FFF1F2', color: '#CC2229',
        borderRadius: '7px', fontSize: '12px', fontWeight: 700, border: 'none', cursor: 'pointer',
      }}>
        <Trash2 size={12} /> Delete
      </button>
    </form>
  );
}
