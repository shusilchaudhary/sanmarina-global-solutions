import Link from 'next/link';
import { ArrowRight, Globe, Clock, User, Tag } from 'lucide-react';
import type { Metadata } from 'next';
import { supabaseAdmin } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Blog & Insights | SanMarina Global',
  description:
    'Expert advice, visa guides, and industry news for international recruitment and European work opportunities from SanMarina Global Solutions.',
};

export const revalidate = 60;

const categoryStyle: Record<string, { pill: string; bar: string }> = {
  'Visa Guides':        { pill: 'bg-blue-50 text-blue-600 border-blue-200',    bar: 'bg-blue-500' },
  'Country Guides':     { pill: 'bg-navy-50 text-navy-700 border-navy-200',    bar: 'bg-navy-600' },
  'Safety & Awareness': { pill: 'bg-red-50 text-red-600 border-red-200',       bar: 'bg-red-500' },
  'Industry News':      { pill: 'bg-green-50 text-green-600 border-green-200', bar: 'bg-green-500' },
  'Career Tips':        { pill: 'bg-purple-50 text-purple-600 border-purple-200', bar: 'bg-purple-500' },
};

export default async function BlogPage() {
  const { data: posts } = await supabaseAdmin
    .from('blog_posts')
    .select('slug, title, excerpt, category, author, read_time, published_at')
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  const categories = Array.from(new Set((posts ?? []).map(p => p.category).filter(Boolean)));

  return (
    <div className="min-h-screen bg-white pb-24">

      {/* ── Hero ── */}
      <section className="relative bg-navy-950 pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 70% 20%, rgba(204,34,41,0.10) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-red-600/10 border border-red-600/25 text-red-300 text-sm font-bold tracking-wider uppercase">
            <Globe className="w-4 h-4" /> Insights & Advisory
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            SanMarina Global <span className="text-red-gradient">Blog</span>
          </h1>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Visa guides, country insights, and safety tips for workers seeking European opportunities.
          </p>
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-navy-900 to-white" />

      <section className="container mx-auto px-4 max-w-5xl -mt-4">

        {/* Category filter pills */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => {
              const s = categoryStyle[cat] ?? { pill: 'bg-neutral-100 text-neutral-600 border-neutral-200' };
              return (
                <span key={cat} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold ${s.pill}`}>
                  <Tag className="w-3 h-3" /> {cat}
                </span>
              );
            })}
          </div>
        )}

        {/* Articles grid */}
        {!posts || posts.length === 0 ? (
          <div className="text-center py-24 text-neutral-400">No articles published yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => {
              const style = categoryStyle[post.category] ?? { pill: 'bg-neutral-100 text-neutral-600 border-neutral-200', bar: 'bg-neutral-400' };
              const dateStr = post.published_at
                ? new Date(post.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
                : '';
              return (
                <article key={post.slug} className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col">
                  <div className={`h-1 ${style.bar}`} />
                  <div className="p-7 flex flex-col flex-1">
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border mb-4 self-start ${style.pill}`}>
                      {post.category}
                    </span>
                    <h2 className="font-display text-lg font-bold text-neutral-900 mb-3 leading-snug group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-5 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="flex items-center gap-4 text-xs text-neutral-400">
                        <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{post.author ?? 'SanMarina Team'}</span>
                        {post.read_time && <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.read_time}</span>}
                      </div>
                      <span className="text-xs text-neutral-400">{dateStr}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-500 transition-colors"
                    >
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* CTA strip */}
        <div className="mt-16 relative overflow-hidden section-navy rounded-3xl p-10 text-center border border-red-600/20">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(204,34,41,0.08) 0%, transparent 70%)' }} />
          <h3 className="font-display text-2xl font-bold text-white mb-2 relative z-10">Ready to Start Your European Journey?</h3>
          <p className="text-navy-300 text-sm mb-8 relative z-10">Browse our open positions or contact our team directly.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <Link href="/jobs" className="btn-red text-sm">Browse Jobs <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/8 text-white font-semibold text-sm hover:bg-white/15 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
