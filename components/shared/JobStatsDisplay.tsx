'use client';

import { useEffect, useState } from 'react';
import { getJobStats } from '@/lib/actions/jobStats';
import { Eye, MousePointerClick } from 'lucide-react';

export function JobStatsDisplay({ slug }: { slug: string }) {
  const [stats, setStats] = useState<{ views: number; apply_clicks: number } | null>(null);

  useEffect(() => {
    getJobStats(slug).then(setStats);
  }, [slug]);

  if (!stats) return null;

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        fontSize: '12px', fontWeight: 600, color: '#6B7280',
      }}>
        <Eye size={13} />
        {stats.views.toLocaleString()} views
      </span>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        fontSize: '12px', fontWeight: 600, color: '#6B7280',
      }}>
        <MousePointerClick size={13} />
        {stats.apply_clicks.toLocaleString()} applied
      </span>
    </div>
  );
}
