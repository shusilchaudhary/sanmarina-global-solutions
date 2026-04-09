'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { testimonials } from '@/public/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  function goTo(updater: (prev: number) => number) {
    setAnimating(true);
    setTimeout(() => {
      setActive(updater);
      setAnimating(false);
    }, 200);
  }

  const handlePrev = () => goTo((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => goTo((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden border-y border-neutral-200">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(204,34,41,0.04) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">

        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-red-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">Success Stories</span>
          <div className="h-0.5 w-12 bg-red-500" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 text-center mb-4 tracking-tight">
          Don&apos;t Just Take Our <span className="text-red-gradient">Word For It</span>
        </h2>
        <p className="text-navy-500 text-center text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Hear from professionals and companies who transformed their careers and businesses with SanMarina Global.
        </p>

        {/* Main card */}
        <div
          className={cn(
            'bg-white rounded-3xl border border-neutral-200 shadow-[0_8px_48px_rgba(11,22,40,0.08)] p-10 md:p-14 text-center transition-opacity duration-200',
            animating ? 'opacity-0' : 'opacity-100'
          )}
        >
          {/* Large quote icon */}
          <Quote className="w-10 h-10 text-red-200 mx-auto mb-8" />

          {/* Verified badge */}
          {t.verified && (
            <div className="flex items-center justify-center mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold tracking-wide">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Visa Approved
              </span>
            </div>
          )}

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-7">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-5 h-5',
                  i < t.rating ? 'text-red-500 fill-red-500' : 'text-neutral-200 fill-neutral-200'
                )}
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl text-navy-800 font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            {t.avatar ? (
              <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-red-200 shrink-0">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-14 h-14 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center text-red-600 font-display font-bold text-xl shrink-0">
                {t.name.charAt(0)}
              </div>
            )}
            <div className="text-left">
              <p className="text-base font-bold text-navy-900">{t.name}</p>
              <p className="text-sm text-navy-500">{t.role} · {t.country}</p>
              {t.verified && t.visaType && (
                <p className="text-xs text-red-600 font-semibold mt-0.5">
                  {t.visaType} · {t.visaDate}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <Link
              href={`/success-stories/${t.id}`}
              className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 hover:gap-3 transition-all text-sm"
            >
              Read Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-navy-400 hover:text-red-600 hover:border-red-300 hover:bg-red-50 transition-all shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(() => i)}
                className={cn(
                  'h-2 rounded-full transition-all duration-400',
                  i === active
                    ? 'w-8 bg-red-500'
                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-navy-400 hover:text-red-600 hover:border-red-300 hover:bg-red-50 transition-all shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
