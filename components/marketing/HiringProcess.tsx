import { SectionHeader } from '@/components/shared/SectionHeader';
import { UserPlus, Search, FileCheck, Plane } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Consultation & Registration',
    description: 'Create your profile or consult with our team to identify your hiring needs and criteria.',
  },
  {
    icon: Search,
    title: 'Talent Sourcing & Matching',
    description: 'We match skilled candidates with verified employers through rigorous screening and interviews.',
  },
  {
    icon: FileCheck,
    title: 'Visa & Documentation',
    description: 'Our legal experts handle all work permit, embassy, and visa documentation seamlessly.',
  },
  {
    icon: Plane,
    title: 'Deployment & Support',
    description: 'Full relocation support including flights, accommodation setup, and post-arrival orientation.',
  },
];

export function HiringProcess() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(204,34,41,0.04) 0%, transparent 70%)' }} />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-red-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">Streamlined Process</span>
          <div className="h-0.5 w-12 bg-red-500" />
        </div>

        <SectionHeader
          label=""
          title="How We Make It Happen"
          description="A transparent, end-to-end process ensuring success for both European employers and global talent."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mt-20 relative">

          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[calc(12.5%+40px)] right-[calc(12.5%+40px)] h-0.5 bg-gradient-to-r from-red-200 via-red-100 to-red-200" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative group text-center lg:text-left">

                {/* Icon + number */}
                <div className="relative inline-flex mb-8 lg:mx-0 mx-auto">
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-red-100 shadow-[0_4px_24px_rgba(204,34,41,0.12)] flex items-center justify-center relative z-10 group-hover:border-red-400 group-hover:-translate-y-3 group-hover:shadow-[0_12px_40px_rgba(204,34,41,0.2)] transition-all duration-400">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-700 border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-lg z-20">
                    {index + 1}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Red bottom line on hover */}
                <div className="mt-4 h-0.5 w-0 bg-red-500 group-hover:w-12 transition-all duration-500 rounded-full mx-auto lg:mx-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
