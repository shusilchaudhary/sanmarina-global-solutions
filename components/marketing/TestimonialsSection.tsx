'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { testimonials } from '@/public/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/shared/ThemeProvider';

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const timer = setInterval(() => { goTo((prev) => (prev + 1) % testimonials.length); }, 7000);
    return () => clearInterval(timer);
  }, []);

  function goTo(updater: (prev: number) => number) {
    setAnimating(true);
    setTimeout(() => { setActive(updater); setAnimating(false); }, 200);
  }

  const t = testimonials[active];

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden border-y transition-colors duration-300 ${isDark ? 'bg-dark-950 border-zinc-800' : 'bg-white border-zinc-100'}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-violet-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">Client Testimonials</span>
          <div className="h-0.5 w-12 bg-violet-500" />
        </div>
        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
          What Our Clients <span className="text-gradient">Say About Us</span>
        </h2>
        <p className="text-zinc-500 text-center text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Hear from businesses that transformed their digital presence with SanMarina Global Solutions.
        </p>

        <div className={cn(
          'rounded-3xl border shadow-lg p-10 md:p-14 text-center transition-opacity duration-200',
          isDark ? 'bg-dark-800 border-zinc-700' : 'bg-white border-zinc-200',
          animating ? 'opacity-0' : 'opacity-100'
        )}>
          <Quote className={`w-10 h-10 mx-auto mb-8 ${isDark ? 'text-violet-400/30' : 'text-violet-200'}`} />
          <div className="flex items-center justify-center gap-1 mb-7">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={cn('w-5 h-5', i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-200 fill-zinc-200')} />
            ))}
          </div>
          <blockquote className={`text-xl md:text-2xl font-medium leading-relaxed mb-10 max-w-3xl mx-auto ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            {t.avatar ? (
              <Image
                src={t.avatar}
                alt={t.name}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover shrink-0"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-display font-bold text-xl shrink-0">
                {t.name.charAt(0)}
              </div>
            )}
            <div className="text-left">
              <p className={`text-base font-bold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{t.name}</p>
              <p className="text-sm text-zinc-500">{t.role} · {t.country}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button onClick={() => goTo((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className={`w-11 h-11 rounded-full border flex items-center justify-center hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50 transition-all shadow-sm ${isDark ? 'border-zinc-700 bg-dark-800 text-zinc-400' : 'border-zinc-200 bg-white text-zinc-400'}`} aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => goTo(() => i)}
                className={cn('h-2 rounded-full transition-all duration-400', i === active ? 'w-8 bg-violet-500' : isDark ? 'w-2 bg-zinc-600 hover:bg-zinc-500' : 'w-2 bg-zinc-300 hover:bg-zinc-400')}
                aria-label={`Go to ${i + 1}`} />
            ))}
          </div>
          <button onClick={() => goTo((prev) => (prev + 1) % testimonials.length)}
            className={`w-11 h-11 rounded-full border flex items-center justify-center hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50 transition-all shadow-sm ${isDark ? 'border-zinc-700 bg-dark-800 text-zinc-400' : 'border-zinc-200 bg-white text-zinc-400'}`} aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
