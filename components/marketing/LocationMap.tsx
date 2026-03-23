'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { countries, type Country } from '@/public/data/countries';

export function LocationMap() {
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);

  return (
    <section className="relative py-28 bg-brand-950 overflow-hidden noise-overlay">
      {/* Ambient glow */}
      <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-accent-600/8 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-[100px] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          label="Global Reach"
          title="We Operate Across Europe"
          description="Our network spans 15+ European countries with active job placements and employer partnerships."
          dark
        />

        {/* Map Container */}
        <div className="relative max-w-4xl mx-auto aspect-[16/10] rounded-3xl glass-card overflow-hidden">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(148,163,184,0.5) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          {/* Country Dots */}
          {countries.map((country) => (
            <button
              key={country.code}
              className="absolute group z-10"
              style={{
                left: `${country.coordinates.x}%`,
                top: `${country.coordinates.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setActiveCountry(country)}
              onMouseLeave={() => setActiveCountry(null)}
              aria-label={`${country.name}: ${country.jobCount} jobs`}
            >
              {/* Pulse ring */}
              <span className="absolute inset-0 w-6 h-6 -m-1 rounded-full bg-accent-500/20 animate-ping" />
              {/* Dot */}
              <span className="relative block w-4 h-4 rounded-full bg-accent-500 border-2 border-brand-900 shadow-[0_0_16px_rgba(225,29,72,0.4)] group-hover:scale-150 transition-transform" />

              {/* Tooltip */}
              {activeCountry?.code === country.code && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2.5 glass-card shadow-[0_8px_32px_rgba(0,0,0,0.4)] whitespace-nowrap z-20 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{country.flag}</span>
                    <span className="text-sm font-semibold text-white">
                      {country.name}
                    </span>
                  </div>
                  <p className="text-xs text-accent-400 font-medium">
                    {country.jobCount} open positions
                  </p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white/5 border-r border-b border-white/10 rotate-45 -mt-1" />
                </div>
              )}
            </button>
          ))}

          {/* Asia connection line */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 glass-card px-5 py-2.5 border border-white/10">
            <span className="text-lg">🇳🇵</span>
            <span className="text-xs text-slate-400">Asia</span>
            <span className="w-8 h-px bg-gradient-to-r from-accent-500 to-brand-400" />
            <span className="text-xs text-accent-400 font-medium">
              → {countries.reduce((sum, c) => sum + c.jobCount, 0)} jobs in{' '}
              {countries.length} countries
            </span>
          </div>
        </div>

        {/* Country Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {countries.map((country) => (
            <div
              key={country.code}
              className="inline-flex items-center gap-2 px-4 py-2.5 glass-card text-sm text-slate-300 hover:border-accent-500/20 hover:text-white transition-all cursor-default border border-white/[0.06]"
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
              <span className="text-xs text-accent-400 font-medium">
                {country.jobCount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
