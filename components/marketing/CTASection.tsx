import Link from 'next/link';
import { ArrowRight, Users, Building } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-primary-600 overflow-hidden text-center md:text-left">
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500 rounded-full blur-[100px] opacity-50 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-700 rounded-full blur-[80px] opacity-40 z-0 pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-primary-500 overflow-hidden relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left side text */}
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full mb-6 text-primary-700 bg-primary-50 border border-primary-100">
                Ready to Start?
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-900 mb-6 tracking-tight">
                Scale Your Global Operations Today
              </h2>
              <p className="text-lg text-neutral-500 mb-8 max-w-md mx-auto md:mx-0">
                Whether you're an employer seeking top-tier talent, or a professional aiming to build your career in Europe.
              </p>
              
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Right side boxes */}
            <div className="grid gap-4">
              <div className="bg-neutral-50 p-6 rounded-2xl flex gap-4 items-start border border-neutral-100">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-neutral-900 mb-1">For Employers</h4>
                  <p className="text-sm text-neutral-500">Access pre-screened international talent or hire a dedicated IT consulting team.</p>
                </div>
              </div>
              <div className="bg-neutral-50 p-6 rounded-2xl flex gap-4 items-start border border-neutral-100">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-neutral-900 mb-1">For Candidates</h4>
                  <p className="text-sm text-neutral-500">Register today to get matched with verified jobs across 15+ European countries.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
