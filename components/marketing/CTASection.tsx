import Link from 'next/link';
import { ArrowRight, Users, Building } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">

      {/* Deep navy background */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#060C1A_0%,#0B1628_40%,#0F2044_80%,#060C1A_100%)]" />

      {/* Red radial glow – center-right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 50%, rgba(204,34,41,0.15) 0%, transparent 60%)' }} />

      {/* Blue glow – bottom-left */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 10% 100%, rgba(37,99,235,0.12) 0%, transparent 60%)' }} />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Red shimmer top edge */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left – headline */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] rounded-full mb-6 text-red-300 bg-red-600/15 border border-red-600/30">
              Ready to Start?
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.08]">
              Scale Your{' '}
              <span className="text-red-gradient">Global Operations</span>{' '}
              Today
            </h2>
            <p className="text-lg text-navy-300 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Whether you&apos;re an employer seeking top-tier talent, or a professional aiming to build your career in Europe.
            </p>
            <Link href="/contact" className="btn-red text-base inline-flex animate-red-pulse">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right – cards */}
          <div className="flex flex-col gap-5">
            {/* Employer card */}
            <div className="navy-card p-7 flex gap-5 items-start group hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-600/30 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-white mb-1.5">For Employers</h4>
                <p className="text-sm text-navy-300 leading-relaxed">Access pre-screened international talent or hire a dedicated IT consulting team ready to deliver from day one.</p>
              </div>
            </div>

            {/* Candidate card */}
            <div className="navy-card p-7 flex gap-5 items-start group hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-electric-500/15 border border-electric-500/30 text-electric-300 flex items-center justify-center shrink-0 group-hover:bg-electric-500 group-hover:text-white transition-all duration-300">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-white mb-1.5">For Candidates</h4>
                <p className="text-sm text-navy-300 leading-relaxed">Register today to get matched with verified jobs across 15+ European countries. Zero placement fees.</p>
              </div>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-4 mt-2 px-2">
              {['Licensed by ANOFM', 'GDPR Compliant', 'Zero Fees'].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-[11px] font-semibold text-navy-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
