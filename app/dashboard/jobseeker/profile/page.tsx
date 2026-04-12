'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft, Save, Loader2, CheckCircle, Camera,
  Upload, FileText, Trash2, Globe, DollarSign,
} from 'lucide-react';
import { createBrowserClient } from '@supabase/ssr';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const COUNTRIES = [
  'Nepal', 'India', 'Bangladesh', 'Philippines', 'Sri Lanka',
  'Pakistan', 'Nigeria', 'Kenya', 'Ghana', 'Morocco',
  'Romania', 'Moldova', 'Ukraine', 'Other',
];
const NATIONALITIES = [
  'Nepali', 'Indian', 'Bangladeshi', 'Filipino', 'Sri Lankan',
  'Pakistani', 'Nigerian', 'Kenyan', 'Ghanaian', 'Moroccan',
  'Romanian', 'Moldovan', 'Ukrainian', 'Other',
];
const SKILL_OPTIONS = [
  'Cooking', 'Baking', 'Welding', 'Electrical', 'Plumbing',
  'Carpentry', 'IT Support', 'JavaScript', 'Python', 'React',
  'Node.js', 'Accounting', 'Driving (HGV)', 'Nursing',
  'Hospitality', 'Construction', 'Agriculture', 'Cleaning',
  'Security', 'Warehouse', 'Forklift', 'Customer Service',
];
const WORK_TYPES = [
  { value: 'fulltime',  label: 'Full-time' },
  { value: 'parttime',  label: 'Part-time' },
  { value: 'contract',  label: 'Contract' },
  { value: 'remote',    label: 'Remote' },
  { value: 'seasonal',  label: 'Seasonal' },
];
const AVAILABILITY_OPTIONS = [
  { value: 'immediate', label: 'Immediately' },
  { value: '2weeks',    label: 'In 2 weeks' },
  { value: '1month',    label: 'In 1 month' },
  { value: '3months',   label: 'In 3 months' },
];
const CURRENCIES = ['EUR', 'GBP', 'USD', 'RON'];

