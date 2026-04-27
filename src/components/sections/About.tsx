'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ease = [0.16, 1, 0.3, 1] as const;

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
              fontSize: 'clamp(2.6rem, 7.2vw, 8.2rem)',
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

      {/* ── Redesigned: "What we believe" — editorial split layout ── */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          padding: 'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Faint section watermark */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: '-0.1em',
            right: '-0.04em',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(9rem, 20vw, 26rem)',
            fontWeight: 700,
            color: 'transparent',
            WebkitTextStroke: '1px var(--border)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-0.05em',
            opacity: 0.6,
          }}
        >
          01
        </span>

        {/* Label bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: 'clamp(3.5rem, 7vw, 6rem)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <ScrollReveal>
            <p className="text-label" style={{ color: 'var(--accent)' }}>
              // What we believe
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="text-label">Est. 2020 · Studio in motion</p>
          </ScrollReveal>
        </div>

        {/* Main two-column grid — stacks on mobile */}
        <div
          className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
          style={{
            gap: 'clamp(3rem, 7vw, 8rem)',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* ── Left: editorial text ── */}
          <div>
            <ScrollReveal>
              {/* Gold rule */}
              <div
                style={{
                  width: 36,
                  height: 2,
                  background: 'var(--accent)',
                  marginBottom: '1.75rem',
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 3.2vw, 3.4rem)',
                  fontWeight: 400,
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                  color: 'var(--text)',
                  marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)',
                }}
              >
                A design collective working where{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                  brand identity,
                </em>{' '}
                interface craft and{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
                  considered engineering
                </em>{' '}
                meet.
              </h3>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                  lineHeight: 1.85,
                  maxWidth: '36ch',
                  fontFamily: 'var(--font-body)',
                }}
              >
                We partner with founders who treat detail as a discipline — from
                the first brand mark to the last interaction state.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <div
              className="grid grid-cols-3"
              style={{
                gap: 'clamp(0.75rem, 2vw, 1rem)',
                marginTop: 'clamp(2.5rem, 5vw, 4rem)',
                paddingTop: 'clamp(2rem, 4vw, 3rem)',
                borderTop: '1px solid var(--border)',
              }}
            >
              {STATS.map((s, i) => (
                <ScrollReveal key={s.label} delay={0.07 + i * 0.05}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2rem, 3.4vw, 4rem)',
                      color: 'var(--text)',
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="text-label"
                    style={{ marginTop: '0.65rem', fontSize: '0.58rem' }}
                  >
                    {s.label}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA */}
            <ScrollReveal delay={0.22}>
              <Link
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginTop: 'clamp(2.5rem, 5vw, 4rem)',
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
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
            </ScrollReveal>
          </div>

          {/* ── Right: bento image grid ── */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: '1fr 1.4fr',
              gridTemplateRows: '1fr 1fr',
              gap: 'clamp(0.65rem, 1vw, 1rem)',
              height: 'clamp(280px, 70vw, 640px)',
            }}
          >
            {/* Tall left — spans both rows */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              style={{
                gridColumn: '1',
                gridRow: '1 / 3',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                position: 'relative',
              }}
            >
              <Image
                src="/images/showcase/mockup-1.png"
                alt=""
                fill
                sizes="28vw"
                style={{ objectFit: 'cover', transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)' }}
              />
            </motion.div>

            {/* Top right — landscape */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease, delay: 0.1 }}
              style={{
                gridColumn: '2',
                gridRow: '1',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                position: 'relative',
              }}
            >
              <Image
                src="/images/showcase/img-08.png"
                alt=""
                fill
                sizes="32vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>

            {/* Bottom right — with overlay caption */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease, delay: 0.18 }}
              style={{
                gridColumn: '2',
                gridRow: '2',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                position: 'relative',
              }}
            >
              <Image
                src="/images/showcase/img-06.png"
                alt=""
                fill
                sizes="32vw"
                style={{ objectFit: 'cover' }}
              />
              {/* Gradient vignette */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, transparent 35%, rgba(9,9,8,0.9) 100%)',
                  pointerEvents: 'none',
                }}
              />
              {/* "In the wild" overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 'clamp(0.85rem, 1.5vw, 1.25rem)',
                  left: 'clamp(0.85rem, 1.5vw, 1.25rem)',
                  right: 'clamp(0.85rem, 1.5vw, 1.25rem)',
                }}
              >
                <p
                  className="text-label"
                  style={{ color: 'var(--accent)', marginBottom: '0.3rem' }}
                >
                  // In the wild
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)',
                    color: 'rgba(237,232,223,0.75)',
                    lineHeight: 1.45,
                  }}
                >
                  Sketches, screens, stills.
                </p>
              </div>
            </motion.div>
          </div>
        </div>


      </div>

    </section>
  );
}
