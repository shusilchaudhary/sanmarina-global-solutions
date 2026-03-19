import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Job } from '@/types/job';

interface FeaturedJobsProps {
  jobs: Job[];
}

export function FeaturedJobs({ jobs }: FeaturedJobsProps) {
  return (
    <section className="relative py-28 bg-brand-950 overflow-hidden noise-overlay">
      {/* Ambient glow */}
      <div className="absolute top-[-10%] left-[20%] w-[400px] h-[400px] bg-accent-600/8 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] bg-brand-600/10 rounded-full blur-[80px] z-0" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-5 bg-white/[0.06] text-accent-400 border border-white/10 shadow-[0_0_20px_rgba(225,29,72,0.08)]">
            Hot Roles
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-extrabold text-white tracking-tight mb-3 leading-[1.15]">
            Featured Opportunities
          </h2>
          <p className="text-slate-400 text-base">Top roles handpicked for you in Europe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.slug}`}
              className="group relative flex items-center justify-between px-5 py-4 rounded-2xl glass-card hover-glow hover-glow-dark transition-all duration-300 border-l-[3px] border-l-accent-500/60 hover:border-l-accent-400"
            >
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white group-hover:text-accent-300 transition-colors truncate">
                  {job.title} — {job.country}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1">
                  {job.company.name} · {job.visaType === 'skilled-worker' ? 'Skilled Visa' : job.visaType === 'work-permit' ? 'Work Permit' : job.visaType}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-accent-400 shrink-0 ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/jobs"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full transition-all shadow-sm backdrop-blur-sm"
          >
            Explore All Roles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 text-accent-400 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
