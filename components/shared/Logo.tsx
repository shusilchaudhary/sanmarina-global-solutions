import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <Image
        src="/sanmarina_global_logo.png"
        alt="SanMarina Global Solutions"
        width={400}
        height={105}
        quality={100}
        className="w-auto object-contain"
        style={{ height: '104px' }}
        priority
      />
    </div>
  );
}
