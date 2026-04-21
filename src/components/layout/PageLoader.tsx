'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topRef       = useRef<HTMLDivElement>(null);
  const botRef       = useRef<HTMLDivElement>(null);
  const countRef     = useRef<HTMLSpanElement>(null);
  const labelRef     = useRef<HTMLParagraphElement>(null);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setShown(false);
          onComplete();
        },
      });

      // Count up 000 → 100
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
      });

      // Fade label
      tl.to(labelRef.current, { opacity: 0, duration: 0.25 }, '-=0.1');

      // Curtain split
      tl.to([topRef.current, botRef.current], {
        scaleY: 0,
        duration: 0.85,
        ease: 'power4.inOut',
        stagger: 0.05,
      }, '-=0.15');
    }, containerRef);

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
          // gap: '0.75rem',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        {/* Text logo — always visible on dark bg */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: 'var(--text)',
          }}
        >
          SCHEDIO
        </p>
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
