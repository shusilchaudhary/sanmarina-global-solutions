import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = '', variant = 'light' }: LogoProps) {
  const textColor = variant === 'dark' ? '#ffffff' : '#09090b';
  const accentColor = '#8B5CF6';

  return (
    <div className={`flex items-center gap-2.5 shrink-0 ${className}`}>
      <Image
        src="/sanmarina_global_logo.png"
        alt="SanMarina Global Solutions"
        width={36}
        height={36}
        className="rounded-lg object-contain"
        priority
      />
      <div style={{ lineHeight: 1.1 }}>
        <span style={{
          fontFamily: 'var(--font-outfit), Outfit, sans-serif',
          fontSize: '18px',
          fontWeight: 800,
          color: textColor,
          letterSpacing: '-0.03em',
          display: 'block',
        }}>
          SanMarina
        </span>
        <span style={{
          fontFamily: 'var(--font-inter), Inter, sans-serif',
          fontSize: '10px',
          fontWeight: 600,
          color: accentColor,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          display: 'block',
        }}>
          Global Solutions
        </span>
      </div>
    </div>
  );
}
