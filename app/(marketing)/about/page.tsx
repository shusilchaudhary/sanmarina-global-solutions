import { CTASection } from '@/components/marketing/CTASection';
import { Globe, Users, Target, Award, Shield, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about SanMarina Global Agency — a licensed international recruitment and IT consulting firm connecting Nepal with Europe since 2018.',
};

const milestones = [
  { year: '2018', title: 'Founded', description: 'Established in Kathmandu with a mission to create global opportunities.' },
  { year: '2019', title: 'First Placements', description: 'Successfully placed 50 workers in Germany and Poland.' },
  { year: '2021', title: 'IT Division', description: 'Launched IT consulting services for European businesses.' },
  { year: '2023', title: '1000+ Workers', description: 'Reached milestone of placing over 1,000 workers across Europe.' },
  { year: '2025', title: '15 Countries', description: 'Expanded employer network to 15 European countries.' },
];

const values = [
  { icon: Shield, title: 'Integrity', description: 'We operate with full transparency and ethical recruitment practices.' },
  { icon: Users, title: 'People First', description: 'Every placement is a life changed — we treat workers as partners, not numbers.' },
  { icon: Target, title: 'Excellence', description: 'We maintain a 98% visa approval rate through meticulous preparation.' },
  { icon: Globe, title: 'Global Vision', description: 'We build bridges between Nepal and Europe for lasting impact.' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-700 bg-accent-50 rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-950 mb-4">
            Bridging Nepal & Europe
            <br />
            <span className="bg-gradient-to-r from-accent-600 to-brand-600 bg-clip-text text-transparent">
              Since 2018
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            SanMarina Global Agency is a licensed international recruitment firm
            and IT consulting company headquartered in Kathmandu, Nepal.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-brand-950 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 bg-white border border-slate-200 rounded-2xl text-center hover:border-accent-600/30 transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-brand-950 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-brand-950 text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-lg font-display font-bold text-accent-600">
                    {m.year}
                  </span>
                </div>
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent-600 border-4 border-white" />
                  {i < milestones.length - 1 && (
                    <div className="w-px h-full bg-slate-200 absolute top-4" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-base font-semibold text-brand-950 mb-1">
                    {m.title}
                  </h3>
                  <p className="text-sm text-slate-600">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
