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
      <div className="p-6 bg-accent-400/10 border border-accent-400/30 rounded-2xl text-center">
        <div className="w-12 h-12 bg-accent-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-6 h-6 text-accent-400" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Application Submitted!</h3>
        <p className="text-sm text-gray-400">
          Our team will review your profile and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-xs text-gray-400 mb-1">Full Name</label>
        <input
          {...register('fullName')}
          type="text"
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-accent-400/50"
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>}
      </div>

      <div>
        <label className="block text-xs text-gray-400 mb-1">Email</label>
        <input
          {...register('email')}
          type="email"
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-accent-400/50"
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-xs text-gray-400 mb-1">Phone</label>
        <input
          {...register('phone')}
          type="tel"
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-accent-400/50"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-xs text-gray-400 mb-1">Cover Letter</label>
        <textarea
          {...register('coverLetter')}
          rows={4}
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-accent-400/50 resize-none"
        />
        {errors.coverLetter && <p className="mt-1 text-xs text-red-400">{errors.coverLetter.message}</p>}
      </div>

      <div className="flex items-start gap-2 pt-2">
        <input
          {...register('agreeToTerms')}
          type="checkbox"
          id="terms"
          className="mt-1 bg-white/5 border-white/10 rounded accent-accent-400"
        />
        <label htmlFor="terms" className="text-xs text-gray-400 leading-tight">
          I agree to the privacy policy and consent to my data being processed for recruitment purposes.
        </label>
      </div>
      {errors.agreeToTerms && <p className="text-xs text-red-400">{errors.agreeToTerms.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-brand-950 bg-accent-400 hover:bg-accent-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors shadow-lg shadow-accent-400/25"
      >
        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        Submit Application
      </button>
    </form>
  );
}
