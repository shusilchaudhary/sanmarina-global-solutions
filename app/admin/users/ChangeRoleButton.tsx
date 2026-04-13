'use client';

import { useState } from 'react';
import { changeUserRole } from '@/lib/actions/adminUsers';

const ROLES = ['jobseeker', 'employer', 'admin'];

export default function ChangeRoleButton({ userId, currentRole }: { userId: string; currentRole: string }) {
  const [role, setRole]       = useState(currentRole);
  const [saving, setSaving]   = useState(false);
  const [changed, setChanged] = useState(false);

  async function handleChange(newRole: string) {
    if (newRole === role) return;
    if (!confirm(`Change role to "${newRole}"?`)) return;
    setSaving(true);
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('role', newRole);
    await changeUserRole(formData);
    setRole(newRole);
    setChanged(true);
    setSaving(false);
    setTimeout(() => setChanged(false), 2000);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <select
        value={role}
        onChange={e => handleChange(e.target.value)}
        disabled={saving}
        style={{
          padding: '5px 10px', borderRadius: '7px', fontSize: '12px', fontWeight: 600,
          border: '1.5px solid #E5E7EB', background: '#fff', color: '#374151',
          cursor: saving ? 'not-allowed' : 'pointer', outline: 'none',
        }}
      >
        {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
      </select>
      {changed && <span style={{ fontSize: '11px', color: '#16A34A', fontWeight: 700 }}>✓ Saved</span>}
      {saving && <span style={{ fontSize: '11px', color: '#9CA3AF' }}>…</span>}
    </div>
  );
}
