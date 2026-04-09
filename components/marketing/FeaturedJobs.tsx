'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, DollarSign, Clock } from 'lucide-react';
import { mockJobs } from '@/lib/data/jobs';

const countryFlags: Record<string, string> = {
  RO: '🇷🇴', PL: '🇵🇱', HR: '🇭🇷', HU: '🇭🇺', MT: '🇲🇹',
};

const categoryColors: Record<string, { bg: string; color: string }> = {
  hospitality:  { bg: '#FFF1F2', color: '#CC2229' },
  construction: { bg: '#FFF7ED', color: '#C2410C' },
  logistics:    { bg: '#EFF6FF', color: '#2563EB' },
  agriculture:  { bg: '#F0FDF4', color: '#16A34A' },
  healthcare:   { bg: '#F5F3FF', color: '#7C3AED' },
};

export function FeaturedJobs() {
  const featured = mockJobs.filter(j => j.isFeatured).slice(0, 6);

  return (
    <section style={{ background: '#ffffff', padding: '96px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ height: '3px', width: '40px', background: '#CC2229', borderRadius: '2px' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#CC2229' }}>
                Now Hiring
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-outfit), Outfit, sans-serif',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800,
              color: '#0B1628', letterSpacing: '-0.03em', lineHeight: 1.2,
            }}>
              Featured Job Opportunities
            </h2>
            <p style={{ fontSize: '16px', color: '#6B7280', marginTop: '8px', lineHeight: 1.6 }}>
              Verified positions with free accommodation, meals &amp; work permits.
            </p>
          </div>
          <Link href="/jobs" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 24px', background: '#0B1628', color: '#fff',
            borderRadius: '10px', fontSize: '14px', fontWeight: 700,
            textDecoration: 'none',
          }}>
            View All Jobs <ArrowRight size={16} />
          </Link>
        </div>

        {/* Job Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {featured.map(job => {
            const catStyle = categoryColors[job.category] ?? { bg: '#F3F4F6', color: '#374151' };
            return (
              <Link key={job.slug} href={`/jobs/${job.slug}`} style={{ textDecoration: 'none', display: 'flex' }}>
                <div style={{
                  background: '#fff',
                  border: '1.5px solid #F3F4F6',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.25s',
                  cursor: 'pointer',
                  width: '100%',
                  display: 'flex', flexDirection: 'column', gap: '14px',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#CC2229';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(204,34,41,0.12)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#F3F4F6';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  {/* Top row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      background: '#F9FAFB', border: '1px solid #E5E7EB',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '24px', flexShrink: 0,
                    }}>
                      {countryFlags[job.countryCode] ?? '🌍'}
                    </div>
                    <span style={{
                      padding: '4px 12px', borderRadius: '999px',
                      fontSize: '11px', fontWeight: 700,
                      background: catStyle.bg, color: catStyle.color,
                      textTransform: 'capitalize', letterSpacing: '0.03em',
                    }}>
                      {job.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                      fontSize: '17px', fontWeight: 700, color: '#0B1628',
                      marginBottom: '4px', lineHeight: 1.3,
                    }}>
                      {job.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#6B7280', fontWeight: 500 }}>
                      {job.company.name}
                    </p>
                  </div>

                  {/* Meta */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#6B7280' }}>
                      <MapPin size={13} color="#CC2229" /> {job.country}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#6B7280' }}>
                      <DollarSign size={13} color="#16A34A" />
                      {job.salary.currency} {job.salary.min}
                      {job.salary.min !== job.salary.max ? `–${job.salary.max}` : ''}/{job.salary.period === 'monthly' ? 'mo' : 'yr'}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#6B7280' }}>
                      <Clock size={13} /> 2-yr contract
                    </span>
                  </div>

                  {/* Benefits */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['Free Accommodation', 'Free Meals', 'Work Permit'].map(b => (
                      <span key={b} style={{
                        padding: '3px 10px', borderRadius: '6px',
                        background: '#F0FDF4', color: '#16A34A',
                        fontSize: '11px', fontWeight: 600,
                      }}>
                        ✓ {b}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: '12px', borderTop: '1px solid #F3F4F6', marginTop: 'auto',
                  }}>
                    <span style={{
                      fontSize: '13px', fontWeight: 700, color: '#CC2229',
                      display: 'flex', alignItems: 'center', gap: '4px',
                    }}>
                      Apply Now <ArrowRight size={13} />
                    </span>
                    <span style={{
                      fontSize: '11px', fontWeight: 600, padding: '4px 10px',
                      borderRadius: '6px', background: '#FFF1F2', color: '#CC2229',
                    }}>
                      Featured
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
