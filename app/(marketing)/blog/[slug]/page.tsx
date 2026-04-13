import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react';
import { supabaseAdmin } from '@/lib/supabase';
import type { Metadata } from 'next';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await supabaseAdmin.from('blog_posts').select('title, excerpt').eq('slug', slug).single();
  return {
    title: data?.title ? `${data.title} | SanMarina Global` : 'Blog | SanMarina Global',
    description: data?.excerpt ?? '',
  };
}

const categoryStyle: Record<string, { pill: string; bar: string }> = {
  'Visa Guides':        { pill: 'bg-blue-50 text-blue-600 border-blue-200',       bar: 'bg-blue-500' },
  'Country Guides':     { pill: 'bg-navy-50 text-navy-700 border-navy-200',       bar: 'bg-navy-600' },
  'Safety & Awareness': { pill: 'bg-red-50 text-red-600 border-red-200',          bar: 'bg-red-500' },
  'Industry News':      { pill: 'bg-green-50 text-green-600 border-green-200',    bar: 'bg-green-500' },
  'Career Tips':        { pill: 'bg-purple-50 text-purple-600 border-purple-200', bar: 'bg-purple-500' },
};

function renderMarkdown(content: string) {
  return content.split('\n').map((line, i) => {
    if (line.startsWith('## ')) return <h2 key={i} className="font-display text-xl font-bold text-neutral-900 mt-8 mb-3">{line.slice(3)}</h2>;
    if (line.startsWith('# '))  return <h1 key={i} className="font-display text-2xl font-bold text-neutral-900 mt-8 mb-4">{line.slice(2)}</h1>;
    if (line.startsWith('### ')) return <h3 key={i} className="font-display text-lg font-bold text-neutral-900 mt-6 mb-2">{line.slice(4)}</h3>;
    if (line.startsWith('- '))  return (
      <li key={i} className="flex items-start gap-2 text-neutral-600 leading-relaxed">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
        <span dangerouslySetInnerHTML={{ __html: parseBold(line.slice(2)) }} />
      </li>
    );
    if (/^\d+\.\s/.test(line)) return (
      <li key={i} className="text-neutral-600 leading-relaxed list-decimal ml-5"
        dangerouslySetInnerHTML={{ __html: parseBold(line.replace(/^\d+\.\s/, '')) }} />
    );
    if (line.trim() === '') return <div key={i} className="h-3" />;
    return <p key={i} className="text-neutral-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseBold(line) }} />;
  });
}

function parseBold(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-neutral-900 font-semibold">$1</strong>');
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: post } = await supabaseAdmin
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!post) notFound();

  const { data: related } = await supabaseAdmin
    .from('blog_posts')
    .select('slug, title, category, read_time, published_at')
    .eq('is_published', true)
    .eq('category', post.category)
    .neq('slug', slug)
    .limit(3);

  const style = categoryStyle[post.category] ?? { pill: 'bg-neutral-100 text-neutral-600 border-neutral-200', bar: 'bg-neutral-400' };
  const dateStr = post.published_at
    ? new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';

  // Split content into list blocks and regular blocks
  const lines = (post.content ?? '').split('\n');
  const groups: { type: 'ul' | 'ol' | 'block'; lines: string[] }[] = [];
  let current: typeof groups[0] | null = null;

  for (const line of lines) {
    if (line.startsWith('- ')) {
      if (current?.type !== 'ul') { current = { type: 'ul', lines: [] }; groups.push(current); }
      current.lines.push(line);
    } else if (/^\d+\.\s/.test(line)) {
      if (current?.type !== 'ol') { current = { type: 'ol', lines: [] }; groups.push(current); }
      current.lines.push(line);
    } else {
      if (current?.type !== 'block') { current = { type: 'block', lines: [] }; groups.push(current); }
      current.lines.push(line);
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-navy-950 pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-navy-300 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold mb-5 ${style.pill}`}>
            <Tag className="w-3 h-3" /> {post.category}
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-navy-300">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author ?? 'SanMarina Team'}</span>
            {post.read_time && <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.read_time}</span>}
            {dateStr && <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{dateStr}</span>}
          </div>
        </div>
      </section>

      <div className="h-12 bg-gradient-to-b from-navy-900 to-white" />

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl pb-24">
        {post.excerpt && (
          <p className="text-lg text-neutral-500 leading-relaxed border-l-4 border-red-500 pl-5 mb-10 italic">
            {post.excerpt}
          </p>
        )}

        <div className="space-y-2">
          {groups.map((group, gi) => {
            if (group.type === 'ul') return (
              <ul key={gi} className="space-y-2 my-4 pl-1">
                {group.lines.map((l, li) => (
                  <li key={li} className="flex items-start gap-2 text-neutral-600 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: parseBold(l.slice(2)) }} />
                  </li>
                ))}
              </ul>
            );
            if (group.type === 'ol') return (
              <ol key={gi} className="space-y-2 my-4 ml-5 list-decimal">
                {group.lines.map((l, li) => (
                  <li key={li} className="text-neutral-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: parseBold(l.replace(/^\d+\.\s/, '')) }} />
                ))}
              </ol>
            );
            return (
              <div key={gi}>
                {group.lines.map((line, li) => {
                  if (line.startsWith('## ')) return <h2 key={li} className="font-display text-xl font-bold text-neutral-900 mt-8 mb-3">{line.slice(3)}</h2>;
                  if (line.startsWith('# '))  return <h1 key={li} className="font-display text-2xl font-bold text-neutral-900 mt-8 mb-4">{line.slice(2)}</h1>;
                  if (line.startsWith('### ')) return <h3 key={li} className="font-display text-lg font-bold text-neutral-900 mt-6 mb-2">{line.slice(4)}</h3>;
                  if (line.trim() === '') return <div key={li} className="h-3" />;
                  return <p key={li} className="text-neutral-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseBold(line) }} />;
                })}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-navy-950 rounded-2xl border border-red-600/20 text-center">
          <h3 className="font-display text-xl font-bold text-white mb-2">Need help with your application?</h3>
          <p className="text-navy-300 text-sm mb-6">Our team is ready to guide you through every step of the process.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all">
              Contact Us
            </Link>
            <Link href="/jobs" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-all">
              Browse Jobs
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {related && related.length > 0 && (
          <div className="mt-16">
            <h3 className="font-display text-lg font-bold text-neutral-900 mb-6">More in {post.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`}
                  className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-red-300 hover:bg-red-50/30 transition-all group">
                  <div className="font-semibold text-sm text-neutral-900 group-hover:text-red-600 transition-colors leading-snug mb-2">{r.title}</div>
                  {r.read_time && <div className="text-xs text-neutral-400 flex items-center gap-1"><Clock className="w-3 h-3" />{r.read_time}</div>}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
