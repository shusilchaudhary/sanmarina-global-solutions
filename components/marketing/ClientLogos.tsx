'use client';

import Image from 'next/image';
import { Building2 } from 'lucide-react';

const clients = [
  { name: 'SanMarina Education Consultancy', industry: 'Education', logo: '' },
  { name: 'Gurumantra Educational Consultancy', industry: 'Education', logo: '' },
  { name: 'Pathsala Consultancy', industry: 'Education', logo: '' },
  { name: 'Himalayan Fusion Restaurant', industry: 'Restaurant', logo: '' },
  { name: 'Jewellery Shop', industry: 'Retail', logo: '' },
];

export function ClientLogos() {
  return (
    <section className="py-12 border-y bg-dark-950 border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-0.5 w-12 bg-violet-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">Our Clients</span>
          <div className="h-0.5 w-12 bg-violet-500" />
        </div>
        <div className="flex items-center justify-center gap-3 mb-10">
          <Building2 className="w-7 h-7 text-violet-500 shrink-0" />
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
            Trusted by Companies Across <span className="text-gradient">Industries</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center gap-3 group">
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg object-contain shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-display font-extrabold text-base transition-colors duration-300 bg-white/5 text-zinc-500 group-hover:bg-violet-500/20 group-hover:text-violet-400">
                  {client.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm font-bold transition-colors duration-300 text-zinc-400 group-hover:text-zinc-200">
                  {client.name}
                </p>
                <p className="text-[9px] text-zinc-400 uppercase tracking-wider">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
