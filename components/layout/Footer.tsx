import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';

const quickLinks = [
  { label: 'Home',            href: '/' },
  { label: 'Find Jobs',       href: '/jobs' },
  { label: 'Services',        href: '/services' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'About Us',        href: '/about' },
  { label: 'Blog',            href: '/blog' },
  { label: 'Contact',         href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const branches = [
  { name: 'Head Office', location: 'Bucharest, Romania', address: 'Splaiul Unirii 165, Sector 3' },
];

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-navy-950 text-navy-300 py-16 lg:py-20 overflow-hidden">
      {/* Red shimmer top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />

      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(204,34,41,0.07) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Logo variant="dark" />
            </Link>
            <p className="text-sm leading-relaxed text-navy-300 max-w-sm">
              Bridging Asian talent with European opportunities. Licensed international
              recruitment and technology consulting agency.
            </p>

            {/* License badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy-900 border border-red-600/20 rounded-xl">
              <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 animate-pulse" />
              <span className="text-xs text-red-300 font-semibold">Licensed by Romanian ANOFM</span>
            </div>

            {/* Contact */}
            <div className="space-y-3 pt-1">
              <a href="tel:+40735062451" className="flex items-center gap-3 text-sm text-navy-300 hover:text-red-300 transition-colors group">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                +40 735 062 451
              </a>
              <a href="mailto:info@sanmarinaglobal.eu" className="flex items-center gap-3 text-sm text-navy-300 hover:text-red-300 transition-colors group">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                info@sanmarinaglobal.eu
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { href: 'https://www.facebook.com/sanmarinaglobal', label: 'Facebook', icon: <FacebookIcon /> },
                { href: 'https://www.instagram.com/sanmarinaglobal', label: 'Instagram', icon: <InstagramIcon /> },
                { href: 'https://www.linkedin.com/company/sanmarinaglobal', label: 'LinkedIn', icon: <LinkedInIcon /> },
                { href: 'https://wa.me/40735062451', label: 'WhatsApp', icon: <WhatsAppIcon />, green: true },
              ].map(({ href, label, icon, green }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl bg-navy-800 border border-navy-700 text-navy-400 flex items-center justify-center transition-all hover:-translate-y-0.5 ${
                    green
                      ? 'hover:bg-green-600 hover:border-green-500 hover:text-white'
                      : 'hover:bg-red-600 hover:border-red-500 hover:text-white'
                  }`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-red-400 uppercase tracking-[0.18em] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-red-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-red-500 transition-all duration-300 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-red-400 uppercase tracking-[0.18em] mb-6">
              Legal
            </h3>
            <ul className="space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-red-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-red-500 transition-all duration-300 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <span className="text-xs text-navy-500 font-semibold uppercase tracking-wider">Anti-Trafficking Hotline</span>
                <a href="tel:0800800678" className="block text-sm text-navy-300 hover:text-red-300 transition-colors mt-1 font-semibold">
                  0800 800 678 (free)
                </a>
              </li>
            </ul>
          </div>

          {/* Global Network */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold text-red-400 uppercase tracking-[0.18em] mb-6">
              Global Network
            </h3>
            <div className="space-y-5">
              {branches.map((branch) => (
                <div key={branch.name} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">{branch.name}</p>
                    <p className="text-sm text-navy-400">{branch.location}</p>
                    <p className="text-xs text-navy-500">{branch.address}</p>
                  </div>
                </div>
              ))}

              {/* Warning box */}
              <div className="p-4 bg-navy-900 border border-red-600/20 rounded-2xl text-xs leading-relaxed">
                <p className="font-bold text-red-400 mb-1 flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-red-600/20 flex items-center justify-center text-[10px]">!</span>
                  Fraud Warning
                </p>
                <p className="text-navy-400">
                  We never charge candidates for job placement. Report fraud to{' '}
                  <a href="mailto:info@sanmarinaglobal.eu" className="text-red-400 hover:text-red-300 transition-colors">
                    info@sanmarinaglobal.eu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            © {new Date().getFullYear()} SanMarina Global Solutions S.R.L. All rights reserved. Licensed under Romanian Law No. 156/2000.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-navy-500 hover:text-red-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
