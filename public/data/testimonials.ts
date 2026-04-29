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
  visaImage?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'client-1',
    name: 'Alex Ionescu',
    role: 'CEO, TechVenture SRL',
    country: 'Romania',
    countryCode: 'RO',
    quote:
      'SanMarina Global Solutions built our entire e-commerce platform from scratch. The quality of code, attention to design, and on-time delivery exceeded our expectations. Revenue grew 3x within six months of launch.',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
    verified: true,
    fullStory: [
      'TechVenture needed a modern e-commerce platform to replace their outdated system. SanMarina Global delivered a high-performance Next.js application with a seamless checkout experience.',
      'The project was completed on time and within budget, resulting in a 3x revenue increase within six months.',
    ],
  },
  {
    id: 'client-2',
    name: 'Maria Petrescu',
    role: 'Marketing Director, FreshBrands',
    country: 'Germany',
    countryCode: 'DE',
    quote:
      'Their digital marketing and SEO services transformed our online presence. We went from page 5 to the top 3 results for our main keywords. Organic traffic increased by 280% in just four months.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    verified: true,
    fullStory: [
      'FreshBrands was struggling with low visibility in a competitive market. SanMarina Global implemented a comprehensive SEO and content marketing strategy.',
      'Within four months, the company saw a 280% increase in organic traffic and a significant boost in qualified leads.',
    ],
  },
  {
    id: 'client-3',
    name: 'David Novak',
    role: 'Founder, HealthTrack App',
    country: 'Czech Republic',
    countryCode: 'CZ',
    quote:
      'The mobile app they developed for us is flawless. Cross-platform, lightning-fast, and beautifully designed. Our users love it — we hit 10,000 downloads in the first month.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    verified: true,
    fullStory: [
      'David needed a cross-platform health-tracking app with real-time sync and an intuitive UI. SanMarina Global built it using React Native with native modules for performance.',
      'The app launched successfully on both iOS and Android, gaining 10,000 downloads in its first month.',
    ],
  },
  {
    id: 'client-4',
    name: 'Sofia Andersson',
    role: 'COO, Nordic Retail Group',
    country: 'Sweden',
    countryCode: 'SE',
    quote:
      'We hired SanMarina for AI video generation and the results were incredible. Professional product videos produced in days instead of weeks, at a fraction of traditional costs.',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    verified: true,
    fullStory: [
      'Nordic Retail Group needed product videos at scale but traditional production was too slow and expensive. SanMarina Global used AI-powered tools to generate stunning product demos.',
      'The turnaround went from weeks to days, saving the company significant production costs while maintaining premium quality.',
    ],
  },
  {
    id: 'client-5',
    name: 'Marco Bianchi',
    role: 'CTO, FinServe Italia',
    country: 'Italy',
    countryCode: 'IT',
    quote:
      'Their full-stack team integrated seamlessly with ours. The web application they built handles thousands of daily transactions without a hitch. Truly enterprise-grade work.',
    avatar: 'https://i.pravatar.cc/150?img=53',
    rating: 5,
    verified: true,
    fullStory: [
      'FinServe needed a robust transaction processing web application. SanMarina Global delivered a scalable, secure platform handling thousands of daily operations.',
      'The seamless integration with the existing team and infrastructure made the project a model for future collaborations.',
    ],
  },
];
