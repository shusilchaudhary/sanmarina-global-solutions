import { testimonials } from '@/public/data/testimonials';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Factory, CalendarDays, MapPin, Quote, ArrowRight, Star } from 'lucide-react';
import type { Metadata } from 'next';

// Generate static params so these pages can be prerendered
export async function generateStaticParams() {
  return testimonials.map((t) => ({
    id: t.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const story = testimonials.find((t) => t.id === resolvedParams.id);
  if (!story) return { title: 'Not Found' };
  
  return {
    title: `${story.name}'s Success Story | SanMarina Global`,
    description: `Read how ${story.name} secured their European work visa and launched their career as a ${story.role} in ${story.country}.`,
  };
}

export default async function SuccessStoryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const story = testimonials.find((t) => t.id === resolvedParams.id);

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* ── BACK NAVIGATION ──────────────────────────────────── */}
      <div className="bg-neutral-50 pt-28 pb-6 border-b border-neutral-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link 
            href="/success-stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Stories
          </Link>
        </div>
      </div>

      {/* ── HERO SECTION ─────────────────────────────────────── */}
      <section className="bg-neutral-50/50 border-b border-neutral-100 relative overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary-50/50 pointer-events-none blur-[100px]" />

        <div className="container mx-auto px-4 max-w-4xl py-20 relative z-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <span className="px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-600 text-sm font-bold tracking-wider uppercase border border-neutral-200">
              Asia ➔ {story.country}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-bold tracking-wider uppercase border border-primary-200">
              Success Story
            </span>
            {story.verified && (
              <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold tracking-wider uppercase border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Verified Placement
              </span>
            )}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-neutral-950 mb-8">
            {story.name}
          </h1>
          
          <div className="relative max-w-3xl mx-auto">
            <Quote className="absolute -left-8 -top-6 w-16 h-16 text-primary-100 rotate-180 -z-10" />
            <p className="text-2xl md:text-3xl text-neutral-600 font-medium leading-relaxed mb-10 italic z-10 relative">
              "{story.quote}"
            </p>
          </div>

          <div className="inline-flex flex-wrap justify-center items-center gap-6 px-8 py-5 rounded-2xl bg-white border border-neutral-200 shadow-sm mx-auto">
            <div className="text-center">
              <span className="block text-neutral-400 font-medium mb-1 text-sm">Role</span>
              <span className="font-bold text-neutral-900 text-lg">{story.role}</span>
            </div>
            <div className="w-px h-10 bg-neutral-200 hidden sm:block" />
            <div className="text-center">
              <span className="block text-neutral-400 font-medium mb-1 text-sm">Rating</span>
              <div className="flex text-amber-500 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < story.rating ? 'fill-current' : 'opacity-30'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS DASHBOARD ──────────────────────────────── */}
      <section className="container mx-auto px-4 max-w-4xl -mt-8 relative z-20 mb-16">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 font-semibold mb-0.5">Destination</p>
              <p className="font-bold text-neutral-900">{story.country} ({story.countryCode})</p>
            </div>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-neutral-100" />

          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 font-semibold mb-0.5">Visa Type</p>
              <p className="font-bold text-neutral-900">{story.visaType || 'Permanent Work Visa'}</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-neutral-100" />

          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
              <CalendarDays className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 font-semibold mb-0.5">Approval Date</p>
              <p className="font-bold text-neutral-900">{story.visaDate || '2026'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE JOURNEY / ARTICLE BODY ───────────────────────── */}
      <article className="container mx-auto px-4 max-w-3xl prose prose-lg prose-neutral mb-24">
        <h2>The Journey to Europe</h2>
        
        {story.fullStory ? (
          story.fullStory.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <>
            <p>
              Before joining SanMarina Global, {story.name.split(' ')[0]} was seeking reliable opportunities to build a stable and high-paying career abroad. The process of migrating to Europe can often feel complex, daunting, and riddled with confusing paperwork.
            </p>
            
            <h3>The Application & Screening</h3>
            <p>
              Our team connected with {story.name.split(' ')[0]} early on to evaluate their skills and align them directly with our exclusive European employer network. As a highly dedicated professional, they were the perfect candidate for a <strong>{story.role}</strong> position in {story.country}. We handled all pre-vetting, language assessments, and compliance training required by EU regulations.
            </p>

            <h3>Visa Processing & Deployment</h3>
            <p>
              Securing a <strong>{story.visaType || 'Permanent Worker Visa'}</strong> requires precise documentation and direct coordination with embassies. The SanMarina Global immigration department managed the entire document trail—from the initial work permit approvals in {story.country} right down to successful embassy interviews.
            </p>

            <p>
              Today, <strong>{story.name}</strong> is fully settled and legally working in {story.country}, representing the premium standard of Asian talent in the European workforce. 
            </p>
          </>
        )}
      </article>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-neutral-950 rounded-3xl p-10 md:p-16 text-center shadow-xl border border-neutral-800">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-6">
            Start Your Success Story Today
          </h2>
          <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
            Whether you are looking to secure a European work visa or an employer seeking to hire dedicated talent like {story.name.split(' ')[0]}, our team is exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              Contact Our Advisors
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
