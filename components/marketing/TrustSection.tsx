'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Globe, Award, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { icon: Users, value: 2000, suffix: '+', label: 'Workers Placed' },
  { icon: Globe, value: 15, suffix: '+', label: 'European Countries' },
  { icon: Award, value: 98, suffix: '%', label: 'Visa Approval Rate' },
  { icon: Briefcase, value: 150, suffix: '+', label: 'Partner Companies' },
];

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [target, isVisible]);

  return count;
}

export function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-neutral-50 border-y border-neutral-100 relative overflow-hidden">
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_0%_0%,#bfdbfe_0%,transparent_70%)] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_100%_100%,#bfdbfe_0%,transparent_70%)] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-widest">
            Trusted by Global Enterprises
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const count = useCountUp(stat.value, isVisible);

            return (
              <div key={stat.label} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center mb-4 md:mb-6 group-hover:border-primary-200 group-hover:bg-primary-50 transition-colors">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-2 tracking-tight">
                  {count.toLocaleString()}<span className="text-primary-600">{stat.suffix}</span>
                </h3>
                
                <p className="text-sm md:text-base text-neutral-500 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
