import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, Layers } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-white min-h-[90vh] lg:min-h-screen pt-32 pb-20">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 w-full h-full flex items-end justify-center pointer-events-none opacity-100">
        <Image
          src="/hero_image.png"
          alt="Sanmarina Global Hero"
          fill
          priority
          quality={100}
          unoptimized={true}
          className="object-contain object-center md:object-cover"
        />
      </div>

      {/* Image is fully visible, no milky or blurry overlays washing it out */}

      <div className="container relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
        
        {/* Animated Pill Badge */}
        <div className="animate-fade-in-up flex items-center justify-center mb-8">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs md:text-sm font-semibold tracking-wide">
            <Globe className="w-4 h-4 text-primary-500" />
            Licensed International Recruitment & IT Consulting
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="animate-fade-in-up [animation-delay:100ms] text-5xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold tracking-tight leading-[1.05] text-neutral-950 mb-8">
          Asian Talent & <br className="hidden md:block" />
          <span className="text-primary-600">Technology Solutions</span>
        </h1>

        {/* Hero Subheadline */}
        <p className="animate-fade-in-up [animation-delay:200ms] text-lg md:text-xl text-neutral-900 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          We bridge Asian talent with premium European opportunities, while delivering cutting-edge software development and IT consulting across the globe.
        </p>

        {/* Action Buttons */}
        <div className="animate-fade-in-up [animation-delay:300ms] flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/recruitment"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-base w-full sm:w-auto"
          >
            Hire Asian Talent
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/it-consulting"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-700 border border-neutral-200 font-semibold rounded-xl hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-base w-full sm:w-auto"
          >
            <Layers className="w-4 h-4 text-neutral-500" />
            Explore IT Services
          </Link>
        </div>

        {/* Social Proof / Mini Stats under buttons */}
        <div className="animate-fade-in-up [animation-delay:400ms] mt-16 pt-8 border-t border-neutral-100 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-2xl font-bold text-neutral-900">15+</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">European Countries</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-neutral-200" />
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-2xl font-bold text-neutral-900">10+</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Successful Placements</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-neutral-200" />
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-2xl font-bold text-neutral-900">98%</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Visa Success Rate (Genuine Applicants)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
