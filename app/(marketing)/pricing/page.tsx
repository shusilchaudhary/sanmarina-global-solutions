import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  Check,
  Gift,
  Globe,
  Layout,
  Layers,
  MapPin,
  Rocket,
  Shield,
  Sparkles,
} from 'lucide-react';
import { CTASection } from '@/components/marketing/CTASection';

export const metadata: Metadata = {
  title: 'Website Pricing & Packages',
  description:
    'Transparent starting prices for starter websites (7–10 pages), CMS-powered sites, and full-stack web apps — plus hosting, SSL, and bonus services from SanMarina Global Solutions.',
};

const deliverables = [
  'Custom website design tailored to your brand',
  'Mobile-friendly, responsive layouts',
  'SEO-optimized structure',
  'Performance tuning & ongoing support options',
];

const tiers = [
  {
    name: 'Starter plan',
    subtitle: '7–10 pages',
    price: '$150',
    description: 'Ideal for small businesses, portfolios, and landing sites.',
    icon: Layout,
    highlight: false,
    features: ['7–10 core pages', 'Responsive layout', 'Contact & key CTAs', 'Foundational SEO setup'],
  },
  {
    name: 'Advanced Website',
    subtitle: 'Dynamic + CMS',
    price: '$350',
    description: 'Editable content, richer pages, and room to grow.',
    icon: Layers,
    highlight: true,
    features: ['Dynamic pages & CMS', 'Blog or news-ready structure', 'Enhanced UX patterns', 'Deeper SEO structure'],
  },
  {
    name: 'Full-Stack Web Application',
    subtitle: 'Custom product',
    price: '$900',
    description: 'Dashboards, auth, integrations — scoped to your workflows.',
    icon: Globe,
    highlight: false,
    features: ['Custom app logic & APIs', 'User accounts & roles (as needed)', 'Database & integrations', 'Deployment pipeline'],
  },
];

const bonuses = [
  { label: '1 year hosting & deployment', icon: Rocket },
  { label: 'Free SSL certificate', icon: Shield },
  { label: 'Free logo design', icon: Sparkles },
  { label: 'Free business card design', icon: Layout },
  { label: '1 year maintenance', icon: Check },
  { label: '1 month SEO service', icon: BarChart3 },
];

export default function PricingPage() {
  return (
    <main className="bg-white">
      <section className="pt-40 md:pt-48 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-sm font-semibold mb-6">
            <Rocket className="w-4 h-4" aria-hidden />
            Build a website that works for you
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-zinc-100">
            Your website is more than just a page
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            It&apos;s your brand&apos;s first impression and growth engine — clear messaging, fast performance, and a foundation for SEO.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl border border-zinc-800 bg-dark-800/80 p-8 md:p-10 backdrop-blur-sm">
            <h2 className="font-display text-xl md:text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
              <span className="text-lg" aria-hidden>
                💻
              </span>
              What we deliver
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-violet-500 rounded" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600">Pricing</span>
            <div className="h-px w-10 bg-violet-500 rounded" />
          </div>
          <p className="text-center text-zinc-500 text-sm mb-10 max-w-xl mx-auto">
            Starting prices — final quotes depend on scope, integrations, and timeline. We&apos;ll confirm everything before kickoff.
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl border p-8 flex flex-col h-full transition-all duration-300 ${
                    tier.highlight
                      ? 'border-violet-500/50 bg-linear-to-b from-violet-500/10 to-dark-900 shadow-lg shadow-violet-500/10 md:scale-[1.02]'
                      : 'border-zinc-700 bg-dark-800 hover:border-violet-500/30'
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-600 text-white text-[11px] font-bold uppercase tracking-wider">
                      Most popular
                    </span>
                  )}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      tier.highlight ? 'bg-violet-500/20 text-violet-300' : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-bold text-zinc-100 mb-1">{tier.name}</h3>
                  <p className="text-sm text-violet-400 font-medium mb-2">{tier.subtitle}</p>
                  <p className="text-sm text-zinc-500 mb-6 flex-1">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Starting at</span>
                    <p className="font-display text-3xl md:text-4xl font-extrabold text-white">{tier.price}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-colors ${
                      tier.highlight
                        ? 'bg-violet-600 text-white hover:bg-violet-500'
                        : 'bg-white/10 text-zinc-100 hover:bg-white/15 border border-zinc-600'
                    }`}
                  >
                    Get a quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl border border-violet-500/20 bg-linear-to-br from-violet-500/5 to-cyan-500/5 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
                <Gift className="w-6 h-6 text-violet-300" aria-hidden />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-zinc-100">Free bonus package</h2>
                <p className="text-sm text-zinc-500">Included with qualifying projects — confirm details in your proposal.</p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bonuses.map(({ label, icon: BonusIcon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl bg-dark-900/60 border border-zinc-800 px-4 py-3 text-sm text-zinc-200"
                >
                  <BonusIcon className="w-4 h-4 text-violet-400 shrink-0" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-500 mt-10">
            <MapPin className="w-4 h-4 text-violet-500 shrink-0" aria-hidden />
            <span className="font-semibold text-zinc-400">SanMarina Global Solutions</span>
            <span aria-hidden>·</span>
            <span>Kathmandu</span>
            <span aria-hidden>|</span>
            <span>Europe</span>
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
