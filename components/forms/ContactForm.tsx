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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100">
      {submitSuccess && (
        <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl mb-6">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
          <input
            {...register('name')}
            type="text"
            placeholder="Your name"
            className="w-full px-5 py-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 shadow-sm"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
          <input
            {...register('email')}
            type="email"
            placeholder="you@email.com"
            className="w-full px-5 py-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 shadow-sm"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">Phone (optional)</label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+977 ..."
          className="w-full px-5 py-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 shadow-sm"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">Service Interested In</label>
        <select
          {...register('service')}
          className="w-full px-5 py-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-800 focus:bg-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 shadow-sm cursor-pointer appearance-none"
        >
          <option value="" className="bg-white text-neutral-800">Select a service</option>
          <option value="recruitment" className="bg-white text-neutral-800">International Recruitment</option>
          <option value="visa" className="bg-white text-neutral-800">Visa Assistance</option>
          <option value="it-consulting" className="bg-white text-neutral-800">IT Consulting</option>
          <option value="compliance" className="bg-white text-neutral-800">Compliance</option>
          <option value="travel" className="bg-white text-neutral-800">Travel & Relocation</option>
          <option value="other" className="bg-white text-neutral-800">Other</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Tell us about your needs..."
          className="w-full px-5 py-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 shadow-sm resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-white bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
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
