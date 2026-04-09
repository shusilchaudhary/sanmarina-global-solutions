'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Globe, Award, Briefcase } from 'lucide-react';

const stats = [
  { icon: Users,     value: 10,  suffix: '+',  label: 'Workers Placed',     color: 'text-red-600' },
  { icon: Globe,     value: 15,  suffix: '+',  label: 'European Countries', color: 'text-red-600' },
  { icon: Award,     value: 98,  suffix: '%',  label: 'Visa Success Rate',  color: 'text-red-600' },
  { icon: Briefcase, value: 150, suffix: '+',  label: 'Partner Companies',  color: 'text-red-600' },
];

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(current);
    }, 25);
    return () => clearInterval(interval);
  }, [target, isVisible]);
  return count;
}

export function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(204,34,41,0.04) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-red-600/70 mb-14">
          Trusted by Global Enterprises
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const count = useCountUp(stat.value, isVisible);
            return (
              <div key={stat.label} className="flex flex-col items-center text-center group">
                {/* Icon bubble */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 mb-2 tracking-tight">
                  {count.toLocaleString()}
                  <span className="text-red-600">{stat.suffix}</span>
                </h3>

                <p className="text-sm text-navy-500 font-semibold">
                  {stat.label}
                </p>

                {/* Red underline on hover */}
                <div className="mt-3 h-0.5 w-0 bg-red-500 group-hover:w-8 transition-all duration-500 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
