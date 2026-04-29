'use server';

import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'info@sanmarinaglobal.eu';

const serviceLabels: Record<string, string> = {
  'web-development': 'Web Development',
  'app-development': 'App Development',
  'digital-marketing': 'Digital Marketing',
  seo: 'SEO Services',
  'ai-video': 'AI Video Generation',
  'ai-automation': 'AI Automation',
  'graphic-design': 'Graphic Designing',
  'video-editing': 'Video Editing',
  other: 'Other',
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendContactEmail(formData: FormData) {
  const raw = {
    name: (formData.get('name') as string) ?? '',
    email: (formData.get('email') as string) ?? '',
    phone: (formData.get('phone') as string) ?? '',
    service: (formData.get('service') as string) ?? '',
    message: (formData.get('message') as string) ?? '',
  };

  const parsed = contactFormSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, message: 'Invalid form data. Please check your inputs and try again.' };
  }

  const { name, email, phone, service, message } = parsed.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || 'Not provided');
  const safeService = escapeHtml(serviceLabels[service] ?? service);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  try {
    await resend.emails.send({
      from: 'SanMarina Global <noreply@sanmarinaglobal.eu>',
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `New Contact: ${serviceLabels[service] ?? service} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a2e; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 20px;">New Contact Form Submission</h2>
            <p style="margin: 8px 0 0; color: #94a3b8; font-size: 14px;">SanMarina Global Solutions Website</p>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 140px;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${safePhone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${safeService}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="font-weight: bold; color: #475569; margin: 0 0 8px;">Message:</p>
              <div style="background: white; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; color: #1e293b; line-height: 1.6;">
                ${safeMessage}
              </div>
            </div>
            <div style="margin-top: 20px; padding: 12px; background: #eff6ff; border-radius: 6px; font-size: 12px; color: #3b82f6;">
              Reply directly to this email to respond to ${safeName}.
            </div>
          </div>
        </div>
      `,
    });

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return { success: false, message: 'Failed to send message. Please try again or email us directly.' };
  }
}
