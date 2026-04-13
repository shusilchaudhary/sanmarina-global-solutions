'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Briefcase, Users, LayoutDashboard, Plus,
  BookOpen, LogOut, Globe, FileText, Settings,
} from 'lucide-react';
import { signOut } from '@/lib/actions/auth';

const NAV = [
  { section: 'Main' },
  { href: '/admin',              icon: LayoutDashboard, label: 'Overview'     },
  { section: 'Jobs' },
  { href: '/admin/jobs',         icon: Briefcase,       label: 'All Jobs'     },
  { href: '/admin/jobs/new',     icon: Plus,            label: 'Add Job'      },
  { href: '/admin/applications', icon: FileText,        label: 'Applications' },
  { section: 'Content' },
  { href: '/admin/blog',         icon: BookOpen,        label: 'Blog Posts'   },
  { href: '/admin/blog/new',     icon: Plus,            label: 'New Post'     },
  { section: 'Users' },
  { href: '/admin/users',        icon: Users,           label: 'All Users'    },
];

export default function AdminSidebar({ adminName }: { adminName: string }) {
  const pathname = usePathname();

  return (
    <aside style={{
      width: '240px', flexShrink: 0,
      background: '#0B1628', color: '#fff',
      display: 'flex', flexDirection: 'column',
      position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 50,
    }}>
      {/* Logo */}
      <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontSize: '15px', fontWeight: 800, color: '#CC2229', letterSpacing: '0.05em' }}>
            SanMarina
          </div>
        </Link>
        <div style={{ fontSize: '11px', color: '#4B5563', marginTop: '2px' }}>Admin Panel</div>
      </div>

      {/* Admin badge */}
      <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#CC2229', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, color: '#fff', flexShrink: 0 }}>
          {adminName?.[0]?.toUpperCase() ?? 'A'}
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{adminName}</div>
          <div style={{ fontSize: '10px', color: '#CC2229', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Administrator</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '12px 10px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {NAV.map((item, i) => {
          if ('section' in item) {
            return (
              <div key={i} style={{ fontSize: '10px', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '10px 12px 4px' }}>
                {item.section}
              </div>
            );
          }
          const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '9px 12px', borderRadius: '8px',
              fontSize: '13px', fontWeight: isActive ? 700 : 500,
              color: isActive ? '#fff' : '#6B7280',
              background: isActive ? 'rgba(204,34,41,0.15)' : 'transparent',
              textDecoration: 'none', transition: 'all 0.15s',
              borderLeft: isActive ? '3px solid #CC2229' : '3px solid transparent',
            }}>
              <Icon size={15} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div style={{ padding: '12px 10px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <Link href="/" target="_blank" style={{
          display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px',
          borderRadius: '8px', fontSize: '13px', fontWeight: 500, color: '#6B7280',
          textDecoration: 'none', transition: 'all 0.15s',
        }}>
          <Globe size={15} /> View Site
        </Link>
        <form action={signOut}>
          <button type="submit" style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
            padding: '9px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 600,
            color: '#EF4444', background: 'none', border: 'none', cursor: 'pointer',
            textAlign: 'left', transition: 'all 0.15s',
          }}>
            <LogOut size={15} /> Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
