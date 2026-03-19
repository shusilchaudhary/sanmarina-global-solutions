'use server';

export async function createJob(formData: FormData) {
  const title = formData.get('title') as string;
  const category = formData.get('category') as string;
  const country = formData.get('country') as string;
  const visaType = formData.get('visaType') as string;
  const salaryMin = Number(formData.get('salaryMin'));
  const salaryMax = Number(formData.get('salaryMax'));
  const description = formData.get('description') as string;

  // TODO: Save to database and trigger review workflow
  console.log('Job creation:', { title, category, country, visaType, salaryMin, salaryMax, description });

  return { success: true, message: 'Job submitted for review!' };
}

export async function getFeaturedJobs() {
  // TODO: Replace with actual DB call
  const { mockJobs } = await import('@/public/data/jobs');
  return mockJobs.filter((j) => j.isFeatured).slice(0, 3);
}
