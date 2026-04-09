'use server';

import { supabaseAdmin } from '@/lib/supabase';

export async function trackView(slug: string) {
  try {
    await supabaseAdmin.rpc('increment_job_views', { job_slug: slug });
  } catch {
    // silent — tracking should never break the page
  }
}

export async function trackApplyClick(slug: string) {
  try {
    await supabaseAdmin.rpc('increment_apply_clicks', { job_slug: slug });
  } catch {
    // silent
  }
}

export async function getJobStats(slug: string): Promise<{ views: number; apply_clicks: number }> {
  try {
    const { data } = await supabaseAdmin
      .from('job_stats')
      .select('views, apply_clicks')
      .eq('slug', slug)
      .single();
    return data ?? { views: 0, apply_clicks: 0 };
  } catch {
    return { views: 0, apply_clicks: 0 };
  }
}
