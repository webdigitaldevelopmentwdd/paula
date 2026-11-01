import type { Metadata, Viewport } from 'next';
import './globals.css';

const TITLE = 'ECLESARE by Paula — Destination Wedding Planning & Design';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: TITLE,
  description:
    'Bespoke destination wedding planning and design for Indian, French, Spanish and international couples. Palaces, châteaux, Mediterranean coastlines and mountain ceremonies.',
  icons: { icon: '/logo/monogram.png' },
  openGraph: {
    title: TITLE,
    description: 'Weddings that bring cultures together, in India, France, Spain and beyond.',
    images: ['/images/hero-india.jpg'],
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FAF7F2',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/cormorant-garamond-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
