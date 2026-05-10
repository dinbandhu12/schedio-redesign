import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Explore selected projects by Schedio — branding, web design, and development case studies for startups and lifestyle brands.',
  openGraph: {
    title: 'Work | Schedio',
    description: 'Selected branding, web design, and development projects from Schedio studio.',
    url: 'https://schedio.studio/work',
  },
  alternates: {
    canonical: 'https://schedio.studio/work',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
