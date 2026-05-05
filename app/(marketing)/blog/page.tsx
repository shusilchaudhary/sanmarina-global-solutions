import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { CTASection } from '@/components/marketing/CTASection';
import { blogPosts } from '@/public/data/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on web development, SEO, digital marketing, and AI from SanMarina Global Solutions.',
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="bg-white">
      <section className="pt-40 md:pt-48 pb-16 md:pb-20 text-center relative overflow-hidden dark:bg-dark-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-0.5 w-12 bg-violet-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">Blog</span>
            <div className="h-0.5 w-12 bg-violet-500" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-zinc-900 dark:text-zinc-100">
            Ideas &amp; <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Practical notes on building fast websites, growing visibility with SEO, and using AI tools responsibly.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 dark:bg-dark-950">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          {sorted.length === 0 ? (
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-dark-800 p-10 md:p-14 text-center">
              <p className="text-zinc-500 dark:text-zinc-400 text-[17px] leading-relaxed mb-6">
                New articles are on the way. In the meantime, reach out if you have a project in mind—we’d love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-colors"
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            sorted.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-dark-800 p-6 md:p-8 shadow-sm hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300"
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-violet-600 mb-2">{post.category}</p>
                <h2 className="font-display text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500 mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} className="text-zinc-400" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-zinc-400" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:gap-3 transition-all"
                >
                  Read article
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
