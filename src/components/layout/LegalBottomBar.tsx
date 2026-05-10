'use client';

import Link from 'next/link';

interface LegalBottomBarProps {
  links: { label: string; href: string }[];
}

function HoverLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.05em', transition: 'color 0.2s' }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-dim)')}
    >
      {children}
    </Link>
  );
}

export default function LegalBottomBar({ links }: LegalBottomBarProps) {
  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1.25rem, 4vw, 3rem)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem',
    }}>
      <Link
        href="/"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-dim)', transition: 'color 0.2s' }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-dim)')}
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M11 2L2 11M2 11H9M2 11V4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Back to Home
      </Link>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {links.map(l => (
          <HoverLink key={l.label} href={l.href}>{l.label}</HoverLink>
        ))}
      </div>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
        © 2026 Schedio
      </span>
    </div>
  );
}
