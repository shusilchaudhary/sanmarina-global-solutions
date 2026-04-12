'use client';

import { useState, useEffect, useCallback } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search, MapPin, Briefcase, Clock, DollarSign,
  Filter, X, ArrowLeft, Users, Globe, CheckCircle,
  ChevronDown, SlidersHorizontal,
} from 'lucide-react';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const SKILL_CATEGORIES: Record<string, string[]> = {
  'Hospitality & Food':    ['Cooking', 'Baking', 'Hospitality'],
  'Construction & Trades': ['Welding', 'Electrical', 'Plumbing', 'Carpentry', 'Construction'],
  'Technology':            ['IT Support', 'JavaScript', 'Python', 'React', 'Node.js'],
  'Healthcare':            ['Nursing'],
  'Transport & Logistics': ['Driving (HGV)', 'Forklift', 'Warehouse'],
  'Agriculture & Cleaning':['Agriculture', 'Cleaning'],
  'Business & Services':   ['Accounting', 'Customer Service', 'Security'],
};

const ALL_SKILLS = Object.values(SKILL_CATEGORIES).flat();

const COUNTRIES = [
  'Nepal', 'India', 'Bangladesh', 'Philippines', 'Sri Lanka',
  'Pakistan', 'Nigeria', 'Kenya', 'Ghana', 'Morocco',
  'Romania', 'Moldova', 'Ukraine', 'Other',
];

const AVAILABILITY_LABELS: Record<string, string> = {
  immediate: 'Available now',
  '2weeks':  'In 2 weeks',
  '1month':  'In 1 month',
  '3months': 'In 3 months',
};

const AVAILABILITY_COLORS: Record<string, { bg: string; color: string }> = {
  immediate: { bg: '#F0FDF4', color: '#16A34A' },
  '2weeks':  { bg: '#FFFBEB', color: '#D97706' },
  '1month':  { bg: '#EFF6FF', color: '#2563EB' },
  '3months': { bg: '#F5F3FF', color: '#7C3AED' },
};

type Worker = {
  id: string;
  headline: string | null;
  bio: string | null;
  current_country: string | null;
  nationality: string | null;
  skills: string[] | null;
  experience_years: number | null;
  languages: string[] | null;
  work_type: string[] | null;
  availability: string | null;
  hourly_rate_min: number | null;
  hourly_rate_max: number | null;
  rate_currency: string | null;
  avatar_url: string | null;
  cv_url: string | null;
  profiles: { full_name: string } | null;
};

