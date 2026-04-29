export type ProjectCategory = 'all' | 'web-dev' | 'app-dev' | 'digital-marketing' | 'seo' | 'graphic-design' | 'video-editing' | 'ai-video' | 'ai-automation';

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  gallery: string[];
  tags: string[];
  stat: { label: string; value: string };
  liveUrl?: string;
  testimonial?: { quote: string; name: string; role: string };
}

export const categories: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-dev', label: 'Web Development' },
  { id: 'app-dev', label: 'App Development' },
  { id: 'digital-marketing', label: 'Digital Marketing' },
  { id: 'seo', label: 'SEO' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'video-editing', label: 'Video Editing' },
  { id: 'ai-video', label: 'AI Video' },
  { id: 'ai-automation', label: 'AI Automation' },
];

export const portfolio: PortfolioProject[] = [
  {
    id: 'techventure-ecommerce',
    title: 'E-Commerce Platform Rebuild',
    client: 'TechVenture SRL',
    category: 'web-dev',
    categoryLabel: 'Web Development',
    description: 'Complete e-commerce platform built from scratch with custom CMS, real-time inventory, and multi-currency payment processing.',
    challenge: 'TechVenture\'s legacy platform was slow, hard to maintain, and losing customers due to poor mobile experience and checkout friction.',
    solution: 'We built a modern Next.js storefront with server-side rendering for SEO, integrated Stripe for payments, and designed a custom admin dashboard for inventory management.',
    results: ['3x revenue growth in 6 months', '60% faster page load times', '45% increase in mobile conversions', 'Custom CMS reduced content update time by 80%'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80',
    ],
    tags: ['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    stat: { label: 'Revenue Growth', value: '3x' },
    testimonial: { quote: 'Revenue grew 3x within six months of launch. The quality of code and attention to design exceeded our expectations.', name: 'Alex Ionescu', role: 'CEO, TechVenture SRL' },
  },
  {
    id: 'healthtrack-app',
    title: 'HealthTrack Mobile App',
    client: 'HealthTrack',
    category: 'app-dev',
    categoryLabel: 'App Development',
    description: 'Cross-platform health tracking app with real-time sync, wearable device integration, and personalized health dashboards.',
    challenge: 'HealthTrack needed a single codebase app for iOS and Android that could sync with popular wearables and display real-time health metrics.',
    solution: 'Built with React Native for cross-platform performance, integrated HealthKit and Google Fit APIs, and designed an intuitive dashboard with real-time data visualization.',
    results: ['10,000+ downloads in first month', '4.8★ average rating on both stores', 'Real-time sync with 5+ wearable brands', '92% user retention after 30 days'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
      'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=1200&q=80',
    ],
    tags: ['React Native', 'Firebase', 'HealthKit', 'Google Fit', 'REST API'],
    stat: { label: 'Downloads (Month 1)', value: '10K+' },
    testimonial: { quote: 'The mobile app is flawless. Our users love it — we hit 10,000 downloads in the first month.', name: 'David Novak', role: 'Founder, HealthTrack' },
  },
  {
    id: 'freshbrands-seo',
    title: 'SEO & Content Overhaul',
    client: 'FreshBrands GmbH',
    category: 'seo',
    categoryLabel: 'SEO',
    description: 'Comprehensive SEO strategy including technical audit, on-page optimization, content marketing, and authority link building.',
    challenge: 'FreshBrands was invisible online — ranking on page 5+ for all target keywords with declining organic traffic and zero content strategy.',
    solution: 'Performed a full technical SEO audit, fixed 200+ issues, built a keyword-driven content calendar, published 40+ optimized articles, and secured 60+ quality backlinks.',
    results: ['Page 5 → Top 3 for main keywords', '280% increase in organic traffic', '150% more qualified leads per month', '40+ SEO-optimized articles published'],
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    ],
    tags: ['Technical SEO', 'Content Marketing', 'Link Building', 'Google Analytics', 'SEMrush'],
    stat: { label: 'Organic Traffic', value: '+280%' },
    testimonial: { quote: 'We went from page 5 to the top 3 results. Organic traffic increased by 280% in just four months.', name: 'Maria Petrescu', role: 'Marketing Director, FreshBrands' },
  },
  {
    id: 'freshbrands-marketing',
    title: 'Social Media & PPC Campaign',
    client: 'FreshBrands GmbH',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing',
    description: 'Multi-channel digital marketing campaign across Meta, Google Ads, and email with full funnel optimization and retargeting.',
    challenge: 'FreshBrands had no structured digital ad strategy — ad spend was high with poor ROAS and no retargeting or email nurture sequences.',
    solution: 'Designed a full-funnel strategy: awareness ads on Instagram/Facebook, intent-based Google Ads, retargeting sequences, and automated email nurture flows.',
    results: ['4.2x return on ad spend (ROAS)', '65% reduction in cost per acquisition', '12,000+ email subscribers in 3 months', '35% email open rate (industry avg: 21%)'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    ],
    tags: ['Meta Ads', 'Google Ads', 'Email Marketing', 'Analytics', 'Retargeting'],
    stat: { label: 'ROAS', value: '4.2x' },
  },
  {
    id: 'nordic-ai-video',
    title: 'AI Product Video Suite',
    client: 'Nordic Retail Group',
    category: 'ai-video',
    categoryLabel: 'AI Video',
    description: 'AI-powered video production pipeline generating professional product demos and social reels at scale for an entire product catalog.',
    challenge: 'Nordic Retail needed product videos for 500+ SKUs but traditional video production was too slow (3 weeks per video) and expensive ($2,000+ each).',
    solution: 'Built a custom AI video generation pipeline that takes product photos and descriptions as input and produces polished product demo videos with voiceover, music, and motion graphics.',
    results: ['500+ product videos generated', 'Production time: 3 weeks → 2 hours per video', 'Cost reduced by 90% per video', '40% increase in product page conversions'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80',
      'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&q=80',
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&q=80',
    ],
    tags: ['AI/ML', 'Video Generation', 'Automation', 'Cloud Processing', 'FFmpeg'],
    stat: { label: 'Production Speed', value: '10x' },
    testimonial: { quote: 'Professional product videos produced in days instead of weeks, at a fraction of traditional costs.', name: 'Sofia Andersson', role: 'COO, Nordic Retail Group' },
  },
  {
    id: 'luxe-brand-identity',
    title: 'Complete Brand Identity',
    client: 'Luxe Hospitality',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    description: 'Full brand identity system including logo design, typography, color palette, brand guidelines, UI component library, and marketing collateral.',
    challenge: 'Luxe Hospitality was launching a new boutique hotel chain and needed a premium brand identity that would stand out in a crowded luxury market.',
    solution: 'Designed a sophisticated brand identity inspired by minimalist luxury aesthetics — custom logomark, curated typography, a refined color system, and a 60-page brand guidelines document.',
    results: ['Complete brand identity in 4 weeks', '120+ brand assets delivered', 'Brand guidelines adopted across 3 hotel locations', 'Social media engagement up 200% after rebrand'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',
    ],
    tags: ['Logo Design', 'Brand Identity', 'UI/UX', 'Figma', 'Print Design'],
    stat: { label: 'Brand Assets', value: '120+' },
  },
  {
    id: 'finserve-platform',
    title: 'Financial Transaction Platform',
    client: 'FinServe Italia',
    category: 'web-dev',
    categoryLabel: 'Web Development',
    description: 'Enterprise-grade financial transaction platform with real-time dashboards, audit trails, role-based access, and bank-level security.',
    challenge: 'FinServe needed to replace a legacy Java system with a modern, scalable platform that could handle 5,000+ daily transactions with full audit compliance.',
    solution: 'Built a React + Node.js platform with real-time WebSocket dashboards, PostgreSQL with row-level security, comprehensive audit logging, and AWS infrastructure with 99.9% uptime SLA.',
    results: ['5,000+ daily transactions processed', '99.9% uptime maintained', 'Audit compliance fully automated', 'Admin workflow time reduced by 70%'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'AWS'],
    stat: { label: 'Daily Transactions', value: '5K+' },
    testimonial: { quote: 'The web application handles thousands of daily transactions without a hitch. Truly enterprise-grade work.', name: 'Marco Bianchi', role: 'CTO, FinServe Italia' },
  },
  {
    id: 'autodrive-video-editing',
    title: 'Product Launch Video Series',
    client: 'AutoDrive Motors',
    category: 'video-editing',
    categoryLabel: 'Video Editing',
    description: 'Professional video editing for a 10-part product launch series including color grading, motion graphics, sound design, and multi-platform formatting.',
    challenge: 'AutoDrive had raw footage from their new EV launch event but needed polished, brand-consistent videos optimized for YouTube, Instagram, and LinkedIn.',
    solution: 'Edited 10 videos with professional color grading, custom motion graphics and lower thirds, licensed music and sound design, and exported in platform-optimized formats.',
    results: ['10 videos delivered in 2 weeks', '500K+ combined views across platforms', 'Average watch time 3x industry benchmark', 'Content repurposed into 30+ social clips'],
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&q=80',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80',
      'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&q=80',
    ],
    tags: ['Premiere Pro', 'After Effects', 'Color Grading', 'Motion Graphics', 'Sound Design'],
    stat: { label: 'Total Views', value: '500K+' },
  },
  {
    id: 'smartlogix-automation',
    title: 'AI Customer Support Automation',
    client: 'SmartLogix',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    description: 'End-to-end AI automation system with intelligent chatbot, ticket routing, sentiment analysis, and automated reporting for a logistics company.',
    challenge: 'SmartLogix was drowning in 2,000+ daily customer support tickets handled manually, leading to 48-hour average response times and low satisfaction scores.',
    solution: 'Built a custom AI chatbot using GPT-4 fine-tuned on company data, integrated automated ticket classification and routing, real-time sentiment analysis, and a management dashboard with automated weekly reports.',
    results: ['70% of tickets resolved automatically', 'Response time: 48 hours → 2 minutes', 'Customer satisfaction up from 3.2 to 4.7/5', 'Support team reallocated to high-value tasks'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&q=80',
    ],
    tags: ['GPT-4', 'Python', 'LangChain', 'FastAPI', 'Docker'],
    stat: { label: 'Auto-Resolved', value: '70%' },
    testimonial: { quote: 'Our support costs dropped by 60% and customer satisfaction scores nearly doubled. The AI handles most tickets before a human even sees them.', name: 'Luca Marinescu', role: 'CEO, SmartLogix' },
  },
];
