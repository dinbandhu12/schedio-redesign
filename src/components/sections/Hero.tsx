'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

/** Matches `Navbar` fixed header height so hero copy never sits under the bar */
const NAVBAR_OFFSET = 'calc(4.5rem + clamp(1rem, 3vw, 2rem))';

function FadeUp({ children, delay, isLoaded, style }: {
  children: React.ReactNode;
  delay: number;
  isLoaded: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, y: 28 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section
      className="hero-full"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 clamp(1.25rem, 4vw, 3rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 50% at 30% 60%, rgba(201,169,110,0.055) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Reserves space for fixed navbar — padding-top alone does not move flex-end content in a 100svh column */}
      <div
        aria-hidden
        style={{
          height: NAVBAR_OFFSET,
          flexShrink: 0,
        }}
      />

      {/* ── Main headline (fills remaining viewport, anchored to bottom) ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <h1
          aria-label="Crafting digital experiences from your vision to build an impact-driven web presence"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.2rem, 8.5vw, 9.5rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            fontWeight: 500,
            color: 'var(--text)',
          }}
        >
          {/* Line 1 */}
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span
              style={{ display: 'block' }}
              initial={{ y: '110%' }}
              animate={isLoaded ? { y: '0%' } : {}}
              transition={{ delay: 0.65, duration: 1.0, ease: EASE }}
            >
              Crafting{' '}
              <span className="pill-badge">DIGITAL ✦</span>
              {' '}experiences
            </motion.span>
          </span>

          {/* Line 2 */}
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span
              style={{ display: 'block' }}
              initial={{ y: '110%' }}
              animate={isLoaded ? { y: '0%' } : {}}
              transition={{ delay: 0.78, duration: 1.0, ease: EASE }}
            >
              from your{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>vision</em>
              {' '}to build
            </motion.span>
          </span>

          {/* Line 3 */}
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span
              style={{ display: 'block' }}
              initial={{ y: '110%' }}
              animate={isLoaded ? { y: '0%' } : {}}
              transition={{ delay: 0.91, duration: 1.0, ease: EASE }}
            >
              an impact-driven{' '}
              <span className="pill-badge">WEB PRESENCE</span>
              {' '}
              <span
                className="pill-badge"
                style={{ borderColor: 'var(--accent-dim)', color: 'var(--accent)' }}
              >
                →
              </span>
            </motion.span>
          </span>
        </h1>

        {/* Sub row */}
        <div
          style={{
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
            alignItems: 'end',
          }}
        >
          <FadeUp delay={1.1} isLoaded={isLoaded}>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: 'clamp(0.88rem, 1.4vw, 0.98rem)',
                lineHeight: 1.75,
                maxWidth: '44ch',
              }}
            >
              For startups and lifestyle brands seeking to bolster brand confidence,
              cultivate customer trust, and secure investor funding.
            </p>
          </FadeUp>

          <FadeUp
            delay={1.25}
            isLoaded={isLoaded}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
            className="hero-cta-row"
          >
            <MagneticButton>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  padding: '0.85rem 2rem',
                  borderRadius: '99px',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--accent-light)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--accent)')}
              >
                Get Started
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </MagneticButton>

            <Link
              href="/work"
              style={{
                fontSize: '0.8rem',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '2px',
                transition: 'color 0.25s, border-color 0.25s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--text)';
                el.style.borderColor = 'var(--text-muted)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--text-muted)';
                el.style.borderColor = 'var(--border)';
              }}
            >
              View Work
            </Link>
          </FadeUp>
        </div>
      </div>

    </section>
  );
}
