import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SanMarina Global Solutions',
  description: 'Privacy Policy for SanMarina Global Solutions — how we collect, use, and protect your personal data in accordance with GDPR.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40 pb-12 bg-neutral-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300 bg-violet-500/15 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10 text-zinc-700 leading-relaxed text-[15px]">

            <div className="p-5 bg-violet-50 border border-violet-100 rounded-2xl text-sm text-violet-800">
              <strong>GDPR Notice:</strong> SanMarina Global Solutions is committed to protecting your personal data in full compliance with the General Data Protection Regulation (EU) 2016/679 (GDPR) and Romanian data protection laws.
            </div>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">1. Who We Are</h2>
              <p>
                SanMarina Global Solutions S.R.L. (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a full-service IT and digital solutions company registered in Romania. We specialize in web development, app development, digital marketing, SEO, graphic design, video editing, and AI video generation. Our registered office is located at Splaiul Unirii 165, Sector 3, Bucharest, Romania.
              </p>
              <p className="mt-2">
                Email: <a href="mailto:info@sanmarinaglobal.eu" className="text-violet-600 hover:underline">info@sanmarinaglobal.eu</a><br />
                Phone: <a href="tel:+40735062451" className="text-violet-600 hover:underline">+40 735 062 451</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">2. What Personal Data We Collect</h2>
              <p>We collect the following categories of personal data:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Contact data:</strong> Name, email address, phone number, company name</li>
                <li><strong>Project data:</strong> Project briefs, requirements, files shared via our contact form or consultations</li>
                <li><strong>Technical data:</strong> IP address, browser type, device information, pages visited</li>
                <li><strong>Communication data:</strong> Messages submitted via our contact form, email, or WhatsApp</li>
                <li><strong>Payment data:</strong> Billing address and payment details (processed securely by third-party payment providers)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">3. How We Use Your Data</h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to inquiries and provide project consultations</li>
                <li>Deliver contracted services (development, design, marketing, SEO)</li>
                <li>Send project updates, invoices, and deliverables</li>
                <li>Improve our website experience and service offerings</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Send service updates and company news (only with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">4. Legal Basis for Processing</h2>
              <p>We process your personal data based on the following legal grounds:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Consent (Art. 6(1)(a) GDPR):</strong> When you submit a contact form or subscribe to updates</li>
                <li><strong>Contractual necessity (Art. 6(1)(b) GDPR):</strong> When processing is necessary to deliver our IT and digital services</li>
                <li><strong>Legal obligation (Art. 6(1)(c) GDPR):</strong> To comply with Romanian tax and business laws</li>
                <li><strong>Legitimate interests (Art. 6(1)(f) GDPR):</strong> For fraud prevention, analytics, and improving our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">5. Data Sharing</h2>
              <p>We may share your data with:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Service providers:</strong> Hosting (Vercel, AWS), email delivery (Resend), analytics, and cloud storage providers who process data on our behalf under data processing agreements</li>
                <li><strong>Payment processors:</strong> Secure third-party payment services for billing purposes</li>
                <li><strong>Legal authorities:</strong> When required by Romanian or EU law</li>
              </ul>
              <p className="mt-3">We do <strong>not</strong> sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">6. Data Retention</h2>
              <p>We retain your personal data for:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Client project data:</strong> Duration of engagement + 3 years for legal and warranty purposes</li>
                <li><strong>Contact form submissions:</strong> 12 months</li>
                <li><strong>Invoices and financial records:</strong> 10 years (Romanian fiscal law)</li>
                <li><strong>Website usage data:</strong> 6 months</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">7. Your Rights Under GDPR</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Right of access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to erasure:</strong> Request deletion of your data</li>
                <li><strong>Right to restriction:</strong> Limit how we use your data</li>
                <li><strong>Right to data portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Right to object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at <a href="mailto:info@sanmarinaglobal.eu" className="text-violet-600 hover:underline">info@sanmarinaglobal.eu</a>. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">8. Cookies</h2>
              <p>
                Our website uses essential cookies necessary for the website to function. We do not use advertising or tracking cookies without your consent. By continuing to use our website, you consent to our use of essential cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">9. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include encryption (TLS/SSL), secure cloud infrastructure, access control, and regular security audits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">10. Complaints</h2>
              <p>
                If you believe your data protection rights have been violated, you have the right to lodge a complaint with the Romanian Data Protection Authority (ANSPDCP):
              </p>
              <p className="mt-2 font-medium">
                Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)<br />
                Website: <a href="https://www.dataprotection.ro" className="text-violet-600 hover:underline" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.
              </p>
            </section>

            <div className="mt-12 p-6 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm text-zinc-600">
              <p>For any privacy-related questions, contact us at <a href="mailto:info@sanmarinaglobal.eu" className="text-violet-600 hover:underline">info@sanmarinaglobal.eu</a></p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
