import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import LegalBottomBar from '@/components/layout/LegalBottomBar';

export const metadata = {
  title: 'Terms of Service — Schedio',
  description: "The terms and conditions governing use of Schedio's website and services.",
};

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing or using the Schedio Studio website (schedio.studio), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.

These terms apply to all visitors, prospective clients, and anyone who accesses or uses our website or services. We reserve the right to update these terms at any time, and your continued use of the site constitutes acceptance of any changes.`,
  },
  {
    title: 'Services',
    body: `Schedio Studio provides web design, branding, development, and motion design services to clients under separate written agreements. The terms of any specific project engagement — scope, deliverables, timelines, payment — are governed by the project contract or proposal signed between Schedio and the client.

Nothing on this website constitutes a binding service agreement or guarantee of availability.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content on this website — including text, images, design, graphics, logos, and code — is the property of Schedio Studio and is protected by applicable copyright and intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written permission. For press inquiries or licensing requests, please contact us directly.

Work displayed in our portfolio remains the intellectual property of the respective clients. We display it with their permission.`,
  },
  {
    title: 'Client Work & Deliverables',
    body: `Ownership of final deliverables produced for clients is defined in each individual project contract. In general, upon full payment, clients receive ownership of the final agreed-upon deliverables. Schedio retains the right to display the work in its portfolio unless otherwise agreed in writing.

Source files, working documents, and design system internals remain the property of Schedio unless explicitly transferred as part of the project scope.`,
  },
  {
    title: 'Limitation of Liability',
    body: `Schedio Studio's website and its content are provided "as is" without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.

To the fullest extent permitted by law, Schedio Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website — including loss of profits, data, or business opportunities.

Our total liability in connection with any claim arising from these terms shall not exceed the amount paid by you to Schedio in the three months preceding the claim, or INR 5,000, whichever is greater.`,
  },
  {
    title: 'Third-Party Links',
    body: `Our website may contain links to third-party websites. These links are provided for convenience only. Schedio Studio does not endorse, control, or assume responsibility for the content or practices of any third-party sites. Visiting linked sites is at your own risk.`,
  },
  {
    title: 'User Conduct',
    body: `When using our website or contacting us, you agree not to:

• Submit false, misleading, or fraudulent information
• Attempt to access systems or data you are not authorised to access
• Use our website for any unlawful purpose
• Interfere with or disrupt the integrity or performance of the site
• Attempt to reverse-engineer or scrape content from the site in bulk

We reserve the right to refuse service or engagement to anyone who violates these terms.`,
  },
  {
    title: 'Governing Law',
    body: `These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.`,
  },
  {
    title: 'Contact',
    body: `Questions about these terms? Reach us at:

Schedio Studio
Mumbai, Maharashtra, India
info@schedio.studio
+91 (960) 776-9564`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar isLoaded={true} />

      <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{
          padding: 'clamp(7rem, 10vw, 10rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4rem)',
          borderBottom: '1px solid var(--border)',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>
            Legal
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7vw, 7rem)',
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: 'var(--text)',
            marginBottom: '1.5rem',
          }}>
            Terms of Service
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
            Last updated: May 2026
          </p>
        </section>

        {/* Intro */}
        <section style={{
          padding: 'clamp(3rem, 5vw, 4.5rem) clamp(1.25rem, 4vw, 3rem)',
          borderBottom: '1px solid var(--border)',
          maxWidth: '72ch',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', lineHeight: 1.85, color: 'var(--text-muted)' }}>
            These Terms of Service govern your use of the Schedio Studio website. Please read them carefully. We've written them to be clear and direct — no intentionally confusing legal jargon.
          </p>
        </section>

        {/* Sections */}
        <section style={{ padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 3rem)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {SECTIONS.map((s, i) => (
              <div
                key={s.title}
                style={{
                  display: 'grid',
                  gap: 'clamp(1.5rem, 3vw, 3rem)',
                  padding: 'clamp(2rem, 4vw, 3.5rem) 0',
                  borderTop: '1px solid var(--border)',
                  borderBottom: i === SECTIONS.length - 1 ? '1px solid var(--border)' : 'none',
                  alignItems: 'start',
                }}
                className="lg:grid-cols-[280px_1fr]"
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--text-dim)', textTransform: 'uppercase', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    lineHeight: 1.2,
                  }}>
                    {s.title}
                  </h2>
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.88rem, 1.1vw, 0.96rem)',
                  lineHeight: 1.9,
                  color: 'var(--text-muted)',
                  whiteSpace: 'pre-line',
                  maxWidth: '60ch',
                }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <LegalBottomBar links={[{ label: 'Privacy Policy', href: '/privacy-policy' }, { label: 'Cookie Policy', href: '/cookie-policy' }]} />

      </main>
    </>
  );
}
