import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Schedio — a Mumbai-based web design and development studio dedicated to crafting purposeful digital experiences for startups and lifestyle brands.',
  openGraph: {
    title: 'About Schedio | Mumbai Web Design Studio',
    description: 'A Mumbai-based studio dedicated to purposeful design, thoughtful branding, and clean development.',
    url: 'https://schedio.studio/about',
  },
  alternates: {
    canonical: 'https://schedio.studio/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
