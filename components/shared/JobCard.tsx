import Link from 'next/link';
import { cn } from '@/lib/utils';
import { formatSalary } from '@/lib/utils';
import { CountryBadge } from './CountryBadge';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import type { Job } from '@/types/job';

interface JobCardProps {
  job: Job;
  className?: string;
}

const visaLabels: Record<string, string> = {
  'work-permit': 'Work Permit',
  'blue-card': 'EU Blue Card',
  seasonal: 'Seasonal',
  'skilled-worker': 'Skilled Worker',
};

const categoryLabels: Record<string, string> = {
  hospitality: 'Hospitality',
  construction: 'Construction',
  healthcare: 'Healthcare',
  it: 'IT & Tech',
  logistics: 'Logistics',
  agriculture: 'Agriculture',
};

export function JobCard({ job, className }: JobCardProps) {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className={cn(
        'group block p-6 rounded-2xl bg-white border border-slate-200 border-t-4 border-t-brand-600 shadow-sm',
        'hover:-translate-y-1 hover:border-brand-300 hover:shadow-md transition-all duration-300',
        className
      )}
    >
      {/* Header: Company + Country */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-sm font-bold text-brand-600">
            {job.company.name.charAt(0)}
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">{job.company.name}</p>
            <h3 className="text-base font-display font-bold text-brand-950 group-hover:text-brand-600 transition-colors">
              {job.title}
            </h3>
          </div>
        </div>
        {job.isFeatured && (
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-600 bg-accent-400/20 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Tags row */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <CountryBadge
          countryCode={job.countryCode}
          countryName={job.country}
          size="sm"
        />
        <span className="px-2 py-0.5 text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-full">
          {visaLabels[job.visaType]}
        </span>
        <span className="px-2 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full">
          {categoryLabels[job.category]}
        </span>
      </div>

      {/* Salary */}
      <p className="text-lg font-bold text-brand-700 mb-3">
        {formatSalary(
          job.salary.min,
          job.salary.max,
          job.salary.currency,
          job.salary.period
        )}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
        <div className="flex gap-4">
          <span className="flex items-center gap-1 font-medium">
            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
            {job.applicationCount} refs
          </span>
          <span className="flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {new Date(job.postedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>
        <ArrowRight className="w-4 h-4 text-brand-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}
