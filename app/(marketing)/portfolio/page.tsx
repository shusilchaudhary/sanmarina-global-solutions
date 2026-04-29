import type { Metadata } from 'next';
import { CTASection } from '@/components/marketing/CTASection';
import { PortfolioGrid } from '@/components/marketing/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio | SanMarina Global Solutions',
  description:
    'Explore our portfolio of web development, app development, SEO, digital marketing, graphic design, video editing, and AI video projects with real results.',
};

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      <section className="pt-40 md:pt-48 pb-16 md:pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-0.5 w-12 bg-violet-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">Our Portfolio</span>
            <div className="h-0.5 w-12 bg-violet-500" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5" style={{ color: 'inherit' }}>
            Work That <span className="text-gradient">Speaks for Itself</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real projects, real results. Browse our work across web development, mobile apps, marketing, design, and AI-powered video.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <PortfolioGrid />
        </div>
      </section>

      <CTASection />
    </main>
  );
}
