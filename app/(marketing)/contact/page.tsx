import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with SanMarina Global Agency for recruitment inquiries, IT consulting, or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-700 bg-accent-50 rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-950 mb-4">
            Let&apos;s Work Together
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you&apos;re a worker seeking European opportunities or an
            employer looking for skilled talent, we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <h2 className="text-xl font-display font-semibold text-brand-950 mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-display font-semibold text-brand-950 mb-6">
                  Get in touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-950 mb-1">
                        Office Address
                      </h4>
                      <p className="text-sm text-slate-500">
                        Bucharest, Romania
                        <br />
                        Splaiul Unirii 165, Sector 3
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-950 mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:info@sanmarinaglobal.eu"
                        className="text-sm text-slate-500 hover:text-accent-600 transition-colors"
                      >
                        info@sanmarinaglobal.eu
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-950 mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:+40735062451"
                        className="text-sm text-slate-500 hover:text-accent-600 transition-colors"
                      >
                        +40 735 062 451
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-950 mb-1">
                        Office Hours
                      </h4>
                      <p className="text-sm text-slate-500">
                        Mon – Fri: 9:00 AM – 6:00 PM (EET)
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="w-full h-64 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <div className="text-center text-slate-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                  <p className="text-sm text-slate-600">Office Location Map</p>
                  <p className="text-xs text-slate-400">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
