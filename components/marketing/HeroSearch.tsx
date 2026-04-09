'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Briefcase } from 'lucide-react';

const countries = ['All Countries', 'Romania', 'Poland', 'Croatia', 'Hungary', 'Malta'];
const categories = ['All Categories', 'Hospitality', 'Construction', 'Logistics', 'Agriculture', 'Healthcare', 'IT'];

export function HeroSearch() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [country, setCountry] = useState('All Countries');
  const [category, setCategory] = useState('All Categories');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword) params.set('q', keyword);
    if (country !== 'All Countries') params.set('country', country);
    if (category !== 'All Categories') params.set('category', category.toLowerCase());
    router.push(`/jobs${params.toString() ? `?${params}` : ''}`);
  };

  return (
    <form onSubmit={handleSearch} style={{
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
      padding: '8px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0',
      width: '100%',
      maxWidth: '860px',
    }}>
      {/* Keyword */}
      <div style={{
        flex: '1 1 220px',
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '12px 18px',
        borderRight: '1px solid #E5E7EB',
      }}>
        <Search size={18} color="#CC2229" style={{ flexShrink: 0 }} />
        <input
          type="text"
          placeholder="Job title or keyword..."
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          style={{
            border: 'none', outline: 'none', width: '100%',
            fontSize: '15px', fontWeight: 500, color: '#111827',
            background: 'transparent',
          }}
        />
      </div>

      {/* Country */}
      <div style={{
        flex: '1 1 160px',
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '12px 18px',
        borderRight: '1px solid #E5E7EB',
      }}>
        <MapPin size={17} color="#6B7280" style={{ flexShrink: 0 }} />
        <select
          value={country}
          onChange={e => setCountry(e.target.value)}
          style={{
            border: 'none', outline: 'none', width: '100%',
            fontSize: '15px', fontWeight: 500, color: '#374151',
            background: 'transparent', cursor: 'pointer', appearance: 'none',
          }}
        >
          {countries.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      {/* Category */}
      <div style={{
        flex: '1 1 160px',
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '12px 18px',
      }}>
        <Briefcase size={17} color="#6B7280" style={{ flexShrink: 0 }} />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{
            border: 'none', outline: 'none', width: '100%',
            fontSize: '15px', fontWeight: 500, color: '#374151',
            background: 'transparent', cursor: 'pointer', appearance: 'none',
          }}
        >
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      {/* Button */}
      <button type="submit" style={{
        flexShrink: 0,
        padding: '14px 32px',
        background: 'linear-gradient(135deg, #CC2229, #a81b21)',
        color: '#fff',
        fontWeight: 700,
        fontSize: '15px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'opacity 0.2s',
        margin: '2px',
      }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        Search Jobs
      </button>
    </form>
  );
}
