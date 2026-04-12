import { supabaseAdmin } from '@/lib/supabase';
import { JobCard } from '@/components/shared/JobCard';
import { Search } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Board | Work in Europe',
  description: 'Browse verified job openings in Europe. Work permits and visa assistance included.',
};

export const dynamic = 'force-dynamic';

const countries = ['Romania', 'Poland', 'Croatia', 'Hungary', 'Malta'];
const categories = ['hospitality', 'construction', 'logistics', 'agriculture', 'healthcare', 'it'];

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string; category?: string; visa?: string; q?: string }>;
}) {
  const params = await searchParams;

  let query = supabaseAdmin.from('jobs').select('*').eq('is_active', true).order('is_featured', { ascending: false }).order('created_at', { ascending: false });

  if (params.country) query = query.eq('country', params.country);
  if (params.category) query = query.eq('category', params.category);
  if (params.visa) query = query.eq('visa_type', params.visa);
  if (params.q) query = query.ilike('title', `%${params.q}%`);

  const { data: jobs } = await query;

  // Map DB shape to Job type for JobCard
  const mapped = (jobs ?? []).map(j => ({
    id: j.id,
    slug: j.slug,
    title: j.title,
    country: j.country,
    countryCode: j.country_code,
    visaType: j.visa_type,
    category: j.category,
    salary: { min: j.salary_min, max: j.salary_max, currency: j.salary_currency, period: j.salary_period },
    description: j.description,
    requirements: j.requirements ?? [],
    benefits: j.benefits ?? [],
    company: { id: 'sanmarina-1', name: 'SANMARINA GLOBAL SOLUTIONS', logo: '/sanmarina_global_logo.png', industry: 'Recruitment & Staffing', size: 'enterprise' as const, description: 'Licensed international recruitment agency.', website: 'https://sanmarinaglobal.eu', verified: true, country: j.country, countryCode: j.country_code },
    postedAt: j.created_at,
    expiresAt: j.expires_at,
    isFeatured: j.is_featured,
    applicationCount: 0,
  }));

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB', paddingTop: '146px' }}>
      {/* Header */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '40px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0B1628', marginBottom: '8px', letterSpacing: '-0.03em' }}>
            Available Jobs in Europe
          </h1>
          <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '560px' }}>
            Verified openings with work permits, free accommodation and meals included.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 1.5rem' }}>
        {/* Filters */}
        <div style={{ background: '#fff', border: '1.5px solid #E5E7EB', borderRadius: '14px', padding: '16px 20px', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '4px' }}>Country:</span>
          <Link href="/jobs" style={{ padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, background: !params.country ? '#0B1628' : '#F3F4F6', color: !params.country ? '#fff' : '#374151', textDecoration: 'none' }}>All</Link>
          {countries.map(c => (
            <Link key={c} href={`/jobs?country=${c}${params.category ? `&category=${params.category}` : ''}`} style={{ padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, background: params.country === c ? '#CC2229' : '#F3F4F6', color: params.country === c ? '#fff' : '#374151', textDecoration: 'none' }}>
              {c}
            </Link>
          ))}

          <span style={{ fontSize: '12px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginLeft: '8px', marginRight: '4px' }}>Category:</span>
          {categories.map(c => (
            <Link key={c} href={`/jobs?category=${c}${params.country ? `&country=${params.country}` : ''}`} style={{ padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, textTransform: 'capitalize', background: params.category === c ? '#2563EB' : '#F3F4F6', color: params.category === c ? '#fff' : '#374151', textDecoration: 'none' }}>
              {c}
            </Link>
          ))}
        </div>

        {/* Count */}
        <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '20px' }}>
          Showing <strong style={{ color: '#0B1628' }}>{mapped.length}</strong> jobs
          {params.q && <> for "<strong>{params.q}</strong>"</>}
        </p>

        {/* Grid */}
        {mapped.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
            {mapped.map(job => <JobCard key={job.id} job={job} />)}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <Search size={48} color="#D1D5DB" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontWeight: 700, color: '#0B1628', marginBottom: '8px' }}>No jobs found</h3>
            <p style={{ color: '#6B7280' }}>Try adjusting your filters or <Link href="/jobs" style={{ color: '#CC2229', fontWeight: 600 }}>clear all</Link>.</p>
          </div>
        )}
      </div>
    </div>
  );
}
