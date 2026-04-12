import { getProfile } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';
import { createJob } from '@/lib/actions/adminJobs';
import Link from 'next/link';

export default async function PostJobPage() {
  const profile = await getProfile();
  if (!profile || profile.role !== 'employer') redirect('/auth/login');

  async function postJob(formData: FormData) {
    'use server';
    formData.set('employer_id', profile!.id);
    await createJob(formData);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB', padding: '32px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link href="/dashboard/employer" style={{ fontSize: '13px', color: '#6B7280', textDecoration: 'none' }}>← Back to Dashboard</Link>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '26px', fontWeight: 800, color: '#0B1628', marginTop: '8px' }}>Post a New Job</h1>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>Fill in the job details to start receiving applications.</p>
        </div>

        <form action={postJob} style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #F3F4F6', padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <Field label="Job Title" name="title" placeholder="e.g. Cook" required />
            <Field label="Category" name="category" type="select" options={['hospitality','construction','logistics','agriculture','healthcare','it']} required />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <Field label="Country" name="country" placeholder="e.g. Romania" required />
            <Field label="Country Code" name="country_code" placeholder="e.g. RO" required />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
            <Field label="Min Salary (USD)" name="salary_min" type="number" placeholder="700" required />
            <Field label="Max Salary (USD)" name="salary_max" type="number" placeholder="900" required />
            <Field label="Visa Type" name="visa_type" type="select" options={['work-permit','blue-card','seasonal','skilled-worker']} required />
          </div>
          <Field label="Job Description" name="description" type="textarea" placeholder="Describe the role, responsibilities..." required />
          <Field label="Requirements (one per line)" name="requirements" type="textarea" placeholder={"Physical fitness\nValid passport\nTeam player"} required />
          <Field label="Benefits (one per line)" name="benefits" type="textarea" placeholder={"Free Accommodation\nFree Meals\nWork Permit"} required />

          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600, color: '#374151', cursor: 'pointer' }}>
            <input type="checkbox" name="is_featured" style={{ width: '16px', height: '16px' }} />
            Mark as Featured Job
          </label>

          <div style={{ display: 'flex', gap: '12px', paddingTop: '4px' }}>
            <button type="submit" style={{ padding: '13px 28px', background: '#CC2229', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
              Publish Job
            </button>
            <Link href="/dashboard/employer" style={{ padding: '13px 22px', background: '#F3F4F6', color: '#374151', borderRadius: '10px', fontWeight: 600, fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = 'text', placeholder, options, required }: { label: string; name: string; type?: string; placeholder?: string; options?: string[]; required?: boolean }) {
  const s: React.CSSProperties = { width: '100%', padding: '10px 13px', border: '1.5px solid #E5E7EB', borderRadius: '8px', fontSize: '14px', color: '#111827', background: '#FAFAFA', outline: 'none', boxSizing: 'border-box' };
  return (
    <div>
      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#374151', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</label>
      {type === 'textarea' ? <textarea name={name} placeholder={placeholder} required={required} rows={4} style={{ ...s, resize: 'vertical' }} />
       : type === 'select' ? <select name={name} required={required} style={s}>{options?.map(o => <option key={o} value={o}>{o}</option>)}</select>
       : <input type={type} name={name} placeholder={placeholder} required={required} style={s} />}
    </div>
  );
}
