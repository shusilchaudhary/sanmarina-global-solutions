'use client';

import { useState, useEffect } from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { testimonials } from '@/public/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () =>
    setActive((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="py-24 md:py-32 section-light relative overflow-hidden">
      
      {/* Decorative abstract elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_100%_0%,#eff6ff_0%,transparent_70%)] opacity-80" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_0%_100%,#f0fdf4_0%,transparent_70%)] opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          label="Success Stories"
          title="Don't Just Take Our Word For It"
          description="Hear from the professionals and companies who have transformed their careers and businesses with SanMarina Global."
        />

        <div className="relative max-w-4xl mx-auto mt-12">
          
          {/* Main Card */}
          <div className="premium-card p-10 md:p-16 relative overflow-hidden text-center">
            
            <Quote className="w-12 h-12 text-primary-100 mx-auto mb-8" />
            
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-5 h-5',
                    i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-200'
                  )}
                />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed mb-10">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary-100 border-2 border-white shadow-sm flex items-center justify-center text-primary-700 font-display font-bold text-xl">
                {t.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-base font-bold text-neutral-900">{t.name}</p>
                <p className="text-sm text-neutral-500">
                  {t.role} • {t.country}
                </p>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-400 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50 transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    'h-2.5 rounded-full transition-all duration-300',
                    i === active
                      ? 'w-8 bg-primary-600'
                      : 'w-2.5 bg-neutral-200 hover:bg-neutral-300'
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-400 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50 transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
