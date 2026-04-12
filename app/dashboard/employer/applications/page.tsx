import { getProfile } from '@/lib/supabase-server';
import { supabaseAdmin } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Users, Mail, Phone, Clock } from 'lucide-react';
import { updateApplicationStatus } from '@/lib/actions/employerActions';

const statusStyles: Record<string, { bg: string; color: string }> = {
  pending:   { bg: '#FFFBEB', color: '#92400E' },
  reviewed:  { bg: '#EFF6FF', color: '#1D4ED8' },
  interview: { bg: '#F5F3FF', color: '#7C3AED' },
  accepted:  { bg: '#F0FDF4', color: '#16A34A' },
  rejected:  { bg: '#FFF1F2', color: '#CC2229' },
};

export default async function EmployerApplicationsPage() {
  const profile = await getProfile();
  if (!profile) redirect('/auth/login');
  if (profile.role !== 'employer') redirect('/dashboard/jobseeker');

  // Get employer's jobs first
  const { data: myJobs } = await supabaseAdmin
    .from('jobs')
    .select('id')
    .eq('employer_id', profile.id);

  const jobIds = (myJobs ?? []).map(j => j.id);

  const { data: applications } = jobIds.length > 0
    ? await supabaseAdmin
        .from('applications')
        .select('*')
        .in('job_id', jobIds)
        .order('created_at', { ascending: false })
    : { data: [] };

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      <header style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/" style={{ fontSize: '16px', fontWeight: 800, color: '#CC2229', textDecoration: 'none' }}>SanMarina</Link>
          <span style={{ color: '#E5E7EB' }}>|</span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#6B7280' }}>Applications</span>
        </div>
        <Link href="/dashboard/employer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#6B7280', textDecoration: 'none' }}>
          <ArrowLeft size={14} /> Dashboard
        </Link>
      </header>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '36px 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '24px', fontWeight: 800, color: '#0B1628', marginBottom: '8px' }}>Applications</h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '28px' }}>{applications?.length ?? 0} applications received for your jobs</p>

        {(!applications || applications.length === 0) ? (
          <div style={{ background: '#fff', border: '1.5px dashed #E5E7EB', borderRadius: '14px', padding: '56px', textAlign: 'center' }}>
            <Users size={36} color="#D1D5DB" style={{ margin: '0 auto 14px' }} />
            <div style={{ fontWeight: 700, fontSize: '16px', color: '#0B1628', marginBottom: '6px' }}>No applications yet</div>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '20px' }}>Post jobs to start receiving candidate applications.</p>
            <Link href="/dashboard/employer/post-job" style={{ display: 'inline-block', padding: '11px 24px', background: '#CC2229', color: '#fff', borderRadius: '9px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
              Post a Job
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {applications!.map(app => {
              const s = statusStyles[app.status] ?? statusStyles.pending;
              return (
                <div key={app.id} style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '14px', padding: '20px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '12px' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '16px', color: '#0B1628', marginBottom: '4px' }}>{app.full_name}</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#6B7280' }}>Applied for: {app.job_title}</div>
                    </div>
                    <span style={{ padding: '4px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, background: s.bg, color: s.color, flexShrink: 0, textTransform: 'capitalize' }}>
                      {app.status}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#6B7280', marginBottom: '14px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Mail size={12} /> {app.email}</span>
                    {app.phone && <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Phone size={12} /> {app.phone}</span>}
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={12} /> {new Date(app.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>

                  {app.cover_letter && (
                    <div style={{ background: '#F9FAFB', borderRadius: '8px', padding: '12px 14px', fontSize: '13px', color: '#374151', lineHeight: '1.6', marginBottom: '14px', borderLeft: '3px solid #E5E7EB' }}>
                      {app.cover_letter.length > 300 ? app.cover_letter.slice(0, 300) + '…' : app.cover_letter}
                    </div>
                  )}

                  {/* Status update actions */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {['reviewed', 'interview', 'accepted', 'rejected'].map(status => (
                      <form key={status} action={updateApplicationStatus}>
                        <input type="hidden" name="applicationId" value={app.id} />
                        <input type="hidden" name="status" value={status} />
                        <button type="submit" style={{
                          padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 700,
                          border: '1.5px solid #E5E7EB', background: app.status === status ? '#0B1628' : '#fff',
                          color: app.status === status ? '#fff' : '#374151',
                          cursor: 'pointer', textTransform: 'capitalize',
                        }}>
                          {status === 'interview' ? 'Interview' : status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                      </form>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
