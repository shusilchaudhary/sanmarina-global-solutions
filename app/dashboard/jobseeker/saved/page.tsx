import { getProfile } from '@/lib/supabase-server';
import { supabaseAdmin } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Heart, MapPin, DollarSign } from 'lucide-react';

export default async function SavedJobsPage() {
  const profile = await getProfile();
  if (!profile) redirect('/auth/login');

  const { data: saved } = await supabaseAdmin
    .from('saved_jobs')
    .select('*, jobs(id, title, country, category, salary_min, salary_max, salary_currency, slug, is_active)')
    .eq('jobseeker_id', profile.id)
    .order('created_at', { ascending: false });

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      <header style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/" style={{ fontSize: '16px', fontWeight: 800, color: '#CC2229', textDecoration: 'none' }}>SanMarina</Link>
          <span style={{ color: '#E5E7EB' }}>|</span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#6B7280' }}>Saved Jobs</span>
        </div>
        <Link href="/dashboard/jobseeker" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#6B7280', textDecoration: 'none' }}>
          <ArrowLeft size={14} /> Dashboard
        </Link>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '36px 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '24px', fontWeight: 800, color: '#0B1628', marginBottom: '8px' }}>Saved Jobs</h1>
        <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '28px' }}>{saved?.length ?? 0} saved positions</p>

        {(!saved || saved.length === 0) ? (
          <div style={{ background: '#fff', border: '1.5px dashed #E5E7EB', borderRadius: '14px', padding: '56px', textAlign: 'center' }}>
            <Heart size={36} color="#D1D5DB" style={{ margin: '0 auto 14px' }} />
            <div style={{ fontWeight: 700, fontSize: '16px', color: '#0B1628', marginBottom: '6px' }}>No saved jobs yet</div>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '20px' }}>Bookmark jobs you&apos;re interested in to review them later.</p>
            <Link href="/jobs" style={{ display: 'inline-block', padding: '11px 24px', background: '#CC2229', color: '#fff', borderRadius: '9px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {saved.map(s => {
              const job = s.jobs as { id: string; title: string; country: string; category: string; salary_min: number; salary_max: number; salary_currency: string; slug: string; is_active: boolean } | null;
              if (!job) return null;
              return (
                <div key={s.id} style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '12px', padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: '#0B1628', marginBottom: '6px' }}>{job.title}</div>
                    <div style={{ display: 'flex', gap: '14px', fontSize: '12px', color: '#6B7280' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={11} /> {job.country}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><DollarSign size={11} /> {job.salary_currency} {job.salary_min}–{job.salary_max}/mo</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {!job.is_active && (
                      <span style={{ fontSize: '11px', fontWeight: 600, color: '#9CA3AF', background: '#F3F4F6', padding: '3px 10px', borderRadius: '999px' }}>Closed</span>
                    )}
                    <Link href={`/jobs/${job.slug}`} style={{ padding: '8px 18px', background: '#CC2229', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
                      View Job
                    </Link>
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
