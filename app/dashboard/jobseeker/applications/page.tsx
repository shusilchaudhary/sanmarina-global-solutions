import { getProfile } from '@/lib/supabase-server';
import { supabaseAdmin } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Clock } from 'lucide-react';

const statusStyles: Record<string, { bg: string; color: string; label: string }> = {
  pending:   { bg: '#FFFBEB', color: '#92400E', label: 'Pending' },
  reviewed:  { bg: '#EFF6FF', color: '#1D4ED8', label: 'Reviewed' },
  interview: { bg: '#F0FDF4', color: '#15803D', label: 'Interview' },
  accepted:  { bg: '#F0FDF4', color: '#16A34A', label: 'Accepted' },
  rejected:  { bg: '#FFF1F2', color: '#CC2229', label: 'Rejected' },
};

export default async function JobSeekerApplicationsPage() {
  const profile = await getProfile();
  if (!profile) redirect('/auth/login');

  // Match by email since jobseeker_id may not be set on older applications
  const { data: applications } = await supabaseAdmin
    .from('applications')
    .select('*')
    .eq('email', profile.email)
    .order('created_at', { ascending: false });

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      <header style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/" style={{ fontSize: '16px', fontWeight: 800, color: '#CC2229', textDecoration: 'none' }}>SanMarina</Link>
          <span style={{ color: '#E5E7EB' }}>|</span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#6B7280' }}>My Applications</span>
        </div>
        <Link href="/dashboard/jobseeker" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#6B7280', textDecoration: 'none' }}>
          <ArrowLeft size={14} /> Dashboard
        </Link>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '36px 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '24px', fontWeight: 800, color: '#0B1628', marginBottom: '8px' }}>My Applications</h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '28px' }}>{applications?.length ?? 0} total applications</p>

        {(!applications || applications.length === 0) ? (
          <div style={{ background: '#fff', border: '1.5px dashed #E5E7EB', borderRadius: '14px', padding: '56px', textAlign: 'center' }}>
            <Briefcase size={36} color="#D1D5DB" style={{ margin: '0 auto 14px' }} />
            <div style={{ fontWeight: 700, fontSize: '16px', color: '#0B1628', marginBottom: '6px' }}>No applications yet</div>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '20px' }}>Start browsing jobs and apply to opportunities across Europe.</p>
            <Link href="/jobs" style={{ display: 'inline-block', padding: '11px 24px', background: '#CC2229', color: '#fff', borderRadius: '9px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {applications.map(app => {
              const s = statusStyles[app.status] ?? statusStyles.pending;
              return (
                <div key={app.id} style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '12px', padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: '#0B1628', marginBottom: '4px' }}>{app.job_title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#9CA3AF' }}>
                      <Clock size={11} />
                      Applied {new Date(app.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                  <span style={{ padding: '4px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, background: s.bg, color: s.color, flexShrink: 0 }}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
