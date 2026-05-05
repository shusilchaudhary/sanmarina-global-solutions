export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date string */
  date: string;
  category: string;
  readTime: string;
  /** Paragraphs separated by blank lines */
  content: string;
};

/** Add posts here when you publish articles. */
export const blogPosts: BlogPost[] = [];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
