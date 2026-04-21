'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHover,   setIsHover]   = useState(false);
  const [isClick,   setIsClick]   = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  // Effect 1: detect device type once on mount
  useEffect(() => {
    const fine  = window.matchMedia('(pointer: fine)').matches;
    const hover = window.matchMedia('(hover: hover)').matches;
    if (fine && hover) setIsPointer(true);
  }, []);

  // Effect 2: attach tracking only after isPointer is true AND DOM elements exist
  useEffect(() => {
    if (!isPointer) return;
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      rafId = requestAnimationFrame(loop);
    };

    const onEnter = () => setIsHover(true);
    const onLeave = () => setIsHover(false);
    const onDown  = () => setIsClick(true);
    const onUp    = () => setIsClick(false);

    const targets = document.querySelectorAll('a, button, [data-cursor], input, textarea, label');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup',   onUp);
    rafId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup',   onUp);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      cancelAnimationFrame(rafId);
    };
  }, [isPointer]); // runs again when isPointer flips to true

  // Don't render anything on touch/mobile — return null before first paint
  if (!isPointer) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 8, height: 8,
          borderRadius: '50%',
          backgroundColor: 'var(--accent)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isClick ? 0.6 : 1,
          transition: 'opacity 0.2s',
          willChange: 'transform',
          mixBlendMode: 'difference',
          transform: 'translate(-40px, -40px)', // start offscreen until first mousemove
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: isHover ? 56 : 40,
          height: isHover ? 56 : 40,
          borderRadius: '50%',
          border: `1px solid ${isHover ? 'var(--accent)' : 'rgba(237,232,223,0.35)'}`,
          pointerEvents: 'none',
          zIndex: 99998,
          transition: `border-color 0.3s, width 0.3s var(--ease-out-expo), height 0.3s var(--ease-out-expo)`,
          willChange: 'transform',
          transform: 'translate(-40px, -40px)', // start offscreen
        }}
      />
    </>
  );
}
