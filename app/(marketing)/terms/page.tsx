import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | SanMarina Global Solutions',
  description: 'Terms and conditions for using SanMarina Global Solutions recruitment and IT consulting services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-12 bg-neutral-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-300 bg-primary-900/40 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-neutral-400 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10 text-neutral-700 leading-relaxed">

            <div className="p-5 bg-amber-50 border border-amber-100 rounded-2xl text-sm text-amber-800">
              <strong>Important:</strong> Please read these Terms of Service carefully before using our services. By accessing our website or submitting an application, you agree to be bound by these terms.
            </div>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">1. About SanMarina Global Solutions</h2>
              <p>
                SanMarina Global Solutions S.R.L. is a licensed international recruitment and IT consulting agency registered in Romania. We are authorized to conduct international recruitment activities under Romanian law (Law No. 156/2000 regarding the protection of Romanian citizens working abroad and its related regulations).
              </p>
              <p className="mt-3">
                <strong>Registered Office:</strong> Splaiul Unirii 165, Sector 3, Bucharest, Romania<br />
                <strong>Contact:</strong> info@sanmarinaglobal.eu | +40 735 062 451
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">2. Services We Provide</h2>
              <p>SanMarina Global Solutions provides the following services:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>International job placement and recruitment services for European employers</li>
                <li>Visa and work permit application assistance</li>
                <li>Pre-departure orientation and documentation support</li>
                <li>Travel and relocation coordination</li>
                <li>IT consulting and software development services</li>
                <li>Compliance and legal support related to international employment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">3. Candidate Obligations</h2>
              <p>As a job candidate using our services, you agree to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide accurate, complete, and up-to-date information in all applications and documents</li>
                <li>Submit only genuine documents — submission of forged or fraudulent documents is a criminal offence</li>
                <li>Cooperate fully in the visa and work permit application process</li>
                <li>Disclose any criminal record, health conditions, or other factors that may affect your eligibility to work abroad</li>
                <li>Not pay any recruitment fees — our services to candidates are <strong>free of charge</strong> as required by Romanian law and ILO conventions</li>
                <li>Comply with the laws and regulations of the destination country</li>
                <li>Fulfill the terms of your employment contract with the employer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">4. No Recruitment Fees</h2>
              <div className="p-5 bg-green-50 border border-green-200 rounded-2xl">
                <p className="font-semibold text-green-800">
                  SanMarina Global Solutions does NOT charge any fees to job seekers or candidates for recruitment services. Our services to workers are completely free.
                </p>
                <p className="mt-2 text-green-700 text-sm">
                  If anyone claims to represent SanMarina Global Solutions and asks you to pay money to secure a job, please report it immediately to info@sanmarinaglobal.eu or the Romanian Police.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">5. Employer Obligations</h2>
              <p>Employers using our services agree to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide accurate and truthful job descriptions, salary information, and working conditions</li>
                <li>Comply with all applicable employment laws in the destination country</li>
                <li>Provide safe working and living conditions as described in the job offer</li>
                <li>Pay agreed salaries on time and in full as per the employment contract</li>
                <li>Not engage in any practices of forced labor, human trafficking, or worker exploitation</li>
                <li>Pay our agreed service fees as per the employer agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">6. Visa & Work Permit Disclaimer</h2>
              <p>
                While we provide assistance with visa and work permit applications, SanMarina Global Solutions cannot guarantee visa approval, as final decisions rest solely with the relevant embassy or immigration authority. Our 98% visa success rate applies to genuine, complete, and eligible applications.
              </p>
              <p className="mt-3">
                We are not liable for visa refusals caused by:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Incomplete or inaccurate information provided by the candidate</li>
                <li>Changes in immigration policy</li>
                <li>Criminal history or prior immigration violations</li>
                <li>Medical inadmissibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">7. Limitation of Liability</h2>
              <p>
                SanMarina Global Solutions acts as an intermediary between job seekers and employers. We are not a party to the employment contract between the worker and employer. Our liability is limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Acting in good faith in the placement process</li>
                <li>Verifying employer credentials to the best of our ability</li>
                <li>Providing accurate information about job roles as supplied by employers</li>
              </ul>
              <p className="mt-3">
                We are not liable for any actions, omissions, or disputes arising from the employment relationship after placement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">8. Intellectual Property</h2>
              <p>
                All content on this website including text, images, logos, and branding is the property of SanMarina Global Solutions S.R.L. and is protected by copyright law. You may not reproduce, distribute, or use our content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">9. Anti-Fraud & Anti-Trafficking Policy</h2>
              <p>
                SanMarina Global Solutions has zero tolerance for human trafficking, forced labor, or any form of worker exploitation. We are committed to the ethical recruitment principles of the ILO and operate in full compliance with Romanian anti-trafficking laws (Law No. 678/2001).
              </p>
              <p className="mt-3">
                If you suspect trafficking or fraud associated with our name, please contact:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Romanian Anti-Trafficking National Agency (ANITP): 0800 800 678 (free, 24/7)</li>
                <li>Our office directly: info@sanmarinaglobal.eu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">10. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with Romanian law and applicable EU regulations. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bucharest, Romania.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-neutral-950 mb-4">11. Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <div className="mt-12 p-6 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm text-neutral-600">
              <p>For questions about these Terms, contact us at <a href="mailto:info@sanmarinaglobal.eu" className="text-primary-600 hover:underline">info@sanmarinaglobal.eu</a> or call <a href="tel:+40735062451" className="text-primary-600 hover:underline">+40 735 062 451</a>.</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
