'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { postJobFormSchema, type PostJobFormValues } from '@/lib/validations';
import { createJob } from '@/lib/actions/jobs';
import { Loader2, Plus, Trash2, Info } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORIES = [
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'construction', label: 'Construction' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'it', label: 'IT & Tech' },
  { value: 'logistics', label: 'Logistics' },
  { value: 'agriculture', label: 'Agriculture' },
];

const COUNTRIES = [
  { value: 'Germany', label: 'Germany' },
  { value: 'Poland', label: 'Poland' },
  { value: 'Czech Republic', label: 'Czech Republic' },
  { value: 'Romania', label: 'Romania' },
  { value: 'Croatia', label: 'Croatia' },
];

const VISA_TYPES = [
  { value: 'work-permit', label: 'Work Permit' },
  { value: 'blue-card', label: 'EU Blue Card' },
  { value: 'seasonal', label: 'Seasonal' },
  { value: 'skilled-worker', label: 'Skilled Worker' },
];

export function PostJobForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PostJobFormValues>({
    resolver: zodResolver(postJobFormSchema) as any,
    defaultValues: {
      title: '',
      category: '' as any,
      country: '',
      visaType: '' as any,
      currency: 'EUR',
      period: 'monthly',
      description: '',
      requirements: [{ value: '' }],
      benefits: [{ value: '' }],
    },
  });

  const { fields: requirementFields, append: appendRequirement, remove: removeRequirement } = useFieldArray({
    control,
    name: "requirements"
  });

  const { fields: benefitFields, append: appendBenefit, remove: removeBenefit } = useFieldArray({
    control,
    name: "benefits"
  });

  const onSubmit = async (data: PostJobFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'requirements' || key === 'benefits') {
          const stringArray = Array.isArray(value) ? value.map((v: any) => v.value).filter(Boolean) : [];
          formData.append(key, JSON.stringify(stringArray));
        } else if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else if (value !== undefined) {
          formData.append(key, value.toString());
        }
      });
      
      const result = await createJob(formData);
      if (result.success) {
        router.push('/employer/dashboard?posted=success');
      } else {
        setSubmitError(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Failed to post job:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
      {submitError && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm">
          <Info className="w-5 h-5 shrink-0" />
          {submitError}
        </div>
      )}

      {/* Step 1: Basics */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent-400/20 flex items-center justify-center text-accent-400 font-bold text-sm">1</div>
          <h2 className="text-xl font-display font-semibold text-white">Job Basics</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Job Title</label>
            <input
              {...register('title')}
              type="text"
              placeholder="e.g. Senior Software Engineer"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400/20 focus:border-accent-400/50 transition-all"
            />
            {errors.title && <p className="mt-1.5 text-xs text-red-400">{errors.title.message}</p>}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
              <select
                {...register('category')}
                className="w-full px-4 py-3 bg-brand-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-400/20 focus:border-accent-400/50 transition-all appearance-none"
              >
                <option value="">Select Category</option>
                {CATEGORIES.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
              {errors.category && <p className="mt-1.5 text-xs text-red-400">{errors.category.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Country</label>
              <select
                {...register('country')}
                className="w-full px-4 py-3 bg-brand-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-400/20 focus:border-accent-400/50 transition-all appearance-none"
              >
                <option value="">Select Country</option>
                {COUNTRIES.map(country => (
                  <option key={country.value} value={country.value}>{country.label}</option>
                ))}
              </select>
              {errors.country && <p className="mt-1.5 text-xs text-red-400">{errors.country.message}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Visa Type</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {VISA_TYPES.map(visa => (
                <label key={visa.value} className="relative flex items-center p-3 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                  <input
                    type="radio"
                    value={visa.value}
                    {...register('visaType')}
                    className="w-4 h-4 text-accent-400 bg-brand-900 border-white/20 focus:ring-accent-400 focus:ring-offset-brand-950"
                  />
                  <span className="ml-3 text-sm text-gray-300">{visa.label}</span>
                </label>
              ))}
            </div>
            {errors.visaType && <p className="mt-1.5 text-xs text-red-400">{errors.visaType.message}</p>}
          </div>
        </div>
      </div>

      {/* Step 2: Compensation */}
      <div className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-400/20 flex items-center justify-center text-emerald-400 font-bold text-sm">2</div>
          <h2 className="text-xl font-display font-semibold text-white">Compensation & Working Terms</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Min Salary</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">€</span>
              <input
                {...register('salaryMin', { valueAsNumber: true })}
                type="number"
                placeholder="0"
                className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400/20 focus:border-accent-400/50"
              />
            </div>
            {errors.salaryMin && <p className="mt-1.5 text-xs text-red-400">{errors.salaryMin.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Max Salary</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">€</span>
              <input
                {...register('salaryMax', { valueAsNumber: true })}
                type="number"
                placeholder="0"
                className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400/20 focus:border-accent-400/50"
              />
            </div>
            {errors.salaryMax && <p className="mt-1.5 text-xs text-red-400">{errors.salaryMax.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Payment Period</label>
            <select
              {...register('period')}
              className="w-full px-4 py-3 bg-brand-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-400/20 focus:border-accent-400/50 transition-all appearance-none"
            >
              <option value="monthly">Monthly</option>
              <option value="hourly">Hourly</option>
              <option value="annual">Annual</option>
            </select>
            {errors.period && <p className="mt-1.5 text-xs text-red-400">{errors.period.message}</p>}
          </div>
        </div>
      </div>

      {/* Step 3: Content */}
      <div className="space-y-8 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-400/20 flex items-center justify-center text-blue-400 font-bold text-sm">3</div>
          <h2 className="text-xl font-display font-semibold text-white">Detailed Description</h2>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Job Overview</label>
          <textarea
            {...register('description')}
            rows={6}
            placeholder="Write a compelling job description..."
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400/20 focus:border-accent-400/50 resize-none transition-all"
          />
          {errors.description && <p className="mt-1.5 text-xs text-red-400">{errors.description.message}</p>}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements Dynamic List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-400">Key Requirements</label>
              <button
                type="button"
                onClick={() => appendRequirement({ value: '' })}
                className="text-xs font-bold text-accent-400 hover:text-accent-300 flex items-center gap-1 transition-colors"
              >
                <Plus className="w-3 h-3" /> ADD MORE
              </button>
            </div>
            <div className="space-y-3">
              {requirementFields.map((field, index) => (
                <div key={field.id} className="flex gap-2">
                  <input
                    {...register(`requirements.${index}.value` as const)}
                    placeholder={`Requirement #${index + 1}`}
                    className="flex-1 px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-400/50"
                  />
                  {requirementFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRequirement(index)}
                      className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            {errors.requirements && <p className="text-xs text-red-400">Please add at least one requirement</p>}
          </div>

          {/* Benefits Dynamic List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-400">Benefits & Perks</label>
              <button
                type="button"
                onClick={() => appendBenefit({ value: '' })}
                className="text-xs font-bold text-accent-400 hover:text-accent-300 flex items-center gap-1 transition-colors"
              >
                <Plus className="w-3 h-3" /> ADD MORE
              </button>
            </div>
            <div className="space-y-3">
              {benefitFields.map((field, index) => (
                <div key={field.id} className="flex gap-2">
                  <input
                    {...register(`benefits.${index}.value` as const)}
                    placeholder={`Benefit #${index + 1}`}
                    className="flex-1 px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-400/50"
                  />
                  {benefitFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeBenefit(index)}
                      className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 text-sm font-bold tracking-widest uppercase text-brand-950 bg-accent-400 hover:bg-accent-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl transition-all shadow-xl shadow-accent-400/20 hover:shadow-accent-400/40 flex justify-center items-center gap-3 transform active:scale-[0.98]"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            'Publish Job Opening'
          )}
        </button>
        <p className="mt-4 text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          All jobs are reviewed by our team before publication
        </p>
      </div>
    </form>
  );
}
