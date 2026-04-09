import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
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
  title: {
    default: 'SanMarina Global Agency | Asia to Europe Recruitment & IT Consulting',
    template: '%s | SanMarina Global Agency',
  },
  description:
    'Licensed international recruitment agency connecting skilled Asian workers with verified European employers. IT consulting and visa processing services.',
  keywords: [
    'Asia recruitment agency',
    'European jobs for Asians',
    'work in Europe',
    'international staffing',
    'IT consulting Asia',
    'visa processing',
    'international recruitment',
  ],
  openGraph: {
    title: 'SanMarina Global Agency',
    description: 'Your Gateway from Asia to Europe',
    url: 'https://sanmarinaglobal.com',
    siteName: 'SanMarina Global Agency',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
