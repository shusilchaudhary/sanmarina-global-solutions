'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/shared/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string; children?: { label: string; href: string }[] }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className={cn(
        'fixed inset-0 z-[60] lg:hidden transition-all duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-900/50 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div
        className={cn(
          'absolute right-0 top-0 h-full w-[85%] max-w-sm shadow-2xl transition-transform duration-400 flex flex-col',
          'bg-white border-l border-neutral-200',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-100 mb-2 mt-1">
          <Link href="/" onClick={onClose} className="shrink-0">
            <Logo variant="light" className="scale-90 origin-left" />
          </Link>
          <button
            onClick={onClose}
            className="p-2 -mr-1 text-navy-500 hover:text-red-600 transition-colors rounded-xl hover:bg-red-50"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {links.map((link) =>
              link.children ? (
                <li key={link.label} className="py-2">
                  <span className="block px-4 py-1.5 text-[10px] font-bold text-red-600 uppercase tracking-[0.2em]">
                    {link.label}
                  </span>
                  <ul className="mt-2 space-y-1 pl-2 border-l-2 border-red-200 ml-4">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block px-4 py-3 text-base font-semibold text-navy-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block px-4 py-3.5 text-lg font-semibold text-navy-800 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* CTA */}
        <div className="p-5 border-t border-neutral-100 mt-auto">
          <Link
            href="/contact"
            onClick={onClose}
            className="btn-red w-full text-base"
          >
            Get Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
