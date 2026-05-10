import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import LegalBottomBar from '@/components/layout/LegalBottomBar';

export const metadata = {
  title: 'Privacy Policy — Schedio',
  description: 'How Schedio collects, uses, and protects your personal information.',
};

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: `When you contact us through our website, submit an inquiry form, or subscribe to our newsletter, we collect the information you voluntarily provide — including your name, email address, phone number, and any project details you share with us.

We also automatically collect certain technical information when you visit our site: your IP address, browser type, pages visited, time spent on pages, and referring URLs. This data is collected via standard server logs and analytics tools.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information we collect to:

• Respond to your inquiries and communicate about potential projects
• Send project updates, invoices, and other transactional communications
• Send our newsletter if you have opted in (you can unsubscribe at any time)
• Improve our website experience and understand how visitors interact with our content
• Comply with legal obligations

We do not sell, rent, or trade your personal information to third parties. Full stop.`,
  },
  {
    title: 'Cookies & Tracking',
    body: `Our website uses cookies to enhance your browsing experience and gather analytics data. These include essential cookies required for the site to function, and optional analytics cookies that help us understand usage patterns.

You can control cookie preferences through your browser settings. For full details on how we use cookies, see our Cookie Policy.`,
  },
  {
    title: 'Third-Party Services',
    body: `We use a small number of trusted third-party services to operate our site and business — including hosting providers, email platforms, and analytics tools. These services have access only to the information necessary to perform their functions and are bound by their own privacy policies.

We do not use any advertising networks or sell data to data brokers.`,
  },
  {
    title: 'Data Retention',
    body: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law. Inquiry data is typically retained for 3 years. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: 'Your Rights',
    body: `Depending on your location, you may have the right to:

• Access the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data
• Object to or restrict how we process your data
• Withdraw consent at any time (where processing is based on consent)

To exercise any of these rights, email us at info@schedio.studio. We will respond within 30 days.`,
  },
  {
    title: 'Data Security',
    body: `We take reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our site after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: 'Contact',
    body: `If you have questions or concerns about this Privacy Policy or how we handle your data, please contact us:

Schedio Studio
Mumbai, Maharashtra, India
info@schedio.studio
+91 (960) 776-9564`,
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
            Last updated: May 2025
          </p>
        </section>

        {/* Intro */}
        <section style={{
          padding: 'clamp(3rem, 5vw, 4.5rem) clamp(1.25rem, 4vw, 3rem)',
          borderBottom: '1px solid var(--border)',
          maxWidth: '72ch',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', lineHeight: 1.85, color: 'var(--text-muted)' }}>
            Schedio Studio ("we", "us", or "our") is committed to protecting your privacy. This policy explains what information we collect when you use our website, how we use it, and your rights in relation to it. We keep things simple and transparent — the way we think it should be.
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

        <LegalBottomBar links={[{ label: 'Terms of Service', href: '/terms' }, { label: 'Cookie Policy', href: '/cookie-policy' }]} />

      </main>
    </>
  );
}
