import { z } from 'zod';

/**
 * Contact form validation schema.
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number').optional(),
  service: z.enum([
    'recruitment',
    'visa',
    'it-consulting',
    'compliance',
    'travel',
    'other',
  ]),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be under 2000 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Job application form validation schema.
 */
export const applicationFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  coverLetter: z
    .string()
    .min(50, 'Cover letter must be at least 50 characters')
    .max(3000, 'Cover letter must be under 3000 characters'),
  resumeUrl: z.string().url('Please upload a valid resume').optional(),
  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must agree to the terms',
    }),
});

export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

/**
 * Post job form validation schema.
 */
export const postJobFormSchema = z.object({
  title: z.string().min(5, 'Job title must be at least 5 characters'),
  category: z.enum([
    'hospitality',
    'construction',
    'healthcare',
    'it',
    'logistics',
    'agriculture',
  ]),
  country: z.string().min(2, 'Please select a country'),
  visaType: z.enum(['work-permit', 'blue-card', 'seasonal', 'skilled-worker']),
  salaryMin: z.number().min(0, 'Minimum salary must be positive'),
  salaryMax: z.number().min(0, 'Maximum salary must be positive'),
  currency: z.string().default('EUR'),
  period: z.enum(['monthly', 'hourly', 'annual']),
  description: z
    .string()
    .min(100, 'Description must be at least 100 characters'),
  requirements: z.array(z.object({ value: z.string().min(1) })).min(1, 'Add at least one requirement'),
  benefits: z.array(z.object({ value: z.string() })).optional(),
});

export type PostJobFormValues = z.infer<typeof postJobFormSchema>;
