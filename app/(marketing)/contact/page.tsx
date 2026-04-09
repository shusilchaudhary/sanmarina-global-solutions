import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with SanMarina Global Agency for recruitment inquiries, IT consulting, or partnership opportunities.',
};

const contactItems = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Splaiul Unirii 165, Sector 3\nBucharest, Romania',
    href: undefined,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@sanmarinaglobal.eu',
    href: 'mailto:info@sanmarinaglobal.eu',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+40 735 062 451',
    href: 'tel:+40735062451',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri: 9:00 AM – 6:00 PM (EET)\nSaturday – Sunday: Closed',
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-navy-950 pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 30% 30%, rgba(204,34,41,0.12) 0%, transparent 65%)' }} />

        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] rounded-full mb-5 text-red-300 bg-red-600/10 border border-red-600/25 mt-4">
            Contact Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Let&apos;s <span className="text-red-gradient">Work Together</span>
          </h1>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a worker seeking European opportunities or an employer looking for skilled talent, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Gradient bridge */}
      <div className="h-12 bg-gradient-to-b from-navy-900 to-white" />

      {/* ── Main Content ── */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* ── Contact Form (dark card) ── */}
            <div className="relative overflow-hidden rounded-3xl bg-navy-900 border border-red-600/20 p-8 md:p-10 shadow-[0_8px_60px_rgba(0,0,0,0.35)]">
              {/* Glow accents */}
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle at 100% 0%, rgba(204,34,41,0.10) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle at 0% 100%, rgba(37,99,235,0.10) 0%, transparent 60%)' }} />

              <h2 className="font-display text-2xl font-bold text-white mb-8 relative z-10">
                Send us a message
              </h2>
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>

            {/* ── Contact Info ── */}
            <div className="space-y-8">
              <h2 className="font-display text-xl font-bold text-navy-900">Get in touch</h2>

              <div className="space-y-5">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-neutral-200 shadow-sm hover:border-red-200 hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-red-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 mb-1">{label}</h4>
                      {href ? (
                        <a href={href} className="text-sm text-neutral-500 hover:text-red-600 transition-colors whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-neutral-500 whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps embed */}
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.1118!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4b70001d55%3A0x1234!2sSplaiul+Unirii+165%2C+Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1680000000000!5m2!1sen!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SanMarina Global Solutions Office — Splaiul Unirii 165, Bucharest"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
