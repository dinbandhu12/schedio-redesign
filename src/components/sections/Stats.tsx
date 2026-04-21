'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

const STATS = [
  { value: 50,  suffix: '+', label: 'Projects Delivered' },
  { value: 5,   suffix: '+', label: 'Years of Experience' },
  { value: 3,   suffix: '',  label: 'Core Disciplines' },
  { value: 98,  suffix: '%', label: 'Client Satisfaction' }
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section
      style={{
        width: '100%',
        padding: `var(--section-pad) clamp(1.25rem, 4vw, 3rem)`,
        borderBottom: '1px solid var(--border)',
      }}
    >
      <ScrollReveal>
        <p className="text-label" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          By the numbers
        </p>
      </ScrollReveal>

      <div className="stats-grid">
        {STATS.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.06} style={{ width: '100%' }}>
            {/* ✅ index class applied directly on the cell */}
            <div className={`stat-cell stat-cell--${i}`}>
              <p className="stat-value">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="stat-label">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          width: 100%;
        }

        /* All cells get top + bottom border */
        .stat-cell {
          padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.75rem);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        /* Desktop: items 1, 2, 3 (index 1–3) get left border */
        .stat-cell--1,
        .stat-cell--2,
        .stat-cell--3 {
          border-left: 1px solid var(--border);
        }

        @media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* ✅ Only right column (index 1 and 3) get left border */
  .stat-cell--1,
  .stat-cell--3 {
    border-left: 1px solid var(--border);
  }

  /* ✅ Override: remove left border from index 2 */
  .stat-cell--2 {
    border-left: none;
  }

  .stat-cell--2,
  .stat-cell--3 {
    border-top: none;
  }
}
      `}</style>

      <style>{`
        .stat-value {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5vw, 4.8rem);
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1;
          color: var(--text);
          margin-bottom: 0.6rem;
        }

        .stat-label {
          font-size: 0.82rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
        }
      `}</style>
    </section>
  );
}