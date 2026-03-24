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
  {
    id: 'visa-1',
    name: 'Rajesh Sharma',
    role: 'Factory Worker',
    country: 'Poland',
    countryCode: 'PL',
    quote: 'SanMarina Global helped me secure my Poland work visa quickly and efficiently. I am now working at a top manufacturing facility.',
    avatar: '',
    visaImage: '/visa_01.jpeg',
    rating: 5,
    verified: true,
    visaType: 'Poland National Visa',
    visaDate: 'March 2026',
    fullStory: [
      "Rajesh was looking for reliable ways to work in Europe. With the help of SanMarina Global, he seamlessly obtained his Poland work visa.",
      "Our team handled all documentation, from permit approvals to embassy appointments. Rajesh is now successfully deployed in Poland, earning a competitive salary and supporting his family back home."
    ]
  },
  {
    id: 'visa-2',
    name: 'Siti Aminah',
    role: 'Hospitality Staff',
    country: 'Croatia',
    countryCode: 'HR',
    quote: 'The process to get my work visa for Croatia was stress-free thanks to SanMarina Global. Their support was incredible!',
    avatar: '',
    visaImage: '/visa_02.jpeg',
    rating: 5,
    verified: true,
    visaType: 'Croatia Work Permit',
    visaDate: 'February 2026',
    fullStory: [
      "Siti Aminah always wanted to work in the European hospitality sector. SanMarina Global matched her with a verified employer in Croatia.",
      "From pre-departure training to visa approval, our team guided her every step of the way. She is now thriving in her new career abroad."
    ]
  },
  {
    id: 'visa-3',
    name: 'Mark Reyes',
    role: 'Logistics Coordinator',
    country: 'Romania',
    countryCode: 'RO',
    quote: 'I highly recommend SanMarina Global! They secured my Romania work visa and ensured a smooth transition.',
    avatar: '',
    visaImage: '/visa_03.jpeg',
    rating: 5,
    verified: true,
    visaType: 'Romania D-Visa',
    visaDate: 'January 2026',
    fullStory: [
      "Mark had the skills but needed the right agency to facilitate his move to Europe. SanMarina Global provided exactly that.",
      "We took charge of his entire application process. Now, Mark is safely deployed in Romania, working as a Logistics Coordinator for a leading European firm."
    ]
  },
  {
    id: 'visa-4',
    name: 'Amit Patel',
    role: 'Construction Worker',
    country: 'Hungary',
    countryCode: 'HU',
    quote: 'Getting a work visa for Hungary seemed impossible until I met the team at SanMarina Global. They made it happen!',
    avatar: '',
    visaImage: '/visa_04.jpeg',
    rating: 5,
    verified: true,
    visaType: 'Hungary Work Visa',
    visaDate: 'March 2026',
    fullStory: [
      "Amit Patel was seeking opportunities in the European construction industry. However, complex immigration laws were a major hurdle.",
      "SanMarina Global matched him with an established construction company in Hungary, completely managing the visa process and ensuring his rapid and successful deployment."
    ]
  },
  {
    id: 'visa-5',
    name: 'Nguyen Thi Mai',
    role: 'Healthcare Assistant',
    country: 'Malta',
    countryCode: 'MT',
    quote: 'My dream of living and working in Malta came true because of the professional support from SanMarina Global.',
    avatar: '',
    visaImage: '/visa_05.jpeg',
    rating: 5,
    verified: true,
    visaType: 'Malta Single Permit',
    visaDate: 'February 2026',
    fullStory: [
      "Nguyen Thi Mai wanted to leverage her healthcare skills in Europe. SanMarina Global helped her navigate the stringent requirements for Malta.",
      "Our dedicated team ensured all her documents were flawless, leading to a prompt visa approval. She is now a valued member of a healthcare facility in Malta."
    ]
  },
  {
    id: 'visa-6',
    name: 'David Osei',
    role: 'Warehouse Operator',
    country: 'Romania',
    countryCode: 'RO',
    quote: 'SanMarina Global is the best! They guided me through the entire Romania visa process with transparency and dedication.',
    avatar: '',
    visaImage: '/visa_06.jpeg',
    rating: 5,
    verified: true,
    visaType: 'Romania D-Visa',
    visaDate: 'January 2026',
    fullStory: [
      "David was determined to build a long-term career in agriculture and warehousing in Europe. SanMarina Global was the trusted partner he needed.",
      "Through our comprehensive services, David secured his Romanian D-Visa without a hitch and is now happily employed and fully settled abroad."
    ]
  },
  {
    id: 'visa-7',
    name: 'Bina Thapa',
    role: 'Agriculture Worker',
    country: 'Poland',
    countryCode: 'PL',
    quote: 'I am so grateful for SanMarina Global. They helped me get my Poland work visa and start a new, bright chapter.',
    avatar: '',
    visaImage: '/visa_07.jpeg',
    rating: 5,
    verified: true,
    visaType: 'Poland National Visa',
    visaDate: 'March 2026',
    fullStory: [
      "Bina Thapa dreamed of working in Europe's agriculture sector. Faced with multiple challenges, she turned to SanMarina Global for straightforward guidance.",
      "Our team expertly managed her application, ensuring quick approval. Bina is now successfully placed in Poland, enjoying a rewarding career."
    ]
  }
];
