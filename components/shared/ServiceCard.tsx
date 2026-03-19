import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Users,
  FileCheck,
  Monitor,
  ShieldCheck,
  Plane,
  Globe,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Users,
  FileCheck,
  Monitor,
  ShieldCheck,
  Plane,
  Globe,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  features,
  className,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Globe;

  return (
    <Link
      href={href}
      className={cn(
        'group relative block p-6 rounded-2xl bg-white border border-slate-200 shadow-sm',
        'hover:border-brand-300 hover:shadow-md transition-all duration-300',
        'hover:shadow-[0_4px_20px_rgba(10,25,47,0.08)]',
        className
      )}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
        <Icon className="w-6 h-6 text-brand-600" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-display font-semibold text-brand-950 mb-2 group-hover:text-brand-700 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-1.5">
          {features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-slate-500"
            >
              <span className="w-1 h-1 rounded-full bg-brand-500 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Arrow indicator */}
      <span className="absolute top-6 right-6 text-slate-400 group-hover:text-brand-600 transition-colors text-lg">
        →
      </span>
    </Link>
  );
}
