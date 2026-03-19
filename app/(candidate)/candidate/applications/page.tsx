import { Clock, CheckCircle, XCircle, Eye } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Applications',
  description: 'Track your job applications and status.',
};

const applications = [
  {
    id: '1',
    jobTitle: 'Hotel Receptionist',
    company: 'Bavaria Hotels GmbH',
    country: 'Germany',
    appliedAt: 'Mar 5, 2025',
    status: 'shortlisted',
    statusColor: 'text-accent-400',
    statusBg: 'bg-accent-400/10',
  },
  {
    id: '2',
    jobTitle: 'Construction Site Worker',
    company: 'PolaBuilt Sp. z o.o.',
    country: 'Poland',
    appliedAt: 'Mar 8, 2025',
    status: 'under-review',
    statusColor: 'text-amber-400',
    statusBg: 'bg-amber-400/10',
  },
  {
    id: '3',
    jobTitle: 'IT Support Technician',
    company: 'TechBridge Solutions AG',
    country: 'Germany',
    appliedAt: 'Mar 12, 2025',
    status: 'submitted',
    statusColor: 'text-blue-400',
    statusBg: 'bg-blue-400/10',
  },
];

const statusLabels: Record<string, string> = {
  submitted: 'Submitted',
  'under-review': 'Under Review',
  shortlisted: 'Shortlisted',
  rejected: 'Rejected',
};

export default function ApplicationsPage() {
  return (
    <div className="bg-brand-950 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-display font-bold text-white mb-2">
          My Applications
        </h1>
        <p className="text-gray-400 mb-8">
          Track the status of your submitted applications.
        </p>

        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-900 flex items-center justify-center text-sm font-bold text-white">
                  {app.company.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {app.jobTitle}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {app.company} • {app.country}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">{app.appliedAt}</span>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${app.statusColor} ${app.statusBg}`}
                >
                  {statusLabels[app.status]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
