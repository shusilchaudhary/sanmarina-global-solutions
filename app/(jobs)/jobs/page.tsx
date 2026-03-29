import { Suspense } from 'react';
import { JobCard } from '@/components/shared/JobCard';
import { LoadingSkeleton } from '@/components/shared/LoadingSkeleton';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { mockJobs } from '@/lib/data/jobs';
import { Search, SlidersHorizontal } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Board | Work in Europe',
  description:
    'Browse verified job openings in Germany, Poland, Czech Republic. Work permits and visa assistance included.',
};

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string; category?: string; visa?: string }>;
}) {
  const params = await searchParams;
  const jobs = mockJobs.filter((j) => {
    if (params.country && j.countryCode !== params.country) return false;
    if (params.category && j.category !== params.category) return false;
    if (params.visa && j.visaType !== params.visa) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-brand-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-12 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-950 mb-3">
            Available Jobs in Europe
          </h1>
          <p className="text-slate-600 max-w-2xl">
            Explore verified job openings with visa support. Filter by country,
            category, or visa type to find your perfect match.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Filters bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter:</span>
          </div>
          {['All', 'Germany', 'Poland', 'Czech Republic', 'Romania', 'Croatia'].map(
            (country) => (
              <button
                key={country}
                className="px-4 py-1.5 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-colors"
              >
                {country}
              </button>
            )
          )}
        </div>

        {/* Results count */}
        <p className="text-sm text-slate-500 mb-6">
          Showing <span className="text-brand-950 font-semibold">{jobs.length}</span>{' '}
          jobs
        </p>

        {/* Job Grid */}
        <Suspense fallback={<LoadingSkeleton variant="job-card" count={6} />}>
          {jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-brand-950 mb-2">
                No jobs found
              </h3>
              <p className="text-slate-500">
                Try adjusting your filters or check back later.
              </p>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}
