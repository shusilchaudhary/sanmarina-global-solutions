import { supabaseAdmin } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, Briefcase, Globe, Download, Linkedin,
  Clock, DollarSign, CheckCircle, Star,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

const availabilityLabel: Record<string, string> = {
  immediate: 'Available immediately',
  '2weeks':  'Available in 2 weeks',
  '1month':  'Available in 1 month',
  '3months': 'Available in 3 months',
};

export default async function PublicProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('id, full_name, email')
    .eq('id', id)
    .single();

  const { data: jp } = await supabaseAdmin
    .from('jobseeker_profiles')
    .select('*')
    .eq('id', id)
    .eq('is_public', true)
    .single();

  if (!profile || !jp) notFound();

  const langs: string[] = jp.languages ?? [];
  const skills: string[] = jp.skills ?? [];
  const workTypes: string[] = jp.work_type ?? [];

  return (
    <div style={{ minHeight: '100vh', background: '#F1F5F9' }}>
      {/* Top nav */}
      <div style={{ background: '#0B1628', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontSize: '16px', fontWeight: 800, color: '#CC2229', textDecoration: 'none' }}>SanMarina Global</Link>
        <Link href="/jobs" style={{ fontSize: '13px', fontWeight: 600, color: '#9CA3AF', textDecoration: 'none' }}>Browse Jobs →</Link>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* ── Hero card ── */}
        <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
          {/* Cover */}
          <div style={{ height: '100px', background: 'linear-gradient(135deg, #0B1628, #1E3A8A)' }} />

          <div style={{ padding: '0 32px 28px', position: 'relative' }}>
            {/* Avatar */}
            <div style={{
              width: '96px', height: '96px', borderRadius: '50%',
              border: '4px solid #fff', overflow: 'hidden',
              background: '#E5E7EB', marginTop: '-48px', marginBottom: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {jp.avatar_url ? (
                <Image src={jp.avatar_url} alt={profile.full_name} width={96} height={96} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized />
              ) : (
                <span style={{ fontSize: '36px', fontWeight: 800, color: '#9CA3AF' }}>
                  {profile.full_name?.[0]?.toUpperCase()}
                </span>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '26px', fontWeight: 800, color: '#0B1628', marginBottom: '4px' }}>
                  {profile.full_name}
                </h1>
                {jp.headline && (
                  <p style={{ fontSize: '15px', color: '#4B5563', fontWeight: 500, marginBottom: '10px' }}>{jp.headline}</p>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '13px', color: '#6B7280' }}>
                  {jp.current_country && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} color="#CC2229" /> {jp.current_country}
                    </span>
                  )}
                  {jp.nationality && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Globe size={13} color="#2563EB" /> {jp.nationality}
                    </span>
                  )}
                  {jp.experience_years && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Briefcase size={13} /> {jp.experience_years} yr{jp.experience_years > 1 ? 's' : ''} experience
                    </span>
                  )}
                  {jp.availability && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} color="#16A34A" />
                      <span style={{ color: '#16A34A', fontWeight: 600 }}>{availabilityLabel[jp.availability] ?? jp.availability}</span>
                    </span>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                {/* Rate badge */}
                {jp.hourly_rate_min && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: '10px' }}>
                    <DollarSign size={14} color="#16A34A" />
                    <span style={{ fontWeight: 800, fontSize: '15px', color: '#15803D' }}>
                      {jp.rate_currency} {jp.hourly_rate_min}{jp.hourly_rate_max ? `–${jp.hourly_rate_max}` : '+'}/hr
                    </span>
                  </div>
                )}
                {jp.cv_url && (
                  <a href={jp.cv_url} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '9px 18px', background: '#CC2229', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                    <Download size={14} /> Download CV
                  </a>
                )}
                {jp.linkedin_url && (
                  <a href={jp.linkedin_url} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#2563EB', textDecoration: 'none' }}>
                    <Linkedin size={13} /> LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '20px', alignItems: 'start' }}>
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* About */}
            {jp.bio && (
              <Card title="About Me">
                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.75' }}>{jp.bio}</p>
              </Card>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <Card title="Skills">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skills.map(skill => (
                    <span key={skill} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 14px', background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '999px', fontSize: '13px', fontWeight: 600, color: '#CC2229' }}>
                      <CheckCircle size={11} /> {skill}
                    </span>
                  ))}
                </div>
              </Card>
            )}

            {/* Languages */}
            {langs.length > 0 && (
              <Card title="Languages">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {langs.map(lang => (
                    <span key={lang} style={{ padding: '6px 14px', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '999px', fontSize: '13px', fontWeight: 600, color: '#2563EB' }}>
                      {lang}
                    </span>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Right sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Quick info */}
            <Card title="Quick Info">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {jp.current_country && <InfoRow icon={<MapPin size={14} color="#CC2229" />} label="Location" value={jp.current_country} />}
                {jp.nationality && <InfoRow icon={<Globe size={14} color="#2563EB" />} label="Nationality" value={jp.nationality} />}
                {jp.experience_years && <InfoRow icon={<Star size={14} color="#F59E0B" />} label="Experience" value={`${jp.experience_years} years`} />}
                {jp.hourly_rate_min && (
                  <InfoRow icon={<DollarSign size={14} color="#16A34A" />} label="Rate"
                    value={`${jp.rate_currency} ${jp.hourly_rate_min}${jp.hourly_rate_max ? `–${jp.hourly_rate_max}` : '+'}/hr`} />
                )}
              </div>
            </Card>

            {/* Work type */}
            {workTypes.length > 0 && (
              <Card title="Work Type">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {workTypes.map(wt => (
                    <span key={wt} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#374151', fontWeight: 600 }}>
                      <CheckCircle size={13} color="#16A34A" />
                      {wt.charAt(0).toUpperCase() + wt.slice(1)}
                    </span>
                  ))}
                </div>
              </Card>
            )}

            {/* Contact card */}
            <div style={{ background: 'linear-gradient(135deg, #0B1628, #1E3A8A)', borderRadius: '14px', padding: '20px' }}>
              <div style={{ fontWeight: 700, color: '#fff', marginBottom: '6px', fontSize: '15px' }}>Interested in this candidate?</div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '14px' }}>Contact SanMarina to get introduced.</p>
              <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', background: '#CC2229', color: '#fff', borderRadius: '9px', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                Contact Agency
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', borderRadius: '14px', padding: '22px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '15px', fontWeight: 700, color: '#0B1628', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid #F3F4F6' }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6B7280', fontWeight: 500 }}>{icon} {label}</span>
      <span style={{ fontWeight: 700, color: '#0B1628' }}>{value}</span>
    </div>
  );
}
