import { supabaseAdmin } from '@/lib/supabase';
import { Users, Briefcase, User, Shield } from 'lucide-react';
import ChangeRoleButton from './ChangeRoleButton';

export default async function AdminUsersPage() {
  const { data: users } = await supabaseAdmin
    .from('profiles')
    .select('id, full_name, email, role, created_at, phone')
    .order('created_at', { ascending: false });

  const counts = {
    total:     users?.length ?? 0,
    jobseeker: users?.filter(u => u.role === 'jobseeker').length ?? 0,
    employer:  users?.filter(u => u.role === 'employer').length ?? 0,
    admin:     users?.filter(u => u.role === 'admin').length ?? 0,
  };

  const roleStyle: Record<string, { bg: string; color: string }> = {
    admin:     { bg: '#FFF1F2', color: '#CC2229' },
    employer:  { bg: '#EFF6FF', color: '#2563EB' },
    jobseeker: { bg: '#F0FDF4', color: '#16A34A' },
  };

  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '26px', fontWeight: 800, color: '#0B1628' }}>Users</h1>
        <p style={{ color: '#6B7280', fontSize: '14px' }}>{counts.total} registered accounts</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '28px' }}>
        {[
          { label: 'Total Users',   value: counts.total,     icon: Users,    color: '#6B7280', bg: '#F3F4F6' },
          { label: 'Job Seekers',   value: counts.jobseeker, icon: User,     color: '#16A34A', bg: '#F0FDF4' },
          { label: 'Employers',     value: counts.employer,  icon: Briefcase,color: '#2563EB', bg: '#EFF6FF' },
          { label: 'Admins',        value: counts.admin,     icon: Shield,   color: '#CC2229', bg: '#FFF1F2' },
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} style={{ background: '#fff', border: '1.5px solid #F3F4F6', borderRadius: '14px', padding: '18px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
              <Icon size={16} color={color} />
            </div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#0B1628', fontFamily: 'var(--font-outfit)' }}>{value}</div>
            <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '2px' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Users table */}
      <div style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #F3F4F6', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F9FAFB', borderBottom: '1px solid #F3F4F6' }}>
              {['User', 'Email', 'Phone', 'Role', 'Joined', 'Actions'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => {
              const rs = roleStyle[user.role] ?? { bg: '#F3F4F6', color: '#6B7280' };
              return (
                <tr key={user.id} style={{ borderBottom: i < (users.length - 1) ? '1px solid #F9FAFB' : 'none' }}>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, color: '#6B7280', flexShrink: 0 }}>
                        {user.full_name?.[0]?.toUpperCase() ?? '?'}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '14px', color: '#0B1628' }}>{user.full_name ?? '—'}</div>
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6B7280' }}>{user.email}</td>
                  <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6B7280' }}>{user.phone ?? '—'}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, background: rs.bg, color: rs.color, textTransform: 'capitalize' }}>
                      {user.role}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6B7280' }}>
                    {new Date(user.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <ChangeRoleButton userId={user.id} currentRole={user.role} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
