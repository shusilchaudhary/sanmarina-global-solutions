import { HeroSection } from '@/components/marketing/HeroSection';
import { TrustSection } from '@/components/marketing/TrustSection';
import { ServicesSection } from '@/components/marketing/ServicesSection';
import { WhyChooseUs } from '@/components/marketing/WhyChooseUs';
import { HiringProcess } from '@/components/marketing/HiringProcess';
import { TestimonialsSection } from '@/components/marketing/TestimonialsSection';
import { CTASection } from '@/components/marketing/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SanMarina Global Solutions | Recruitment & IT Consulting',
  description:
    'Connect with European employers and find verified work opportunities or hire dedicated IT consulting teams.',
};

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <HiringProcess />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
