'use client';

import { useEffect, useRef, useState } from 'react';
import { Monitor, Users, Star, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Monitor, value: 100, suffix: '+', label: 'Projects Delivered', color: 'text-violet-400' },
  { icon: Users, value: 50, suffix: '+', label: 'Happy Clients', color: 'text-cyan-400' },
  { icon: Star, value: 5, suffix: '+', label: 'Years Experience', color: 'text-emerald-400' },
  { icon: TrendingUp, value: 15, suffix: '+', label: 'Team Members', color: 'text-violet-400' },
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

function StatItem({ icon: Icon, value, suffix, label, color, isVisible }: {
  icon: typeof Monitor; value: number; suffix: string; label: string; color: string; isVisible: boolean;
}) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="flex flex-col items-center text-center px-6 py-8 md:py-10 group">
      <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 transition-all">
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <p className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2 tracking-tight">
        {count.toLocaleString()}
        <span className={color}>{suffix}</span>
      </p>
      <p className="text-sm text-zinc-400 font-medium">{label}</p>
    </div>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-dark-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative">
              {index > 0 && (
                <div className="hidden lg:block absolute top-8 bottom-8 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
              <StatItem icon={stat.icon} value={stat.value} suffix={stat.suffix} label={stat.label} color={stat.color} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
