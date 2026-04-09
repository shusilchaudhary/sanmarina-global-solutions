'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu, Phone, Mail, ChevronDown, ArrowRight, X,
  HardHat, Package, Wrench, Building2,
  Code, Cloud, Database, ShieldCheck,
} from 'lucide-react';
import { Logo } from '@/components/shared/Logo';

const navLinks = [
  { label: 'Home',            href: '/' },
  { label: 'Services',        href: '#', hasDropdown: true },
  { label: 'Jobs',            href: '/jobs' },
  { label: 'About',           href: '/about' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Blog',            href: '/blog' },
  { label: 'Contact',         href: '/contact' },
];

const recruitmentItems = [
  { icon: HardHat,   label: 'Construction',        desc: 'Masons, carpenters & site workers',  href: '/recruitment' },
  { icon: Package,   label: 'Logistics & Delivery', desc: 'Drivers, warehouse & delivery',       href: '/recruitment' },
  { icon: Wrench,    label: 'Manufacturing',         desc: 'Factory & assembly line staff',        href: '/recruitment' },
  { icon: Building2, label: 'Hospitality',           desc: 'Chefs, waiters & hotel staff',         href: '/recruitment' },
];

const itItems = [
  { icon: Code,        label: 'Custom Software', desc: 'Web & mobile apps',       href: '/it-consulting' },
  { icon: Cloud,       label: 'Cloud Solutions', desc: 'AWS, Azure & GCP',         href: '/it-consulting' },
  { icon: Database,    label: 'Data & AI',        desc: 'Analytics & automation',   href: '/it-consulting' },
  { icon: ShieldCheck, label: 'Cybersecurity',    desc: 'Security & compliance',    href: '/it-consulting' },
];

export function Navbar() {
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [servicesOpen,   setServicesOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* ══════════════════════════════════════
          TOP INFO BAR  (dark navy)
      ══════════════════════════════════════ */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60,
        height: '36px', backgroundColor: '#0B1628',
        borderBottom: '1px solid #162B5B',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{
          width: '100%', maxWidth: '1280px', margin: '0 auto',
          padding: '0 1.5rem', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Left – contacts */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '1rem' }}>
            <a href="tel:+40735062451" style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              fontSize: '11px', fontWeight: 500, color: '#9CA3AF',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
            >
              <Phone size={11} color="#CC2229" />
              +40 735 062 451
            </a>
            <span style={{ width: '1px', height: '12px', background: '#1E3A8A' }} />
            <a href="mailto:info@sanmarinaglobal.eu" style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              fontSize: '11px', fontWeight: 500, color: '#9CA3AF',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
            >
              <Mail size={11} color="#CC2229" />
              info@sanmarinaglobal.eu
            </a>
          </div>

          {/* Right – licence + jobs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
            <span className="hidden sm:flex" style={{ alignItems: 'center', gap: '5px', fontSize: '11px', color: '#6B7280' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#CC2229', animation: 'pulse 2s infinite' }} />
              Licensed by ANOFM Romania
            </span>
            <span className="hidden sm:block" style={{ width: '1px', height: '12px', background: '#1E3A8A' }} />
            <Link href="/jobs" style={{
              fontSize: '11px', fontWeight: 700, color: '#F46467',
              textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFA0A4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#F46467')}
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN NAVBAR  (white)
      ══════════════════════════════════════ */}
      <header style={{
        position: 'fixed', top: '36px', left: 0, right: 0, zIndex: 50,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #E5E7EB',
        boxShadow: scrolled ? '0 2px 24px rgba(11,22,40,0.09)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem',
          height: '110px', display: 'flex', alignItems: 'center',
          position: 'relative',
        }}>

          {/* ── Logo ── */}
          <Link href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Link>

          {/* ── Desktop nav links — absolutely centered ── */}
          <nav className="hidden lg:flex" style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            transform: 'translateX(-50%)',
            alignItems: 'center', gap: '4px',
          }}>
            {navLinks.map((link) =>
              link.hasDropdown ? (
                /* Services dropdown */
                <div key="services" style={{ position: 'relative', height: '110px', display: 'flex', alignItems: 'center' }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    height: '110px', padding: '0 14px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '15.5px', fontWeight: 700,
                    color: servicesOpen ? '#CC2229' : '#1F2937',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s',
                  }}>
                    Services
                    <ChevronDown size={13} strokeWidth={2.5}
                      style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </button>

                  {/* Red bottom indicator */}
                  <span style={{
                    position: 'absolute', bottom: 0, left: '14px', right: '14px',
                    height: '2px', background: '#CC2229', borderRadius: '2px',
                    transform: servicesOpen ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.2s ease',
                  }} />

                  {/* ── Mega dropdown ── */}
                  <div style={{
                      position: 'absolute', top: '100%', left: '50%',
                      transform: `translateX(-50%) translateY(${servicesOpen ? '0px' : '6px'})`,
                      paddingTop: '4px',
                      opacity: servicesOpen ? 1 : 0,
                      visibility: servicesOpen ? 'visible' : 'hidden',
                      transition: 'opacity 0.2s ease, transform 0.2s ease, visibility 0.2s',
                      zIndex: 100,
                    }}
                  >
                    <div style={{
                      width: '540px', background: '#ffffff',
                      border: '1px solid #E5E7EB',
                      borderRadius: '16px',
                      boxShadow: '0 20px 60px rgba(11,22,40,0.14)',
                      overflow: 'hidden',
                    }}>
                      {/* Dropdown top bar */}
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '12px 20px', background: '#F9FAFB',
                        borderBottom: '1px solid #F3F4F6',
                      }}>
                        <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9CA3AF' }}>
                          Our Services
                        </span>
                        <Link href="/services" style={{
                          display: 'flex', alignItems: 'center', gap: '4px',
                          fontSize: '11px', fontWeight: 700, color: '#CC2229', textDecoration: 'none',
                        }}>
                          View All <ArrowRight size={11} />
                        </Link>
                      </div>

                      {/* Two columns */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        {/* Recruitment */}
                        <div style={{ padding: '16px', borderRight: '1px solid #F3F4F6' }}>
                          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#CC2229', marginBottom: '10px', paddingLeft: '4px' }}>
                            Global Recruitment
                          </p>
                          {recruitmentItems.map(({ icon: Icon, label, desc, href }) => (
                            <Link key={label} href={href} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 6px', borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s' }}
                              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#FFF1F2'; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                            >
                              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#FFF1F2', border: '1px solid #FECDD3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Icon size={15} color="#CC2229" />
                              </div>
                              <div>
                                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#111827', margin: 0, lineHeight: 1.3 }}>{label}</p>
                                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '11px', color: '#9CA3AF', margin: 0, lineHeight: 1.3 }}>{desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* IT Consulting */}
                        <div style={{ padding: '16px' }}>
                          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2563EB', marginBottom: '10px', paddingLeft: '4px' }}>
                            IT Consulting
                          </p>
                          {itItems.map(({ icon: Icon, label, desc, href }) => (
                            <Link key={label} href={href} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 6px', borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s' }}
                              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#EFF6FF'; }}
                              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                            >
                              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Icon size={15} color="#2563EB" />
                              </div>
                              <div>
                                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#111827', margin: 0, lineHeight: 1.3 }}>{label}</p>
                                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '11px', color: '#9CA3AF', margin: 0, lineHeight: 1.3 }}>{desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Bottom strip */}
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '10px 20px', backgroundColor: '#0B1628',
                      }}>
                        <span style={{ fontSize: '11px', color: '#6B7280' }}>Need help choosing a service?</span>
                        <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: 700, color: '#F46467', textDecoration: 'none' }}>
                          Talk to us <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    position: 'relative', display: 'flex', alignItems: 'center',
                    height: '110px', padding: '0 14px',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '15.5px', fontWeight: 700, color: '#1F2937',
                    letterSpacing: '-0.01em',
                    textDecoration: 'none', transition: 'color 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { (e.currentTarget.style.color = '#CC2229'); const bar = e.currentTarget.querySelector('.nav-bar') as HTMLElement; if (bar) bar.style.transform = 'scaleX(1)'; }}
                  onMouseLeave={e => { (e.currentTarget.style.color = '#1F2937'); const bar = e.currentTarget.querySelector('.nav-bar') as HTMLElement; if (bar) bar.style.transform = 'scaleX(0)'; }}
                >
                  {link.label}
                  <span className="nav-bar" style={{
                    position: 'absolute', bottom: 0, left: '14px', right: '14px',
                    height: '2px', background: '#CC2229',
                    transform: 'scaleX(0)', transformOrigin: 'left',
                    transition: 'transform 0.2s ease',
                    borderRadius: '2px',
                  }} />
                </Link>
              )
            )}
          </nav>

          {/* ── CTA + Hamburger ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
            <Link href="/contact"
              style={{
                display: 'none',
                alignItems: 'center', justifyContent: 'center', gap: '6px',
                padding: '9px 20px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #1D4ED8, #2563EB)',
                color: '#ffffff', fontSize: '14px', fontWeight: 600,
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                textDecoration: 'none',
                boxShadow: '0 2px 14px rgba(37,99,235,0.28)',
                transition: 'opacity 0.2s, transform 0.2s',
                whiteSpace: 'nowrap',
              }}
              className="md:!flex"
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.9'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              Get Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden"
              style={{
                padding: '8px', borderRadius: '8px', border: 'none',
                background: 'transparent', cursor: 'pointer',
                color: '#374151', transition: 'background 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget.style.background = '#F3F4F6'); }}
              onMouseLeave={e => { (e.currentTarget.style.background = 'transparent'); }}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          MOBILE MENU
      ══════════════════════════════════════ */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 70 }} className="lg:hidden">
          {/* Overlay */}
          <div
            onClick={() => setMobileOpen(false)}
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}
          />
          {/* Panel */}
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0,
            width: '300px', maxWidth: '90vw',
            background: '#ffffff', borderLeft: '1px solid #E5E7EB',
            boxShadow: '-8px 0 40px rgba(0,0,0,0.15)',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 20px', borderBottom: '3px solid #CC2229',
            }}>
              <Logo />
              <button onClick={() => setMobileOpen(false)} style={{ padding: '6px', background: 'none', border: 'none', cursor: 'pointer', borderRadius: '8px', color: '#6B7280' }}>
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 16px' }}>
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <div style={{ marginBottom: '8px' }}>
                      <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#CC2229', padding: '8px 12px 4px', margin: 0 }}>
                        {link.label}
                      </p>
                      <div style={{ marginLeft: '12px', paddingLeft: '12px', borderLeft: '2px solid #FECDD3' }}>
                        {[...recruitmentItems, ...itItems].slice(0, 4).map((item) => (
                          <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} style={{
                            display: 'block', padding: '9px 10px',
                            fontSize: '14px', fontWeight: 500, color: '#374151',
                            textDecoration: 'none', borderRadius: '8px',
                            transition: 'background 0.15s, color 0.15s',
                          }}
                            onMouseEnter={e => { (e.currentTarget.style.background = '#FFF1F2'); (e.currentTarget.style.color = '#CC2229'); }}
                            onMouseLeave={e => { (e.currentTarget.style.background = 'transparent'); (e.currentTarget.style.color = '#374151'); }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href} onClick={() => setMobileOpen(false)} style={{
                      display: 'block', padding: '11px 12px',
                      fontSize: '15px', fontWeight: 600, color: '#1F2937',
                      textDecoration: 'none', borderRadius: '10px',
                      transition: 'background 0.15s, color 0.15s', marginBottom: '2px',
                    }}
                      onMouseEnter={e => { (e.currentTarget.style.background = '#FFF1F2'); (e.currentTarget.style.color = '#CC2229'); }}
                      onMouseLeave={e => { (e.currentTarget.style.background = 'transparent'); (e.currentTarget.style.color = '#1F2937'); }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div style={{ padding: '16px', borderTop: '1px solid #F3F4F6' }}>
              <Link href="/contact" onClick={() => setMobileOpen(false)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                width: '100%', padding: '13px',
                background: 'linear-gradient(135deg, #1D4ED8, #2563EB)',
                color: '#ffffff', fontSize: '15px', fontWeight: 600,
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                textDecoration: 'none', borderRadius: '12px',
              }}>
                Get Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
