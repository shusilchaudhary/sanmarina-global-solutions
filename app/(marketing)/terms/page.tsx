import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | SanMarina Global Solutions',
  description: 'Terms of Service for SanMarina Global Solutions — the terms governing our IT and digital services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-40 pb-12 bg-neutral-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300 bg-violet-500/15 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-zinc-400 text-sm">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10 text-zinc-700 leading-relaxed text-[15px]">

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">1. Introduction</h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website and services provided by SanMarina Global Solutions S.R.L. (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a full-service IT and digital solutions company registered in Romania with its office at Splaiul Unirii 165, Sector 3, Bucharest, Romania.
              </p>
              <p className="mt-2">
                By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">2. Services We Provide</h2>
              <p>SanMarina Global Solutions offers the following digital services:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Web Development (websites, web apps, e-commerce, SaaS platforms)</li>
                <li>Mobile App Development (iOS, Android, cross-platform)</li>
                <li>Digital Marketing (social media, PPC, email campaigns, content marketing)</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Graphic Design (branding, UI/UX, print materials)</li>
                <li>Video Editing &amp; Post-Production</li>
                <li>AI Video Generation</li>
                <li>AI Automation (intelligent workflows, chatbots, and AI agents)</li>
              </ul>
              <p className="mt-3">
                The specific scope, timeline, and deliverables for each engagement are defined in a separate project proposal or service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">3. Engagement &amp; Payments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All projects begin after a signed proposal or service agreement and receipt of the agreed deposit (if applicable).</li>
                <li>Payment terms, milestones, and schedules are specified in each individual project agreement.</li>
                <li>We accept bank transfer, credit/debit cards, and other agreed payment methods.</li>
                <li>Late payments may result in project suspension until outstanding balances are settled.</li>
                <li>All prices are quoted in EUR unless otherwise specified and are exclusive of VAT where applicable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upon full payment, the client receives full ownership of all custom deliverables (code, designs, content) created specifically for their project, unless otherwise stated in the agreement.</li>
                <li>We retain the right to use general-purpose code, frameworks, libraries, and tools across projects.</li>
                <li>We reserve the right to showcase completed work in our portfolio unless the client requests confidentiality in writing.</li>
                <li>Third-party assets (fonts, stock images, plugins) remain subject to their respective licenses.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">5. Client Responsibilities</h2>
              <p>To ensure timely and successful delivery, clients agree to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide accurate project requirements, content, and assets in a timely manner</li>
                <li>Respond to review requests and provide feedback within agreed timeframes</li>
                <li>Ensure they have the rights to all content and materials provided to us</li>
                <li>Designate a primary point of contact for project communication</li>
              </ul>
              <p className="mt-3">Delays caused by late client input may extend project timelines accordingly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">6. Revisions &amp; Scope Changes</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Each project includes a defined number of revision rounds as specified in the agreement.</li>
                <li>Additional revisions or changes outside the original scope constitute a change request and may incur additional costs.</li>
                <li>We will notify you of any cost implications before proceeding with scope changes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">7. Warranties &amp; Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We warrant that all deliverables will be of professional quality and substantially conform to the agreed specifications.</li>
                <li>We provide 30 days of free bug-fix support after project completion for issues caused by our code.</li>
                <li>We are not liable for issues arising from third-party services, client-provided content, unauthorized modifications, or force majeure events.</li>
                <li>Our total liability for any claim shall not exceed the total fees paid for the specific project in question.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">8. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential all proprietary information, trade secrets, business strategies, and technical details shared during the engagement. This obligation survives the termination of the agreement for a period of 2 years.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">9. Termination</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Either party may terminate the engagement with 14 days&apos; written notice.</li>
                <li>The client is responsible for payment for all work completed up to the termination date.</li>
                <li>Upon termination and full payment, we will deliver all completed work and project files.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">10. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of Romania. Any disputes shall be resolved through the courts of Bucharest, Romania, unless both parties agree to mediation or arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">11. Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Changes take effect upon posting to this page. Continued use of our services constitutes acceptance of the updated Terms.
              </p>
            </section>

            <div className="mt-12 p-6 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm text-zinc-600">
              <p>For questions about these Terms, contact us at <a href="mailto:info@sanmarinaglobal.eu" className="text-violet-600 hover:underline">info@sanmarinaglobal.eu</a></p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
