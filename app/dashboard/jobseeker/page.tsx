import { getProfile } from '@/lib/supabase-server';
import { supabaseAdmin } from '@/lib/supabase';
import { signOut } from '@/lib/actions/auth';
import Link from 'next/link';
import { Briefcase, Heart, User, Search, LogOut, ArrowRight, CheckCircle } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function JobSeekerDashboard() {
  const profile = await getProfile();
  if (!profile) redirect('/auth/login');
  if (profile.role !== 'jobseeker') redirect('/dashboard/employer');

  const { data: jp } = await supabaseAdmin.from('jobseeker_profiles').select('*').eq('id', profile.id).single();
  const { data: applications } = await supabaseAdmin.from('applications').select('*').eq('jobseeker_id', profile.id).order('created_at', { ascending: false });
  const { data: saved } = await supabaseAdmin.from('saved_jobs').select('*, jobs(title, country, salary_min, salary_currency)').eq('jobseeker_id', profile.id);
  const { data: featuredJobs } = await supabaseAdmin.from('jobs').select('*').eq('is_featured', true).eq('is_active', true).limit(3);

  const profileComplete = !!(jp?.headline && jp?.skills?.length && jp?.current_country);

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      {/* Top bar */}
      <header style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/" style={{ fontSize: '16px', fontWeight: 800, color: '#CC2229', textDecoration: 'none', fontFamily: 'var(--font-outfit)' }}>SanMarina</Link>
          <span style={{ color: '#E5E7EB' }}>|</span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#6B7280' }}>Job Seeker Portal</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/jobs" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: '#F3F4F6', borderRadius: '8px', fontSize: '13px', fontWeight: 600, color: '#374151', textDecoration: 'none' }}>
            <Search size={13} /> Browse Jobs
          </Link>
          <form action={signOut}>
            <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: '#F3F4F6', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, color: '#374151', cursor: 'pointer' }}>
              <LogOut size={13} /> Sign Out
            </button>
          </form>
        </div>
      </header>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '36px 24px' }}>
        <div style={{ marginBottom: '28px' }}>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '26px', fontWeight: 800, color: '#0B1628', marginBottom: '4px' }}>
            Welcome, {profile.full_name || 'Job Seeker'} 👋
          </h1>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>Your European career journey starts here.</p>
        </div>

        {/* Profile completion banner */}
        {!profileComplete && (
          <div style={{ background: 'linear-gradient(135deg, #0B1628, #1E3A8A)', borderRadius: '14px', padding: '20px 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Complete your profile to get noticed</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Add your skills, experience and CV to attract employers.</div>
            </div>
            <Link href="/dashboard/jobseeker/profile" style={{ padding: '10px 20px', background: '#CC2229', color: '#fff', borderRadius: '8px', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
              Complete Profile →
            </Link>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '32px' }}>
          {[
            { label: 'Applications', value: applications?.length ?? 0, icon: Briefcase, color: '#CC2229', bg: '#FFF1F2', href: '/dashboard/jobseeker/applications' },
            { label: 'Saved Jobs', value: saved?.length ?? 0, icon: Heart, color: '#EC4899', bg: '#FDF2F8', href: '/dashboard/jobseeker/saved' },
            { label: 'Profile Views', value: 0, icon: User, color: '#2563EB', bg: '#EFF6FF', href: '/dashboard/jobseeker/profile' },
          ].map(({ label, value, icon: Icon, color, bg, href }) => (
            <Link key={label} href={href} style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '14px', padding: '20px', textDecoration: 'none', display: 'block' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Icon size={18} color={color} />
              </div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#0B1628', fontFamily: 'var(--font-outfit)' }}>{value}</div>
              <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>{label}</div>
            </Link>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Recent applications */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '17px', fontWeight: 700, color: '#0B1628' }}>My Applications</h2>
              <Link href="/dashboard/jobseeker/applications" style={{ fontSize: '12px', color: '#CC2229', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>View all <ArrowRight size={12} /></Link>
            </div>
            {(!applications || applications.length === 0) ? (
              <div style={{ background: '#fff', border: '1.5px dashed #E5E7EB', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', color: '#6B7280' }}>No applications yet. <Link href="/jobs" style={{ color: '#CC2229', fontWeight: 700 }}>Browse jobs →</Link></div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {applications.slice(0, 4).map(app => (
                  <div key={app.id} style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '10px', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px', color: '#0B1628' }}>{app.job_title}</div>
                      <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '2px' }}>{new Date(app.created_at).toLocaleDateString()}</div>
                    </div>
                    <span style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 700, background: app.status === 'pending' ? '#FFFBEB' : '#F0FDF4', color: app.status === 'pending' ? '#92400E' : '#16A34A' }}>
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Featured jobs */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '17px', fontWeight: 700, color: '#0B1628' }}>Featured Jobs</h2>
              <Link href="/jobs" style={{ fontSize: '12px', color: '#CC2229', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>All jobs <ArrowRight size={12} /></Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {featuredJobs?.map(job => (
                <Link key={job.id} href={`/jobs/${job.slug}`} style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '10px', padding: '14px 16px', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: '#0B1628' }}>{job.title}</div>
                    <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>{job.country} · {job.salary_currency} {job.salary_min}/mo</div>
                  </div>
                  <CheckCircle size={16} color="#CC2229" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
