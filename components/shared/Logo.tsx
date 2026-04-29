interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = '', variant = 'light' }: LogoProps) {
  const textColor = variant === 'dark' ? '#ffffff' : '#09090b';
  const accentColor = '#8B5CF6';

  return (
    <div className={`flex items-center gap-2.5 shrink-0 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="10" fill="url(#logo-grad)" />
        <path d="M10 18L14 14L18 18L22 14L26 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 22L14 18L18 22L22 18L26 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
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
