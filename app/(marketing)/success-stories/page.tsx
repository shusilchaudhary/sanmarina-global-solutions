import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Quote, CheckCircle2, Globe, Star } from 'lucide-react';
import { testimonials } from '@/public/data/testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success Stories | SanMarina Global',
  description:
    'Read real success stories from candidates who secured their European work visas and launched their careers abroad with SanMarina Global.',
};

export default function SuccessStoriesIndex() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <section className="relative bg-neutral-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4c1d95_0%,transparent_50%)] opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary-900/50 border border-primary-500/30 text-primary-300 text-sm font-semibold tracking-wider uppercase">
            <Globe className="w-4 h-4" />
            Real People, Real Results
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight mb-6">
            Success Stories
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Discover how we have helped professionals from Asia secure permanent careers and build new lives in Europe.
          </p>
        </div>
      </section>

      {/* ── STORIES GRID ─────────────────────────────────────── */}
      <section className="container mx-auto px-4 max-w-7xl -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((story) => (
            <Link 
              key={story.id} 
              href={`/success-stories/${story.id}`}
              className="group flex flex-col bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-8 pb-6 flex-1">
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  {story.avatar ? (
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border border-neutral-100 shadow-sm shrink-0">
                      <Image src={story.avatar} alt={story.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-700 font-display font-bold text-xl shrink-0">
                      {story.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {story.name}
                    </h3>
                    <p className="text-sm text-neutral-500 font-medium">
                      {story.role}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < story.rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-200'}`}
                    />
                  ))}
                </div>

                {/* Short Quote */}
                <p className="text-neutral-600 leading-relaxed line-clamp-4 relative">
                  <span className="absolute -left-2 -top-2 text-4xl text-neutral-200 font-serif leading-none opacity-50">"</span>
                  {story.quote}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-8 py-5 bg-neutral-50 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                {story.verified && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100/50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Visa
                  </span>
                )}
                <span className="text-sm font-semibold text-primary-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Full Story
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 max-w-4xl mt-24">
        <div className="bg-primary-950 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#4f46e5_0%,transparent_70%)] opacity-30 pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-6">
            Ready to completely change <span className="text-primary-400">your career?</span>
          </h2>
          <p className="text-lg text-primary-100/80 mb-10 max-w-2xl mx-auto">
            Join hundreds of successful professionals who have secured their European work visas and high-paying jobs with our dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/jobs"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary-600/30 hover:-translate-y-0.5"
            >
              Browse Open Roles
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all"
            >
              Contact Advisory Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
