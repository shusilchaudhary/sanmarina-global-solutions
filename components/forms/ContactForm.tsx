'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations';
import { sendContactEmail } from '@/lib/actions/contact';
import { Send, Loader2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const COUNTRY_CODES = [
  // Europe
  { flag: '🇷🇴', name: 'Romania',        code: '+40'  },
  { flag: '🇬🇧', name: 'UK',             code: '+44'  },
  { flag: '🇩🇪', name: 'Germany',        code: '+49'  },
  { flag: '🇫🇷', name: 'France',         code: '+33'  },
  { flag: '🇮🇹', name: 'Italy',          code: '+39'  },
  { flag: '🇪🇸', name: 'Spain',          code: '+34'  },
  { flag: '🇳🇱', name: 'Netherlands',    code: '+31'  },
  { flag: '🇧🇪', name: 'Belgium',        code: '+32'  },
  { flag: '🇵🇱', name: 'Poland',         code: '+48'  },
  { flag: '🇨🇿', name: 'Czech Republic', code: '+420' },
  { flag: '🇸🇰', name: 'Slovakia',       code: '+421' },
  { flag: '🇭🇺', name: 'Hungary',        code: '+36'  },
  { flag: '🇦🇹', name: 'Austria',        code: '+43'  },
  { flag: '🇨🇭', name: 'Switzerland',    code: '+41'  },
  { flag: '🇵🇹', name: 'Portugal',       code: '+351' },
  { flag: '🇬🇷', name: 'Greece',         code: '+30'  },
  { flag: '🇭🇷', name: 'Croatia',        code: '+385' },
  { flag: '🇷🇸', name: 'Serbia',         code: '+381' },
  { flag: '🇧🇬', name: 'Bulgaria',       code: '+359' },
  { flag: '🇺🇦', name: 'Ukraine',        code: '+380' },
  { flag: '🇲🇩', name: 'Moldova',        code: '+373' },
  { flag: '🇸🇪', name: 'Sweden',         code: '+46'  },
  { flag: '🇳🇴', name: 'Norway',         code: '+47'  },
  { flag: '🇩🇰', name: 'Denmark',        code: '+45'  },
  { flag: '🇫🇮', name: 'Finland',        code: '+358' },
  { flag: '🇮🇪', name: 'Ireland',        code: '+353' },
  { flag: '🇲🇹', name: 'Malta',          code: '+356' },
  { flag: '🇱🇺', name: 'Luxembourg',     code: '+352' },
  // Asia
  { flag: '🇳🇵', name: 'Nepal',          code: '+977' },
  { flag: '🇮🇳', name: 'India',          code: '+91'  },
  { flag: '🇧🇩', name: 'Bangladesh',     code: '+880' },
  { flag: '🇵🇭', name: 'Philippines',    code: '+63'  },
  { flag: '🇱🇰', name: 'Sri Lanka',      code: '+94'  },
  { flag: '🇵🇰', name: 'Pakistan',       code: '+92'  },
  { flag: '🇨🇳', name: 'China',          code: '+86'  },
  { flag: '🇯🇵', name: 'Japan',          code: '+81'  },
  { flag: '🇰🇷', name: 'South Korea',    code: '+82'  },
  { flag: '🇸🇬', name: 'Singapore',      code: '+65'  },
  { flag: '🇲🇾', name: 'Malaysia',       code: '+60'  },
  { flag: '🇮🇩', name: 'Indonesia',      code: '+62'  },
  { flag: '🇹🇭', name: 'Thailand',       code: '+66'  },
  { flag: '🇻🇳', name: 'Vietnam',        code: '+84'  },
  { flag: '🇦🇪', name: 'UAE',            code: '+971' },
  { flag: '🇸🇦', name: 'Saudi Arabia',   code: '+966' },
  { flag: '🇶🇦', name: 'Qatar',          code: '+974' },
  { flag: '🇰🇼', name: 'Kuwait',         code: '+965' },
  { flag: '🇹🇷', name: 'Turkey',         code: '+90'  },
  { flag: '🇮🇱', name: 'Israel',         code: '+972' },
  // Africa
  { flag: '🇳🇬', name: 'Nigeria',        code: '+234' },
  { flag: '🇰🇪', name: 'Kenya',          code: '+254' },
  { flag: '🇬🇭', name: 'Ghana',          code: '+233' },
  { flag: '🇲🇦', name: 'Morocco',        code: '+212' },
  { flag: '🇿🇦', name: 'South Africa',   code: '+27'  },
  { flag: '🇪🇬', name: 'Egypt',          code: '+20'  },
  // Americas
  { flag: '🇺🇸', name: 'USA',            code: '+1'   },
  { flag: '🇨🇦', name: 'Canada',         code: '+1'   },
  { flag: '🇧🇷', name: 'Brazil',         code: '+55'  },
  { flag: '🇲🇽', name: 'Mexico',         code: '+52'  },
  { flag: '🇦🇷', name: 'Argentina',      code: '+54'  },
  { flag: '🇨🇴', name: 'Colombia',       code: '+57'  },
  { flag: '🇨🇱', name: 'Chile',          code: '+56'  },
  // Oceania
  { flag: '🇦🇺', name: 'Australia',      code: '+61'  },
  { flag: '🇳🇿', name: 'New Zealand',    code: '+64'  },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError]     = useState('');
  const [dialCode, setDialCode]           = useState('+40');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', phone: '', service: '' as any, message: '' },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'phone' && value) {
          formData.append(key, `${dialCode} ${value}`);
        } else if (value) {
          formData.append(key, value);
        }
      });

      const result = await sendContactEmail(formData);
      if (result.success) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(result.message ?? 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
      setSubmitError('Something went wrong. Please email us directly at info@sanmarinaglobal.eu');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100">

      {submitSuccess && (
        <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl">
          Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
        </div>
      )}
      {submitError && (
        <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl">
          {submitError}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
          <input
            {...register('name')}
            id="contact-name"
            type="text"
            placeholder="Your name"
            className="w-full px-5 py-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 shadow-sm"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
          <input
            {...register('email')}
            id="contact-email"
            type="email"
            placeholder="you@email.com"
            className="w-full px-5 py-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 shadow-sm"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone with country code */}
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-700 mb-2">Phone <span className="text-neutral-400 font-normal">(optional)</span></label>
        <div className="flex gap-2">
          {/* Country code dropdown */}
          <div className="relative flex-shrink-0">
            <select
              value={dialCode}
              onChange={e => setDialCode(e.target.value)}
              className="appearance-none h-full pl-3 pr-8 py-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-800 focus:bg-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 shadow-sm cursor-pointer text-sm font-medium"
              style={{ minWidth: '110px' }}
            >
              {COUNTRY_CODES.map((c, i) => (
                <option key={`${c.code}-${i}`} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
          </div>

          {/* Phone number input */}
          <input
            {...register('phone')}
            id="contact-phone"
            type="tel"
            placeholder="XXX XXX XXX"
            className="flex-1 px-5 py-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 shadow-sm"
          />
        </div>
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-service" className="block text-sm font-medium text-neutral-700 mb-2">Service Interested In</label>
        <div className="relative">
          <select
            {...register('service')}
            id="contact-service"
            className="w-full appearance-none px-5 py-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-800 focus:bg-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 shadow-sm cursor-pointer"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="app-development">App Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="seo">SEO Services</option>
            <option value="ai-video">AI Video Generation</option>
            <option value="ai-automation">AI Automation</option>
            <option value="graphic-design">Graphic Designing</option>
            <option value="video-editing">Video Editing</option>
            <option value="other">Other</option>
          </select>
          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
        </div>
        {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
        <textarea
          {...register('message')}
          id="contact-message"
          rows={5}
          placeholder="Tell us about your needs..."
          className="w-full px-5 py-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 rounded-xl text-neutral-800 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 shadow-sm resize-none"
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-bold text-white bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(139,92,246,0.25)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.4)] hover:-translate-y-0.5"
      >
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-4 h-4" /> Send Message</>
        )}
      </button>
    </form>
  );
}
