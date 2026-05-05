'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu, ChevronDown, ArrowRight, X,
  Globe, Smartphone, Megaphone, Search, Video, Palette, Clapperboard, Bot,
} from 'lucide-react';
import { Logo } from '@/components/shared/Logo';

const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'Services',  href: '#', hasDropdown: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing',   href: '/pricing' },
  { label: 'Blog',      href: '/blog' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
];

const serviceItems = [
  { icon: Globe,        label: 'Web Development',     desc: 'Websites & web apps',             href: '/services' },
  { icon: Smartphone,   label: 'App Development',     desc: 'iOS, Android & cross-platform',   href: '/services' },
  { icon: Megaphone,    label: 'Digital Marketing',   desc: 'Campaigns that drive results',    href: '/services' },
  { icon: Search,       label: 'SEO Services',        desc: 'Rank higher, grow traffic',       href: '/services' },
  { icon: Video,        label: 'AI Video Generation', desc: 'AI-powered video content',        href: '/services' },
  { icon: Palette,      label: 'Graphic Designing',   desc: 'Logos, branding & UI/UX',         href: '/services' },
  { icon: Clapperboard, label: 'Video Editing',       desc: 'Professional post-production',    href: '/services' },
  { icon: Bot,          label: 'AI Automation',      desc: 'Smart workflows & AI agents',     href: '/services' },
];

export function Navbar() {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header style={{
      position: 'fixed', top: '36px', left: 0, right: 0, zIndex: 50,
      backgroundColor: '#09090b',
      borderBottom: '1px solid #27272a',
      boxShadow: scrolled ? '0 1px 3px 0 rgba(0,0,0,0.3)' : 'none',
      transition: 'box-shadow 0.2s ease',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem',
        height: '64px', display: 'flex', alignItems: 'center',
      }}>

        <Link href="/" className="shrink-0">
          <Logo variant="dark" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 ml-auto mr-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key="services" className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium transition-colors bg-transparent border-none cursor-pointer rounded-lg text-zinc-300 hover:text-white hover:bg-white/5"
                  style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown size={12} className={`text-zinc-400 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div style={{
                  position: 'absolute', top: '100%', left: '50%',
                  transform: `translateX(-50%) translateY(${servicesOpen ? '0' : '4px'})`,
                  paddingTop: '6px',
                  opacity: servicesOpen ? 1 : 0,
                  visibility: servicesOpen ? 'visible' : 'hidden',
                  transition: 'opacity 0.15s, transform 0.15s, visibility 0.15s',
                }}>
                  <div className="w-[300px] rounded-xl border shadow-lg overflow-hidden bg-dark-900 border-zinc-700 shadow-black/20">
                    <div className="p-1.5">
                      {serviceItems.map(({ icon: Icon, label, desc, href }) => (
                        <Link key={label} href={href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group hover:bg-white/5">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-white/5 group-hover:bg-violet-500/20">
                            <Icon size={15} className="text-zinc-500 group-hover:text-violet-600 transition-colors" />
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-zinc-200">{label}</p>
                            <p className="text-[11px] text-zinc-400">{desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="flex items-center justify-between px-4 py-2.5 border-t bg-white/2 border-zinc-700">
                      <span className="text-[11px] text-zinc-400">Have a project?</span>
                      <Link href="/contact" className="flex items-center gap-1 text-[11px] font-semibold text-violet-600 hover:text-violet-700 transition-colors">
                        Talk to us <ArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href}
                className="px-3.5 py-2 text-[14px] font-medium rounded-lg transition-colors text-zinc-300 hover:text-white hover:bg-white/5"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <Link href="/contact"
          className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all"
          style={{ background: '#ffffff', color: '#09090b' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e4e4e7'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#ffffff'; }}
        >
          Get a Quote
          <ArrowRight size={13} />
        </Link>

        {/* Hamburger */}
        <button onClick={() => setMobileOpen(true)} className="lg:hidden ml-auto p-2 bg-transparent border-none cursor-pointer text-zinc-300 hover:text-white" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="absolute right-0 top-0 bottom-0 w-[300px] max-w-[90vw] flex flex-col shadow-2xl bg-dark-900">
            <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
              <Logo variant="dark" />
              <button onClick={() => setMobileOpen(false)} className="p-1.5 bg-transparent border-none cursor-pointer rounded-lg text-zinc-400 hover:text-white hover:bg-white/5" aria-label="Close menu">
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-3">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <div className="mb-1">
                      <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-zinc-400 px-3 py-2">Services</p>
                      <div className="ml-2 pl-3 border-l border-zinc-700">
                        {serviceItems.map((item) => (
                          <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2.5 text-[14px] font-medium rounded-lg transition-colors text-zinc-300 hover:text-white hover:bg-white/5"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href} onClick={() => setMobileOpen(false)}
                      className="block px-3 py-3 text-[15px] font-semibold rounded-lg transition-colors text-zinc-200 hover:text-white hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="p-4 border-t border-zinc-800">
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-lg text-[14px] font-semibold transition-colors bg-white text-zinc-900 hover:bg-zinc-200"
              >
                Get a Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
