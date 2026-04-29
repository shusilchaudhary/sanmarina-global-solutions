import Image from 'next/image';
import { CTASection } from '@/components/marketing/CTASection';
import { TeamSection } from '@/components/marketing/TeamSection';
import { TechStackSection } from '@/components/marketing/TechStackSection';
import { Globe, Users, Target, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about SanMarina Global Solutions — a full-service IT company specializing in web development, app development, digital marketing, SEO, and AI video generation.',
};

const milestones = [
  { year: '2020', title: 'Founded', description: 'Established in Bucharest with a mission to deliver world-class digital solutions.' },
  { year: '2021', title: 'First Major Client', description: 'Delivered a full e-commerce platform for a European retail brand.' },
  { year: '2022', title: 'Team Expansion', description: 'Grew to 15+ developers, designers, and marketing specialists.' },
  { year: '2024', title: '100+ Projects', description: 'Reached the milestone of delivering over 100 digital projects across 10 countries.' },
  { year: '2025', title: 'AI Video Division', description: 'Launched our AI-powered video generation service for enterprise clients.' },
];

const values = [
  { icon: Award, title: 'Quality First', description: 'Every project undergoes rigorous testing and code review to ensure excellence.', image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80' },
  { icon: Users, title: 'Client-Centric', description: 'We treat every project as a partnership, keeping you involved at every step.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80' },
  { icon: Target, title: 'Results-Driven', description: 'Our work is measured by the impact it creates — traffic, conversions, and growth.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  { icon: Globe, title: 'Global Reach', description: 'Serving clients across Europe, Asia, and beyond with round-the-clock support.', image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team collaborating in modern office"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(160deg, rgba(15,5,30,0.90) 0%, rgba(30,15,60,0.75) 50%, rgba(10,10,20,0.88) 100%)',
          }} />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center pt-44 pb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] rounded-full mb-5 text-violet-300 bg-violet-500/15 border border-violet-400/25 backdrop-blur-sm">
            About Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Building Digital <br />
            <span className="text-gradient-warm">Solutions That Matter</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#a1a1aa' }}>
            SanMarina Global Solutions is a full-service IT company headquartered in Bucharest, Romania,
            specializing in web development, app development, digital marketing, SEO, and AI video generation.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-zinc-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card-white overflow-hidden group">
                  <div className="relative h-36 overflow-hidden">
                    <Image src={value.image} alt={value.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 w-9 h-9 rounded-lg bg-violet-600 flex items-center justify-center shadow-lg">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-base font-display font-semibold text-zinc-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-zinc-500">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-zinc-900 text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-lg font-display font-bold text-violet-600">{m.year}</span>
                </div>
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 border-4 border-white" />
                  {i < milestones.length - 1 && (
                    <div className="w-px h-full bg-zinc-200 absolute top-4" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-base font-semibold text-zinc-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-zinc-500">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStackSection />

      <CTASection />
    </main>
  );
}
