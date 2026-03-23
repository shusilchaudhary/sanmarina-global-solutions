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
  },
];
