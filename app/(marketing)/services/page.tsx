import Link from 'next/link';
import Image from 'next/image';
import { CTASection } from '@/components/marketing/CTASection';
import { ArrowRight, Users, FileCheck, Monitor, ShieldCheck, Plane, Globe, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | SanMarina Global Solutions',
  description:
    'International recruitment, visa assistance, IT consulting, and global staffing solutions by SanMarina Global Solutions.',
};

const services = [
  {
    id: 'recruitment',
    Icon: Users,
    title: 'International Recruitment',
    description: 'We connect skilled Asian workers with verified European employers across 15+ countries. From hospitality to healthcare, we match talent with opportunity.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
    accent: '#CC2229',
    features: ['Verified employer network', 'Pre-departure orientation', 'Skills matching', 'On-ground support'],
    href: '/jobs',
    cta: 'Browse Jobs',
  },
  {
    id: 'visa',
    Icon: FileCheck,
    title: 'Visa & Work Permit Assistance',
    description: 'Navigate complex European immigration requirements with our expert visa processing team. We handle documentation, applications, and embassy coordination.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    accent: '#2563EB',
    features: ['Work permit processing', 'EU Blue Card applications', 'Document verification', '98% approval rate'],
    href: '/contact',
    cta: 'Get Help',
  },
  {
    id: 'it-consulting',
    Icon: Monitor,
    title: 'IT Consulting Services',
    description: 'Transform your business with expert IT consulting — custom software, cloud infrastructure, and digital transformation strategies for enterprises.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    accent: '#2563EB',
    features: ['Custom software development', 'Cloud infrastructure', 'Digital transformation', 'Dedicated dev teams'],
    href: '/contact',
    cta: 'Get a Quote',
  },
  {
    id: 'compliance',
    Icon: ShieldCheck,
    title: 'Compliance & Legal Support',
    description: 'Stay compliant with international labor laws. Our legal team ensures all placements meet EU and destination country requirements.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    accent: '#CC2229',
    features: ['Labor law compliance', 'Employment contract review', 'Worker rights protection', 'Regulatory updates'],
    href: '/contact',
    cta: 'Consult Us',
  },
  {
    id: 'travel',
    Icon: Plane,
    title: 'Travel & Relocation',
    description: 'Seamless relocation support from Asia to Europe — flights, accommodation, and orientation to ensure a smooth transition for every worker.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    accent: '#CC2229',
    features: ['Flight booking assistance', 'Airport pickup', 'Temporary accommodation', 'Cultural orientation'],
    href: '/contact',
    cta: 'Learn More',
  },
  {
    id: 'global-staffing',
    Icon: Globe,
    title: 'Global Staffing Solutions',
    description: 'Enterprise-grade staffing solutions for businesses needing reliable workforce. Scalable teams, managed HR, and performance tracking included.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    accent: '#2563EB',
    features: ['Contract & permanent staffing', 'Managed workforce', 'Performance monitoring', 'Scalable deployment'],
    href: '/contact',
    cta: 'Get Started',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          position: 'relative', minHeight: '420px',
          display: 'flex', alignItems: 'center',
          paddingTop: '140px', paddingBottom: '80px',
        }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
              alt="Services hero"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(6,12,26,0.93) 0%, rgba(11,22,40,0.88) 100%)',
            }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #CC2229 40%, #CC2229 60%, transparent)' }} />
          </div>

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', width: '100%' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 18px', borderRadius: '999px',
              background: 'rgba(204,34,41,0.15)', border: '1px solid rgba(204,34,41,0.4)',
              fontSize: '11px', fontWeight: 700, color: '#FCA5A5',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px',
            }}>
              What We Offer
            </div>
            <h1 style={{
              fontFamily: 'var(--font-outfit), Outfit, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 800,
              color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15,
              marginBottom: '16px',
            }}>
              Comprehensive Solutions for
              <br />
              <span style={{ background: 'linear-gradient(135deg, #FF6B6B, #CC2229)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Workers & Businesses
              </span>
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              From international recruitment to enterprise IT consulting — end-to-end solutions that power global workforce mobility.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section style={{ background: '#F9FAFB', padding: '80px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '28px' }}>
              {services.map(({ id, Icon, title, description, image, accent, features, href, cta }) => (
                <div key={id} style={{
                  background: '#fff', borderRadius: '20px', overflow: 'hidden',
                  border: '1.5px solid #F3F4F6',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  display: 'flex', flexDirection: 'column',
                }}>
                  {/* Image */}
                  <div style={{ position: 'relative', height: '200px' }}>
                    <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(11,22,40,0.75) 0%, transparent 60%)',
                    }} />
                    {/* Icon badge */}
                    <div style={{
                      position: 'absolute', bottom: '14px', left: '16px',
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={20} color="#fff" />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h2 style={{
                      fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                      fontSize: '20px', fontWeight: 800, color: '#0B1628',
                      letterSpacing: '-0.02em', marginBottom: '10px',
                    }}>
                      {title}
                    </h2>
                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.7, marginBottom: '20px' }}>
                      {description}
                    </p>

                    {/* Features */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', flex: 1 }}>
                      {features.map(f => (
                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                          <CheckCircle size={14} color={accent} style={{ flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link href={href} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '12px 22px', borderRadius: '10px',
                      background: accent, color: '#fff',
                      fontSize: '14px', fontWeight: 700,
                      textDecoration: 'none', alignSelf: 'flex-start',
                    }}>
                      {cta} <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
