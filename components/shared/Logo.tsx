import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = '', variant = 'light' }: LogoProps) {
  return (
    <div className={`flex items-center gap-0 ${className}`}>
      {/* Spacer div maintains Navbar height */}
      <div className="relative w-48 h-10 md:w-64 md:h-12 flex items-center">
        {/* Actual image overflowing safely without expanding parent */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[24rem] h-[6rem] md:w-[32rem] md:h-[8rem] pointer-events-none">
          <Image
            src="/make_design.png"
            alt="SanMarina Global Solutions"
            fill
            className="object-contain object-left pointer-events-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
