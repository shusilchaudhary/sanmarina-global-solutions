import Link from 'next/link';
import { ArrowRight, Globe, Clock, User } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Insights | SanMarina Global',
  description:
    'Expert advice, visa guides, and industry news for international recruitment and European work opportunities from SanMarina Global Solutions.',
};

const articles = [
  {
    slug: 'how-to-get-romania-work-permit',
    title: 'How to Get a Romania Work Permit in 2026: Step-by-Step Guide',
    excerpt:
      'Romania is one of the most accessible EU countries for non-EU workers. Here is everything you need to know about the D-type long-stay visa and work permit process in 2026.',
    category: 'Visa Guides',
    author: 'SanMarina Team',
    date: 'March 15, 2026',
    readTime: '6 min read',
    content: `Romania has emerged as a top destination for workers from Asia and Africa seeking legal employment in the European Union.

**What is a Romania D-Visa (Long-Stay Visa)?**

The Romania D-Visa (Type D) is a long-stay visa that allows non-EU nationals to enter Romania and begin working legally.

**Step-by-Step Process:**

1. **Job Offer** — Receive a valid job offer from a Romanian employer registered with ANOFM.
2. **Work Authorization** — Your employer applies to the Romanian Immigration Authority (IGI). This takes 30–60 days.
3. **D-Visa Application** — Apply at the Romanian Embassy in your country.
4. **Medical Exam** — A medical certificate showing fitness for work is required.
5. **Entry to Romania** — Register with local police within 3 days of arrival.
6. **Residence Permit** — Apply within 90 days of arrival, valid for 1–2 years.

Contact us at info@sanmarinaglobal.eu to start your application.`,
  },
  {
    slug: 'working-in-poland-guide',
    title: 'Working in Poland: What Asian Workers Need to Know in 2026',
    excerpt:
      'Poland is the fastest-growing economy in Central Europe and one of the top destinations for international workers. This guide covers salaries, visas, living costs, and what to expect.',
    category: 'Country Guides',
    author: 'SanMarina Team',
    date: 'March 8, 2026',
    readTime: '7 min read',
    content: `Poland has become one of the most attractive destinations for international workers in Europe.

**Why Work in Poland?**

- Strong economy with low unemployment
- Minimum wage: 4,666 PLN/month (~$1,150 USD) as of 2026
- EU membership means your rights are protected by EU labor law
- Pathway to long-term EU residency

**Average Salaries by Sector (2026):**
- Factory/Manufacturing: $900–$1,100/month
- Warehouse/Logistics: $950–$1,200/month
- Construction: $1,000–$1,300/month

Interested in working in Poland? Contact us at info@sanmarinaglobal.eu.`,
  },
  {
    slug: 'avoid-recruitment-scams',
    title: '10 Warning Signs of a Fake Recruitment Agency — Protect Yourself',
    excerpt:
      'Human trafficking and recruitment fraud are serious problems affecting workers from Asia and Africa. Learn how to identify legitimate agencies and protect yourself from scams.',
    category: 'Safety & Awareness',
    author: 'SanMarina Team',
    date: 'February 28, 2026',
    readTime: '5 min read',
    content: `Every year, thousands of workers are deceived by fake recruitment agencies.

**10 Red Flags of a Fake Agency:**

1. **They ask you to pay a fee** — Legitimate agencies NEVER charge candidates.
2. **No physical office address** — Fake agencies operate only through WhatsApp or Facebook.
3. **Promises that seem too good to be true** — "$3,000/month guaranteed" for unskilled work.
4. **No employment contract** — Every legal job requires a signed contract before departure.
5. **They keep your passport** — No legitimate employer should hold your passport.
6. **Visa arranged "unofficially"** — All visas must go through official embassy channels.
7. **Pressure to decide quickly** — Scammers create urgency to prevent research.
8. **No employer details** — You should know exactly who your employer is.
9. **They ask for personal documents upfront** — Only share after a verified job offer.
10. **Not registered with government authority** — In Romania, agencies must be registered with ANOFM.

Report fraud to info@sanmarinaglobal.eu or call 0800 800 678 (free, 24/7).`,
  },
  {
    slug: 'benefits-working-eu-blue-card',
    title: 'EU Blue Card: The Premium Work Visa for Skilled Workers Explained',
    excerpt:
      "The EU Blue Card is the European Union's work visa for highly qualified professionals. It offers significant advantages including faster residency and family reunification.",
    category: 'Visa Guides',
    author: 'SanMarina Team',
    date: 'February 15, 2026',
    readTime: '5 min read',
    content: `The EU Blue Card is a combined work and residence permit for non-EU highly skilled workers.

**Key Benefits:**

- Higher salary threshold — earn at or above 1.5x the average salary
- Fast-track EU permanent residency — after 33 months
- Family reunification — spouse and children can join immediately
- Mobility — after 18 months, move to another EU country

**Requirements:**

- University degree (3+ years) or 5 years of equivalent experience
- Valid job offer with salary above the Blue Card threshold
- Clean criminal record and health insurance

Email: info@sanmarinaglobal.eu | WhatsApp: +40 735 062 451`,
  },
  {
    slug: 'hospitality-jobs-croatia-malta',
    title: 'Hospitality Jobs in Croatia & Malta: Your Guide to Working by the Sea',
    excerpt:
      "Croatia and Malta are two of Europe's most beautiful Mediterranean destinations — and both are actively hiring hospitality workers.",
    category: 'Country Guides',
    author: 'SanMarina Team',
    date: 'February 5, 2026',
    readTime: '4 min read',
    content: `Croatia and Malta are outstanding options actively hiring international hospitality workers.

**Croatia:**
- Average salary: $750–$900/month + tips
- Season: April–October (peak)
- Benefits typically include free accommodation and meals

**Malta:**
- Average salary: $900–$1,100/month
- English-speaking EU island — ideal for English speakers
- EU residency pathway after 5 years

SanMarina Global Solutions handles job matching, visa support, pre-departure orientation, and airport pickup coordination.`,
  },
];

