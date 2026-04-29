'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, Smartphone, Megaphone, Search, Video, Palette, Clapperboard, Bot } from 'lucide-react';
import { useTheme } from '@/components/shared/ThemeProvider';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Custom websites, web apps, and e-commerce platforms built with React, Next.js, and Node.js.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    color: 'violet' as const,
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    color: 'cyan' as const,
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns across social media, PPC, email, and content marketing.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    color: 'violet' as const,
  },
  {
    icon: Search,
    title: 'SEO Services',
    desc: 'Technical SEO, on-page optimization, link building, and keyword strategy to rank higher.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    color: 'cyan' as const,
  },
  {
    icon: Video,
    title: 'AI Video Generation',
    desc: 'AI-powered professional video content — product demos, explainers, ads, and social reels.',
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80',
    color: 'violet' as const,
  },
  {
    icon: Palette,
    title: 'Graphic Designing',
    desc: 'Logos, brand identity, social media graphics, UI/UX design, and print-ready marketing materials.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    color: 'cyan' as const,
  },
  {
    icon: Clapperboard,
    title: 'Video Editing',
    desc: 'Professional video editing for YouTube, social media, corporate presentations, and promotional content.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    color: 'violet' as const,
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Intelligent workflow automation using AI — chatbots, data pipelines, process optimization, and custom AI agents.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    color: 'cyan' as const,
  },
];

const colorMap = {
  violet: { iconBg: 'bg-violet-600', text: 'text-violet-600' },
  cyan:   { iconBg: 'bg-cyan-600',   text: 'text-cyan-600' },
};

export function ServicesSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-dark-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-2">
          <div className="h-0.5 w-10 bg-violet-500 rounded" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600">What We Do</span>
        </div>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <h2 className={`font-display text-3xl md:text-4xl font-extrabold tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
              Our Digital Services
            </h2>
            <p className="text-zinc-500 mt-2 max-w-lg">End-to-end IT solutions to take your business from idea to launch and beyond.</p>
          </div>
          <Link href="/services" className="btn-primary text-sm">
            View All <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            const c = colorMap[s.color];
            return (
              <Link href="/services" key={s.title} className="block group">
                <div className="card-white overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{s.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-4">{s.desc}</p>
                    <span className={`text-sm font-semibold ${c.text} flex items-center gap-1.5 group-hover:gap-2.5 transition-all`}>
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
