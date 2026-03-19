import Link from 'next/link';
import { Briefcase, Users, Plus, Eye, TrendingUp, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employer Dashboard',
  description: 'Manage your job postings and candidate pipeline.',
};

export default function EmployerDashboard() {
  return (
    <div className="bg-brand-950 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-display font-bold text-white mb-2">
              Employer Dashboard
            </h1>
            <p className="text-gray-400">
              Manage your job postings and review candidates.
            </p>
          </div>
          <Link
            href="/employer/post-job"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-brand-950 bg-accent-400 hover:bg-accent-500 rounded-xl transition-colors"
          >
            <Plus className="w-4 h-4" />
            Post New Job
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Briefcase, label: 'Active Jobs', value: '4', color: 'text-blue-400', bg: 'bg-blue-400/10' },
            { icon: Users, label: 'Total Applicants', value: '127', color: 'text-accent-400', bg: 'bg-accent-400/10' },
            { icon: Eye, label: 'Profile Views', value: '342', color: 'text-purple-400', bg: 'bg-purple-400/10' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Jobs */}
        <h2 className="text-lg font-display font-semibold text-white mb-4">
          Your Active Postings
        </h2>
        <div className="space-y-4">
          {[
            { title: 'Hotel Receptionist', country: 'Germany', applicants: 34, status: 'Active' },
            { title: 'IT Support Technician', country: 'Germany', applicants: 19, status: 'Active' },
            { title: 'Healthcare Assistant', country: 'Czech Republic', applicants: 22, status: 'Active' },
          ].map((job) => (
            <div
              key={job.title}
              className="p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-base font-semibold text-white">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-400">{job.country}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">
                  {job.applicants} applicants
                </span>
                <span className="px-3 py-1 text-xs font-medium text-accent-400 bg-accent-400/10 rounded-full">
                  {job.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
