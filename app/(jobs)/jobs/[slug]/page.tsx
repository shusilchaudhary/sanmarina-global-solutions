import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockJobs } from '@/lib/data/jobs';
import { formatSalary, formatDate, getCountryFlag } from '@/lib/utils';
import { CountryBadge } from '@/components/shared/CountryBadge';
import { JobApplicationForm } from '@/components/forms/JobApplicationForm';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Briefcase,
  Building,
  CheckCircle,
  Gift,
  Send,
} from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return mockJobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = mockJobs.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: `${job.title} in ${job.country}`,
    description: job.description.slice(0, 155),
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = mockJobs.find((j) => j.slug === slug);
  if (!job) notFound();

  const visaLabels: Record<string, string> = {
    'work-permit': 'Work Permit',
    'blue-card': 'EU Blue Card',
    seasonal: 'Seasonal Visa',
    'skilled-worker': 'Skilled Worker Visa',
  };

  return (
    <div className="min-h-screen bg-brand-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Jobs
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <CountryBadge
                  countryCode={job.countryCode}
                  countryName={job.country}
                />
                <span className="px-3 py-1 text-xs font-medium text-purple-400 bg-purple-400/10 rounded-full">
                  {visaLabels[job.visaType]}
                </span>
                {job.isFeatured && (
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-950 mb-2">
                {job.title}
              </h1>
              <p className="text-lg text-accent-600 font-semibold">
                {formatSalary(
                  job.salary.min,
                  job.salary.max,
                  job.salary.currency,
                  job.salary.period
                )}
              </p>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-slate-200 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-600" />
                {job.country}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-600" />
                Posted {formatDate(job.postedAt)}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent-600" />
                {job.applicationCount} applicants
              </span>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-display font-semibold text-brand-950 mb-4">
                Job Description
              </h2>
              <p className="text-slate-600 leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-xl font-display font-semibold text-brand-950 mb-4">
                Requirements
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-xl font-display font-semibold text-brand-950 mb-4">
                Benefits
              </h2>
              <ul className="space-y-3">
                {job.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <Gift className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Apply Card */}
            <div className="sticky top-24 space-y-6">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-6">
                <h3 className="text-lg font-display font-semibold text-brand-950">
                  Apply for this role
                </h3>
                <JobApplicationForm jobId={job.id} />
              </div>

              {/* Company Card */}
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-lg font-bold text-brand-900">
                    {job.company.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-950">
                      {job.company.name}
                    </h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      {job.company.industry} • {job.company.size}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {job.company.description}
                </p>
                {job.company.verified && (
                  <div className="flex items-center gap-2 text-xs text-accent-600">
                    <CheckCircle className="w-4 h-4" />
                    Verified Employer
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
