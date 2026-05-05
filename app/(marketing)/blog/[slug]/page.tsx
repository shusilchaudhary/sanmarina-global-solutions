import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { CTASection } from '@/components/marketing/CTASection';
import { blogPosts, getPostBySlug } from '@/public/data/blog';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="bg-white">
      <article className="pt-40 md:pt-48 pb-16 md:pb-24 dark:bg-dark-950">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>

          <p className="text-[11px] font-bold uppercase tracking-wider text-violet-600 mb-3">{post.category}</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500 mb-10 pb-10 border-b border-zinc-200 dark:border-zinc-700">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={16} className="text-zinc-400" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={16} className="text-zinc-400" />
              {post.readTime}
            </span>
          </div>

          <div className="max-w-none">
            {paragraphs.map((text, i) => (
              <p key={i} className="text-zinc-600 dark:text-zinc-300 text-[17px] leading-relaxed mb-6 last:mb-0">
                {text}
              </p>
            ))}
          </div>
        </div>
      </article>

      <CTASection />
    </main>
  );
}
