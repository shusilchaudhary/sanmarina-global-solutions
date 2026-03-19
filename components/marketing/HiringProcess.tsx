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
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_100%_0%,#eff6ff_0%,transparent_50%)] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <SectionHeader
          label="Streamlined Process"
          title="How We Make It Happen"
          description="A transparent, end-to-end process ensuring success for both European employers and global talent."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-20 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-px bg-neutral-200" />
          <div className="hidden lg:block absolute top-10 left-[15%] w-0 h-px bg-primary-600 transition-all duration-1000 group-hover:w-[70%]" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative group text-center lg:text-left">
                
                {/* Number & Icon Bubble */}
                <div className="relative inline-flex mb-8 lg:mx-0 mx-auto">
                  <div className="w-20 h-20 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center relative z-10 group-hover:border-primary-400 group-hover:-translate-y-2 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-600 border-4 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm z-20">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
