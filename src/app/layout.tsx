import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter, Lora } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import CustomCursor         from '@/components/layout/CustomCursor';
import TransitionProvider   from '@/components/layout/TransitionProvider';

const displayFont = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const loraFont = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
});

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://schedio.studio/#organization',
      name: 'Schedio',
      url: 'https://schedio.studio',
      logo: 'https://schedio.studio/images/logo/logo-main.svg',
      description: 'Mumbai-based web design and development studio crafting purposeful digital experiences for startups and lifestyle brands.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      email: 'info@schedio.studio',
      telephone: '+919607769564',
      sameAs: [
        'https://www.instagram.com/schedio_agency/',
        'https://www.behance.net/tempacc5',
        'https://x.com/Schedio_studio',
        'https://dribbble.com/schedio-studio',
      ],
    },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does the design process work?',   acceptedAnswer: { '@type': 'Answer', text: 'We start with discovery, then move through concept, iteration, and handover with feedback loops built into every phase.' } },
    { '@type': 'Question', name: 'What is the typical project timeline?', acceptedAnswer: { '@type': 'Answer', text: 'Most engagements run 4–10 weeks. We agree on a schedule upfront and stay transparent about progress throughout.' } },
    { '@type': 'Question', name: 'How do we collaborate during a project?', acceptedAnswer: { '@type': 'Answer', text: 'Async updates in Notion or Linear, weekly live reviews on Google Meet, and a shared Figma board for everything visual.' } },
    { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Pricing is tied to scope — we send a fixed quote after a short discovery call, no hidden line items.' } },
    { '@type': 'Question', name: 'Do you offer revisions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every engagement includes defined revision rounds at each stage until the work lands.' } },
    { '@type': 'Question', name: 'Do you work with early-stage startups?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — we work with startups, agencies, and growing brands at every stage. If you have a real problem to solve, we\'re in.' } },
  ],
};

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
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Schedio — Web Design & Development Agency' }],
  },
  twitter: {
    card:    'summary_large_image',
    site:    '@Schedio_studio',
    creator: '@Schedio_studio',
    title:   'Schedio | Web Design & Development Agency',
    description: 'Premium digital experiences for startups and lifestyle brands.',
  },
  icons: {
    icon: '/images/logo/logo-main.png',
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://schedio.studio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${loraFont.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

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
