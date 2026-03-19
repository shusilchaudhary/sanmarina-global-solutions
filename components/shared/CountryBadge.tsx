import { cn } from '@/lib/utils';
import { getCountryFlag } from '@/lib/utils';

interface CountryBadgeProps {
  countryCode: string;
  countryName: string;
  size?: 'sm' | 'md';
  className?: string;
}

export function CountryBadge({
  countryCode,
  countryName,
  size = 'md',
  className,
}: CountryBadgeProps) {
  const flag = getCountryFlag(countryCode);

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 text-blue-400 font-medium',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        className
      )}
    >
      <span className="leading-none">{flag}</span>
      {countryName}
    </span>
  );
}
