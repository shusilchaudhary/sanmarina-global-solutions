import { getProfile } from '@/lib/supabase-server';
import { supabaseAdmin } from '@/lib/supabase';
import { signOut } from '@/lib/actions/auth';
import Link from 'next/link';
import { Briefcase, Users, Plus, ArrowRight, LogOut, Search } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function EmployerDashboard() {
  const profile = await getProfile();
  if (!profile) redirect('/auth/login');
  if (profile.role !== 'employer') redirect('/dashboard/jobseeker');

  const { data: ep } = await supabaseAdmin.from('employer_profiles').select('*').eq('id', profile.id).single();
  const { data: jobs } = await supabaseAdmin.from('jobs').select('*').eq('employer_id', profile.id).order('created_at', { ascending: false });
  const { count: appCount } = await supabaseAdmin.from('applications').select('*', { count: 'exact', head: true });

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      {/* Top bar */}
      <header style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/" style={{ fontSize: '16px', fontWeight: 800, color: '#CC2229', textDecoration: 'none', fontFamily: 'var(--font-outfit)' }}>SanMarina</Link>
          <span style={{ color: '#E5E7EB' }}>|</span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#6B7280' }}>Employer Portal</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>👋 {ep?.company_name || profile.full_name}</span>
          <form action={signOut}>
            <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: '#F3F4F6', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, color: '#374151', cursor: 'pointer' }}>
              <LogOut size={14} /> Sign Out
            </button>
          </form>
        </div>
      </header>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '36px 24px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '26px', fontWeight: 800, color: '#0B1628', marginBottom: '4px' }}>
            Welcome, {ep?.company_name || profile.full_name}
          </h1>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>Manage your job listings and review applications.</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Jobs Posted', value: jobs?.length ?? 0, icon: Briefcase, color: '#CC2229', bg: '#FFF1F2' },
            { label: 'Applications', value: appCount ?? 0, icon: Users, color: '#2563EB', bg: '#EFF6FF' },
          ].map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '14px', padding: '20px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Icon size={18} color={color} />
              </div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#0B1628', fontFamily: 'var(--font-outfit)' }}>{value}</div>
              <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px', marginBottom: '36px' }}>
          <Link href="/dashboard/employer/post-job" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#CC2229', borderRadius: '12px', padding: '18px 20px', textDecoration: 'none', color: '#fff' }}>
            <Plus size={20} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px' }}>Post a Job</div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>Reach thousands of candidates</div>
            </div>
          </Link>
          <Link href="/dashboard/employer/applications" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: '12px', padding: '18px 20px', textDecoration: 'none', color: '#0B1628' }}>
            <Users size={20} color="#2563EB" />
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px' }}>View Applications</div>
              <div style={{ fontSize: '12px', color: '#6B7280' }}>Review candidate CVs</div>
            </div>
          </Link>
          <Link href="/dashboard/employer/talent" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: '12px', padding: '18px 20px', textDecoration: 'none', color: '#0B1628' }}>
            <Search size={20} color="#16A34A" />
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px' }}>Find Talent</div>
              <div style={{ fontSize: '12px', color: '#6B7280' }}>Browse worker profiles</div>
            </div>
          </Link>
        </div>

        {/* My jobs */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '18px', fontWeight: 700, color: '#0B1628' }}>Your Job Listings</h2>
            <Link href="/dashboard/employer/post-job" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#CC2229', textDecoration: 'none' }}>
              Add new <ArrowRight size={13} />
            </Link>
          </div>
          {(!jobs || jobs.length === 0) ? (
            <div style={{ background: '#fff', border: '1.5px dashed #E5E7EB', borderRadius: '14px', padding: '48px', textAlign: 'center' }}>
              <Briefcase size={32} color="#D1D5DB" style={{ margin: '0 auto 12px' }} />
              <div style={{ fontWeight: 600, color: '#0B1628', marginBottom: '6px' }}>No jobs posted yet</div>
              <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '16px' }}>Post your first job to start receiving applications.</p>
              <Link href="/dashboard/employer/post-job" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: '#CC2229', color: '#fff', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
                <Plus size={15} /> Post a Job
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {jobs.map(job => (
                <div key={job.id} style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '12px', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: '#0B1628' }}>{job.title}</div>
                    <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '3px' }}>{job.country} · {job.category} · {job.salary_currency} {job.salary_min}/mo</div>
                  </div>
                  <span style={{ padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, background: job.is_active ? '#F0FDF4' : '#F3F4F6', color: job.is_active ? '#16A34A' : '#6B7280' }}>
                    {job.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
