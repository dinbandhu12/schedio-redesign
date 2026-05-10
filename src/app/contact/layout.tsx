import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Schedio. Get in touch with our Mumbai-based team for web design, branding, or development enquiries.',
  openGraph: {
    title: 'Contact Schedio | Start a Project',
    description: 'Get in touch with Schedio — Mumbai-based web design and development studio.',
    url: 'https://schedio.studio/contact',
  },
  alternates: {
    canonical: 'https://schedio.studio/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