export default function JobSeekerProfilePage() {
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const cvInputRef     = useRef<HTMLInputElement>(null);

  const [userId,    setUserId]    = useState('');
  const [loading,   setLoading]   = useState(true);
  const [saving,    setSaving]    = useState(false);
  const [saved,     setSaved]     = useState(false);
  const [error,     setError]     = useState('');

  // Avatar / CV state
  const [avatarUrl,   setAvatarUrl]   = useState('');
  const [avatarFile,  setAvatarFile]  = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [cvUrl,       setCvUrl]       = useState('');
  const [cvFilename,  setCvFilename]  = useState('');
  const [cvFile,      setCvFile]      = useState<File | null>(null);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [uploadingCv,     setUploadingCv]     = useState(false);

  // Personal info
  const [fullName,       setFullName]       = useState('');
  const [headline,       setHeadline]       = useState('');
  const [bio,            setBio]            = useState('');
  const [currentCountry, setCurrentCountry] = useState('');
  const [nationality,    setNationality]    = useState('');
  const [dateOfBirth,    setDateOfBirth]    = useState('');
  const [gender,         setGender]         = useState('');

  // Skills & experience
  const [skills,       setSkills]       = useState<string[]>([]);
  const [experience,   setExperience]   = useState('');
  const [languages,    setLanguages]    = useState('');
  const [workType,     setWorkType]     = useState<string[]>([]);
  const [availability, setAvailability] = useState('immediate');

  // Rate
  const [rateMin,      setRateMin]      = useState('');
  const [rateMax,      setRateMax]      = useState('');
  const [rateCurrency, setRateCurrency] = useState('EUR');

  // Links
  const [linkedinUrl,  setLinkedinUrl]  = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [isPublic,     setIsPublic]     = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { window.location.href = '/auth/login'; return; }
      setUserId(user.id);

      const { data: profile } = await supabase.from('profiles').select('full_name, email').eq('id', user.id).single();
      const { data: jp } = await supabase.from('jobseeker_profiles').select('*').eq('id', user.id).single();

      setFullName(profile?.full_name ?? '');
      if (jp) {
        setHeadline(jp.headline ?? '');
        setBio(jp.bio ?? '');
        setCurrentCountry(jp.current_country ?? '');
        setNationality(jp.nationality ?? '');
        setDateOfBirth(jp.date_of_birth ?? '');
        setGender(jp.gender ?? '');
        setSkills(jp.skills ?? []);
        setExperience(jp.experience_years?.toString() ?? '');
        setLanguages((jp.languages ?? []).join(', '));
        setWorkType(jp.work_type ?? []);
        setAvailability(jp.availability ?? 'immediate');
        setRateMin(jp.hourly_rate_min?.toString() ?? '');
        setRateMax(jp.hourly_rate_max?.toString() ?? '');
        setRateCurrency(jp.rate_currency ?? 'EUR');
        setLinkedinUrl(jp.linkedin_url ?? '');
        setPortfolioUrl(jp.portfolio_url ?? '');
        setAvatarUrl(jp.avatar_url ?? '');
        setCvUrl(jp.cv_url ?? '');
        setCvFilename(jp.cv_filename ?? '');
        setIsPublic(jp.is_public ?? true);
      }
      setLoading(false);
    }
    load();
  }, []);

  // ── Avatar upload ──
  async function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { setError('Avatar must be under 5 MB'); return; }
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  }

  async function uploadAvatar(): Promise<string | null> {
    if (!avatarFile || !userId) return avatarUrl;
    setUploadingAvatar(true);
    const ext  = avatarFile.name.split('.').pop();
    const path = `${userId}/avatar.${ext}`;
    const { error: upErr } = await supabase.storage.from('avatars').upload(path, avatarFile, { upsert: true });
    setUploadingAvatar(false);
    if (upErr) { setError('Avatar upload failed: ' + upErr.message); return null; }
    const { data } = supabase.storage.from('avatars').getPublicUrl(path);
    return data.publicUrl;
  }

  // ── CV upload ──
  async function handleCvChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) { setError('CV must be under 10 MB'); return; }
    setCvFile(file);
    setCvFilename(file.name);
  }

  async function uploadCv(): Promise<{ url: string; name: string } | null> {
    if (!cvFile || !userId) return cvUrl ? { url: cvUrl, name: cvFilename } : null;
    setUploadingCv(true);
    const ext  = cvFile.name.split('.').pop();
    const path = `${userId}/cv.${ext}`;
    const { error: upErr } = await supabase.storage.from('cvs').upload(path, cvFile, { upsert: true });
    setUploadingCv(false);
    if (upErr) { setError('CV upload failed: ' + upErr.message); return null; }
    const { data } = supabase.storage.from('cvs').getPublicUrl(path);
    return { url: data.publicUrl, name: cvFile.name };
  }

  // ── Save ──
  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSaved(false);

    const newAvatarUrl = await uploadAvatar();
    if (newAvatarUrl === null) { setSaving(false); return; }

    const cvResult = await uploadCv();
    if (cvResult === null && cvFile) { setSaving(false); return; }

    const langArray = languages.split(',').map(l => l.trim()).filter(Boolean);

    await supabase.from('profiles').update({ full_name: fullName }).eq('id', userId);

    const { error: err } = await supabase.from('jobseeker_profiles').update({
      headline,
      bio,
      current_country:  currentCountry,
      nationality,
      date_of_birth:    dateOfBirth || null,
      gender,
      skills,
      experience_years: experience ? parseInt(experience) : null,
      languages:        langArray,
      work_type:        workType,
      availability,
      hourly_rate_min:  rateMin ? parseInt(rateMin) : null,
      hourly_rate_max:  rateMax ? parseInt(rateMax) : null,
      rate_currency:    rateCurrency,
      linkedin_url:     linkedinUrl,
      portfolio_url:    portfolioUrl,
      avatar_url:       newAvatarUrl || avatarUrl,
      cv_url:           cvResult?.url ?? cvUrl,
      cv_filename:      cvResult?.name ?? cvFilename,
      is_public:        isPublic,
    }).eq('id', userId);

    if (err) setError(err.message);
    else {
      setSaved(true);
      if (newAvatarUrl) setAvatarUrl(newAvatarUrl);
      if (cvResult) { setCvUrl(cvResult.url); setCvFilename(cvResult.name); }
      setAvatarFile(null);
      setCvFile(null);
    }
    setSaving(false);
  }

  function toggleSkill(skill: string) {
    setSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  }
  function toggleWorkType(wt: string) {
    setWorkType(prev => prev.includes(wt) ? prev.filter(w => w !== wt) : [...prev, wt]);
  }

  const displayAvatar = avatarPreview || avatarUrl;

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F9FAFB' }}>
      <Loader2 size={28} color="#CC2229" style={{ animation: 'spin 1s linear infinite' }} />
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/" style={{ fontSize: '16px', fontWeight: 800, color: '#CC2229', textDecoration: 'none' }}>SanMarina</Link>
          <span style={{ color: '#E5E7EB' }}>|</span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#6B7280' }}>Edit Profile</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Public toggle */}
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: '#6B7280', fontWeight: 600 }}>
            <div onClick={() => setIsPublic(p => !p)} style={{
              width: '40px', height: '22px', borderRadius: '999px', position: 'relative', cursor: 'pointer',
              background: isPublic ? '#CC2229' : '#D1D5DB', transition: 'background 0.2s',
            }}>
              <div style={{
                position: 'absolute', top: '3px', left: isPublic ? '21px' : '3px',
                width: '16px', height: '16px', borderRadius: '50%', background: '#fff',
                transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }} />
            </div>
            <Globe size={13} /> {isPublic ? 'Public profile' : 'Private'}
          </label>
          <Link href="/dashboard/jobseeker" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#6B7280', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Dashboard
          </Link>
        </div>
      </header>

      <form onSubmit={handleSave}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {error && <div style={{ padding: '12px 16px', background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '10px', color: '#CC2229', fontSize: '14px' }}>{error}</div>}
          {saved && (
            <div style={{ padding: '12px 16px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '10px', color: '#16A34A', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={15} /> Profile saved successfully!
            </div>
          )}

          {/* ── Avatar + Name card ── */}
          <div style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '16px', padding: '28px', display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
            {/* Avatar */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{
                width: '96px', height: '96px', borderRadius: '50%',
                background: displayAvatar ? 'transparent' : '#F3F4F6',
                border: '3px solid #E5E7EB', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {displayAvatar ? (
                  <Image src={displayAvatar} alt="Avatar" width={96} height={96} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized />
                ) : (
                  <Camera size={28} color="#9CA3AF" />
                )}
              </div>
              <button type="button" onClick={() => avatarInputRef.current?.click()}
                style={{ position: 'absolute', bottom: 0, right: 0, width: '28px', height: '28px', borderRadius: '50%', background: '#CC2229', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Camera size={12} color="#fff" />
              </button>
              <input ref={avatarInputRef} type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
            </div>

            <div style={{ flex: 1, minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Field label="Full Name" value={fullName} onChange={setFullName} placeholder="Your full name" />
              <Field label="Professional Headline" value={headline} onChange={setHeadline} placeholder="e.g. Experienced Chef | 5+ years in EU restaurants" />
            </div>

            {uploadingAvatar && <span style={{ fontSize: '12px', color: '#6B7280' }}>Uploading photo…</span>}
          </div>

          {/* ── Personal Info ── */}
          <Section title="Personal Information">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <SelectField label="Current Country" value={currentCountry} onChange={setCurrentCountry} options={COUNTRIES} />
              <SelectField label="Nationality" value={nationality} onChange={setNationality} options={NATIONALITIES} />
              <Field label="Date of Birth" value={dateOfBirth} onChange={setDateOfBirth} type="date" />
              <SelectField label="Gender" value={gender} onChange={setGender} options={['Male', 'Female', 'Prefer not to say']} />
            </div>
            <TextareaField label="About Me" value={bio} onChange={setBio} placeholder="Describe your experience, strengths, and what kind of work you're looking for..." rows={5} />
          </Section>

          {/* ── Salary / Rate ── */}
          <Section title="Expected Salary / Hourly Rate">
            <p style={{ fontSize: '13px', color: '#6B7280', marginTop: '-6px' }}>Enter your expected rate so employers know your range.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 120px', gap: '14px', alignItems: 'end' }}>
              <Field label="Minimum (per hour)" value={rateMin} onChange={setRateMin} placeholder="e.g. 12" type="number" prefix="💶" />
              <Field label="Maximum (per hour)" value={rateMax} onChange={setRateMax} placeholder="e.g. 20" type="number" prefix="💶" />
              <div>
                <label style={labelStyle}>Currency</label>
                <select value={rateCurrency} onChange={e => setRateCurrency(e.target.value)} style={inputStyle as React.CSSProperties}>
                  {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            {rateMin && rateMax && (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '999px', fontSize: '13px', color: '#16A34A', fontWeight: 700 }}>
                <DollarSign size={13} /> {rateCurrency} {rateMin}–{rateMax}/hr
              </div>
            )}
          </Section>

          {/* ── Work Preferences ── */}
          <Section title="Work Preferences">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={labelStyle}>Availability</label>
                <select value={availability} onChange={e => setAvailability(e.target.value)} style={inputStyle as React.CSSProperties}>
                  {AVAILABILITY_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
              <Field label="Years of Experience" value={experience} onChange={setExperience} placeholder="e.g. 5" type="number" />
            </div>
            <div>
              <label style={labelStyle}>Work Type (select all that apply)</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                {WORK_TYPES.map(wt => (
                  <button key={wt.value} type="button" onClick={() => toggleWorkType(wt.value)} style={{
                    padding: '7px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: 600,
                    border: `1.5px solid ${workType.includes(wt.value) ? '#2563EB' : '#E5E7EB'}`,
                    background: workType.includes(wt.value) ? '#EFF6FF' : '#fff',
                    color: workType.includes(wt.value) ? '#2563EB' : '#374151',
                    cursor: 'pointer',
                  }}>{wt.label}</button>
                ))}
              </div>
            </div>
          </Section>

          {/* ── Skills ── */}
          <Section title="Skills">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {SKILL_OPTIONS.map(skill => (
                <button key={skill} type="button" onClick={() => toggleSkill(skill)} style={{
                  padding: '7px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: 600,
                  border: `1.5px solid ${skills.includes(skill) ? '#CC2229' : '#E5E7EB'}`,
                  background: skills.includes(skill) ? '#FFF1F2' : '#fff',
                  color: skills.includes(skill) ? '#CC2229' : '#374151',
                  cursor: 'pointer',
                }}>{skill}</button>
              ))}
            </div>
            {skills.length > 0 && (
              <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>{skills.length} skill{skills.length > 1 ? 's' : ''} selected</p>
            )}
          </Section>

          {/* ── Languages ── */}
          <Section title="Languages">
            <Field label="Languages (comma-separated)" value={languages} onChange={setLanguages} placeholder="e.g. English (Fluent), Romanian (Basic), French (Intermediate)" />
          </Section>

          {/* ── Documents ── */}
          <Section title="Documents">
            {/* CV Upload */}
            <div>
              <label style={labelStyle}>CV / Resume</label>
              {cvUrl && !cvFile ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: '10px' }}>
                  <FileText size={20} color="#16A34A" />
                  <span style={{ flex: 1, fontSize: '14px', fontWeight: 600, color: '#15803D' }}>{cvFilename || 'CV uploaded'}</span>
                  <a href={cvUrl} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', textDecoration: 'none' }}>
                    Download
                  </a>
                  <button type="button" onClick={() => { setCvUrl(''); setCvFilename(''); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', padding: '2px' }}>
                    <Trash2 size={14} />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => cvInputRef.current?.click()}
                  style={{
                    border: '2px dashed #E5E7EB', borderRadius: '10px', padding: '24px',
                    textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.2s',
                    background: cvFile ? '#F0FDF4' : '#FAFAFA',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#CC2229')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#E5E7EB')}
                >
                  <Upload size={24} color={cvFile ? '#16A34A' : '#9CA3AF'} style={{ margin: '0 auto 8px' }} />
                  <p style={{ fontSize: '14px', fontWeight: 600, color: cvFile ? '#15803D' : '#374151', marginBottom: '2px' }}>
                    {cvFile ? cvFile.name : 'Click to upload CV'}
                  </p>
                  <p style={{ fontSize: '12px', color: '#9CA3AF' }}>PDF, DOC, DOCX — max 10 MB</p>
                  <input ref={cvInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleCvChange} style={{ display: 'none' }} />
                </div>
              )}
              {uploadingCv && <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '6px' }}>Uploading CV…</p>}
            </div>
          </Section>

          {/* ── Links ── */}
          <Section title="Links & Portfolio">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <Field label="LinkedIn URL" value={linkedinUrl} onChange={setLinkedinUrl} placeholder="https://linkedin.com/in/yourname" type="url" />
              <Field label="Portfolio / Website" value={portfolioUrl} onChange={setPortfolioUrl} placeholder="https://yourportfolio.com" type="url" />
            </div>
          </Section>

          {/* Save button */}
          <button type="submit" disabled={saving} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            padding: '14px', background: 'linear-gradient(135deg, #CC2229, #a81b21)',
            color: '#fff', border: 'none', borderRadius: '12px',
            fontSize: '15px', fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer',
            opacity: saving ? 0.8 : 1, boxShadow: '0 4px 16px rgba(204,34,41,0.3)',
          }}>
            {saving
              ? <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Saving…</>
              : <><Save size={16} /> Save Profile</>
            }
          </button>

        </div>
      </form>
    </div>
  );
}

// ── Reusable sub-components ──
const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '11px', fontWeight: 700, color: '#374151',
  marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em',
};
const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 13px', border: '1.5px solid #E5E7EB',
  borderRadius: '9px', fontSize: '14px', color: '#111827', background: '#fff',
  outline: 'none', boxSizing: 'border-box',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '16px', padding: '24px 28px' }}>
      <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '15px', fontWeight: 700, color: '#0B1628', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid #F3F4F6' }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>{children}</div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text', prefix }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; prefix?: string;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <div style={{ position: 'relative' }}>
        {prefix && <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px' }}>{prefix}</span>}
        <input value={value} onChange={e => onChange(e.target.value)} type={type} placeholder={placeholder}
          style={{ ...inputStyle, paddingLeft: prefix ? '32px' : '13px' }} />
      </div>
    </div>
  );
}

function SelectField({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)} style={inputStyle}>
        <option value="">Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function TextareaField({ label, value, onChange, placeholder, rows = 4 }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows}
        style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }} />
    </div>
  );
}
