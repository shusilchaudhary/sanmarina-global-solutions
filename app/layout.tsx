import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SanMarina Global Agency | Nepal to Europe Recruitment & IT Consulting',
    template: '%s | SanMarina Global Agency',
  },
  description:
    'Licensed international recruitment agency connecting skilled Nepali workers with verified European employers. IT consulting and visa processing services.',
  keywords: [
    'Nepal recruitment agency',
    'European jobs for Nepali',
    'work in Europe',
    'IT consulting Nepal',
    'visa processing',
    'international recruitment',
  ],
  openGraph: {
    title: 'SanMarina Global Agency',
    description: 'Your Gateway from Nepal to Europe',
    url: 'https://sanmarinaglobal.com',
    siteName: 'SanMarina Global Agency',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}
