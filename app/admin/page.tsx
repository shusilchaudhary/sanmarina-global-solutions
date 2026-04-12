import { supabaseAdmin } from '@/lib/supabase';
import { seedJobs } from '@/lib/actions/seed';
import Link from 'next/link';
import { Briefcase, Users, Eye, Plus } from 'lucide-react';

async function getStats() {
  const [{ count: jobCount }, { count: appCount }] = await Promise.all([
    supabaseAdmin.from('jobs').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('applications').select('*', { count: 'exact', head: true }),
  ]);
  return { jobCount: jobCount ?? 0, appCount: appCount ?? 0 };
}

export default async function AdminPage() {
  const { jobCount, appCount } = await getStats();

  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif', fontSize: '28px', fontWeight: 800, color: '#0B1628', marginBottom: '4px' }}>
          Dashboard Overview
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px' }}>Manage your jobs, applications and site content.</p>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        {[
          { label: 'Active Jobs', value: jobCount, icon: Briefcase, color: '#CC2229', bg: '#FFF1F2' },
          { label: 'Applications', value: appCount, icon: Users, color: '#2563EB', bg: '#EFF6FF' },
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '16px', padding: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Icon size={20} color={color} />
            </div>
            <div style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif', fontSize: '32px', fontWeight: 800, color: '#0B1628', lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px', fontWeight: 500 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        <Link href="/admin/jobs/new" style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          background: '#CC2229', borderRadius: '14px', padding: '20px 24px',
          textDecoration: 'none', color: '#fff',
        }}>
          <Plus size={22} />
          <div>
            <div style={{ fontWeight: 700, fontSize: '15px' }}>Add New Job</div>
            <div style={{ fontSize: '12px', opacity: 0.8, marginTop: '2px' }}>Post a new job listing</div>
          </div>
        </Link>

        <Link href="/admin/applications" style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: '14px', padding: '20px 24px',
          textDecoration: 'none', color: '#0B1628',
        }}>
          <Users size={22} color="#2563EB" />
          <div>
            <div style={{ fontWeight: 700, fontSize: '15px' }}>View Applications</div>
            <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>{appCount} pending review</div>
          </div>
        </Link>

        <Link href="/admin/jobs" style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: '14px', padding: '20px 24px',
          textDecoration: 'none', color: '#0B1628',
        }}>
          <Eye size={22} color="#CC2229" />
          <div>
            <div style={{ fontWeight: 700, fontSize: '15px' }}>Manage Jobs</div>
            <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>{jobCount} active listings</div>
          </div>
        </Link>
      </div>

      {/* Seed section */}
      {jobCount === 0 && (
        <div style={{ background: '#FFFBEB', border: '1.5px solid #FDE68A', borderRadius: '14px', padding: '24px' }}>
          <div style={{ fontWeight: 700, color: '#92400E', marginBottom: '8px' }}>⚠️ No jobs in database yet</div>
          <p style={{ fontSize: '14px', color: '#78350F', marginBottom: '16px' }}>
            Click below to import all your current job listings into Supabase.
          </p>
          <form action={seedJobs}>
            <button type="submit" style={{
              padding: '10px 24px', background: '#CC2229', color: '#fff',
              border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
            }}>
              Import All Jobs to Database
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
