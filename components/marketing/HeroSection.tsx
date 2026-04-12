'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HeroSearch } from './HeroSearch';
import { CheckCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Construction', href: '/jobs?category=construction' },
  { label: 'Hospitality', href: '/jobs?category=hospitality' },
  { label: 'Logistics', href: '/jobs?category=logistics' },
  { label: 'Agriculture', href: '/jobs?category=agriculture' },
  { label: 'Healthcare', href: '/jobs?category=healthcare' },
  { label: 'IT & Tech', href: '/jobs?category=it' },
];

export function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
          alt="Professional team at work"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark navy gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(6,12,26,0.92) 0%, rgba(11,22,40,0.85) 50%, rgba(15,32,68,0.80) 100%)',
        }} />
        {/* Red accent at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px',
          background: 'linear-gradient(90deg, transparent, #CC2229 40%, #CC2229 60%, transparent)',
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        paddingTop: '160px', paddingBottom: '80px',
        paddingLeft: '1.5rem', paddingRight: '1.5rem',
        textAlign: 'center',
      }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 18px', borderRadius: '999px',
          background: 'rgba(204,34,41,0.15)', border: '1px solid rgba(204,34,41,0.4)',
          fontSize: '12px', fontWeight: 700, color: '#FCA5A5',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          marginBottom: '28px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#CC2229', animation: 'pulse 2s infinite' }} />
          International Recruitment & IT Consulting
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-outfit), Outfit, sans-serif',
          fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: '#ffffff',
          maxWidth: '900px',
          marginBottom: '20px',
        }}>
          Your Career in Europe{' '}
          <span style={{
            background: 'linear-gradient(135deg, #FF6B6B, #CC2229)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Starts Here
          </span>
        </h1>

        {/* Sub-headline */}
        <p style={{
          fontFamily: 'var(--font-inter), Inter, sans-serif',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'rgba(255,255,255,0.75)',
          maxWidth: '600px',
          lineHeight: 1.7,
          marginBottom: '40px',
        }}>
          We connect skilled professionals from Asia with verified employers across 15+ European countries. Zero fees for candidates.
        </p>

        {/* Search Bar */}
        <div style={{ width: '100%', maxWidth: '860px', marginBottom: '24px' }}>
          <HeroSearch />
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px',
          marginBottom: '56px',
        }}>
          {['Licensed by ANOFM', 'Zero Fees for Candidates', 'GDPR Compliant', '98% Visa Success'].map((t) => (
            <span key={t} style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.7)',
            }}>
              <CheckCircle size={14} color="#CC2229" />
              {t}
            </span>
          ))}
        </div>

        {/* Quick category links */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '14px' }}>
            Browse by Category
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href} style={{
                padding: '8px 20px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '999px',
                fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#CC2229';
                  (e.currentTarget as HTMLElement).style.borderColor = '#CC2229';
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div style={{
        position: 'relative', zIndex: 10,
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '20px 1.5rem',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0',
        }}>
          {[
            { value: '1,000+', label: 'Successful Placements' },
            { value: '15+', label: 'European Countries' },
            { value: '98%', label: 'Visa Success Rate' },
            { value: '150+', label: 'Partner Companies' },
          ].map((stat, i) => (
            <div key={stat.label} style={{
              flex: '1 1 140px',
              textAlign: 'center',
              padding: '12px 24px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                fontSize: '1.75rem', fontWeight: 800, color: '#ffffff',
                letterSpacing: '-0.02em', lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
