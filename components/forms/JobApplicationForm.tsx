'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { applicationFormSchema, type ApplicationFormValues } from '@/lib/validations';
import { submitApplication } from '@/lib/actions/applications';
import { Send, Loader2, FileText, CheckCircle, Upload, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { createBrowserClient } from '@supabase/ssr';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface JobApplicationFormProps {
  jobId: string;
}

export function JobApplicationForm({ jobId }: JobApplicationFormProps) {
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError]     = useState('');

  // Saved profile CV
  const [savedCvUrl,      setSavedCvUrl]      = useState('');
  const [savedCvFilename, setSavedCvFilename] = useState('');
  const [usingSavedCv,    setUsingSavedCv]    = useState(false);

  // New CV upload
  const [newCvFile,     setNewCvFile]     = useState<File | null>(null);
  const [uploadingCv,   setUploadingCv]   = useState(false);
  const [uploadedCvUrl, setUploadedCvUrl] = useState('');
  const cvInputRef = useRef<HTMLInputElement>(null);

  const [userId, setUserId] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
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

  // Load user profile + saved CV on mount
  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setUserId(user.id);

      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, email')
        .eq('id', user.id)
        .single();

      if (profile) {
        setValue('fullName', profile.full_name ?? '');
        setValue('email', profile.email ?? '');
      }

      const { data: jp } = await supabase
        .from('jobseeker_profiles')
        .select('cv_url, cv_filename, phone')
        .eq('id', user.id)
        .single();

      if (jp) {
        if (jp.cv_url) {
          setSavedCvUrl(jp.cv_url);
          setSavedCvFilename(jp.cv_filename || 'My CV');
          setUsingSavedCv(true);
          setValue('resumeUrl', jp.cv_url);
        }
        if (jp.phone) setValue('phone', jp.phone ?? '');
      }
    }
    loadProfile();
  }, [setValue]);

  // Handle new CV file selection + upload
  async function handleCvChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) { setSubmitError('CV must be under 10 MB'); return; }

    setNewCvFile(file);
    setUsingSavedCv(false);
    setUploadingCv(true);
    setSubmitError('');

    const ext  = file.name.split('.').pop();
    const path = `${userId || 'guest'}/cv_apply_${Date.now()}.${ext}`;
    const { error: upErr } = await supabase.storage.from('cvs').upload(path, file, { upsert: true });

    if (upErr) {
      setSubmitError('CV upload failed: ' + upErr.message);
      setUploadingCv(false);
      return;
    }

    const { data } = supabase.storage.from('cvs').getPublicUrl(path);
    setUploadedCvUrl(data.publicUrl);
    setValue('resumeUrl', data.publicUrl);
    setUploadingCv(false);
  }

  function switchToSavedCv() {
    setUsingSavedCv(true);
    setNewCvFile(null);
    setUploadedCvUrl('');
    setValue('resumeUrl', savedCvUrl);
  }

  function removeNewCv() {
    setNewCvFile(null);
    setUploadedCvUrl('');
    if (savedCvUrl) {
      setUsingSavedCv(true);
      setValue('resumeUrl', savedCvUrl);
    } else {
      setValue('resumeUrl', '');
    }
  }

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);
    setSubmitError('');
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
      } else {
        setSubmitError(result.error ?? 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Failed to submit application:', error);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div style={{ padding: '32px 24px', background: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: '16px', textAlign: 'center' }}>
        <div style={{ width: '52px', height: '52px', background: '#DCFCE7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <CheckCircle size={24} color="#16A34A" />
        </div>
        <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0B1628', marginBottom: '6px' }}>Application Submitted!</h3>
        <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.6' }}>
          Our team will review your profile and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      {submitError && (
        <div style={{ padding: '10px 14px', background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '10px', color: '#CC2229', fontSize: '13px' }}>
          {submitError}
        </div>
      )}

      <div>
        <label className="block text-xs font-bold text-neutral-800 mb-1.5 uppercase tracking-wider">Full Name</label>
        <input
          {...register('fullName')}
          type="text"
          placeholder="e.g. John Doe"
          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all font-medium"
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.fullName.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-bold text-neutral-800 mb-1.5 uppercase tracking-wider">Email Address</label>
        <input
          {...register('email')}
          type="email"
          placeholder="john@example.com"
          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all font-medium"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-bold text-neutral-800 mb-1.5 uppercase tracking-wider">Phone Number</label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+40 XXX XXX XXX"
          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all font-medium"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.phone.message}</p>}
      </div>

      {/* ── CV / Resume Section ── */}
      <div>
        <label className="block text-xs font-bold text-neutral-800 mb-2 uppercase tracking-wider">CV / Resume</label>

        {/* Saved CV pill */}
        {savedCvUrl && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '10px 14px', borderRadius: '10px', marginBottom: '8px',
            background: usingSavedCv ? '#F0FDF4' : '#F9FAFB',
            border: `1.5px solid ${usingSavedCv ? '#BBF7D0' : '#E5E7EB'}`,
            cursor: 'pointer', transition: 'all 0.15s',
          }} onClick={switchToSavedCv}>
            <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: usingSavedCv ? '#DCFCE7' : '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FileText size={16} color={usingSavedCv ? '#16A34A' : '#9CA3AF'} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: usingSavedCv ? '#15803D' : '#374151', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {savedCvFilename}
              </div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>Saved from your profile</div>
            </div>
            {usingSavedCv && <CheckCircle size={16} color="#16A34A" style={{ flexShrink: 0 }} />}
          </div>
        )}

        {/* New CV upload */}
        {newCvFile ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: uploadingCv ? '#FFFBEB' : '#EFF6FF', border: `1.5px solid ${uploadingCv ? '#FDE68A' : '#BFDBFE'}`, borderRadius: '10px' }}>
            <FileText size={16} color={uploadingCv ? '#D97706' : '#2563EB'} />
            <span style={{ flex: 1, fontSize: '13px', fontWeight: 600, color: uploadingCv ? '#D97706' : '#2563EB', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {uploadingCv ? 'Uploading…' : newCvFile.name}
            </span>
            {!uploadingCv && (
              <button type="button" onClick={removeNewCv} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', padding: '2px' }}>
                <X size={14} />
              </button>
            )}
          </div>
        ) : (
          <div
            onClick={() => cvInputRef.current?.click()}
            style={{
              border: '2px dashed #E5E7EB', borderRadius: '10px', padding: '16px',
              textAlign: 'center', cursor: 'pointer', background: '#FAFAFA',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#CC2229')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#E5E7EB')}
          >
            <Upload size={18} color="#9CA3AF" style={{ margin: '0 auto 6px' }} />
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '2px' }}>
              {savedCvUrl ? 'Upload a different CV' : 'Upload your CV'}
            </p>
            <p style={{ fontSize: '11px', color: '#9CA3AF' }}>PDF, DOC, DOCX — max 10 MB</p>
          </div>
        )}

        <input ref={cvInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleCvChange} style={{ display: 'none' }} />
        <input type="hidden" {...register('resumeUrl')} />
      </div>

      <div>
        <label className="block text-xs font-bold text-neutral-800 mb-1.5 uppercase tracking-wider">Cover Letter <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: '#9CA3AF' }}>(Optional)</span></label>
        <textarea
          {...register('coverLetter')}
          rows={4}
          placeholder="Tell us why you're a good fit for this role..."
          className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none font-medium"
        />
        {errors.coverLetter && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.coverLetter.message}</p>}
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input
          {...register('agreeToTerms')}
          type="checkbox"
          id="terms"
          className="mt-0.5 w-4 h-4 border-neutral-300 rounded accent-red-600 cursor-pointer"
        />
        <label htmlFor="terms" className="text-xs text-neutral-500 leading-normal cursor-pointer hover:text-neutral-700 transition-colors">
          I agree to the privacy policy and consent to my data being processed for recruitment purposes.
        </label>
      </div>
      {errors.agreeToTerms && <p className="text-xs text-red-500 font-medium">{errors.agreeToTerms.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting || uploadingCv}
        style={{
          width: '100%', marginTop: '16px',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          padding: '14px 24px', borderRadius: '12px', border: 'none',
          cursor: (isSubmitting || uploadingCv) ? 'not-allowed' : 'pointer',
          fontSize: '14px', fontWeight: 700, color: '#ffffff',
          background: (isSubmitting || uploadingCv) ? '#9CA3AF' : 'linear-gradient(135deg, #CC2229, #a81b21)',
          boxShadow: '0 4px 16px rgba(204,34,41,0.3)',
          transition: 'all 0.2s',
        }}
      >
        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {isSubmitting ? 'Submitting…' : 'Submit Application'}
      </button>
    </form>
  );
}
