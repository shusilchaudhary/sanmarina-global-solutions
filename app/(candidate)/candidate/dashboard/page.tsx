import {
  FileText,
  User,
  Briefcase,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Candidate Dashboard',
  description: 'Manage your profile, applications, and documents.',
};

export default function CandidateDashboard() {
  return (
    <div className="bg-brand-950 py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-display font-bold text-white mb-2">
            Welcome back, Candidate
          </h1>
          <p className="text-gray-400">
            Manage your profile, track applications, and stay ready.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Briefcase, label: 'Applications', value: '3', color: 'text-blue-400', bg: 'bg-blue-400/10' },
            { icon: CheckCircle, label: 'Shortlisted', value: '1', color: 'text-accent-400', bg: 'bg-accent-400/10' },
            { icon: Clock, label: 'Under Review', value: '2', color: 'text-amber-400', bg: 'bg-amber-400/10' },
            { icon: Upload, label: 'Documents', value: '4/5', color: 'text-purple-400', bg: 'bg-purple-400/10' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-accent-400" />
              <h2 className="text-lg font-display font-semibold text-white">
                Profile Completion
              </h2>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 mb-3">
              <div className="bg-accent-400 h-2 rounded-full" style={{ width: '75%' }} />
            </div>
            <p className="text-sm text-gray-400">
              75% complete — Add your language skills to finish.
            </p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-display font-semibold text-white">
                Recent Activity
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="w-2 h-2 rounded-full bg-accent-400" />
                Application for &ldquo;Hotel Receptionist&rdquo; shortlisted
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                CV uploaded and under verification
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
