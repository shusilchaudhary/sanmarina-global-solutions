'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const recruitmentServices = [
  {
    title: 'Construction & Engineering',
    desc: 'Skilled masons, carpenters, welders and site workers for European projects.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    href: '/jobs?category=construction',
    jobs: '4 open roles',
  },
  {
    title: 'Hospitality & Catering',
    desc: 'Chefs, waiters, hotel staff and kitchen helpers for premium establishments.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    href: '/jobs?category=hospitality',
    jobs: '6 open roles',
  },
  {
    title: 'Logistics & Warehousing',
    desc: 'Drivers, warehouse operators and delivery staff for fast-paced logistics.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    href: '/jobs?category=logistics',
    jobs: '2 open roles',
  },
  {
    title: 'Agriculture & Farming',
    desc: 'Seasonal and permanent agricultural workers for European farms.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80',
    href: '/jobs?category=agriculture',
    jobs: '2 open roles',
  },
];

const itServices = [
  {
    title: 'Custom Software Development',
    desc: 'Scalable web and mobile applications tailored to your business needs.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    href: '/it-consulting',
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'AWS, Azure and Google Cloud setup, migration and management.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    href: '/it-consulting',
  },
  {
    title: 'Data & AI Solutions',
    desc: 'Analytics pipelines, machine learning models and intelligent automation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    href: '/it-consulting',
  },
  {
    title: 'Cybersecurity',
    desc: 'Security audits, compliance frameworks and threat monitoring.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    href: '/it-consulting',
  },
];

function ServiceCard({ title, desc, image, href, jobs, accent }: {
  title: string; desc: string; image: string; href: string; jobs?: string; accent: 'red' | 'blue';
}) {
  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
      <div style={{
        borderRadius: '16px', overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer', background: '#fff',
        border: '1px solid #F3F4F6',
        height: '100%',
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
          (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${accent === 'red' ? 'rgba(204,34,41,0.15)' : 'rgba(37,99,235,0.15)'}`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to top, ${accent === 'red' ? 'rgba(11,22,40,0.7)' : 'rgba(11,22,40,0.65)'} 0%, transparent 60%)`,
          }} />
          {jobs && (
            <div style={{
              position: 'absolute', bottom: '12px', left: '14px',
              background: accent === 'red' ? '#CC2229' : '#2563EB',
              color: '#fff', fontSize: '11px', fontWeight: 700,
              padding: '4px 10px', borderRadius: '999px',
              letterSpacing: '0.04em',
            }}>
              {jobs}
            </div>
          )}
        </div>

        {/* Text */}
        <div style={{ padding: '20px 22px 22px' }}>
          <h3 style={{
            fontFamily: 'var(--font-outfit), Outfit, sans-serif',
            fontSize: '17px', fontWeight: 700, color: '#0B1628',
            marginBottom: '8px', lineHeight: 1.3,
          }}>
            {title}
          </h3>
          <p style={{ fontSize: '13.5px', color: '#6B7280', lineHeight: 1.6, marginBottom: '14px' }}>
            {desc}
          </p>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            fontSize: '13px', fontWeight: 700,
            color: accent === 'red' ? '#CC2229' : '#2563EB',
          }}>
            Learn more <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section style={{ background: '#F9FAFB', padding: '96px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Recruitment ── */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ height: '3px', width: '40px', background: '#CC2229', borderRadius: '2px' }} />
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#CC2229' }}>
              Global Recruitment
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800,
                color: '#0B1628', letterSpacing: '-0.03em', lineHeight: 1.2,
              }}>
                European Workforce Solutions
              </h2>
              <p style={{ fontSize: '16px', color: '#6B7280', marginTop: '8px', maxWidth: '520px', lineHeight: 1.6 }}>
                Pre-screened, dedicated talent from Asia placed into verified roles across Europe.
              </p>
            </div>
            <Link href="/jobs" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', background: '#0B1628', color: '#fff',
              borderRadius: '10px', fontSize: '14px', fontWeight: 700,
              textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'background 0.2s',
            }}>
              View All Jobs <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {recruitmentServices.map(s => (
              <ServiceCard key={s.title} {...s} accent="red" />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #E5E7EB 20%, #E5E7EB 80%, transparent)', marginBottom: '80px' }} />

        {/* ── IT Consulting ── */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ height: '3px', width: '40px', background: '#2563EB', borderRadius: '2px' }} />
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2563EB' }}>
              IT Consulting
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800,
                color: '#0B1628', letterSpacing: '-0.03em', lineHeight: 1.2,
              }}>
                Enterprise Technology Services
              </h2>
              <p style={{ fontSize: '16px', color: '#6B7280', marginTop: '8px', maxWidth: '520px', lineHeight: 1.6 }}>
                Accelerate your digital transformation with expert IT teams and solutions.
              </p>
            </div>
            <Link href="/it-consulting" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', background: '#2563EB', color: '#fff',
              borderRadius: '10px', fontSize: '14px', fontWeight: 700,
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
              Explore IT Services <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {itServices.map(s => (
              <ServiceCard key={s.title} {...s} accent="blue" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
