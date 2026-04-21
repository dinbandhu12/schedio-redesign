'use client';

import Link from 'next/link';
import Image from 'next/image';

const EXPLORE = [
  { label: 'Home',     href: '/'         },
  { label: 'About',    href: '/about'    },
  { label: 'Services', href: '/services' },
  { label: 'Work',     href: '/work'     },
  { label: 'Blog',     href: '/blog'     },
  { label: 'Contact',  href: '/contact'  },
];

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/schedio_agency/' },
  { label: 'Behance',   href: 'https://www.behance.net/tempacc5'          },
  { label: 'Twitter/X', href: 'https://x.com/Schedio_studio'             },
  { label: 'Dribbble',  href: 'https://dribbble.com/schedio-studio'      },
  { label: 'LinkedIn',  href: '#'                                         },
];

function ColLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith('http');
  const Tag = isExternal ? 'a' : Link;
  const extra = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    /* block div keeps each link on its own line */
    <div style={{ lineHeight: 2.1 }}>
      <Tag
        href={href}
        style={{
          display: 'inline',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
        {...(extra as object)}
      >
        {label}
      </Tag>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--surface-1)',
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      {/* ── Centered tagline ── */}
      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'clamp(3.5rem, 7vw, 5.5rem) clamp(1.25rem, 4vw, 3rem)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <Image
          src="/images/logo/logo-main.svg"
          alt="Schedio"
          width={26}
          height={26}
          style={{ objectFit: 'contain', opacity: 0.45, marginBottom: '1.1rem' }}
        />
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
            color: 'var(--text-muted)',
            letterSpacing: '-0.01em',
            lineHeight: 1.5,
            maxWidth: '38ch',
          }}
        >
          Crafting digital experiences, one detail at a time.
        </p>
      </div> */}

      {/* ── 4-column grid ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'clamp(2.5rem, 5vw, 3.5rem)',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem)',
        }}
      >
        {/* Contact */}
        <div>
          <p
            className="text-label"
            style={{ marginBottom: '1.5rem' }}
          >
            Contact
          </p>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-dim)',
              lineHeight: 1.8,
              marginBottom: '0.85rem',
            }}
          >
            Mumbai, Maharashtra
            <br />
            India
          </p>
          <a
            href="mailto:info@schedio.studio"
            style={{
              display: 'block',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              lineHeight: 2.1,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
          >
            info@schedio.studio
          </a>
          <a
            href="tel:+919607769564"
            style={{
              display: 'block',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              lineHeight: 2.1,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
          >
            +91 (960) 776-9564
          </a>
        </div>

        {/* Pages */}
        <div>
          <p className="text-label" style={{ marginBottom: '1.5rem' }}>
            Pages
          </p>
          {EXPLORE.map(l => (
            <ColLink key={l.label} href={l.href} label={l.label} />
          ))}
        </div>

        {/* Social */}
        <div>
          <p className="text-label" style={{ marginBottom: '1.5rem' }}>
            Social
          </p>
          {SOCIALS.map(l => (
            <ColLink key={l.label} href={l.href} label={l.label} />
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-label" style={{ marginBottom: '1.5rem' }}>
            Newsletter
          </p>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              marginBottom: '1.25rem',
              maxWidth: '22ch',
            }}
          >
            Stay updated with our latest work and insights.
          </p>
          <form
            onSubmit={e => e.preventDefault()}
            style={{
              display: 'flex',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              overflow: 'hidden',
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                background: 'var(--surface-2)',
                border: 'none',
                padding: '0.6rem 0.85rem',
                fontSize: '0.78rem',
                color: 'var(--text)',
                outline: 'none',
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--surface-2)',
                border: 'none',
                borderLeft: '1px solid var(--border)',
                padding: '0 0.85rem',
                color: 'var(--text-muted)',
                cursor: 'none',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)')}
              aria-label="Subscribe"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ── Oversized wordmark ── */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          lineHeight: 1,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(6rem, 24vw, 20rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 0.88,
            margin: 0,
            /* warm semi-transparent gold — visible but not harsh */
            color: 'rgba(201, 169, 110, 0.18)',
            userSelect: 'none',
            textAlign: 'center',
            transition: 'color 0.45s',
          }}
          onMouseEnter={e =>
            ((e.currentTarget as HTMLElement).style.color = 'rgba(201, 169, 110, 0.32)')
          }
          onMouseLeave={e =>
            ((e.currentTarget as HTMLElement).style.color = 'rgba(201, 169, 110, 0.18)')
          }
        >
          SCHEDIO
        </p>
      </div>

      {/* ── Copyright bar ── */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          padding: '1.1rem clamp(1.25rem, 4vw, 3rem)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
          © 2025 Schedio · All Rights Reserved
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'Privacy Policy',     href: '/privacy-policy' },
            { label: 'Terms & Conditions', href: '/terms'          },
          ].map(item => (
            <Link
              key={item.label}
              href={item.href}
              style={{ fontSize: '0.72rem', color: 'var(--text-dim)', transition: 'color 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-dim)')}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
