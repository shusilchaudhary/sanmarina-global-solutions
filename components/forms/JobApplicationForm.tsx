'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { applicationFormSchema, type ApplicationFormValues } from '@/lib/validations';
import { submitApplication } from '@/lib/actions/applications';
import { Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface JobApplicationFormProps {
  jobId: string;
}

export function JobApplicationForm({ jobId }: JobApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      coverLetter: '',
      resumeUrl: '',
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('jobId', jobId);
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined) formData.append(key, value.toString());
      });
      
      const result = await submitApplication(formData);
      if (result.success) {
        setSubmitSuccess(true);
        reset();
      }
    } catch (error) {
      console.error('Failed to submit application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="p-6 bg-primary-50 border border-primary-100 rounded-2xl text-center">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">Application Submitted!</h3>
        <p className="text-sm text-neutral-600">
          Our team will review your profile and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-xs font-bold text-neutral-800 mb-1.5 uppercase tracking-wider">Full Name</label>
        <input
          {...register('fullName')}
          type="text"
          placeholder="e.g. John Doe"
          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium"
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.fullName.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-bold text-neutral-800 mb-1.5 uppercase tracking-wider">Email Address</label>
        <input
          {...register('email')}
          type="email"
          placeholder="john@example.com"
          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-bold text-neutral-800 mb-1.5 uppercase tracking-wider">Phone Number</label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+40 XXX XXX XXX"
          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-bold text-neutral-800 mb-1.5 uppercase tracking-wider">Cover Letter (Optional)</label>
        <textarea
          {...register('coverLetter')}
          rows={4}
          placeholder="Tell us why you're a good fit..."
          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none font-medium"
        />
        {errors.coverLetter && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.coverLetter.message}</p>}
      </div>

      <div className="flex items-start gap-3 pt-2">
        <div className="flex items-center h-5">
          <input
            {...register('agreeToTerms')}
            type="checkbox"
            id="terms"
            className="w-4 h-4 border-neutral-300 rounded text-primary-600 focus:ring-primary-500 cursor-pointer"
          />
        </div>
        <label htmlFor="terms" className="text-xs text-neutral-500 leading-normal cursor-pointer hover:text-neutral-700 transition-colors">
          I agree to the privacy policy and consent to my data being processed for recruitment purposes.
        </label>
      </div>
      {errors.agreeToTerms && <p className="text-xs text-red-500 font-medium">{errors.agreeToTerms.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-4 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 hover:-translate-y-0.5 active:translate-y-0"
      >
        {isSubmitting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        Submit Application
      </button>
    </form>
  );
}
