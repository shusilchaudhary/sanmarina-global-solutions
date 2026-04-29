'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(239,68,68,0.06), transparent 70%)' }} />

      <div className="relative z-10 text-center px-6 max-w-lg">
        <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '28px' }}>
          !
        </div>
        <h1 style={{ color: '#f4f4f5', fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
          Something Went Wrong
        </h1>
        <p style={{ color: '#71717a', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
          We encountered an unexpected error. Please try again or contact us if the problem persists.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer border-none transition-all"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #8B5CF6)', color: '#ffffff', boxShadow: '0 4px 16px rgba(139,92,246,0.3)' }}
          >
            <RefreshCw size={16} /> Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
            style={{ color: '#a1a1aa', border: '1px solid #27272a' }}
          >
            <Home size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
