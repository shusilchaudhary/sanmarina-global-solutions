'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { useTheme } from '@/components/shared/ThemeProvider';

const team = [
  {
    name: 'Andrei Marinescu',
    role: 'Founder & CEO',
    bio: 'Full-stack engineer with 10+ years of experience building scalable web platforms across Europe.',
    avatar: 'https://i.pravatar.cc/300?img=68',
    linkedin: '#',
  },
  {
    name: 'Elena Dumitrescu',
    role: 'Head of Design',
    bio: 'UI/UX specialist passionate about creating beautiful, user-centered digital experiences.',
    avatar: 'https://i.pravatar.cc/300?img=47',
    linkedin: '#',
  },
  {
    name: 'Mihai Popescu',
    role: 'Lead Developer',
    bio: 'React & Node.js expert who loves clean architecture and high-performance applications.',
    avatar: 'https://i.pravatar.cc/300?img=60',
    linkedin: '#',
  },
  {
    name: 'Sofia Radu',
    role: 'Marketing Director',
    bio: 'Digital marketing strategist with a track record of 200%+ growth campaigns for B2B clients.',
    avatar: 'https://i.pravatar.cc/300?img=45',
    linkedin: '#',
  },
  {
    name: 'Cristian Iordache',
    role: 'DevOps Engineer',
    bio: 'Cloud infrastructure specialist ensuring 99.9% uptime and seamless CI/CD pipelines.',
    avatar: 'https://i.pravatar.cc/300?img=52',
    linkedin: '#',
  },
  {
    name: 'Ana Voicu',
    role: 'SEO Specialist',
    bio: 'Data-driven SEO expert who has ranked 50+ websites in competitive international markets.',
    avatar: 'https://i.pravatar.cc/300?img=44',
    linkedin: '#',
  },
];

export function TeamSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-dark-950' : 'bg-white'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-violet-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">Our Team</span>
          <div className="h-0.5 w-12 bg-violet-500" />
        </div>

        <div className="text-center mb-14">
          <h2 className={`font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            The People Behind <span className="text-gradient">Your Success</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A talented team of developers, designers, and marketers dedicated to delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-dark-800 border-zinc-700 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10' : 'bg-white border-zinc-200 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50'}`}>
              <div className="relative h-56 overflow-hidden">
                <Image src={member.avatar} alt={member.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={member.linkedin} className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-violet-500 hover:border-violet-500 transition-all" aria-label={`${member.name} LinkedIn`}>
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className={`text-base font-bold mb-0.5 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{member.name}</h3>
                <p className="text-xs font-semibold text-violet-500 uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
