'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { PostMeta } from '@/lib/blog';

export default function PostInteractive({ next }: { next: PostMeta }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={{ borderBottom: '1px solid var(--border)' }}>
      <Link href={`/blog/${next.slug}`} style={{ display: 'block' }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3rem)',
            gap: '2rem',
            background: hovered ? 'var(--surface-1)' : 'transparent',
            transition: 'background 0.25s',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.62rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginBottom: '0.75rem',
              }}
            >
              Next article
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: hovered ? 'var(--accent-light)' : 'var(--text)',
                transition: 'color 0.25s',
                maxWidth: '40ch',
              }}
            >
              {next.title}
            </h3>
          </div>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              border: `1px solid ${hovered ? 'var(--accent-dim)' : 'var(--border)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: hovered ? 'var(--accent)' : 'var(--text-muted)',
              transition: 'border-color 0.25s, color 0.25s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </Link>
    </section>
  );
}
