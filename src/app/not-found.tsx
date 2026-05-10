'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const NAV_LINKS = [
  { label: 'Home',     href: '/'         },
  { label: 'Work',     href: '/work'     },
  { label: 'Services', href: '/services' },
  { label: 'Contact',  href: '/contact'  },
];

export default function NotFound() {
  return (
    <>
      <main
        style={{
          background: 'var(--bg)',
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Ghost watermark ── */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '-0.1em',
            right: '-0.02em',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(16rem, 45vw, 52rem)',
            fontWeight: 700,
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(237,232,223,0.18)',
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.06em',
          }}
        >
          404
        </span>

        {/* ── Content ── */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(7rem, 8vw, 10rem) clamp(1.25rem, 4vw, 3rem) clamp(4rem, 8vw, 6rem)',
            position: 'relative',
            zIndex: 1,
          }}
          className="max-w-full"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            <span style={{
              display: 'inline-block',
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--accent)',
              flexShrink: 0,
            }} />
            <p className="text-label">Error — 404</p>
            <div style={{ width: 'clamp(1.5rem, 4vw, 4rem)', height: 1, background: 'var(--border)' }} />
            <p className="text-label" style={{ color: 'var(--text-dim)' }}>Page not found</p>
          </motion.div>

          {/* Headline */}
          <div style={{ overflow: 'hidden', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: 0.2, ease }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 9vw, 10rem)',
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: 'var(--text)',
              }}
            >
              Lost in{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>the void.</em>
            </motion.h1>
          </div>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              maxWidth: '40ch',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            The page you're looking for has moved, been deleted, or never existed. Happens to the best of us.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            style={{ height: 1, background: 'var(--border)', marginBottom: 'clamp(2rem, 4vw, 3rem)', maxWidth: '40ch' }}
          />

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
          >
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: i === 0 ? '0.8rem 1.75rem' : '0.78rem 1.6rem',
                  borderRadius: 100,
                  background: i === 0 ? 'var(--accent)' : 'transparent',
                  border: i === 0 ? 'none' : '1px solid var(--border)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  fontWeight: i === 0 ? 500 : 400,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: i === 0 ? 'var(--bg)' : 'var(--text-muted)',
                  transition: 'background 0.25s, border-color 0.25s, color 0.25s',
                  cursor: 'none',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  if (i === 0) { el.style.background = 'var(--accent-light)'; }
                  else { el.style.borderColor = 'var(--accent)'; el.style.color = 'var(--accent)'; }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  if (i === 0) { el.style.background = 'var(--accent)'; }
                  else { el.style.borderColor = 'var(--border)'; el.style.color = 'var(--text-muted)'; }
                }}
              >
                {i === 0 && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 2L2 10M2 10H8M2 10V4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {link.label}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8, ease }}
          style={{
            borderTop: '1px solid var(--border)',
            padding: '1.1rem clamp(1.25rem, 4vw, 3rem)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
            © 2026 Schedio · All Rights Reserved
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--text-dim)' }}>
            schedio.studio
          </span>
        </motion.div>
      </main>
    </>
  );
}
