import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Users, FileCheck, Monitor, ShieldCheck, Plane, Globe, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = { Users, FileCheck, Monitor, ShieldCheck, Plane, Globe };

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({ icon, title, description, href, features, className }: ServiceCardProps) {
  const Icon = iconMap[icon] || Globe;

  return (
    <Link href={href} className={cn('group relative block card-white p-6', className)}>
      <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4 group-hover:bg-violet-600 group-hover:border-violet-600 transition-all duration-300">
        <Icon className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-lg font-display font-semibold text-zinc-900 mb-2 group-hover:text-violet-700 transition-colors">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed mb-4">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-1.5">
          {features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="w-1 h-1 rounded-full bg-violet-500 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <span className="absolute top-6 right-6 text-zinc-400 group-hover:text-violet-600 transition-colors text-lg">&rarr;</span>
    </Link>
  );
}