const categoryStyle: Record<string, { pill: string; bar: string }> = {
  'Visa Guides':       { pill: 'bg-electric-50 text-electric-600 border-electric-200',  bar: 'bg-electric-500' },
  'Country Guides':    { pill: 'bg-navy-50 text-navy-700 border-navy-200',               bar: 'bg-navy-500' },
  'Safety & Awareness':{ pill: 'bg-red-50 text-red-600 border-red-200',                 bar: 'bg-red-500' },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pb-24">

      {/* ── Header ── */}
      <section className="relative bg-navy-950 pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 70% 20%, rgba(204,34,41,0.10) 0%, transparent 70%)' }} />

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-red-600/10 border border-red-600/25 text-red-300 text-sm font-bold tracking-wider uppercase">
            <Globe className="w-4 h-4" />
            Insights & Advisory
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            SanMarina Global <span className="text-red-gradient">Blog</span>
          </h1>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Visa guides, country insights, and safety tips for workers seeking European opportunities.
          </p>
        </div>
      </section>

      {/* Gradient bridge */}
      <div className="h-16 bg-gradient-to-b from-navy-900 to-white" />

      {/* ── Articles Grid ── */}
      <section className="container mx-auto px-4 max-w-5xl -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => {
            const style = categoryStyle[article.category] ?? { pill: 'bg-neutral-100 text-neutral-600 border-neutral-200', bar: 'bg-neutral-400' };
            return (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                {/* Accent top bar */}
                <div className={`h-1 ${style.bar}`} />

                <div className="p-7">
                  {/* Category pill */}
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border mb-4 ${style.pill}`}>
                    {article.category}
                  </span>

                  <h2 className="font-display text-lg font-bold text-neutral-900 mb-3 leading-snug group-hover:text-navy-700 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div className="flex items-center gap-4 text-xs text-neutral-400">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3 h-3" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-400">{article.date}</span>
                  </div>

                  {/* Expandable content */}
                  <details className="mt-5">
                    <summary className="cursor-pointer inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-500 transition-colors list-none">
                      Read full article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </summary>
                    <div className="mt-4 pt-4 border-t border-neutral-100 text-sm text-neutral-600 leading-relaxed space-y-3">
                      {article.content.trim().split('\n').map((line, i) => {
                        if (line.startsWith('**') && line.endsWith('**')) {
                          return <p key={i} className="font-bold text-neutral-900 mt-4">{line.replace(/\*\*/g, '')}</p>;
                        }
                        if (line.startsWith('- ')) {
                          return <p key={i} className="pl-4 before:content-['•'] before:mr-2 before:text-red-500">{line.slice(2)}</p>;
                        }
                        if (/^\d+\./.test(line)) {
                          return <p key={i} className="pl-4">{line}</p>;
                        }
                        return line.trim() ? <p key={i}>{line}</p> : null;
                      })}
                    </div>
                  </details>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-16 relative overflow-hidden section-navy rounded-3xl p-10 text-center border border-red-600/20">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(204,34,41,0.08) 0%, transparent 70%)' }} />
          <h3 className="font-display text-2xl font-bold text-white mb-2 relative z-10">Ready to Start Your European Journey?</h3>
          <p className="text-navy-300 text-sm mb-8 relative z-10">Browse our open positions or contact our team directly.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <Link href="/jobs" className="btn-red text-sm">
              Browse Jobs <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/8 text-white font-semibold text-sm hover:bg-white/15 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
