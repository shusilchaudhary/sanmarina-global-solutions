import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Find Jobs', href: '/#recruitment' },
  { label: 'IT Services', href: '/#it-consulting' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const branches = [
  { name: 'Head Office', location: 'Bucharest, Romania' },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-16 lg:py-20 border-t border-neutral-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Logo variant="dark" />
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
              Bridging Asian talent with European opportunities. Licensed
              international recruitment and technology consulting agency.
            </p>
            <div className="space-y-3 pt-2">
              <a href="tel:+40735062451" className="flex items-center gap-3 text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                +40 735 062 451
              </a>
              <a href="mailto:info@sanmarinaglobal.eu" className="flex items-center gap-3 text-sm text-neutral-400 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                info@sanmarinaglobal.eu
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Platform
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Branches */}
          <div className="lg:col-span-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Global Network
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {branches.map((branch) => (
                <div key={branch.name} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white mb-1">{branch.name}</p>
                    <p className="text-sm text-neutral-500">{branch.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} SanMarina Global Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
