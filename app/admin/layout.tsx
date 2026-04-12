'use client';

import Link from 'next/link';
import { Briefcase, Users, LayoutDashboard, Plus } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F9FAFB' }}>
      {/* Sidebar */}
      <aside style={{
        width: '240px', flexShrink: 0,
        background: '#0B1628', color: '#fff',
        display: 'flex', flexDirection: 'column',
        position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 50,
      }}>
        <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#CC2229', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            SanMarina
          </div>
          <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>Admin Dashboard</div>
        </div>

        <nav style={{ padding: '16px 12px', flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[
            { href: '/admin', icon: LayoutDashboard, label: 'Overview' },
            { href: '/admin/jobs', icon: Briefcase, label: 'Jobs' },
            { href: '/admin/jobs/new', icon: Plus, label: 'Add Job' },
            { href: '/admin/applications', icon: Users, label: 'Applications' },
          ].map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 12px', borderRadius: '8px',
              fontSize: '14px', fontWeight: 500, color: '#9CA3AF',
              textDecoration: 'none', transition: 'all 0.15s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.color = '#fff';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = '#9CA3AF';
              }}
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/" style={{ fontSize: '12px', color: '#6B7280', textDecoration: 'none' }}>
            ← Back to Site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ marginLeft: '240px', flex: 1, padding: '32px' }}>
        {children}
      </main>
    </div>
  );
}
