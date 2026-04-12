'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn } from '@/lib/actions/auth';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const result = await signIn(new FormData(e.currentTarget));
    if (result?.error) { setError(result.error); setLoading(false); }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#F9FAFB' }}>
      {/* Left panel */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 32px' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <Link href="/" style={{ display: 'inline-block', marginBottom: '32px' }}>
            <Image src="/sanmarina_global_logo.png" alt="SanMarina" width={180} height={48} style={{ height: '44px', width: 'auto' }} />
          </Link>

          <h1 style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif', fontSize: '28px', fontWeight: 800, color: '#0B1628', marginBottom: '6px' }}>
            Welcome back
          </h1>
          <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '32px' }}>
            Sign in to your account to continue.
          </p>

          {error && (
            <div style={{ padding: '12px 16px', background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '10px', color: '#CC2229', fontSize: '14px', fontWeight: 500, marginBottom: '20px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input name="email" type="email" required placeholder="you@example.com" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Password</label>
              <div style={{ position: 'relative' }}>
                <input name="password" type={showPass ? 'text' : 'password'} required placeholder="••••••••" style={{ ...inputStyle, paddingRight: '44px' }} />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}>
                  {showPass ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading} style={btnStyle}>
              {loading ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : 'Sign In'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#6B7280' }}>
            Don&apos;t have an account?{' '}
            <Link href="/auth/register" style={{ color: '#CC2229', fontWeight: 700, textDecoration: 'none' }}>Create one free</Link>
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="hidden lg:flex" style={{ flex: 1, position: 'relative', background: '#0B1628', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(204,34,41,0.15) 0%, transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '400px' }}>
          <div style={{ fontSize: '48px', marginBottom: '24px' }}>🌍</div>
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Asia to Europe.<br />Your Career Awaits.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.7 }}>
            Join thousands of professionals who found their dream jobs in Europe through SanMarina Global Solutions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px', flexWrap: 'wrap' }}>
            {[['1,000+', 'Placements'], ['15+', 'Countries'], ['98%', 'Visa Success']].map(([v, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#CC2229' }}>{v}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: 'block', fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' };
const inputStyle: React.CSSProperties = { width: '100%', padding: '11px 14px', border: '1.5px solid #E5E7EB', borderRadius: '10px', fontSize: '14px', color: '#111827', background: '#fff', outline: 'none', boxSizing: 'border-box' };
const btnStyle: React.CSSProperties = { width: '100%', padding: '13px', background: 'linear-gradient(135deg, #CC2229, #a81b21)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' };
