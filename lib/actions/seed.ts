'use server';

import { supabaseAdmin } from '@/lib/supabase';
import { mockJobs } from '@/lib/data/jobs';

export async function seedJobs() {
  const rows = mockJobs.map((j) => ({
    slug: j.slug,
    title: j.title,
    country: j.country,
    country_code: j.countryCode,
    visa_type: j.visaType,
    category: j.category,
    salary_min: j.salary.min,
    salary_max: j.salary.max,
    salary_currency: j.salary.currency,
    salary_period: j.salary.period,
    description: j.description,
    requirements: j.requirements,
    benefits: j.benefits,
    is_featured: j.isFeatured,
    is_active: true,
    expires_at: j.expiresAt,
  }));

  const { error } = await supabaseAdmin
    .from('jobs')
    .upsert(rows, { onConflict: 'slug' });

  if (error) console.error('Seed error:', error.message);
}
