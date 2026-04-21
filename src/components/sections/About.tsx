'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const STATS = [
  { num: '05', label: 'Years in motion' },
  { num: '80+', label: 'Shipped projects' },
  { num: '45', label: 'Partners worldwide' },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      {/* ── Top meta-bar ── */}
      <div
        style={{
          padding: `clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem) 0`,
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
        }}
      >
        <ScrollReveal>
          <p className="text-label" style={{ whiteSpace: 'nowrap' }}>
            Studio — 01
          </p>
        </ScrollReveal>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <ScrollReveal delay={0.05}>
          <p className="text-label" style={{ whiteSpace: 'nowrap' }}>
            Est. 2020 · Mumbai IN
          </p>
        </ScrollReveal>
      </div>

      {/* ── Manifesto: massive italic headline with inline image tile ── */}
      <div
        style={{
          padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 6vw, 5rem)',
        }}
      >
        <ScrollReveal delay={0.08}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 7.2vw, 8.2rem)',
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: '-0.035em',
              color: 'var(--text)',
              maxWidth: '17ch',
            }}
          >
            We build{' '}
            <span
              aria-hidden
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                width: 'clamp(110px, 14vw, 240px)',
                height: 'clamp(42px, 9vw, 80px)',
                borderRadius: 999,
                overflow: 'hidden',
                position: 'relative',
                margin: '0 0.25em',
                border: '1px solid var(--border)',
                transform: 'translateY(-0.12em)',
              }}
            >
              <video
                src="/images/elements/vid01.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </span>
            brands with{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>soul,</em>
            <br />
            engineered for{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
              the screen.
            </em>
          </h2>
        </ScrollReveal>
      </div>

      {/* ── Asymmetric row: paragraph + stats + CTA ── */}
      <div
        style={{
          padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem)',
          borderTop: '1px solid var(--border)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'start',
        }}
      >
        <ScrollReveal>
          <p className="text-label" style={{ marginBottom: '1rem', color: 'var(--accent)' }}>
            // What we believe
          </p>
          <p
            style={{
              color: 'var(--text)',
              fontSize: 'clamp(0.98rem, 1.4vw, 1.15rem)',
              lineHeight: 1.7,
              maxWidth: '40ch',
              fontFamily: 'var(--font-body)',
            }}
          >
            A design collective working where brand identity, interface craft
            and considered engineering meet. We partner with founders who treat
            detail as a discipline.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(1rem, 2vw, 2rem)',
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 3.2vw, 3.4rem)',
                    color: 'var(--text)',
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.num}
                </p>
                <p
                  className="text-label"
                  style={{ marginTop: '0.65rem', fontSize: '0.6rem' }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              paddingTop: '0.5rem',
            }}
          >
            <Link
              href="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                color: 'var(--text-muted)',
                transition: 'color 0.25s, gap 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.gap = '1.15rem';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.gap = '0.75rem';
              }}
            >
              Meet the studio
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M3.5 14.5L14.5 3.5M14.5 3.5H7M14.5 3.5V11"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Overlapping rotated photo collage (desktop only) ── */}
      <div
        className="hidden md:block"
        style={{
          position: 'relative',
          height: 'clamp(560px, 64vw, 820px)',
          marginTop: 'clamp(1rem, 3vw, 2rem)',
          padding: '0 clamp(1.25rem, 4vw, 3rem) clamp(4rem, 7vw, 6rem)',
        }}
      >
        <ScrollReveal>
          <div
            style={{
              position: 'absolute',
              left: 'clamp(1rem, 4vw, 3.5rem)',
              top: '10%',
              width: 'clamp(170px, 22vw, 340px)',
              aspectRatio: '3/4',
              transform: 'rotate(-5deg)',
              overflow: 'hidden',
              borderRadius: 10,
              border: '1px solid var(--border)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
              zIndex: 1,
            }}
          >
            <Image
              src="/images/showcase/img-04.png"
              alt=""
              fill
              sizes="340px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div
            style={{
              position: 'absolute',
              left: '36%',
              top: '28%',
              width: 'clamp(220px, 30vw, 460px)',
              aspectRatio: '4/3',
              transform: 'rotate(2.5deg)',
              overflow: 'hidden',
              borderRadius: 10,
              border: '1px solid var(--border)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
              zIndex: 3,
            }}
          >
            <Image
              src="/images/showcase/img-08.png"
              alt=""
              fill
              sizes="460px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div
            style={{
              position: 'absolute',
              right: 'clamp(1rem, 4vw, 3.5rem)',
              top: '5%',
              width: 'clamp(170px, 22vw, 340px)',
              aspectRatio: '4/5',
              transform: 'rotate(6deg)',
              overflow: 'hidden',
              borderRadius: 10,
              border: '1px solid var(--border)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.45)',
              zIndex: 2,
            }}
          >
            <Image
              src="/images/showcase/img-06.png"
              alt=""
              fill
              sizes="340px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </ScrollReveal>

        {/* Small accent photo — bottom-left */}
        <ScrollReveal delay={0.22}>
          <div
            style={{
              position: 'absolute',
              left: '22%',
              bottom: '8%',
              width: 'clamp(110px, 14vw, 210px)',
              aspectRatio: '1/1',
              transform: 'rotate(-9deg)',
              overflow: 'hidden',
              borderRadius: 10,
              border: '1px solid var(--border)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              zIndex: 4,
            }}
          >
            <Image
              src="/images/showcase/img-10.png"
              alt=""
              fill
              sizes="210px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </ScrollReveal>

        {/* Small accent photo — right, lower */}
        <ScrollReveal delay={0.28}>
          <div
            style={{
              position: 'absolute',
              right: '24%',
              bottom: '14%',
              width: 'clamp(120px, 15vw, 230px)',
              aspectRatio: '4/3',
              transform: 'rotate(4deg)',
              overflow: 'hidden',
              borderRadius: 10,
              border: '1px solid var(--border)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              zIndex: 4,
            }}
          >
            <Image
              src="/images/showcase/img-11.png"
              alt=""
              fill
              sizes="230px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </ScrollReveal>

        <p
          style={{
            position: 'absolute',
            left: 'clamp(0.25rem, 1.5vw, 1rem)',
            bottom: '15%',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontSize: '0.62rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-body)',
          }}
        >
          Collage — Schedio Studio · MMXX / MMXXVI
        </p>

        <div
          style={{
            position: 'absolute',
            right: 'clamp(1.25rem, 4vw, 3rem)',
            bottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            maxWidth: '22ch',
            textAlign: 'right',
            zIndex: 5,
          }}
        >
          <p
            className="text-label"
            style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}
          >
            // In the wild
          </p>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.5,
            }}
          >
            Fragments from the studio wall — sketches, screens, stills.
          </p>
        </div>
      </div>

    </section>
  );
}
