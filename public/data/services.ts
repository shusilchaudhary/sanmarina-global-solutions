export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'web-dev',
    icon: 'Globe',
    title: 'Web Development',
    description:
      'Custom websites, web apps, e-commerce platforms, and SaaS products built with React, Next.js, Node.js, and the latest technologies.',
    href: '/services#web-dev',
    features: [
      'Responsive & mobile-first design',
      'SEO-optimized architecture',
      'Custom CMS integration',
      'Performance-tuned delivery',
    ],
  },
  {
    id: 'app-dev',
    icon: 'Smartphone',
    title: 'App Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android. From concept to App Store, we handle everything.',
    href: '/services#app-dev',
    features: [
      'iOS & Android native apps',
      'React Native & Flutter',
      'API & backend integration',
      'Push notifications & analytics',
    ],
  },
  {
    id: 'digital-marketing',
    icon: 'Megaphone',
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies across social media, PPC, email, and content marketing to grow your audience and revenue.',
    href: '/services#digital-marketing',
    features: [
      'Social media management',
      'Google & Facebook Ads',
      'Email marketing campaigns',
      'Content strategy & creation',
    ],
  },
  {
    id: 'seo',
    icon: 'Search',
    title: 'SEO Services',
    description:
      'Comprehensive SEO to boost your organic rankings — technical audits, on-page optimization, link building, and keyword strategy.',
    href: '/services#seo',
    features: [
      'Technical SEO audit',
      'On-page optimization',
      'Link building strategy',
      'Monthly reporting & analytics',
    ],
  },
  {
    id: 'ai-video',
    icon: 'Video',
    title: 'AI Video Generation',
    description:
      'Leverage cutting-edge AI to create professional video content at scale — product demos, explainers, social reels, and ads.',
    href: '/services#ai-video',
    features: [
      'AI-generated product videos',
      'Social media reels & shorts',
      'Explainer & tutorial animations',
      'Scalable production pipeline',
    ],
  },
];