export default function TalentSearchPage() {
  const [workers, setWorkers]         = useState<Worker[]>([]);
  const [loading, setLoading]         = useState(true);
  const [searchText, setSearchText]   = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedAvail, setSelectedAvail]     = useState('');
  const [selectedWork, setSelectedWork]       = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory]   = useState('');

  const fetchWorkers = useCallback(async () => {
    setLoading(true);

    let query = supabase
      .from('jobseeker_profiles')
      .select('*, profiles(full_name)')
      .eq('is_public', true);

    if (selectedCountry)        query = query.eq('current_country', selectedCountry);
    if (selectedAvail)          query = query.eq('availability', selectedAvail);
    if (selectedWork)           query = query.contains('work_type', [selectedWork]);
    if (selectedSkills.length)  query = query.overlaps('skills', selectedSkills);

    const { data } = await query.order('created_at', { ascending: false });
    let results = (data ?? []) as Worker[];

    // client-side text search across name, headline, bio
    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      results = results.filter(w =>
        w.profiles?.full_name?.toLowerCase().includes(q) ||
        w.headline?.toLowerCase().includes(q) ||
        w.bio?.toLowerCase().includes(q) ||
        w.skills?.some(s => s.toLowerCase().includes(q))
      );
    }

    setWorkers(results);
    setLoading(false);
  }, [searchText, selectedSkills, selectedCountry, selectedAvail, selectedWork]);

  useEffect(() => { fetchWorkers(); }, [fetchWorkers]);

  function toggleSkill(skill: string) {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  }

  function clearAll() {
    setSearchText('');
    setSelectedSkills([]);
    setSelectedCountry('');
    setSelectedAvail('');
    setSelectedWork('');
    setActiveCategory('');
  }

  const hasFilters = searchText || selectedSkills.length || selectedCountry || selectedAvail || selectedWork;

  return (
    <div style={{ minHeight: '100vh', background: '#F1F5F9' }}>

      {/* ── Header ── */}
      <header style={{
        background: '#0B1628', padding: '0 32px', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/dashboard/employer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Dashboard
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-outfit)' }}>
            Find Talent
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Users size={15} color="#CC2229" />
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
            {loading ? '…' : workers.length} candidate{workers.length !== 1 ? 's' : ''}
          </span>
        </div>
      </header>

      {/* ── Search hero ── */}
      <div style={{ background: 'linear-gradient(135deg, #0B1628, #1E3A8A)', padding: '36px 32px' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '6px', textAlign: 'center' }}>
          Find the right candidate
        </h1>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '24px' }}>
          Browse verified worker profiles — filter by skill, location, and availability
        </p>

        {/* Search bar */}
        <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative' }}>
          <Search size={18} color="#9CA3AF" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder="Search by name, skill, or keyword…"
            style={{
              width: '100%', padding: '14px 48px', border: 'none', borderRadius: '12px',
              fontSize: '15px', color: '#111827', background: '#fff',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)', outline: 'none', boxSizing: 'border-box',
            }}
          />
          {searchText && (
            <button onClick={() => setSearchText('')} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}>
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
          {Object.keys(SKILL_CATEGORIES).map(cat => (
            <button key={cat} onClick={() => {
              if (activeCategory === cat) {
                setActiveCategory('');
                setSelectedSkills([]);
              } else {
                setActiveCategory(cat);
                setSelectedSkills(SKILL_CATEGORIES[cat]);
              }
            }} style={{
              padding: '7px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 700,
              border: `1.5px solid ${activeCategory === cat ? '#CC2229' : 'rgba(255,255,255,0.2)'}`,
              background: activeCategory === cat ? '#CC2229' : 'rgba(255,255,255,0.08)',
              color: '#fff', cursor: 'pointer', transition: 'all 0.15s',
            }}>{cat}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 20px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>

        {/* ── Sidebar filters ── */}
        <aside style={{
          width: '240px', flexShrink: 0, background: '#fff',
          borderRadius: '16px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          position: 'sticky', top: '80px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontWeight: 700, fontSize: '14px', color: '#0B1628' }}>
              <SlidersHorizontal size={15} color="#CC2229" /> Filters
            </div>
            {hasFilters && (
              <button onClick={clearAll} style={{ fontSize: '11px', fontWeight: 700, color: '#CC2229', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                Clear all
              </button>
            )}
          </div>

          {/* Country */}
          <FilterGroup label="Location">
            <select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)} style={selectStyle}>
              <option value="">All countries</option>
              {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </FilterGroup>

          {/* Availability */}
          <FilterGroup label="Availability">
            <select value={selectedAvail} onChange={e => setSelectedAvail(e.target.value)} style={selectStyle}>
              <option value="">Any</option>
              {Object.entries(AVAILABILITY_LABELS).map(([v, l]) => (
                <option key={v} value={v}>{l}</option>
              ))}
            </select>
          </FilterGroup>

          {/* Work type */}
          <FilterGroup label="Work Type">
            <select value={selectedWork} onChange={e => setSelectedWork(e.target.value)} style={selectStyle}>
              <option value="">Any</option>
              {['fulltime', 'parttime', 'contract', 'remote', 'seasonal'].map(wt => (
                <option key={wt} value={wt}>{wt.charAt(0).toUpperCase() + wt.slice(1)}</option>
              ))}
            </select>
          </FilterGroup>

          {/* Skills */}
          <FilterGroup label="Skills">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '240px', overflowY: 'auto' }}>
              {ALL_SKILLS.map(skill => (
                <label key={skill} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#374151', cursor: 'pointer', padding: '3px 0' }}>
                  <input
                    type="checkbox"
                    checked={selectedSkills.includes(skill)}
                    onChange={() => toggleSkill(skill)}
                    style={{ accentColor: '#CC2229', width: '14px', height: '14px' }}
                  />
                  {skill}
                </label>
              ))}
            </div>
          </FilterGroup>
        </aside>

        {/* ── Results grid ── */}
        <div style={{ flex: 1 }}>
          {/* Active filters pills */}
          {(selectedSkills.length > 0 || selectedCountry || selectedAvail || selectedWork) && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              {selectedSkills.map(s => (
                <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 12px', background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '999px', fontSize: '12px', fontWeight: 700, color: '#CC2229' }}>
                  {s}
                  <button onClick={() => toggleSkill(s)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#CC2229', lineHeight: 1, padding: 0 }}><X size={11} /></button>
                </span>
              ))}
              {selectedCountry && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 12px', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '999px', fontSize: '12px', fontWeight: 700, color: '#2563EB' }}>
                  <MapPin size={11} /> {selectedCountry}
                  <button onClick={() => setSelectedCountry('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2563EB', lineHeight: 1, padding: 0 }}><X size={11} /></button>
                </span>
              )}
              {selectedAvail && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 12px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '999px', fontSize: '12px', fontWeight: 700, color: '#16A34A' }}>
                  <Clock size={11} /> {AVAILABILITY_LABELS[selectedAvail]}
                  <button onClick={() => setSelectedAvail('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#16A34A', lineHeight: 1, padding: 0 }}><X size={11} /></button>
                </span>
              )}
            </div>
          )}

          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
              {[1,2,3,4,5,6].map(i => (
                <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '24px', height: '220px', animation: 'pulse 1.5s ease-in-out infinite' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#F3F4F6', marginBottom: '12px' }} />
                  <div style={{ height: '14px', background: '#F3F4F6', borderRadius: '6px', marginBottom: '8px', width: '60%' }} />
                  <div style={{ height: '12px', background: '#F3F4F6', borderRadius: '6px', marginBottom: '6px', width: '80%' }} />
                  <div style={{ height: '12px', background: '#F3F4F6', borderRadius: '6px', width: '40%' }} />
                </div>
              ))}
            </div>
          ) : workers.length === 0 ? (
            <div style={{ background: '#fff', borderRadius: '16px', padding: '64px 32px', textAlign: 'center' }}>
              <Users size={40} color="#D1D5DB" style={{ margin: '0 auto 16px' }} />
              <div style={{ fontWeight: 700, fontSize: '16px', color: '#0B1628', marginBottom: '6px' }}>No candidates found</div>
              <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '16px' }}>Try adjusting your filters or search term.</p>
              <button onClick={clearAll} style={{ padding: '10px 24px', background: '#CC2229', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                Clear filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
              {workers.map(worker => (
                <WorkerCard key={worker.id} worker={worker} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

function WorkerCard({ worker }: { worker: Worker }) {
  const name  = worker.profiles?.full_name ?? 'Candidate';
  const avail = worker.availability ?? '';
  const availStyle = AVAILABILITY_COLORS[avail] ?? { bg: '#F3F4F6', color: '#6B7280' };
  const skills = (worker.skills ?? []).slice(0, 4);

  return (
    <div style={{
      background: '#fff', borderRadius: '16px', padding: '22px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1.5px solid #F3F4F6',
      display: 'flex', flexDirection: 'column', gap: '14px',
      transition: 'box-shadow 0.2s, transform 0.2s',
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
    >
      {/* Top row: avatar + name + avail badge */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
          background: '#F3F4F6', border: '2px solid #E5E7EB', overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {worker.avatar_url ? (
            <Image src={worker.avatar_url} alt={name} width={52} height={52} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized />
          ) : (
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#9CA3AF' }}>{name[0]?.toUpperCase()}</span>
          )}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: '15px', color: '#0B1628', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {name}
          </div>
          {worker.headline && (
            <div style={{ fontSize: '12px', color: '#6B7280', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {worker.headline}
            </div>
          )}
        </div>
      </div>

      {/* Meta: location, experience */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '12px', color: '#6B7280' }}>
        {worker.current_country && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={11} color="#CC2229" /> {worker.current_country}
          </span>
        )}
        {worker.nationality && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Globe size={11} color="#2563EB" /> {worker.nationality}
          </span>
        )}
        {worker.experience_years && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Briefcase size={11} /> {worker.experience_years} yr{worker.experience_years > 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Skills */}
      {skills.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {skills.map(skill => (
            <span key={skill} style={{ padding: '3px 10px', background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '999px', fontSize: '11px', fontWeight: 700, color: '#CC2229' }}>
              {skill}
            </span>
          ))}
          {(worker.skills?.length ?? 0) > 4 && (
            <span style={{ padding: '3px 10px', background: '#F3F4F6', borderRadius: '999px', fontSize: '11px', fontWeight: 600, color: '#6B7280' }}>
              +{(worker.skills?.length ?? 0) - 4} more
            </span>
          )}
        </div>
      )}

      {/* Bottom: availability + rate + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #F3F4F6' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {avail && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 10px', background: availStyle.bg, borderRadius: '999px', fontSize: '11px', fontWeight: 700, color: availStyle.color }}>
              <Clock size={10} /> {AVAILABILITY_LABELS[avail] ?? avail}
            </span>
          )}
          {worker.hourly_rate_min && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 700, color: '#15803D' }}>
              <DollarSign size={11} color="#16A34A" />
              {worker.rate_currency} {worker.hourly_rate_min}{worker.hourly_rate_max ? `–${worker.hourly_rate_max}` : '+'}/hr
            </span>
          )}
        </div>

        <Link href={`/profile/${worker.id}`} target="_blank" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '8px 16px', background: '#0B1628', color: '#fff',
          borderRadius: '9px', fontWeight: 700, fontSize: '12px', textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}>
          View Profile
        </Link>
      </div>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
        {label}
      </div>
      {children}
    </div>
  );
}

const selectStyle: React.CSSProperties = {
  width: '100%', padding: '8px 10px', border: '1.5px solid #E5E7EB',
  borderRadius: '8px', fontSize: '13px', color: '#374151', background: '#fff',
  outline: 'none', cursor: 'pointer',
};
