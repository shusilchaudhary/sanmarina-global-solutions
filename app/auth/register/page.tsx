'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signUp } from '@/lib/actions/auth';
import { Building2, User, Loader2, CheckCircle } from 'lucide-react';

export default function RegisterPage() {
  const [role, setRole] = useState<'jobseeker' | 'employer'>('jobseeker');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const fd = new FormData(e.currentTarget);
    fd.set('role', role);
    const result = await signUp(fd);
    if (result?.error) { setError(result.error); setLoading(false); }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#F9FAFB' }}>
      {/* Left panel */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 32px', overflowY: 'auto' }}>
        <div style={{ width: '100%', maxWidth: '460px' }}>
          <Link href="/" style={{ display: 'inline-block', marginBottom: '28px' }}>
            <Image src="/sanmarina_global_logo.png" alt="SanMarina" width={180} height={48} style={{ height: '44px', width: 'auto' }} />
          </Link>

          <h1 style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif', fontSize: '26px', fontWeight: 800, color: '#0B1628', marginBottom: '6px' }}>
            Create your free account
          </h1>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px' }}>
            Join SanMarina Global — zero fees for job seekers.
          </p>

          {/* Role selector */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            {([
              { key: 'jobseeker', icon: User, label: 'Job Seeker', desc: 'Find jobs in Europe' },
              { key: 'employer', icon: Building2, label: 'Employer', desc: 'Post jobs & hire talent' },
            ] as const).map(({ key, icon: Icon, label, desc }) => (
              <button key={key} type="button" onClick={() => setRole(key)} style={{
                padding: '16px', borderRadius: '12px', border: `2px solid ${role === key ? '#CC2229' : '#E5E7EB'}`,
                background: role === key ? '#FFF1F2' : '#fff',
                cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
              }}>
                <Icon size={20} color={role === key ? '#CC2229' : '#6B7280'} style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '14px', fontWeight: 700, color: role === key ? '#CC2229' : '#0B1628' }}>{label}</div>
                <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>{desc}</div>
              </button>
            ))}
          </div>

          {error && (
            <div style={{ padding: '12px 16px', background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '10px', color: '#CC2229', fontSize: '14px', marginBottom: '16px' }}>
              {error}
            </div>
          )}

          <form key={role} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <Field label="Full Name" name="full_name" placeholder="John Doe" required />
              <Field label="Phone" name="phone" placeholder="+977 ..." type="tel" />
            </div>

            {role === 'employer' && (
              <Field label="Company Name" name="company_name" placeholder="Acme Corp" required />
            )}

            <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            <Field label="Password" name="password" type="password" placeholder="Min 8 characters" required />

            <button type="submit" disabled={loading} style={{
              width: '100%', padding: '13px', marginTop: '4px',
              background: 'linear-gradient(135deg, #CC2229, #a81b21)',
              color: '#fff', border: 'none', borderRadius: '10px',
              fontSize: '15px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              opacity: loading ? 0.8 : 1,
            }}>
              {loading ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : `Create ${role === 'employer' ? 'Employer' : 'Job Seeker'} Account`}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#6B7280' }}>
            Already have an account?{' '}
            <Link href="/auth/login" style={{ color: '#CC2229', fontWeight: 700, textDecoration: 'none' }}>Sign in</Link>
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="hidden lg:flex" style={{ flex: 1, background: '#0B1628', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 50%, rgba(37,99,235,0.12) 0%, transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '380px' }}>
          <div style={{ fontSize: '42px', marginBottom: '24px' }}>✨</div>
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '26px', fontWeight: 800, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Everything you need to{' '}
            <span style={{ color: '#CC2229' }}>succeed globally</span>
          </h2>
          {[
            'Zero fees for job seekers — always',
            'Verified employers across 15+ countries',
            'Work permits & visa support included',
            'Free accommodation & meals for most roles',
            'Dedicated support from application to arrival',
          ].map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <CheckCircle size={16} color="#CC2229" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = 'text', placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#374151', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</label>
      <input name={name} type={type} placeholder={placeholder} required={required}
        style={{ width: '100%', padding: '10px 13px', border: '1.5px solid #E5E7EB', borderRadius: '9px', fontSize: '14px', color: '#111827', background: '#fff', outline: 'none', boxSizing: 'border-box' as const }} />
    </div>
  );
}
