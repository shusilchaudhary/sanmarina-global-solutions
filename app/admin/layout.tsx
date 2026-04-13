import { redirect } from 'next/navigation';
import { getProfile } from '@/lib/supabase-server';
import AdminSidebar from './AdminSidebar';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const profile = await getProfile();

  if (!profile) redirect('/auth/login');
  if (profile.role !== 'admin') redirect('/');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F9FAFB' }}>
      <AdminSidebar adminName={profile.full_name ?? profile.email ?? 'Admin'} />
      <main style={{ marginLeft: '240px', flex: 1, padding: '32px', minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  );
}
