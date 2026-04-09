'use client';

import { useEffect } from 'react';
import { trackView } from '@/lib/actions/jobStats';

export function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    trackView(slug);
  }, [slug]);
  return null;
}
