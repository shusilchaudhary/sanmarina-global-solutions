import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/marketing/HeroSection';
import { ClientLogos } from '@/components/marketing/ClientLogos';
import { TrustSection } from '@/components/marketing/TrustSection';
import { ServicesSection } from '@/components/marketing/ServicesSection';
import type { Metadata } from 'next';

const ProjectsSection = dynamic(() => import('@/components/marketing/ProjectsSection').then(m => ({ default: m.ProjectsSection })), { ssr: true });
const WhyChooseUs = dynamic(() => import('@/components/marketing/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })), { ssr: true });
const TechStackSection = dynamic(() => import('@/components/marketing/TechStackSection').then(m => ({ default: m.TechStackSection })), { ssr: true });
const HiringProcess = dynamic(() => import('@/components/marketing/HiringProcess').then(m => ({ default: m.HiringProcess })), { ssr: true });
const TestimonialsSection = dynamic(() => import('@/components/marketing/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })), { ssr: true });
const FAQSection = dynamic(() => import('@/components/marketing/FAQSection').then(m => ({ default: m.FAQSection })), { ssr: true });
const CTASection = dynamic(() => import('@/components/marketing/CTASection').then(m => ({ default: m.CTASection })), { ssr: true });

export const metadata: Metadata = {
  title: 'SanMarina Global Solutions | Web Dev, App Dev, Digital Marketing, SEO & AI Video',
  description:
    'Full-service IT company delivering web development, app development, digital marketing, SEO, and AI video generation solutions.',
};

export default function HomePage() {
  return (
    <main id="main-content" className="bg-white">
      <HeroSection />
      <ClientLogos />
      <TrustSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs />
      <TechStackSection />
      <HiringProcess />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
