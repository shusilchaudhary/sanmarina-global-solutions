'use server';

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  // TODO: Integrate with email service (SendGrid, Resend, etc.)
  console.log('Contact form submission:', { name, email, phone, service, message });

  return { success: true, message: 'Message sent successfully!' };
}
