'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PageLoaderProps {
  onComplete: () => void;
}

const LETTERS = 'SCHEDIO'.split('');

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topRef       = useRef<HTMLDivElement>(null);
  const botRef       = useRef<HTMLDivElement>(null);
  const countRef     = useRef<HTMLSpanElement>(null);
  const labelRef     = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(true);

  // Runs before first paint — letters are hidden before the user ever sees them
  useLayoutEffect(() => {
    gsap.set('.loader-letter', { yPercent: 120 });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setShown(false);
          onComplete();
        },
      });

      // Letters rise from below — scoped selector, staggered in sync with counter
      tl.fromTo(
        '.loader-letter',
        { yPercent: 120 },
        { yPercent: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08 },
        0
      );

      // Count up 000 → 100 in parallel
      const counter = { val: 0 };
      tl.to(counter, {
        val: 100,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate() {
          if (countRef.current) {
            countRef.current.textContent = String(Math.round(counter.val)).padStart(3, '0');
          }
        },
      }, 0);

      // Fade label out
      tl.to(labelRef.current, { opacity: 0, duration: 0.25 }, '-=0.1');

      // Curtain split
      tl.to([topRef.current, botRef.current], {
        scaleY: 0,
        duration: 0.85,
        ease: 'power4.inOut',
        stagger: 0.05,
      }, '-=0.15');

    }, containerRef); // scope — selectors are relative to containerRef

    return () => ctx.revert();
  }, [onComplete]);

  if (!shown) return null;

  return (
    <div ref={containerRef} style={{ position: 'fixed', inset: 0, zIndex: 9990 }}>
      {/* Top curtain */}
      <div
        ref={topRef}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: '50%',
          background: 'var(--surface-1)',
          transformOrigin: 'top',
        }}
      />
      {/* Bottom curtain */}
      <div
        ref={botRef}
        style={{
          position: 'absolute',
          top: '50%', left: 0, right: 0, bottom: 0,
          background: 'var(--surface-1)',
          transformOrigin: 'bottom',
        }}
      />

      {/* Center label */}
      <div
        ref={labelRef}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        {/* SCHEDIO — each letter clipped and rising from below */}
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          {LETTERS.map((char, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                lineHeight: 1.1,
              }}
            >
              <span
                className="loader-letter"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: 'var(--text)',
                }}
              >
                {char}
              </span>
            </span>
          ))}
        </div>

        <p className="text-label">Design &amp; Development</p>
      </div>

      {/* Counter — bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2.5rem',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        <span
          ref={countRef}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 300,
            color: 'var(--text-dim)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          000
        </span>
      </div>
    </div>
  );
}
