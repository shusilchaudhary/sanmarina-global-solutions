'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { Logo } from '@/components/shared/Logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Recruitment', href: '/recruitment' },
  { label: 'IT Consulting', href: '/it-consulting' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200 py-3 shadow-sm' : 'bg-transparent py-5'
        )}
      >
        <nav className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
            <Logo variant="light" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-neutral-600 hover:text-primary-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
               href="/contact"
               className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
             >
               Get Consultation
             </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-neutral-600 hover:text-primary-600 transition-colors rounded-lg hover:bg-neutral-100"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
