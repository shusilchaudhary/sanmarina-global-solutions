'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/components/shared/ThemeProvider';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A standard website takes 4–6 weeks, a mobile app 8–12 weeks, and larger enterprise platforms 3–6 months. We provide a detailed timeline during our discovery phase.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing: fixed-price for well-defined projects, time & materials for evolving scopes, and monthly retainers for ongoing services like SEO, marketing, and support. Every engagement starts with a free consultation and detailed quote.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'Our core stack includes React, Next.js, React Native, Node.js, PostgreSQL, and AWS. For design we use Figma, and for marketing we leverage Google Ads, Meta Business Suite, SEMrush, and custom analytics dashboards.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Absolutely. Every project includes 30 days of free post-launch support. We also offer ongoing maintenance plans that cover bug fixes, security updates, performance monitoring, and feature enhancements.',
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Yes — we regularly embed with client teams as an extension of their development or marketing departments. We adapt to your tools, workflows, and communication style for seamless collaboration.',
  },
  {
    question: 'How do you ensure quality?',
    answer: 'We follow a rigorous QA process: code reviews on every pull request, automated testing (unit + integration), staging environment previews, cross-browser/device testing, and performance audits before every release.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We work across e-commerce, fintech, healthcare, education, hospitality, retail, automotive, and SaaS. Our team adapts quickly to industry-specific requirements and compliance needs.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-24 md:py-32 transition-colors duration-300 ${isDark ? 'bg-dark-950' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-0.5 w-12 bg-violet-500" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">FAQ</span>
          <div className="h-0.5 w-12 bg-violet-500" />
        </div>

        <div className="text-center mb-14">
          <h2 className={`font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border overflow-hidden transition-all duration-300 ${isDark
                  ? `border-zinc-700 ${isOpen ? 'bg-white/3' : 'bg-dark-800 hover:bg-white/2'}`
                  : `border-zinc-200 ${isOpen ? 'bg-violet-50/50' : 'bg-white hover:bg-zinc-50'}`
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-transparent border-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span className={`text-[15px] font-semibold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-violet-500' : ''}`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-5 text-sm text-zinc-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
