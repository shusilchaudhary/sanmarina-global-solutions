import Link from 'next/link';
import {
  HardHat,
  Package,
  Wrench,
  Building2,
  Utensils,
  Leaf,
  ArrowRight,
  CheckCircle2,
  FileText,
  Plane,
  Users,
  ShieldCheck,
  Globe,
  Award,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'International Recruitment | SanMarina Global',
  description:
    'Pre-screened Nepali workers for Europe. Construction, logistics, manufacturing, hospitality and more. Visa assistance included.',
};

const services = [
  {
    icon: HardHat,
    title: 'Construction',
    desc: 'Skilled masons, carpenters, steel fixers and general construction labourers for European infrastructure and building projects.',
    tags: ['Masonry', 'Carpentry', 'Steel Fixing', 'Civil Labour'],
  },
  {
    icon: Package,
    title: 'Logistics & Delivery',
    desc: 'Licensed drivers, warehouse operatives, forklift operators and last-mile delivery riders for fast-paced logistics networks.',
    tags: ['HGV Drivers', 'Warehouse', 'Forklift', 'Delivery'],
  },
  {
    icon: Wrench,
    title: 'Manufacturing',
    desc: 'Factory workers, CNC machine operators, quality control staff and assembly line specialists ready for immediate deployment.',
    tags: ['CNC Operators', 'QC Inspectors', 'Assembly', 'Production'],
  },
  {
    icon: Building2,
    title: 'Hospitality',
    desc: 'Trained chefs, waitstaff, hotel housekeeping and front-desk personnel with hands-on international hospitality experience.',
    tags: ['Chefs', 'Waitstaff', 'Housekeeping', 'Front Desk'],
  },
  {
    icon: Utensils,
    title: 'Food & Catering',
    desc: 'Catering assistants, food prep staff and kitchen porters for restaurants, canteens and large-scale food service operations.',
    tags: ['Kitchen Staff', 'Food Prep', 'Catering', 'Dishwashers'],
  },
  {
    icon: Leaf,
    title: 'Agriculture & Seasonal',
    desc: 'Seasonal farm workers for crop harvesting, greenhouse work, livestock care and orchard maintenance across Europe.',
    tags: ['Harvest', 'Greenhouse', 'Livestock', 'Orchard'],
  },
];

const process = [
  {
    step: '01',
    icon: FileText,
    title: 'Submit Staffing Request',
    desc: 'Tell us your requirements — number of workers, job roles, location, and timeline. We tailor a solution to your exact needs.',
  },
  {
    step: '02',
    icon: Users,
    title: 'Candidate Screening',
    desc: 'We source, interview and background-check candidates from our verified pool of Nepali workers seeking European positions.',
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Visa & Documentation',
    desc: 'Our legal team prepares all visa applications, work permits and supporting documents to maximise approval rates.',
  },
  {
    step: '04',
    icon: Plane,
    title: 'Deployment & Arrival',
    desc: 'We coordinate flights, airport transfers and initial accommodation — ensuring workers arrive ready to start without delays.',
  },
];

const stats = [
  { icon: Users, value: '10+', label: 'Workers Placed' },
  { icon: Globe, value: '5+', label: 'European Countries' },
  { icon: Award, value: '98%', label: 'Visa Success Rate\n(Genuine Applicants)' },
  { icon: ShieldCheck, value: '100%', label: 'Pre-Screened Talent' },
];

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-neutral-950 overflow-hidden pt-32 pb-24">
        {/* Ambient glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-600/15 border border-primary-500/30 text-primary-400 text-xs font-semibold tracking-wider uppercase">
              <Globe className="w-3.5 h-3.5" />
              International Recruitment
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05] mb-6">
            Nepali Talent for<br />
            <span className="text-primary-400">European Employers</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10">
            We source, screen and deploy dedicated workers from Nepal for roles across construction,
            logistics, manufacturing, hospitality and agriculture throughout Europe — with full visa
            and documentation support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-primary-600/30 hover:-translate-y-0.5"
            >
              Request Workers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-xl transition-all"
            >
              Browse Open Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-primary-600">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className={`py-8 px-6 text-center ${i < stats.length - 1 ? 'md:border-r border-primary-500' : ''}`}>
                  <Icon className="w-6 h-6 text-white/70 mx-auto mb-2" />
                  <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-primary-200 font-medium whitespace-pre-line">{s.label}</p>
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
            <p className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">What We Supply</p>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-950 mb-4 tracking-tight">
              Sectors We Cover
            </h2>
            <p className="text-neutral-500 max-w-2xl text-lg">
              From skilled trades to seasonal labour — we match the right workers to the right roles across six core sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-primary-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-5 text-primary-600 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-semibold text-primary-700 bg-primary-50 border border-primary-100 rounded-full">
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

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-neutral-950 tracking-tight">
              From Request to Arrival
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.step} className="flex gap-5 p-6 bg-white rounded-2xl border border-neutral-200">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">Step {p.step}</span>
                    <h3 className="text-lg font-bold text-neutral-900 mt-1 mb-2">{p.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">Why SanMarina Global</p>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-neutral-950 mb-6 leading-tight">
                Recruitment you can trust — with a proven track record
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-8">
                We are a licensed international recruitment agency with direct operations between Nepal and Europe.
                Every candidate we place is personally screened, ethically sourced and visa-ready.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all"
              >
                Start Hiring Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <ul className="space-y-4">
              {[
                'Licensed international recruitment agency',
                'Direct Nepal office — no third-party middlemen',
                '98% visa success rate for genuine applicants',
                'Pre-screened, English-communicating workers',
                'Post-arrival support & employer follow-up',
                'Ethical, zero-exploitation recruitment practices',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
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
            Ready to fill your open roles?
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            Tell us your staffing needs and we'll respond within 24 hours with a tailored candidate shortlist.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary-600/30 hover:-translate-y-0.5"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
