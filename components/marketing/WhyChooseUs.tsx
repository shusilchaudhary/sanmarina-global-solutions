import { SectionHeader } from '@/components/shared/SectionHeader';
import { Globe, ShieldCheck, Zap, HeartHandshake, Briefcase, FileCheck } from 'lucide-react';

const reasons = [
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Access an extensive network of verified employers across 15+ European countries.'
  },
  {
    icon: ShieldCheck,
    title: 'Verified Talent',
    desc: 'Every candidate undergoes rigorous screening, skills assessment, and background checks.'
  },
  {
    icon: Zap,
    title: 'Fast Deployment',
    desc: 'Streamlined visa and relocation processes to get workers on-site in record time.'
  },
  {
    icon: FileCheck,
    title: 'Legal Compliance',
    desc: 'Fully licensed agency ensuring 100% compliance with Asian and EU labor laws.'
  },
  {
    icon: HeartHandshake,
    title: 'End-to-End Support',
    desc: 'From initial interview to airport pickup and post-arrival ongoing support.'
  },
  {
    icon: Briefcase,
    title: 'Industry Expertise',
    desc: 'Specialized recruiters matching the right skills to construction, logistics, and IT sectors.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 section-light border-y border-neutral-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader
          label="Why SanMarina Global"
          title="The Premier Choice for Global Staffing"
          description="We do more than just match resumes with job descriptions. We build successful, long-term international careers and teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-primary-300 transition-colors group shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
