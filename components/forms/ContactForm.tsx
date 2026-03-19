'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations';
import { sendContactEmail } from '@/lib/actions/contact';
import { Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '' as any,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      
      const result = await sendContactEmail(formData);
      if (result.success) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {submitSuccess && (
        <div className="p-4 bg-accent-400/20 text-accent-400 border border-accent-400/30 rounded-xl mb-6">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Full Name</label>
          <input
            {...register('name')}
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-400/50 focus:ring-1 focus:ring-accent-400/50 transition-all"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            {...register('email')}
            type="email"
            placeholder="you@email.com"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-400/50 focus:ring-1 focus:ring-accent-400/50 transition-all"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">Phone (optional)</label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+977 ..."
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-400/50 focus:ring-1 focus:ring-accent-400/50 transition-all"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">Service Interested In</label>
        <select
          {...register('service')}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent-400/50 focus:ring-1 focus:ring-accent-400/50 transition-all"
        >
          <option value="" className="bg-brand-950">Select a service</option>
          <option value="recruitment" className="bg-brand-950">International Recruitment</option>
          <option value="visa" className="bg-brand-950">Visa Assistance</option>
          <option value="it-consulting" className="bg-brand-950">IT Consulting</option>
          <option value="compliance" className="bg-brand-950">Compliance</option>
          <option value="travel" className="bg-brand-950">Travel & Relocation</option>
          <option value="other" className="bg-brand-950">Other</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">Message</label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Tell us about your needs..."
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-400/50 focus:ring-1 focus:ring-accent-400/50 transition-all resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-brand-950 bg-accent-400 hover:bg-accent-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors shadow-lg shadow-accent-400/25"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
