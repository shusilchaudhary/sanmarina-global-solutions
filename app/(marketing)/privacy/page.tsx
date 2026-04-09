import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SanMarina Global Solutions',
  description: 'Privacy Policy for SanMarina Global Solutions — how we collect, use, and protect your personal data in accordance with GDPR.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-12 bg-neutral-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-300 bg-primary-900/40 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-neutral prose-lg">
          <div className="space-y-10 text-neutral-700 leading-relaxed">

            <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl text-sm text-blue-800">
              <strong>GDPR Notice:</strong> SanMarina Global Solutions is committed to protecting your personal data in full compliance with the General Data Protection Regulation (EU) 2016/679 (GDPR) and Romanian data protection laws.
            </div>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">1. Who We Are</h2>
              <p>
                SanMarina Global Solutions S.R.L. ("we", "us", or "our") is a licensed international recruitment and IT consulting agency registered in Romania, operating under Romanian labor law and EU regulations. Our registered office is located at Splaiul Unirii 165, Sector 3, Bucharest, Romania.
              </p>
              <p className="mt-2">
                Email: <a href="mailto:info@sanmarinaglobal.eu" className="text-primary-600 hover:underline">info@sanmarinaglobal.eu</a><br />
                Phone: <a href="tel:+40735062451" className="text-primary-600 hover:underline">+40 735 062 451</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">2. What Personal Data We Collect</h2>
              <p>We collect the following categories of personal data:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Identity data:</strong> Full name, date of birth, nationality, passport number</li>
                <li><strong>Contact data:</strong> Email address, phone number, home address</li>
                <li><strong>Professional data:</strong> CV/resume, work experience, education, skills, language proficiency</li>
                <li><strong>Application data:</strong> Job preferences, cover letters, reference contacts</li>
                <li><strong>Technical data:</strong> IP address, browser type, pages visited (via cookies)</li>
                <li><strong>Communication data:</strong> Messages submitted via our contact form</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">3. How We Use Your Data</h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Process and manage job applications on your behalf</li>
                <li>Match your profile with available job opportunities across Europe</li>
                <li>Assist with visa and work permit applications</li>
                <li>Communicate with you about your application status</li>
                <li>Comply with our legal obligations under Romanian and EU labor law</li>
                <li>Improve our website and services</li>
                <li>Send you relevant job alerts and service updates (only with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">4. Legal Basis for Processing</h2>
              <p>We process your personal data based on the following legal grounds:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Consent (Art. 6(1)(a) GDPR):</strong> When you submit a job application or contact form</li>
                <li><strong>Contractual necessity (Art. 6(1)(b) GDPR):</strong> When processing is necessary to provide our recruitment services</li>
                <li><strong>Legal obligation (Art. 6(1)(c) GDPR):</strong> To comply with Romanian labor and immigration laws</li>
                <li><strong>Legitimate interests (Art. 6(1)(f) GDPR):</strong> For fraud prevention and improving our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">5. Data Sharing</h2>
              <p>We may share your data with:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Verified employers:</strong> Only with your explicit consent, for the purpose of job placement</li>
                <li><strong>Government authorities:</strong> Romanian ANOFM, IGAV, and embassy authorities as required for visa processing</li>
                <li><strong>Service providers:</strong> Email, cloud storage, and IT service providers who process data on our behalf under data processing agreements</li>
              </ul>
              <p className="mt-3">We do <strong>not</strong> sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">6. Data Retention</h2>
              <p>We retain your personal data for:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Job applicants:</strong> Up to 2 years from last application, or until you request deletion</li>
                <li><strong>Placed workers:</strong> Duration of employment contract + 5 years for legal compliance</li>
                <li><strong>Contact form submissions:</strong> 12 months</li>
                <li><strong>Website usage data:</strong> 6 months</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">7. Your Rights Under GDPR</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Right of access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to erasure ("right to be forgotten"):</strong> Request deletion of your data</li>
                <li><strong>Right to restriction:</strong> Limit how we use your data</li>
                <li><strong>Right to data portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Right to object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time without affecting prior processing</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at <a href="mailto:info@sanmarinaglobal.eu" className="text-primary-600 hover:underline">info@sanmarinaglobal.eu</a>. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">8. Cookies</h2>
              <p>
                Our website uses essential cookies necessary for the website to function. We do not use advertising or tracking cookies without your consent. By continuing to use our website, you consent to our use of essential cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">9. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include encryption, secure servers, and limited staff access on a need-to-know basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">10. International Transfers</h2>
              <p>
                As an international recruitment agency, we may transfer your data to countries outside the EU/EEA (e.g., Nepal, Philippines, Indonesia) for the purpose of visa processing and employer matching. Such transfers are conducted under appropriate safeguards including Standard Contractual Clauses (SCCs) as per GDPR requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">11. Complaints</h2>
              <p>
                If you believe your data protection rights have been violated, you have the right to lodge a complaint with the Romanian Data Protection Authority (ANSPDCP):
              </p>
              <p className="mt-2 font-medium">
                Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)<br />
                Website: <a href="https://www.dataprotection.ro" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. We encourage you to review this policy periodically.
              </p>
            </section>

            <div className="mt-12 p-6 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm text-neutral-600">
              <p>For any privacy-related questions, contact our Data Protection Officer at <a href="mailto:info@sanmarinaglobal.eu" className="text-primary-600 hover:underline">info@sanmarinaglobal.eu</a></p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
