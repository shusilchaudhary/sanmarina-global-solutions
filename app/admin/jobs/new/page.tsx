import { createJob } from '@/lib/actions/adminJobs';

export default function NewJobPage() {
  return (
    <div style={{ maxWidth: '760px' }}>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif', fontSize: '26px', fontWeight: 800, color: '#0B1628' }}>
          Add New Job
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px' }}>Fill in the details to post a new job listing.</p>
      </div>

      <form action={createJob} style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #F3F4F6', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Field label="Job Title" name="title" placeholder="e.g. Cook" required />
          <Field label="Category" name="category" type="select" options={['hospitality','construction','logistics','agriculture','healthcare','it']} required />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Field label="Country" name="country" placeholder="e.g. Romania" required />
          <Field label="Country Code" name="country_code" placeholder="e.g. RO" required />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
          <Field label="Min Salary" name="salary_min" type="number" placeholder="700" required />
          <Field label="Max Salary" name="salary_max" type="number" placeholder="900" required />
          <Field label="Currency" name="salary_currency" placeholder="USD" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Field label="Visa Type" name="visa_type" type="select" options={['work-permit','blue-card','seasonal','skilled-worker']} required />
          <Field label="Salary Period" name="salary_period" type="select" options={['monthly','yearly']} />
        </div>

        <Field label="Job Description" name="description" type="textarea" placeholder="Describe the role..." required />

        <Field label="Requirements (one per line)" name="requirements" type="textarea"
          placeholder={"Physical fitness\nAbility to work in shifts\nValid passport"} required />

        <Field label="Benefits (one per line)" name="benefits" type="textarea"
          placeholder={"Free Accommodation\nFree Meals\nWork Permit"} required />

        <Field label="Expires At" name="expires_at" type="date" />

        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600, color: '#374151', cursor: 'pointer' }}>
          <input type="checkbox" name="is_featured" style={{ width: '16px', height: '16px' }} />
          Mark as Featured
        </label>

        <div style={{ display: 'flex', gap: '12px', paddingTop: '8px' }}>
          <button type="submit" style={{
            padding: '13px 28px', background: '#CC2229', color: '#fff',
            border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '15px', cursor: 'pointer',
          }}>
            Publish Job
          </button>
          <a href="/admin/jobs" style={{
            padding: '13px 24px', background: '#F3F4F6', color: '#374151',
            borderRadius: '10px', fontWeight: 600, fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
          }}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}

function Field({ label, name, type = 'text', placeholder, options, required }: {
  label: string; name: string; type?: string; placeholder?: string; options?: string[]; required?: boolean;
}) {
  const inputStyle = {
    width: '100%', padding: '10px 14px', border: '1.5px solid #E5E7EB',
    borderRadius: '8px', fontSize: '14px', color: '#111827',
    background: '#FAFAFA', outline: 'none', boxSizing: 'border-box' as const,
  };
  return (
    <div>
      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea name={name} placeholder={placeholder} required={required} rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
      ) : type === 'select' ? (
        <select name={name} required={required} style={inputStyle}>
          {options?.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type} name={name} placeholder={placeholder} required={required} style={inputStyle} />
      )}
    </div>
  );
}
