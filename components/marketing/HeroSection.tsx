'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  { label: 'Web Development', href: '/services' },
  { label: 'App Development', href: '/services' },
  { label: 'Digital Marketing', href: '/services' },
  { label: 'SEO', href: '/services' },
  { label: 'AI Video', href: '/services' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80"
          alt="Developer workspace with code on laptop screen"
          fill
          priority
          sizes="100vw"
          quality={75}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Violet-tinted dark overlay — gives the image a tech tone */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(160deg, rgba(15,5,30,0.90) 0%, rgba(30,15,60,0.72) 50%, rgba(10,10,20,0.88) 100%)',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 pt-40 sm:pt-44 md:pt-48 pb-12 sm:pb-16 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/25 backdrop-blur-sm mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold text-violet-300 tracking-wide">IT Solutions & Digital Services</span>
        </div>

        {/* Headline */}
        <h1 className="font-display mb-5 sm:mb-6" style={{
          fontSize: 'clamp(2rem, 6vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.04em',
          color: '#f4f4f5',
          textAlign: 'center',
        }}>
          We Build Digital{' '}
          <span style={{
            background: 'linear-gradient(135deg, #A78BFA, #22D3EE)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Products</span>{' '}
          That Drive Growth
        </h1>

        {/* Sub */}
        <p style={{
          color: '#a1a1aa',
          textAlign: 'center',
          maxWidth: '640px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '2.5rem',
          lineHeight: 1.7,
          fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
        }}>
          From high-performance websites and mobile apps to SEO, marketing campaigns, and AI-powered video — we turn ideas into revenue.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 sm:mb-12">
          <Link href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-[15px] font-semibold hover:bg-zinc-100 transition-colors shadow-lg shadow-white/10"
            style={{ color: '#18181b' }}
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-[15px] font-semibold hover:bg-white/10 hover:border-white/50 transition-colors"
            style={{ color: '#ffffff' }}
          >
            View Services
          </Link>
        </div>

        {/* Trust line */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-x-6 gap-y-3 max-w-md sm:max-w-none mx-auto">
          {['Expert Team', 'On-Time Delivery', '100+ Projects', '24/7 Support'].map((t) => (
            <span key={t} className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-sm font-medium" style={{ color: '#71717a' }}>
              <CheckCircle size={14} className="text-emerald-400 shrink-0" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/[0.06] bg-black/25 backdrop-blur-sm py-5 sm:py-6 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/[0.06]">
          {[
            { value: '100+', label: 'Projects Delivered' },
            { value: '50+', label: 'Happy Clients' },
            { value: '2+', label: 'Years Experience' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-1 px-3">
              <div className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight">{stat.value}</div>
              <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest mt-1" style={{ color: '#71717a' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
