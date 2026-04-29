'use client';

import Image from 'next/image';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { useTheme } from '@/components/shared/ThemeProvider';

const steps = [
  { num: 1, title: 'Discovery & Consultation', description: 'We discuss your goals, audience, and requirements to define a clear project roadmap.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80' },
  { num: 2, title: 'Strategy & Design',        description: 'Our team creates wireframes, prototypes, and a visual design that aligns with your brand.', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80' },
  { num: 3, title: 'Development & Testing',    description: 'Agile sprints with continuous testing to build a performant, bug-free product.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80' },
  { num: 4, title: 'Launch & Support',         description: 'We deploy your project and provide ongoing maintenance, updates, and optimization.', image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=600&q=80' },
];

export function HiringProcess() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-dark-950' : 'bg-white'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-violet-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">Our Process</span>
          <div className="h-0.5 w-12 bg-violet-500" />
        </div>

        <SectionHeader label="" title="How We Deliver Results" description="A transparent, proven process from first conversation to final launch and beyond." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {steps.map((step) => (
            <div key={step.title} className="group">
              <div className="card-white overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <Image src={step.image} alt={step.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                    {step.num}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className={`font-display text-base font-bold mb-2 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{step.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
