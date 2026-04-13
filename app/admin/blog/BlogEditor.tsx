'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Save, Loader2, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { saveBlogPost } from '@/lib/actions/blog';

const CATEGORIES = ['Visa Guides', 'Country Guides', 'Safety & Awareness', 'Industry News', 'Career Tips'];

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  author: string | null;
  read_time: string | null;
  is_published: boolean;
  published_at: string | null;
};

export default function BlogEditor({ post }: { post?: Post }) {
  const router = useRouter();
  const isEdit = !!post;

  const [title,       setTitle]       = useState(post?.title ?? '');
  const [slug,        setSlug]        = useState(post?.slug ?? '');
  const [excerpt,     setExcerpt]     = useState(post?.excerpt ?? '');
  const [content,     setContent]     = useState(post?.content ?? '');
  const [category,    setCategory]    = useState(post?.category ?? '');
  const [author,      setAuthor]      = useState(post?.author ?? 'SanMarina Team');
  const [readTime,    setReadTime]    = useState(post?.read_time ?? '');
  const [isPublished, setIsPublished] = useState(post?.is_published ?? true);
  const [saving,      setSaving]      = useState(false);
  const [error,       setError]       = useState('');
  const [preview,     setPreview]     = useState(false);

  function toSlug(text: string) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  function handleTitleChange(val: string) {
    setTitle(val);
    if (!isEdit) setSlug(toSlug(val));
  }

  async function handleSave() {
    if (!title.trim() || !slug.trim()) { setError('Title and slug are required.'); return; }
    setSaving(true);
    setError('');
    const formData = new FormData();
    if (post?.id) formData.append('id', post.id);
    formData.append('title',        title);
    formData.append('slug',         slug);
    formData.append('excerpt',      excerpt);
    formData.append('content',      content);
    formData.append('category',     category);
    formData.append('author',       author);
    formData.append('read_time',    readTime);
    formData.append('is_published', isPublished ? 'true' : 'false');

    const result = await saveBlogPost(formData);
    setSaving(false);
    if (result.success) {
      router.push('/admin/blog');
    } else {
      setError(result.error ?? 'Failed to save post.');
    }
  }

  function renderPreview(text: string) {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i} style={{ fontSize: '18px', fontWeight: 700, color: '#0B1628', marginTop: '20px', marginBottom: '8px' }}>{line.slice(3)}</h2>;
      if (line.startsWith('# '))  return <h1 key={i} style={{ fontSize: '22px', fontWeight: 800, color: '#0B1628', marginTop: '24px', marginBottom: '10px' }}>{line.slice(2)}</h1>;
      if (line.startsWith('- '))  return <li key={i} style={{ color: '#374151', marginLeft: '20px', marginBottom: '4px' }}>{line.slice(2)}</li>;
      if (/^\d+\.\s/.test(line))  return <li key={i} style={{ color: '#374151', marginLeft: '20px', marginBottom: '4px', listStyleType: 'decimal' }}>{line.replace(/^\d+\.\s/, '')}</li>;
      if (line.trim() === '')     return <br key={i} />;
      return <p key={i} style={{ color: '#374151', lineHeight: '1.75', marginBottom: '6px' }}
        dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />;
    });
  }

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/admin/blog" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#6B7280', textDecoration: 'none', fontWeight: 600 }}>
            <ArrowLeft size={14} /> Blog
          </Link>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '22px', fontWeight: 800, color: '#0B1628' }}>
            {isEdit ? 'Edit Post' : 'New Post'}
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button type="button" onClick={() => setPreview(p => !p)} style={{
            display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 16px',
            background: preview ? '#EFF6FF' : '#F3F4F6', color: preview ? '#2563EB' : '#374151',
            border: 'none', borderRadius: '9px', fontSize: '13px', fontWeight: 700, cursor: 'pointer',
          }}>
            {preview ? <><EyeOff size={14} /> Editor</> : <><Eye size={14} /> Preview</>}
          </button>
          <button type="button" onClick={handleSave} disabled={saving} style={{
            display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 20px',
            background: saving ? '#9CA3AF' : '#CC2229', color: '#fff',
            border: 'none', borderRadius: '9px', fontSize: '13px', fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer',
          }}>
            {saving ? <><Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} /> Saving…</> : <><Save size={14} /> {isEdit ? 'Update' : 'Publish'}</>}
          </button>
        </div>
      </div>

      {error && (
        <div style={{ padding: '10px 14px', background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '10px', color: '#CC2229', fontSize: '13px', marginBottom: '16px' }}>
          {error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '20px', alignItems: 'flex-start' }}>

        {/* Main editor / preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: '#fff', borderRadius: '14px', border: '1.5px solid #F3F4F6', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div>
              <label style={labelStyle}>Title</label>
              <input value={title} onChange={e => handleTitleChange(e.target.value)} placeholder="Post title…" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Slug (URL)</label>
              <input value={slug} onChange={e => setSlug(toSlug(e.target.value))} placeholder="post-slug-here" style={{ ...inputStyle, fontFamily: 'monospace', fontSize: '13px' }} />
              <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>/blog/{slug || 'your-post-slug'}</p>
            </div>

            <div>
              <label style={labelStyle}>Excerpt</label>
              <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="Short summary shown on the blog listing…" rows={3}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }} />
            </div>

            <div>
              <label style={labelStyle}>Content {!preview && <span style={{ fontSize: '10px', fontWeight: 400, color: '#9CA3AF', textTransform: 'none', letterSpacing: 0 }}> — supports # headings, ## subheadings, - bullets, 1. numbered, **bold**</span>}</label>
              {preview ? (
                <div style={{ minHeight: '400px', padding: '20px', background: '#F9FAFB', borderRadius: '10px', border: '1.5px solid #E5E7EB', fontSize: '14px', lineHeight: '1.8' }}>
                  {content ? renderPreview(content) : <span style={{ color: '#9CA3AF' }}>Nothing to preview yet…</span>}
                </div>
              ) : (
                <textarea value={content} onChange={e => setContent(e.target.value)}
                  placeholder={`Write your article here in markdown…\n\n## Section Heading\n\nYour paragraph text here.\n\n- Bullet point one\n- Bullet point two\n\n1. Numbered step\n2. Another step\n\n**Bold text** for emphasis`}
                  rows={22} style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.7', fontFamily: 'monospace', fontSize: '13px' }} />
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: '#fff', borderRadius: '14px', border: '1.5px solid #F3F4F6', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#0B1628', marginBottom: '4px' }}>Post Settings</h3>

            {/* Publish toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Published</label>
              <div onClick={() => setIsPublished(p => !p)} style={{
                width: '40px', height: '22px', borderRadius: '999px', position: 'relative', cursor: 'pointer',
                background: isPublished ? '#CC2229' : '#D1D5DB', transition: 'background 0.2s',
              }}>
                <div style={{
                  position: 'absolute', top: '3px', left: isPublished ? '21px' : '3px',
                  width: '16px', height: '16px', borderRadius: '50%', background: '#fff',
                  transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)} style={inputStyle}>
                <option value="">Select…</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label style={labelStyle}>Author</label>
              <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="SanMarina Team" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Read Time</label>
              <input value={readTime} onChange={e => setReadTime(e.target.value)} placeholder="e.g. 5 min read" style={inputStyle} />
            </div>
          </div>

          {/* Tips */}
          <div style={{ background: '#F0FDF4', borderRadius: '14px', border: '1.5px solid #BBF7D0', padding: '16px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#15803D', marginBottom: '8px' }}>Markdown Tips</h4>
            <div style={{ fontSize: '12px', color: '#166534', lineHeight: '1.8', fontFamily: 'monospace' }}>
              <div># Big Heading</div>
              <div>## Section Heading</div>
              <div>**bold text**</div>
              <div>- Bullet point</div>
              <div>1. Numbered step</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '11px', fontWeight: 700, color: '#374151',
  marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em',
};
const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 13px', border: '1.5px solid #E5E7EB',
  borderRadius: '9px', fontSize: '14px', color: '#111827', background: '#fff',
  outline: 'none', boxSizing: 'border-box',
};
