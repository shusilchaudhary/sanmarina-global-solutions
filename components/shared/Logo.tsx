import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <Image
        src="/sanmarinaglobal.png"
        alt="SanMarina Global Solutions"
        width={150}
        height={50}
        className="object-contain"
        priority
        style={{ height: '44px', width: 'auto' }}
      />
    </div>
  );
}
