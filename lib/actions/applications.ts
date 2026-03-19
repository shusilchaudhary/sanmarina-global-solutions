'use server';

export async function submitApplication(formData: FormData) {
  const jobId = formData.get('jobId') as string;
  const fullName = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const coverLetter = formData.get('coverLetter') as string;

  // TODO: Save to database
  console.log('Application submission:', { jobId, fullName, email, phone, coverLetter });

  return { success: true, message: 'Application submitted successfully!' };
}
