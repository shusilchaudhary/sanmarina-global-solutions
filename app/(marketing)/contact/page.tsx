import Image from 'next/image';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with SanMarina Global Solutions for web development, app development, digital marketing, SEO, or AI video generation inquiries.',
};

const contactItems = [
  { icon: MapPin, label: 'Romania Office', value: 'Splaiul Unirii 165, Sector 3\nBucharest, Romania', href: undefined },
  { icon: MapPin, label: 'Nepal Office',   value: 'Baneshwor\nKathmandu, Nepal', href: undefined },
  { icon: Mail,   label: 'Email',          value: 'info@sanmarinaglobal.eu', href: 'mailto:info@sanmarinaglobal.eu' },
  { icon: Phone,  label: 'Phone',          value: '+40 735 062 451',        href: 'tel:+40735062451' },
  { icon: Clock,  label: 'Office Hours',   value: 'Mon – Fri: 9:00 AM – 6:00 PM (EET)\nSaturday – Sunday: Closed', href: undefined },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-900">

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
            alt="Team meeting in modern workspace"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(160deg, rgba(15,5,30,0.90) 0%, rgba(30,15,60,0.75) 50%, rgba(10,10,20,0.88) 100%)',
          }} />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center pt-44 pb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] rounded-full mb-5 text-violet-300 bg-violet-500/15 border border-violet-400/25 backdrop-blur-sm">
            Contact Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Let&apos;s <span className="text-gradient-warm">Work Together</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#a1a1aa' }}>
            Have a project in mind? Need a website, app, or marketing strategy? Reach out and let&apos;s discuss how we can help.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Form */}
            <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-700 p-8 md:p-10 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-zinc-100 mb-8">
                Send us a message
              </h2>
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <h2 className="font-display text-xl font-bold text-zinc-100">Get in touch</h2>

              <div className="space-y-5">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="card-white flex items-start gap-4 p-5 group">
                    <div className="w-10 h-10 rounded-xl bg-dark-900 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-600 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-violet-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-100 mb-1">{label}</h4>
                      {href ? (
                        <a href={href} className="text-sm text-zinc-500 hover:text-violet-600 transition-colors whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-zinc-500 whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Romania</p>
                  <div className="w-full h-52 rounded-2xl overflow-hidden border border-zinc-700 shadow-sm">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.1118!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4b70001d55%3A0x1234!2sSplaiul+Unirii+165%2C+Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1680000000000!5m2!1sen!2sro"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SanMarina Global Solutions — Bucharest, Romania"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Nepal</p>
                  <div className="w-full h-52 rounded-2xl overflow-hidden border border-zinc-700 shadow-sm">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2!2d85.3240!3d27.6939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a3d4a8b8e7%3A0x1234!2sBaneshwor%2C+Kathmandu!5e0!3m2!1sen!2snp!4v1680000000000!5m2!1sen!2snp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SanMarina Global Solutions — Baneshwor, Kathmandu"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
