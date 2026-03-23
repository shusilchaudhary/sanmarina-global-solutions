import Link from 'next/link';
import { ArrowRight, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & insights | SanMarina Global',
  description: 'Expert advice, industry news, and guides for international recruitment and IT consulting across Europe and Asia.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-24 border-b border-neutral-200">
      
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <section className="relative bg-neutral-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4f46e5_0%,transparent_40%)] opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary-900/50 border border-primary-500/30 text-primary-300 text-sm font-semibold tracking-wider uppercase">
            <Globe className="w-4 h-4" />
            Insights & Advisory
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight mb-6">
            SanMarina Global Blog
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest trends in European labor markets, visa processing guides, and enterprise software engineering.
          </p>
        </div>
      </section>

      {/* ── EMPTY STATE / COMING SOON ──────────────────────────── */}
      <section className="container mx-auto px-4 max-w-5xl mt-20 relative z-20">
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl p-12 md:p-20 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 border border-primary-100/50">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-extrabold text-neutral-950 mb-4 tracking-tight">
            Our News & Articles are Coming Soon
          </h2>
          <p className="text-neutral-500 max-w-md text-base md:text-lg mb-10 leading-relaxed">
            We are currently crafting in-depth guides on securing European visas and scaling tech teams with remote engineers fit for your company.
          </p>
          <Link
            href="/"
            className="group flex items-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
          >
            Return to Homepage
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
