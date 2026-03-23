import { SectionHeader } from '@/components/shared/SectionHeader';
import { 
  Building2, HardHat, Wrench, Package, 
  Cloud, Code, ShieldCheck, Database 
} from 'lucide-react';

const recruitmentServices = [
  { icon: HardHat, title: 'Construction', desc: 'Skilled masons, carpenters, and construction workers for European projects.' },
  { icon: Package, title: 'Logistics & Delivery', desc: 'Drivers, warehouse staff, and delivery riders for fast-paced logistics.' },
  { icon: Wrench, title: 'Manufacturing', desc: 'Factory workers, machine operators, and assembly line staff.' },
  { icon: Building2, title: 'Hospitality', desc: 'Chefs, waiters, cleaners, and hotel staff with international experience.' },
];

const itServices = [
  { icon: Code, title: 'Custom Software Dev', desc: 'Modern web and mobile applications tailored to your business needs.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Scalable AWS, Azure, and Google Cloud infrastructure setup and management.' },
  { icon: Database, title: 'Data & AI', desc: 'Data engineering, analytics, and intelligent automation solutions.' },
  { icon: ShieldCheck, title: 'Cybersecurity', desc: 'Vulnerability assessments, compliance, and secure architecture design.' },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* RECRUITMENT BLOCK */}
        <div id="recruitment" className="mb-24 lg:mb-32 scroll-mt-24">
          <SectionHeader
            label="Global Recruitment"
            title="Reliable European Workforce Solutions"
            description="We supply pre-screened, dedicated talent from Asia to fulfill your business demands across Europe, specializing in high-turnover sectors."
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruitmentServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="premium-card p-8 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-6 text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* IT CONSULTING BLOCK */}
        <div id="it-consulting" className="scroll-mt-24">
          <SectionHeader
            label="IT Consulting"
            title="Enterprise Technology & Software"
            description="Accelerate your digital transformation with our expert IT consulting and dedicated development teams."
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="premium-card p-8 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 text-slate-700 group-hover:scale-110 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
