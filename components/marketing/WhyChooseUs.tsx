'use client';

import Image from 'next/image';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/shared/ThemeProvider';

const reasons = [
  { title: 'Full-Stack Expertise',   desc: 'From frontend to backend, cloud to mobile — our team covers the entire technology stack.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80' },
  { title: 'Fast Turnaround',        desc: 'Agile development processes that deliver high-quality results on tight deadlines.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
  { title: 'Quality Guaranteed',     desc: 'Rigorous testing, code reviews, and QA processes ensure pixel-perfect, bug-free delivery.', image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80' },
  { title: 'Results-Driven',         desc: 'Every project is designed to move the needle — more traffic, more conversions, more revenue.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  { title: 'Dedicated Support',      desc: 'A dedicated project manager and 24/7 post-launch support for every engagement.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80' },
  { title: 'Creative Design',        desc: 'Beautiful, user-centered interfaces that delight users and strengthen your brand.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80' },
];

function ReasonCard({ title, desc, image, stagger }: { title: string; desc: string; image: string; stagger: number }) {
  const { ref, revealed } = useReveal<HTMLDivElement>({ threshold: 0.08 });
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg hover:border-violet-200 transition-all duration-400 group cursor-default reveal-hidden',
        isDark ? 'bg-dark-800 border-zinc-700 hover:shadow-violet-500/10' : 'bg-white border-zinc-200 hover:shadow-violet-100/50',
        `reveal-stagger-${stagger}`,
        revealed && 'reveal-visible'
      )}
    >
      <div className="relative h-40 overflow-hidden">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{title}</h3>
        <p className="text-zinc-500 leading-relaxed text-sm">{desc}</p>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  const { ref: headRef, revealed: headRevealed } = useReveal<HTMLDivElement>();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden transition-colors duration-300 border-y ${isDark ? 'bg-dark-950 border-zinc-800' : 'bg-white border-zinc-100'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={headRef} className={cn('reveal-hidden', headRevealed && 'reveal-visible')}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-violet-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">Why Choose Us</span>
            <div className="h-0.5 w-12 bg-violet-500" />
          </div>
          <SectionHeader
            label=""
            title="The Right Partner for Your Digital Growth"
            description="We don't just write code — we craft solutions that help your business thrive in the digital world."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mt-14">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} title={reason.title} desc={reason.desc} image={reason.image} stagger={((i % 3) + 1) as 1 | 2 | 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
