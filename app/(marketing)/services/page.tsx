import Link from 'next/link';
import Image from 'next/image';
import { CTASection } from '@/components/marketing/CTASection';
import { ArrowRight, Globe, Smartphone, Megaphone, Search, Video, Palette, Clapperboard, Bot, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | SanMarina Global Solutions',
  description:
    'Web development, app development, digital marketing, SEO, and AI video generation services by SanMarina Global Solutions.',
};

const services = [
  {
    id: 'web-dev',
    Icon: Globe,
    title: 'Web Development',
    description: 'Custom websites, web apps, e-commerce platforms, and SaaS products built with React, Next.js, Node.js, and more.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    color: 'violet' as const,
    features: ['Responsive & mobile-first', 'SEO-optimized architecture', 'Custom CMS integration', 'Performance-tuned delivery'],
    cta: 'Get a Quote',
  },
  {
    id: 'app-dev',
    Icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android. From concept to App Store, we handle everything.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    color: 'cyan' as const,
    features: ['iOS & Android native', 'React Native & Flutter', 'API integration', 'Push notifications & analytics'],
    cta: 'Get a Quote',
  },
  {
    id: 'digital-marketing',
    Icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies across social media, PPC, email, and content to grow your audience and revenue.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    color: 'violet' as const,
    features: ['Social media management', 'Google & Facebook Ads', 'Email campaigns', 'Content strategy'],
    cta: 'Get Started',
  },
  {
    id: 'seo',
    Icon: Search,
    title: 'SEO Services',
    description: 'Comprehensive SEO to boost your organic rankings — technical audits, on-page optimization, link building, and keyword strategy.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    color: 'cyan' as const,
    features: ['Technical SEO audit', 'On-page optimization', 'Link building strategy', 'Monthly reporting'],
    cta: 'Boost Rankings',
  },
  {
    id: 'ai-video',
    Icon: Video,
    title: 'AI Video Generation',
    description: 'Leverage cutting-edge AI to create professional video content at scale — product demos, explainers, social reels, and ads.',
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80',
    color: 'violet' as const,
    features: ['AI-generated product videos', 'Social media reels', 'Explainer animations', 'Scalable production'],
    cta: 'Learn More',
  },
  {
    id: 'graphic-design',
    Icon: Palette,
    title: 'Graphic Designing',
    description: 'Eye-catching visual designs for your brand — logos, brand identity, social media assets, UI/UX, and print materials.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    color: 'cyan' as const,
    features: ['Logo & brand identity', 'Social media graphics', 'UI/UX design', 'Print & packaging design'],
    cta: 'Get a Quote',
  },
  {
    id: 'video-editing',
    Icon: Clapperboard,
    title: 'Video Editing',
    description: 'Professional video editing and post-production for YouTube, social media, corporate videos, and promotional campaigns.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    color: 'violet' as const,
    features: ['YouTube & social media edits', 'Corporate presentations', 'Color grading & effects', 'Motion graphics & titles'],
    cta: 'Get Started',
  },
  {
    id: 'ai-automation',
    Icon: Bot,
    title: 'AI Automation',
    description: 'Streamline your business with intelligent AI automation — custom chatbots, workflow automation, data pipelines, and AI-powered agents.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    color: 'cyan' as const,
    features: ['Custom AI chatbots', 'Workflow & process automation', 'Data pipeline optimization', 'AI agent development'],
    cta: 'Learn More',
  },
];

const colorClasses = {
  violet: { iconBg: 'bg-violet-600', check: 'text-violet-500', btn: 'bg-violet-600 hover:bg-violet-500' },
  cyan:   { iconBg: 'bg-cyan-600',   check: 'text-cyan-500',   btn: 'bg-cyan-600 hover:bg-cyan-500' },
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80"
            alt="Coding on multiple screens"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(160deg, rgba(15,5,30,0.90) 0%, rgba(30,15,60,0.75) 50%, rgba(10,10,20,0.88) 100%)',
          }} />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center pt-44 pb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] rounded-full mb-5 text-violet-300 bg-violet-500/15 border border-violet-400/25 backdrop-blur-sm">
            What We Offer
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Comprehensive Digital <br />
            <span className="text-gradient-warm">Solutions for Your Business</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#a1a1aa' }}>
            From web and app development to SEO, digital marketing, and AI video — everything you need to succeed online.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ id, Icon, title, description, image, color, features, cta }) => {
            const c = colorClasses[color];
            return (
              <div key={id} className="card-white overflow-hidden flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h2 className="font-display text-xl font-bold text-zinc-900 mb-3">{title}</h2>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">{description}</p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-zinc-600 font-medium">
                        <CheckCircle size={14} className={c.check} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl ${c.btn} text-white text-sm font-semibold transition-colors self-start shadow-lg`}>
                    {cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
