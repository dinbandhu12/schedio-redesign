'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const MARQUEE_WORDS = [
  "Let's build",
  'Design',
  'Branding',
  'Development',
  'Direction',
  'Launch',
];

// Duplicate for a seamless CSS ticker loop
const MARQUEE_DOUBLED = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

export default function CTABanner() {
  return (
    <section
      id="contact"
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* ── Top meta bar ── */}
      <div
        style={{
          padding:
            'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
        }}
      >
        <ScrollReveal>
          <p className="text-label" style={{ whiteSpace: 'nowrap' }}>
            Start a project — 06
          </p>
        </ScrollReveal>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <ScrollReveal delay={0.05}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 0 3px rgba(201,169,110,0.18)',
                animation: 'pulse-dot 2.4s ease-in-out infinite',
              }}
            />
            <p className="text-label" style={{ color: 'var(--text)' }}>
              Booking Q3 ·<br />3 slots left ·
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Hero split: big headline + contact card ── */}
      <div
        style={{
          padding: '0 clamp(1.25rem, 4vw, 3rem) clamp(4rem, 7vw, 6rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 'clamp(2.5rem, 5vw, 5rem)',
          alignItems: 'end',
        }}
      >
        <ScrollReveal delay={0.08}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 7.2vw, 8.2rem)',
              fontWeight: 400,
              lineHeight: 0.97,
              letterSpacing: '-0.035em',
              color: 'var(--text)',
              maxWidth: '14ch',
            }}
          >
            Let&rsquo;s make{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              something
            </em>{' '}
            worth remembering.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              maxWidth: '32ch',
            }}
          >
            {/* Email block */}
            <a
              href="mailto:info@schedio.studio"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--border)',
                borderRadius: 12,
                background: 'var(--surface-1)',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-dim)';
                e.currentTarget.style.background = 'var(--surface-2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--surface-1)';
              }}
            >
              <span
                className="text-label"
                style={{ color: 'var(--accent)', fontSize: '0.6rem' }}
              >
                // Write us
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                  color: 'var(--text)',
                  letterSpacing: '-0.005em',
                }}
              >
                info@schedio.studio
              </span>
            </a>

            {/* Schedule call block */}
            <Link
              href="/contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--border)',
                borderRadius: 12,
                background: 'var(--surface-1)',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-dim)';
                e.currentTarget.style.background = 'var(--surface-2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--surface-1)';
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <span
                  className="text-label"
                  style={{ color: 'var(--accent)', fontSize: '0.6rem' }}
                >
                  // Book a call
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                    color: 'var(--text)',
                  }}
                >
                  30-min intro
                </span>
              </div>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path
                  d="M5 17L17 5M17 5H8M17 5V14"
                  stroke="var(--text)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Location + time chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.55rem',
                paddingTop: '0.25rem',
              }}
            >
              {['Mumbai IN', 'GMT+5:30', 'Remote-friendly'].map((chip) => (
                <span
                  key={chip}
                  style={{
                    border: '1px solid var(--border)',
                    padding: '0.45rem 0.9rem',
                    borderRadius: 999,
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Outlined marquee strip ── */}
      <Link
        href="/contact"
        style={{
          display: 'block',
          overflow: 'hidden',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          textDecoration: 'none',
          color: 'inherit',
          WebkitTapHighlightColor: 'transparent',
        }}
        aria-label="Start a project with Schedio"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 'clamp(1rem, 2vw, 1.75rem) 0',
            animation: 'ticker-left 28s linear infinite',
            willChange: 'transform',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.animationPlayState = 'paused')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.animationPlayState = 'running')
          }
        >
          {MARQUEE_DOUBLED.map((word, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                flexShrink: 0,
                fontFamily: 'var(--font-display)',
                fontStyle: i % 2 === 0 ? 'normal' : 'italic',
                fontSize: 'clamp(2rem, 5.5vw, 5.5rem)',
                fontWeight: 400,
                letterSpacing: '-0.025em',
                whiteSpace: 'nowrap',
                color: i % 2 === 0 ? 'var(--text)' : 'transparent',
                WebkitTextStroke: i % 2 !== 0 ? '1px var(--text-dim)' : undefined,
                paddingRight: '2rem',
              }}
            >
              {word}
              <span
                aria-hidden
                style={{
                  display: 'inline-block',
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  marginLeft: '2rem',
                }}
              />
            </span>
          ))}
        </div>
      </Link>

      {/* ── Footer row ── */}
      <div
        style={{
          padding:
            'clamp(2rem, 4vw, 3rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4rem)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.82rem',
            letterSpacing: '0.05em',
            maxWidth: '50ch',
          }}
        >
          Briefs, loose ideas, even wild hunches — send them over.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)',
            }}
          >
            Also at
          </span>
          {['info@dinbandhu.com'].map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                borderBottom: '1px solid var(--border)',
                paddingBottom: 2,
                transition: 'color 0.25s, border-color 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {email}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
