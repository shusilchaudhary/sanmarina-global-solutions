import { SectionHeader } from '@/components/shared/SectionHeader';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { CTASection } from '@/components/marketing/CTASection';
import { services } from '@/public/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'International recruitment, visa assistance, IT consulting, and global staffing solutions by SanMarina Global Agency.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-700 bg-accent-50 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-950 mb-4">
            Comprehensive Solutions for
            <br />
            <span className="bg-gradient-to-r from-accent-600 to-brand-600 bg-clip-text text-transparent">
              Workers & Businesses
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From international recruitment to enterprise IT consulting, we
            provide end-to-end solutions that power global workforce mobility.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
