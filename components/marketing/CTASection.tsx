import Link from 'next/link';
import { ArrowRight, Globe, Smartphone, Video, Bot } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 80% 80%, rgba(6,182,212,0.08) 0%, transparent 50%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] rounded-full mb-6 text-violet-300 bg-violet-500/10 border border-violet-500/20">
              Ready to Start?
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.08]" style={{ color: '#ffffff' }}>
              Let&apos;s Build Something{' '}
              <span className="text-gradient-warm">Amazing</span>{' '}
              Together
            </h2>
            <p className="text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed" style={{ color: '#ffffff' }}>
              Whether you need a website, mobile app, marketing strategy, or AI-powered video content — we&apos;ve got you covered.
            </p>
            <Link href="/contact" className="btn-primary text-base inline-flex animate-glow-pulse">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            {[
              { icon: Globe,      title: 'Web & App Development', desc: 'Scalable, high-performance websites and mobile apps crafted with the latest technologies.', iconClass: 'bg-violet-500/10 border-violet-500/20 text-violet-400 group-hover:bg-violet-500' },
              { icon: Smartphone, title: 'Digital Marketing & SEO', desc: 'Grow your online presence with data-driven SEO, targeted ads, and content that converts.', iconClass: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500' },
              { icon: Video,      title: 'AI Video Generation', desc: 'Create stunning video content with AI — product demos, social reels, and ads at scale.', iconClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500' },
              { icon: Bot,        title: 'AI Automation', desc: 'Automate workflows with custom AI chatbots, data pipelines, and intelligent agents.', iconClass: 'bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:bg-teal-500' },
            ].map(({ icon: Icon, title, desc, iconClass }) => (
              <div key={title} className="card-glass p-7 flex gap-5 items-start group hover:scale-[1.02] transition-transform">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:text-white transition-all duration-300 ${iconClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-1.5" style={{ color: '#ffffff' }}>{title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#ffffff' }}>{desc}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-4 mt-2 px-2">
              {['On-Time Delivery', 'Dedicated Support', 'Transparent Pricing'].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
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
