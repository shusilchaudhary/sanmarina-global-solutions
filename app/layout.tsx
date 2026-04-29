import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sanmarinaglobal.eu'),
  title: {
    default: 'SanMarina Global Solutions | Web Dev, App Dev, Digital Marketing, SEO & AI Video',
    template: '%s | SanMarina Global Solutions',
  },
  description:
    'Full-service IT company offering web development, app development, digital marketing, SEO, AI video generation, and AI automation. We turn ideas into high-performing digital products.',
  keywords: [
    'web development',
    'app development',
    'digital marketing',
    'SEO services',
    'AI video generation',
    'AI automation',
    'graphic design',
    'video editing',
    'software development company',
    'IT services',
  ],
  openGraph: {
    title: 'SanMarina Global Solutions',
    description: 'Web Dev · App Dev · Digital Marketing · SEO · AI Video · AI Automation',
    url: 'https://sanmarinaglobal.eu',
    siteName: 'SanMarina Global Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SanMarina Global Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SanMarina Global Solutions',
    description: 'Web Dev · App Dev · Digital Marketing · SEO · AI Video · AI Automation',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SanMarina Global Solutions S.R.L.',
              url: 'https://sanmarinaglobal.eu',
              logo: 'https://sanmarinaglobal.eu/og-image.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+40-735-062-451',
                contactType: 'customer service',
                email: 'info@sanmarinaglobal.eu',
                availableLanguage: ['English', 'Romanian'],
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Splaiul Unirii 165, Sector 3',
                addressLocality: 'Bucharest',
                addressCountry: 'RO',
              },
              sameAs: [
                'https://www.facebook.com/sanmarinaglobal',
                'https://www.instagram.com/sanmarinaglobal',
                'https://www.linkedin.com/company/sanmarinaglobal',
                'https://www.tiktok.com/@sanmarinaglobal',
                'https://www.youtube.com/@sanmarinaglobal',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-999 focus:px-6 focus:py-3 focus:bg-violet-600 focus:text-white focus:text-sm focus:font-semibold">
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
