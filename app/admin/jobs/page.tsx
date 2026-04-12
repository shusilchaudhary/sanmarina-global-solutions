import { supabaseAdmin } from '@/lib/supabase';
import Link from 'next/link';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { deleteJob } from '@/lib/actions/adminJobs';
import DeleteJobButton from './DeleteJobButton';

const countryFlags: Record<string, string> = {
  RO: '🇷🇴', PL: '🇵🇱', HR: '🇭🇷', HU: '🇭🇺', MT: '🇲🇹',
};

export default async function AdminJobsPage() {
  const { data: jobs } = await supabaseAdmin
    .from('jobs')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif', fontSize: '26px', fontWeight: 800, color: '#0B1628' }}>
            Job Listings
          </h1>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>{jobs?.length ?? 0} total jobs</p>
        </div>
        <Link href="/admin/jobs/new" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '11px 20px', background: '#CC2229', color: '#fff',
          borderRadius: '10px', fontSize: '14px', fontWeight: 700, textDecoration: 'none',
        }}>
          <Plus size={16} /> Add Job
        </Link>
      </div>

      <div style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #F3F4F6', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F9FAFB', borderBottom: '1px solid #F3F4F6' }}>
              {['Job Title', 'Country', 'Category', 'Salary', 'Featured', 'Actions'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jobs?.map((job, i) => (
              <tr key={job.id} style={{ borderBottom: i < (jobs.length - 1) ? '1px solid #F9FAFB' : 'none' }}>
                <td style={{ padding: '14px 16px' }}>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: '#0B1628' }}>{job.title}</div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '2px' }}>{job.slug}</div>
                </td>
                <td style={{ padding: '14px 16px', fontSize: '14px', color: '#374151' }}>
                  {countryFlags[job.country_code] ?? '🌍'} {job.country}
                </td>
                <td style={{ padding: '14px 16px' }}>
                  <span style={{ padding: '3px 10px', borderRadius: '999px', background: '#F3F4F6', fontSize: '12px', fontWeight: 600, color: '#374151', textTransform: 'capitalize' }}>
                    {job.category}
                  </span>
                </td>
                <td style={{ padding: '14px 16px', fontSize: '14px', color: '#374151' }}>
                  {job.salary_currency} {job.salary_min}{job.salary_min !== job.salary_max ? `–${job.salary_max}` : ''}/mo
                </td>
                <td style={{ padding: '14px 16px' }}>
                  <span style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, background: job.is_featured ? '#FFF1F2' : '#F3F4F6', color: job.is_featured ? '#CC2229' : '#9CA3AF' }}>
                    {job.is_featured ? 'Featured' : 'Normal'}
                  </span>
                </td>
                <td style={{ padding: '14px 16px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Link href={`/admin/jobs/${job.id}/edit`} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      padding: '6px 12px', background: '#EFF6FF', color: '#2563EB',
                      borderRadius: '7px', fontSize: '12px', fontWeight: 700, textDecoration: 'none',
                    }}>
                      <Pencil size={12} /> Edit
                    </Link>
                    <DeleteJobButton jobId={job.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
