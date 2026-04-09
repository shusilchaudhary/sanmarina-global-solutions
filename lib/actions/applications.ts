'use server';

import { Resend } from 'resend';
import { mockJobs } from '@/lib/data/jobs';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'info@sanmarinaglobal.eu';

export async function submitApplication(formData: FormData) {
  const jobId = formData.get('jobId') as string;
  const fullName = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const coverLetter = formData.get('coverLetter') as string;

  const job = mockJobs.find((j) => j.id === jobId);
  const jobTitle = job ? `${job.title} — ${job.country}` : jobId;

  try {
    // Notify the agency
    await resend.emails.send({
      from: 'SanMarina Applications <onboarding@resend.dev>',
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `New Application: ${jobTitle} — ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a2e; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 20px;">New Job Application Received</h2>
            <p style="margin: 8px 0 0; color: #94a3b8; font-size: 14px;">SanMarina Global Solutions — Recruitment Portal</p>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 12px 16px; border-radius: 4px; margin-bottom: 20px;">
              <strong style="color: #1e40af;">Position Applied For:</strong>
              <span style="color: #1e293b; margin-left: 8px;">${jobTitle}</span>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 140px;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${phone}</td>
              </tr>
            </table>
            ${coverLetter ? `
            <div style="margin-top: 20px;">
              <p style="font-weight: bold; color: #475569; margin: 0 0 8px;">Cover Letter:</p>
              <div style="background: white; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; color: #1e293b; line-height: 1.6;">
                ${coverLetter.replace(/\n/g, '<br>')}
              </div>
            </div>
            ` : ''}
            <div style="margin-top: 20px; padding: 12px; background: #f0fdf4; border-radius: 6px; font-size: 12px; color: #16a34a;">
              Reply directly to this email to contact the applicant.
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation to the applicant
    await resend.emails.send({
      from: 'SanMarina Global Solutions <onboarding@resend.dev>',
      to: [email],
      subject: `Application Received — ${jobTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a2e; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 20px;">Application Received!</h2>
            <p style="margin: 8px 0 0; color: #94a3b8; font-size: 14px;">SanMarina Global Solutions</p>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <p style="color: #1e293b;">Dear <strong>${fullName}</strong>,</p>
            <p style="color: #475569; line-height: 1.6;">
              Thank you for applying for the <strong>${jobTitle}</strong> position through SanMarina Global Solutions. We have received your application and our recruitment team will review your profile.
            </p>
            <p style="color: #475569; line-height: 1.6;">
              We typically respond within <strong>3–5 business days</strong>. If shortlisted, we will contact you via email or phone to schedule an interview.
            </p>
            <div style="background: #eff6ff; border-radius: 8px; padding: 16px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold; color: #1e40af;">What happens next?</p>
              <ol style="color: #3b82f6; margin: 8px 0 0; padding-left: 20px; line-height: 1.8;">
                <li>Application review by our team (3–5 days)</li>
                <li>Profile screening and shortlisting</li>
                <li>Interview scheduling (phone or video)</li>
                <li>Document collection and visa processing</li>
                <li>Placement and pre-departure orientation</li>
              </ol>
            </div>
            <p style="color: #475569;">
              Questions? Contact us at <a href="mailto:info@sanmarinaglobal.eu" style="color: #2563eb;">info@sanmarinaglobal.eu</a> or WhatsApp us at <a href="https://wa.me/40735062451" style="color: #2563eb;">+40 735 062 451</a>.
            </p>
            <p style="color: #475569; margin-top: 20px;">
              Best regards,<br />
              <strong>SanMarina Global Solutions Recruitment Team</strong><br />
              Bucharest, Romania
            </p>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8;">
              SanMarina Global Solutions S.R.L. | Splaiul Unirii 165, Sector 3, Bucharest, Romania<br />
              We never charge candidates for recruitment services. Report fraud to info@sanmarinaglobal.eu
            </div>
          </div>
        </div>
      `,
    });

    return { success: true, message: 'Application submitted successfully!' };
  } catch (error) {
    console.error('Failed to send application email:', error);
    return { success: false, message: 'Failed to submit application. Please try again.' };
  }
}
