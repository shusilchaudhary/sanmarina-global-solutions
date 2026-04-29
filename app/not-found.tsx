import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(124,58,237,0.08), transparent 70%)' }} />

      <div className="relative z-10 text-center px-6 max-w-lg">
        <p style={{ fontSize: '120px', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.05em', background: 'linear-gradient(135deg, #7C3AED, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          404
        </p>
        <h1 style={{ color: '#f4f4f5', fontSize: '28px', fontWeight: 700, marginTop: '8px', marginBottom: '12px' }}>
          Page Not Found
        </h1>
        <p style={{ color: '#71717a', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #8B5CF6)', color: '#ffffff', boxShadow: '0 4px 16px rgba(139,92,246,0.3)' }}
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
            style={{ color: '#a1a1aa', border: '1px solid #27272a' }}
          >
            <ArrowLeft size={16} /> Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
