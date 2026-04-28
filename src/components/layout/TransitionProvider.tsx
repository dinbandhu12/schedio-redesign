'use client';

import { createContext, useCallback, useContext, useRef, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface TransitionCtx {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionCtx>({ navigate: () => {} });
export const usePageTransition = () => useContext(TransitionContext);

const easeIn = [0.76, 0, 0.24, 1] as [number, number, number, number];

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router    = useRouter();
  const pathname  = usePathname();

  const [active, setActive]   = useState(false);
  const hrefRef               = useRef('');
  const transitioningRef      = useRef(false);
  const firstRender           = useRef(true);

  const navigate = useCallback((href: string) => {
    if (href === window.location.pathname) return;
    if (transitioningRef.current) return; // prevent double-trigger
    hrefRef.current      = href;
    transitioningRef.current = true;
    setActive(true);
    // Wait for curtain to fully cover, then navigate
    setTimeout(() => router.push(href), 680);
  }, [router]);

  // Intercept all internal anchor clicks globally
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const a = (e.target as Element).closest('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') ?? '';
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('http') ||
        href.startsWith('mailto') ||
        href.startsWith('tel') ||
        href === window.location.pathname
      ) return;
      e.preventDefault();
      navigate(href);
    };
    document.addEventListener('click', handle);
    return () => document.removeEventListener('click', handle);
  }, [navigate]);

  // When pathname changes, navigation is done → lift curtain after a short delay
  // The delay ensures the curtain stays visible even on pre-fetched/instant loads
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    if (!transitioningRef.current) return;
    const t = setTimeout(() => {
      transitioningRef.current = false;
      setActive(false);
    }, 320);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <AnimatePresence>
        {active && (
          <motion.div
            key="page-curtain"
            // Curtain falls: reveals top-to-bottom (same pattern as nav overlay open)
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            // Curtain lifts: disappears top-to-bottom (inverse — page revealed from top)
            exit={{ clipPath: 'inset(100% 0 0 0)' }}
            transition={{ duration: 0.65, ease: easeIn }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9000,
              background: 'var(--surface-1)',
              pointerEvents: 'all',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {/* Subtle logo mark centered during transition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.9rem' }}
            >
              <Image
                src="/images/logo/logo-main.svg"
                alt=""
                width={36}
                height={36}
                style={{ objectFit: 'contain', opacity: 0.6 }}
              />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
              }}>
                Schedio
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
