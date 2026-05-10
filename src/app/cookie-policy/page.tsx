import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import LegalBottomBar from '@/components/layout/LegalBottomBar';

export const metadata = {
  title: 'Cookie Policy — Schedio',
  description: 'How Schedio uses cookies and similar tracking technologies on our website.',
};

const COOKIE_TYPES = [
  {
    name: 'Essential Cookies',
    required: true,
    desc: 'These cookies are necessary for the website to function and cannot be disabled. They are typically set in response to actions you take such as setting your privacy preferences or navigating between pages. You can configure your browser to block these cookies, but some parts of the site may not work correctly.',
    examples: ['Session management', 'Security tokens', 'Load balancing'],
  },
  {
    name: 'Analytics Cookies',
    required: false,
    desc: "These cookies help us understand how visitors interact with our website. All data is aggregated and anonymised — we cannot identify individual users from it. We use this information to improve our site's content and performance.",
    examples: ['Page views and navigation paths', 'Time spent on pages', 'Referring websites', 'Device and browser type'],
  },
  {
    name: 'Preference Cookies',
    required: false,
    desc: 'These cookies allow the website to remember choices you have made and provide enhanced, more personalised features. For example, remembering if you have dismissed a banner.',
    examples: ['Language or region preferences', 'UI state preferences'],
  },
];

const SECTIONS = [
  {
    title: 'What Are Cookies?',
    body: `Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work, to work more efficiently, and to provide information to website owners.

Cookies are not programs — they cannot carry viruses or install malware. They simply store small pieces of information about your visit.`,
  },
  {
    title: 'How We Use Cookies',
    body: `We use cookies to keep our website running properly, to understand how it is used, and to improve it over time. We do not use cookies for advertising, remarketing, or tracking you across other websites.

Our cookies fall into three categories: essential, analytics, and preference. You can find a full breakdown in the table below.`,
  },
  {
    title: 'Third-Party Cookies',
    body: `Some cookies are set by third-party services we use, such as analytics platforms. These providers may have access to aggregated, anonymised data about visits to our site. We do not authorise any third party to use cookies for advertising purposes on our site.

Any third-party services we use are carefully selected and subject to their own privacy policies.`,
  },
  {
    title: 'Managing Your Cookies',
    body: `You can control and manage cookies in several ways:

Browser settings — Most browsers allow you to view, delete, and block cookies. Consult your browser's help documentation for instructions. Note that blocking all cookies may affect your experience on this and other websites.

Browser extensions — Tools like Privacy Badger or uBlock Origin give you granular control over cookies and trackers.

Our website — When you first visit, we present you with a cookie consent notice where you can accept or decline non-essential cookies.

Please note that if you choose to block or delete essential cookies, parts of our website may not function correctly.`,
  },
  {
    title: 'Cookie Lifespan',
    body: `Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period — typically between 30 days and 2 years, depending on their purpose — or until you delete them manually.

We periodically review the cookies we use to ensure they remain necessary and proportionate.`,
  },
  {
    title: 'Updates to This Policy',
    body: `We may update this Cookie Policy to reflect changes in the cookies we use or for operational, legal, or regulatory reasons. We will update the "Last updated" date at the top of this page when we do so. Please revisit this page periodically to stay informed.`,
  },
  {
    title: 'Contact',
    body: `Questions about how we use cookies? Contact us:

Schedio Studio
Mumbai, Maharashtra, India
info@schedio.studio
+91 (960) 776-9564`,
  },
];

export default function CookiePolicyPage() {
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
            Cookie Policy
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
            This Cookie Policy explains how Schedio Studio uses cookies and similar technologies when you visit our website. We keep it minimal — we only use cookies that serve a clear purpose, and we never use them to track you across the web for advertising.
          </p>
        </section>

        {/* Cookie type cards */}
        <section style={{
          padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 4vw, 3rem)',
          borderBottom: '1px solid var(--border)',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '2rem' }}>
            Cookies we use
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {COOKIE_TYPES.map((ct, i) => (
              <div
                key={ct.name}
                style={{
                  padding: 'clamp(1.75rem, 3.5vw, 2.75rem) 0',
                  borderTop: '1px solid var(--border)',
                  borderBottom: i === COOKIE_TYPES.length - 1 ? '1px solid var(--border)' : 'none',
                  display: 'grid',
                  gap: 'clamp(1.5rem, 3vw, 3rem)',
                  alignItems: 'start',
                }}
                className="lg:grid-cols-[280px_1fr]"
              >
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '0.6rem' }}>
                    {ct.name}
                  </h3>
                  <span style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    padding: '0.22rem 0.7rem',
                    borderRadius: 100,
                    border: `1px solid ${ct.required ? 'var(--accent-dim)' : 'var(--border)'}`,
                    color: ct.required ? 'var(--accent)' : 'var(--text-dim)',
                  }}>
                    {ct.required ? 'Always active' : 'Optional'}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.88rem, 1.1vw, 0.96rem)', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '1.25rem', maxWidth: '60ch' }}>
                    {ct.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {ct.examples.map(ex => (
                      <li key={ex} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--accent-dim)', flexShrink: 0 }} />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
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

        <LegalBottomBar links={[{ label: 'Privacy Policy', href: '/privacy-policy' }, { label: 'Terms of Service', href: '/terms' }]} />

      </main>
    </>
  );
}
