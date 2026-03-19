export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  countryCode: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ramesh Thapa',
    role: 'Hotel Chef',
    country: 'Germany',
    countryCode: 'DE',
    quote:
      'SanMarina Global made my dream of working in Europe a reality. Within 3 months, I had my visa and was working at a top hotel in Munich. Their support throughout the process was incredible.',
    avatar: '/images/testimonials/ramesh.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sita Gurung',
    role: 'Healthcare Assistant',
    country: 'Czech Republic',
    countryCode: 'CZ',
    quote:
      'The team guided me through every step — from language classes to visa processing. I now work at a wonderful hospital in Prague and my family is so proud.',
    avatar: '/images/testimonials/sita.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Bikram Rai',
    role: 'Construction Worker',
    country: 'Poland',
    countryCode: 'PL',
    quote:
      'I was worried about the process, but SanMarina handled everything professionally. Free accommodation, good salary, and the company even arranged Polish language lessons for us.',
    avatar: '/images/testimonials/bikram.jpg',
    rating: 5,
  },
  {
    id: '4',
    name: 'Anita Sharma',
    role: 'IT Support Specialist',
    country: 'Germany',
    countryCode: 'DE',
    quote:
      'As a female IT professional, I appreciated how SanMarina ensured my placement was with a reputable company. The EU Blue Card process was smooth and well-managed.',
    avatar: '/images/testimonials/anita.jpg',
    rating: 5,
  },
  {
    id: '5',
    name: 'Dipendra Khadka',
    role: 'Farm Worker',
    country: 'Croatia',
    countryCode: 'HR',
    quote:
      'My seasonal work in Croatian vineyards was an amazing experience. SanMarina organized everything from flights to accommodation. I\'m returning for my second season!',
    avatar: '/images/testimonials/dipendra.jpg',
    rating: 4,
  },
];
