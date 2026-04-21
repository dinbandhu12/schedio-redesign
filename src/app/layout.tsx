import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider   from '@/components/layout/SmoothScrollProvider';
import CustomCursor          from '@/components/layout/CustomCursor';
import TransitionProvider    from '@/components/layout/TransitionProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://schedio.studio'),
  title: {
    default: 'Schedio | Web Design & Development Agency',
    template: '%s | Schedio',
  },
  description:
    'Schedio is a Mumbai-based web design and development agency crafting premium digital experiences for startups and lifestyle brands. We specialise in design, branding, and development.',
  keywords: [
    'web design agency',
    'web development',
    'branding',
    'UI/UX design',
    'Mumbai',
    'Schedio',
    'digital agency',
  ],
  authors: [{ name: 'Schedio', url: 'https://schedio.studio' }],
  creator: 'Schedio',
  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:         'https://schedio.studio',
    siteName:    'Schedio',
    title:       'Schedio | Web Design & Development Agency',
    description: 'Premium digital experiences for startups and lifestyle brands.',
    images: [{ url: '/images/logo/full-logo.png', width: 1200, height: 630, alt: 'Schedio' }],
  },
  twitter: {
    card:    'summary_large_image',
    site:    '@Schedio_studio',
    creator: '@Schedio_studio',
    title:   'Schedio | Web Design & Development Agency',
    description: 'Premium digital experiences for startups and lifestyle brands.',
  },
  icons: {
    icon: '/images/logo/transparent-logo.png',
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Film-grain noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        <CustomCursor />

        <TransitionProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
