export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  countryCode: string;
  quote: string;
  avatar: string;
  rating: number;
  verified?: boolean;
  visaType?: string;
  visaDate?: string;
  fullStory?: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 'real-1',
    name: 'Kirpa Rupakheti',
    role: 'Permanent Worker (Lucrator Permanent)',
    country: 'Romania',
    countryCode: 'RO',
    quote:
      'SanMarina Global made my European dream a reality. My Romania work visa was approved and I am now legally working as a permanent worker. The entire process was handled professionally and the team supported me at every step.',
    avatar: '',
    rating: 5,
    verified: true,
    visaType: 'Romania D-Visa — Permanent Worker',
    visaDate: 'January 2026',
    fullStory: [
      "Kirpa always dreamed of building a stable, long-term future for his family back home. Like many highly skilled workers in Asia, he faced the overwhelming complexity of navigating international immigration laws alone, unsure of which agencies to trust.",
      "When he connected with SanMarina Global, our European employer network immediately recognized his potential. Our specialized visa team took over the entire process—securing his official work permit, handling embassy documentation, and conducting pre-departure training.",
      "Today, Kirpa is legally employed in Romania on a long-term contract, earning a competitive European salary. He represents the premium standard of talent we pride ourselves on deploying globally."
    ]
  },
  {
    id: 'real-2',
    name: 'Dom Kumar Chemjong Limbu',
    role: 'Permanent Worker (Lucrator Permanent)',
    country: 'Romania',
    countryCode: 'RO',
    quote:
      'I never imagined getting a European work visa could be this smooth. SanMarina Global handled my Romania visa application from Kuala Lumpur and it was approved within weeks. I am grateful for their dedication.',
    avatar: '',
    rating: 5,
    verified: true,
    visaType: 'Romania D-Visa — Permanent Worker',
    visaDate: 'February 2026',
    fullStory: [
      "Previously based in Kuala Lumpur, Dom Kumar was actively searching for safe, legal pathways to transition into the European labor market without falling victim to unverified agencies or drawn-out waiting periods.",
      "SanMarina Global provided a transparent, step-by-step roadmap. We matched Dom with a verified Romanian employer seeking dedicated professionals for a secure contract. Working across borders, our agency entirely managed his D-Visa application process remotely.",
      "Within weeks, his visa was successfully approved by the embassy. Dom has now relocated to Romania, proving that with the right agency advocating for you, international career relocation can be completely stress-free."
    ]
  },
];
