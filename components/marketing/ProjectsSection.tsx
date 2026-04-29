'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/components/shared/ThemeProvider';

const projects = [
  {
    title: 'E-Commerce Platform',
    client: 'TechVenture SRL',
    category: 'Web Development',
    description: 'Full-stack e-commerce platform with custom CMS, payment gateway integration, and real-time inventory management. Revenue grew 3x within six months.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tags: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL'],
    stats: { label: 'Revenue Growth', value: '3x' },
    color: 'violet',
  },
  {
    title: 'HealthTrack Mobile App',
    client: 'HealthTrack',
    category: 'App Development',
    description: 'Cross-platform health tracking app with real-time sync, wearable integration, and intuitive dashboards. Hit 10,000 downloads in the first month.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    tags: ['React Native', 'Firebase', 'HealthKit', 'REST API'],
    stats: { label: 'Downloads (Month 1)', value: '10K+' },
    color: 'cyan',
  },
  {
    title: 'SEO & Content Strategy',
    client: 'FreshBrands GmbH',
    category: 'Digital Marketing',
    description: 'Comprehensive SEO overhaul and content marketing strategy. Moved from page 5 to top 3 Google results. Organic traffic increased 280%.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Technical SEO', 'Content Marketing', 'Analytics', 'Link Building'],
    stats: { label: 'Organic Traffic', value: '+280%' },
    color: 'violet',
  },
  {
    title: 'AI Product Video Suite',
    client: 'Nordic Retail Group',
    category: 'AI Video',
    description: 'AI-powered video production pipeline generating professional product demos and social reels at scale. Cut production time from weeks to days.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    tags: ['AI/ML', 'Video Generation', 'Automation', 'Cloud'],
    stats: { label: 'Production Speed', value: '10x' },
    color: 'cyan',
  },
  {
    title: 'Brand Identity & UI Kit',
    client: 'Luxe Hospitality',
    category: 'Graphic Design',
    description: 'Complete brand identity system including logo, typography, color palette, UI component library, and marketing collateral across print and digital.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    tags: ['Brand Identity', 'UI/UX', 'Figma', 'Print Design'],
    stats: { label: 'Brand Assets', value: '120+' },
    color: 'violet',
  },
  {
    title: 'FinServe Web Platform',
    client: 'FinServe Italia',
    category: 'Web Development',
    description: 'Enterprise-grade financial transaction platform handling thousands of daily operations with real-time dashboards, audit trails, and bank-level security.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    stats: { label: 'Daily Transactions', value: '5K+' },
    color: 'cyan',
  },
  {
    title: 'AI Support Automation',
    client: 'SmartLogix',
    category: 'AI Automation',
    description: 'End-to-end AI automation with intelligent chatbot, automated ticket routing, and sentiment analysis. Resolved 70% of tickets automatically.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['GPT-4', 'LangChain', 'Python', 'FastAPI'],
    stats: { label: 'Auto-Resolved', value: '70%' },
    color: 'violet',
  },
];

const colorMap: Record<string, { badge: string; stat: string }> = {
  violet: { badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20', stat: 'text-violet-400' },
  cyan: { badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', stat: 'text-cyan-400' },
};

export function ProjectsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-24 md:py-32 transition-colors duration-300 ${isDark ? 'bg-dark-900' : 'bg-zinc-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-violet-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">Our Work</span>
          <div className="h-0.5 w-12 bg-violet-500" />
        </div>

        <div className="text-center mb-14">
          <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            Projects That <span className="text-gradient">Speak for Themselves</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Real results from real clients. Here&apos;s a selection of the work we&apos;re most proud of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const c = colorMap[p.color];
            return (
              <div key={p.title} className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-dark-800 border-zinc-700 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10' : 'bg-white border-zinc-200 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50'}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border backdrop-blur-sm ${c.badge}`}>
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm">
                      <span className={`text-lg font-display font-extrabold ${c.stat}`}>{p.stats.value}</span>
                      <span className="text-[9px] text-white/70 block leading-tight">{p.stats.label}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">{p.client}</p>
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{p.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-0.5 text-[10px] font-semibold rounded-md ${isDark ? 'bg-white/5 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <Link href="/portfolio" className="btn-primary inline-flex text-sm">
            View All Projects <ArrowRight size={15} />
          </Link>
          <Link href="/contact" className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${isDark ? 'text-zinc-400 hover:text-violet-400' : 'text-zinc-500 hover:text-violet-600'}`}>
            Start Your Project <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
