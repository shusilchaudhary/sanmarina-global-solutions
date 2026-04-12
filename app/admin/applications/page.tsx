import { supabaseAdmin } from '@/lib/supabase';

export default async function ApplicationsPage() {
  const { data: apps } = await supabaseAdmin
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif', fontSize: '26px', fontWeight: 800, color: '#0B1628' }}>
          Applications
        </h1>
        <p style={{ color: '#6B7280', fontSize: '14px' }}>{apps?.length ?? 0} total applications received</p>
      </div>

      {(!apps || apps.length === 0) ? (
        <div style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #F3F4F6', padding: '60px', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>📭</div>
          <div style={{ fontWeight: 700, color: '#0B1628', marginBottom: '4px' }}>No applications yet</div>
          <div style={{ color: '#6B7280', fontSize: '14px' }}>Applications will appear here once candidates apply.</div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {apps.map(app => (
            <div key={app.id} style={{ background: '#fff', borderRadius: '14px', border: '1.5px solid #F3F4F6', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: '#0B1628' }}>{app.full_name}</div>
                <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '3px' }}>
                  {app.email} · {app.phone}
                </div>
                <div style={{ fontSize: '12px', color: '#CC2229', marginTop: '4px', fontWeight: 600 }}>
                  Applied for: {app.job_title}
                </div>
                {app.cover_letter && (
                  <div style={{ fontSize: '13px', color: '#374151', marginTop: '8px', maxWidth: '500px', lineHeight: 1.5 }}>
                    {app.cover_letter.slice(0, 120)}{app.cover_letter.length > 120 ? '...' : ''}
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                <span style={{
                  padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 700,
                  background: app.status === 'pending' ? '#FFFBEB' : '#F0FDF4',
                  color: app.status === 'pending' ? '#92400E' : '#16A34A',
                }}>
                  {app.status}
                </span>
                {app.resume_url && (
                  <a href={app.resume_url} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: '12px', fontWeight: 700, color: '#2563EB', textDecoration: 'none',
                  }}>
                    📄 View CV
                  </a>
                )}
                <div style={{ fontSize: '11px', color: '#9CA3AF' }}>
                  {new Date(app.created_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
