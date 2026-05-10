import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Schedio offers brand identity design, UI/UX web design, and full-stack development — built to be fast, purposeful, and crafted to last.',
  openGraph: {
    title: 'Services | Schedio',
    description: 'Brand identity, web design, and development services from a Mumbai-based studio.',
    url: 'https://schedio.studio/services',
  },
  alternates: {
    canonical: 'https://schedio.studio/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
