'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/public/data/testimonials';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/shared/ThemeProvider';

const duplicated = [...testimonials, ...testimonials];

export function TrustSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf: number;
    let pos = 0;
    const speed = 0.5;

    function step() {
      if (!paused) {
        pos += speed;
        const halfWidth = track!.scrollWidth / 2;
        if (pos >= halfWidth) pos = 0;
        track!.style.transform = `translateX(-${pos}px)`;
      }
      raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <section className={`relative py-20 md:py-28 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-dark-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
          Trusted by Businesses Worldwide
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 ${isDark ? 'bg-gradient-to-r from-dark-950 to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`} />
        <div className={`pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 ${isDark ? 'bg-gradient-to-l from-dark-950 to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`} />

        <div ref={trackRef} className="flex gap-6 w-max will-change-transform">
          {duplicated.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className={`w-[340px] md:w-[400px] shrink-0 rounded-2xl border p-7 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all duration-300 ${isDark ? 'bg-dark-800 border-zinc-700 hover:bg-dark-700' : 'bg-white border-zinc-200'}`}
            >
              <Quote className="w-7 h-7 text-violet-200 mb-4" />

              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={cn(
                      'w-4 h-4',
                      s < t.rating
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-zinc-200 fill-zinc-200'
                    )}
                  />
                ))}
              </div>

              <p className={`text-sm leading-relaxed line-clamp-4 mb-6 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className={`flex items-center gap-3 pt-4 border-t ${isDark ? 'border-zinc-700' : 'border-zinc-100'}`}>
                {t.avatar ? (
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-display font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className={`text-sm font-bold truncate ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{t.name}</p>
                  <p className="text-xs text-zinc-500 truncate">{t.role} · {t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
