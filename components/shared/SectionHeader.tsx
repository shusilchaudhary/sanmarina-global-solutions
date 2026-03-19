import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto' : 'text-left'
      )}
    >
      <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full mb-6 text-primary-700 bg-primary-50 border border-primary-100">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6 text-neutral-900">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed text-neutral-500',
            align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-2xl'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
