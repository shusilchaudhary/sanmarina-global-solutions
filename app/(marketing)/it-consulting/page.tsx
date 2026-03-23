import Link from 'next/link';
import {
  Code,
  Cloud,
  Database,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  Globe,
  Users,
  Zap,
  BarChart3,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Consulting & Software Development | SanMarina Global',
  description:
    'Custom software development, cloud solutions, data & AI, and cybersecurity consulting for businesses worldwide.',
};

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    desc: 'End-to-end web and mobile application development using modern stacks — React, Next.js, Node.js, Python, and more. Built to scale with your business.',
    tags: ['Web Apps', 'Mobile Apps', 'APIs', 'Next.js'],
    color: 'bg-blue-50 border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Scalable cloud infrastructure design, migration and management on AWS, Azure and Google Cloud. Optimise costs, improve reliability and accelerate deployment.',
    tags: ['AWS', 'Azure', 'GCP', 'DevOps'],
    color: 'bg-sky-50 border-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600',
  },
  {
    icon: Database,
    title: 'Data & AI',
    desc: 'Data engineering pipelines, business intelligence dashboards, machine learning models, and intelligent automation to drive data-driven decision making.',
    tags: ['Data Pipelines', 'ML Models', 'BI Dashboards', 'Automation'],
    color: 'bg-violet-50 border-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    desc: 'Vulnerability assessments, penetration testing, compliance audits (ISO 27001, GDPR) and secure architecture design to protect your digital assets.',
    tags: ['Pen Testing', 'Compliance', 'ISO 27001', 'GDPR'],
    color: 'bg-emerald-50 border-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600',
  },
  {
    icon: Cpu,
    title: 'Dedicated Dev Teams',
    desc: 'Hire skilled, pre-vetted engineers from Nepal who work exclusively on your product — at a fraction of the cost of local talent, with zero compromise on quality.',
    tags: ['Staff Aug', 'Offshore Teams', 'Full-Stack', 'Product Teams'],
    color: 'bg-amber-50 border-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600',
  },
  {
    icon: Layers,
    title: 'IT Strategy & Consulting',
    desc: 'Technology roadmaps, digital transformation advisory, architecture reviews and CTO-as-a-service to help you make smarter tech decisions faster.',
    tags: ['Roadmapping', 'Architecture', 'CTO as a Service', 'Digital Transformation'],
    color: 'bg-rose-50 border-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600',
  },
];

const whyUs = [
  { icon: Zap, title: 'Fast Delivery', desc: 'Agile sprints with clear milestones and weekly progress updates throughout.' },
  { icon: Users, title: 'Expert Engineers', desc: 'Pre-vetted, senior-level developers, architects and data scientists.' },
  { icon: Globe, title: 'Global Reach', desc: 'Serving clients across Europe, the Americas, Asia and the Middle East.' },
  { icon: BarChart3, title: 'Cost-Efficient', desc: 'Premium quality at competitive rates — powered by our Nepal tech hub.' },
];

export default function ITConsultingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-neutral-950 overflow-hidden pt-32 pb-24">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-400 text-xs font-semibold tracking-wider uppercase">
              <Cpu className="w-3.5 h-3.5" />
              IT Consulting & Software
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05] mb-6">
            Technology That<br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Drives Growth</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10">
            From custom software and cloud infrastructure to AI solutions and cybersecurity —
            we deliver enterprise-grade technology consulting and development at competitive rates,
            powered by our expert engineering team in Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-violet-600/30 hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-xl transition-all"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US TILES ─────────────────────────────────────── */}
      <section className="bg-neutral-900 border-b border-neutral-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`py-8 px-6 text-center ${i < whyUs.length - 1 ? 'md:border-r border-neutral-800' : ''}`}>
                  <Icon className="w-6 h-6 text-violet-400 mx-auto mb-3" />
                  <p className="text-base font-bold text-white mb-1">{item.title}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <p className="text-sm font-bold text-violet-600 uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-950 mb-4 tracking-tight">
              What We Build & Deliver
            </h2>
            <p className="text-neutral-500 max-w-2xl text-lg">
              End-to-end technology services — from strategy and architecture to build, deploy and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-all duration-300 ${svc.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-semibold text-neutral-600 bg-neutral-100 border border-neutral-200 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY SANMARINA ────────────────────────────────────── */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold text-violet-600 uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-neutral-950 mb-6 leading-tight">
                Enterprise results at startup-friendly prices
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Our engineering hub in Nepal gives us access to top-tier technical talent — developers, cloud architects, 
                data engineers and security specialists — at rates that let you invest more into growing your product.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold rounded-xl transition-all"
              >
                Talk to an Engineer
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <ul className="space-y-4">
              {[
                'Full-stack engineers with 3–10 years experience',
                'Agile methodology with weekly sprints & demos',
                'UTC-friendly working hours for European clients',
                'Source code ownership — always yours',
                'Post-launch support & maintenance included',
                'Transparent, fixed or time-and-material pricing',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
            Let's build something great together
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            Tell us about your project and we'll put together a tailored proposal within 48 hours.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-violet-600/30 hover:-translate-y-0.5"
          >
            Start the Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
