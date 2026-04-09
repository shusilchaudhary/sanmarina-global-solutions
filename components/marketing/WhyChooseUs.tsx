'use client';

import { SectionHeader } from '@/components/shared/SectionHeader';
import { Globe, ShieldCheck, Zap, HeartHandshake, Briefcase, FileCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/utils';

const reasons = [
  { icon: Globe,          title: 'Global Reach',        desc: 'Access an extensive network of verified employers across 15+ European countries.' },
  { icon: ShieldCheck,    title: 'Verified Talent',     desc: 'Every candidate undergoes rigorous screening, skills assessment, and background checks.' },
  { icon: Zap,            title: 'Fast Deployment',     desc: 'Streamlined visa and relocation processes to get workers on-site in record time.' },
  { icon: FileCheck,      title: 'Legal Compliance',    desc: 'Fully licensed agency ensuring 100% compliance with Asian and EU labour laws.' },
  { icon: HeartHandshake, title: 'End-to-End Support',  desc: 'From initial interview to airport pickup and post-arrival ongoing support.' },
  { icon: Briefcase,      title: 'Industry Expertise',  desc: 'Specialist recruiters matching the right skills to construction, logistics, and IT sectors.' },
];

function ReasonCard({
  icon: Icon, title, desc, stagger,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  stagger: number;
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>({ threshold: 0.08 });
  return (
    <div
      ref={ref}
      className={cn(
        'bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-[0_2px_16px_rgba(11,22,40,0.05)] hover:shadow-[0_8px_40px_rgba(204,34,41,0.12)] hover:border-red-200 transition-all duration-400 group cursor-default reveal-hidden',
        `reveal-stagger-${stagger}`,
        revealed && 'reveal-visible'
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-navy-900 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
      <p className="text-neutral-500 leading-relaxed text-sm">{desc}</p>
      <div className="mt-5 h-0.5 w-0 bg-red-500 group-hover:w-10 transition-all duration-500 rounded-full" />
    </div>
  );
}

export function WhyChooseUs() {
  const { ref: headRef, revealed: headRevealed } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-neutral-50 border-y border-neutral-200">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 0% 0%, rgba(204,34,41,0.05) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 100% 100%, rgba(37,99,235,0.05) 0%, transparent 60%)' }} />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        <div
          ref={headRef}
          className={cn('reveal-hidden', headRevealed && 'reveal-visible')}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-red-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">Why SanMarina Global</span>
            <div className="h-0.5 w-12 bg-red-500" />
          </div>
          <SectionHeader
            label=""
            title="The Premier Choice for Global Staffing"
            description="We do more than match résumés with job descriptions. We build successful, long-term international careers and teams."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mt-14">
          {reasons.map((reason, i) => (
            <ReasonCard
              key={reason.title}
              icon={reason.icon}
              title={reason.title}
              desc={reason.desc}
              stagger={((i % 3) + 1) as 1 | 2 | 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
