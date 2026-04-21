'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home',     href: '/',         desc: 'Start here',         img: '/images/showcase/img-11.png' },
  { label: 'About',    href: '/about',    desc: 'Our studio story',   img: '/images/showcase/img-07.png' },
  { label: 'Services', href: '/services', desc: 'What we craft',      img: '/images/showcase/img-05.png' },
  { label: 'Work',     href: '/work',     desc: 'Case studies',       img: '/images/showcase/img-18.png' },
  { label: 'Blog',     href: '/blog',     desc: 'Thoughts & ideas',   img: '/images/showcase/img-12.png' },
  { label: 'Contact',  href: '/contact',  desc: 'Get in touch',       img: '/images/showcase/img-09.png' },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const easeIn = [0.76, 0, 0.24, 1] as [number, number, number, number];

export default function Navbar({ isLoaded }: { isLoaded: boolean }) {
  const [open,        setOpen]        = useState(false);
  const [hidden,      setHidden]      = useState(false);
  const [atTop,       setAtTop]       = useState(true);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [menuHover,   setMenuHover]   = useState(false);
  const [logoSpin,    setLogoSpin]    = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 40);
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ── Navbar bar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={isLoaded ? { y: hidden ? -80 : 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.6, ease }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 800,
          padding: '0 clamp(1.25rem, 4vw, 3rem)',
          height: '4.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: atTop ? 'none' : 'blur(16px)',
          WebkitBackdropFilter: atTop ? 'none' : 'blur(16px)',
          borderBottom: atTop ? '1px solid transparent' : '1px solid var(--border)',
          background: atTop ? 'transparent' : 'rgba(9,9,8,0.63)',
          transition: 'background 0.4s, border-color 0.4s',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Image
            src="/images/logo/logo-main.svg"
            alt="Schedio"
            width={30}
            height={30}
            onMouseEnter={() => setLogoSpin(true)}
            onAnimationEnd={() => setLogoSpin(false)}
            style={{
              objectFit: 'contain',
              animation: logoSpin ? 'spin360 0.55s cubic-bezier(0.4,0,0.2,1)' : 'none',
            }}
          />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            fontWeight: 600,
            letterSpacing: '0.02em',
            color: 'var(--text)',
          }}>
            Schedio
          </span>
        </Link>

        {/* MENU pill button */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          onMouseEnter={() => setMenuHover(true)}
          onMouseLeave={() => setMenuHover(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            padding: '0.5rem 1.15rem 0.5rem 1.25rem',
            border: '1px solid',
            borderColor: menuHover ? 'var(--accent)' : 'var(--border)',
            borderRadius: 100,
            background: menuHover ? 'rgba(201,169,110,0.07)' : 'transparent',
            cursor: 'none',
            transition: 'border-color 0.3s, background 0.3s',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: menuHover ? 'var(--accent)' : 'var(--text)',
            transition: 'color 0.3s',
          }}>
            Menu
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{
              display: 'block', height: 1.5, borderRadius: 2,
              background: menuHover ? 'var(--accent)' : 'var(--text)',
              width: menuHover ? 18 : 16,
              transition: 'width 0.3s, background 0.3s',
            }} />
            <span style={{
              display: 'block', height: 1.5, borderRadius: 2,
              background: menuHover ? 'var(--accent)' : 'var(--text)',
              width: menuHover ? 11 : 11,
              transition: 'background 0.3s',
            }} />
          </div>
        </button>
      </motion.header>

      {/* ── Full-screen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.75, ease: easeIn }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 850,
              overflow: 'hidden',
              background: 'var(--surface-1)',
            }}
          >
            {/* Two-column layout: left nav + right image */}
            <div className="flex flex-col lg:flex-row" style={{ height: '100%' }}>

              {/* ── Left panel ── */}
              <div
                style={{
                  flex: '0 0 100%',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 5vw, 4rem)',
                  paddingTop: '5.5rem',
                  borderRight: '1px solid var(--border)',
                  overflow: 'hidden',
                }}
                className="lg:flex-[0_0_58%]"
              >
                {/* Ghost number in background */}
                <AnimatePresence mode="wait">
                  {hoveredLink !== null && (
                    <motion.span
                      key={hoveredLink}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.35, ease }}
                      aria-hidden
                      style={{
                        position: 'absolute',
                        bottom: '-2rem',
                        right: '1.5rem',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(10rem, 22vw, 22rem)',
                        fontWeight: 700,
                        lineHeight: 1,
                        color: 'transparent',
                        WebkitTextStroke: '1px var(--border)',
                        userSelect: 'none',
                        pointerEvents: 'none',
                        zIndex: 0,
                      }}
                    >
                      {String(hoveredLink + 1).padStart(2, '0')}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Nav links */}
                <nav style={{ position: 'relative', zIndex: 1 }}>
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ delay: 0.08 + i * 0.055, duration: 0.55, ease }}
                      style={{
                        position: 'relative',
                        borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                        borderBottom: '1px solid var(--border)',
                        overflow: 'hidden',
                      }}
                      onMouseEnter={() => setHoveredLink(i)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {/* Hover fill sweep */}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(201,169,110,0.05)',
                        transform: hoveredLink === i ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left center',
                        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                        pointerEvents: 'none',
                      }} />

                      {/* Gold top border on hover */}
                      <div style={{
                        position: 'absolute',
                        top: 0, left: 0,
                        height: 1, width: '100%',
                        background: 'var(--accent)',
                        transform: hoveredLink === i ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left center',
                        transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
                        pointerEvents: 'none',
                      }} />

                      <Link
                        href={link.href}
                        onClick={() => { setOpen(false); setHoveredLink(null); }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                          padding: 'clamp(0.65rem, 1.5vw, 1rem) 0',
                          paddingLeft: hoveredLink === i ? '1.25rem' : '0',
                          transition: 'padding 0.45s cubic-bezier(0.16,1,0.3,1)',
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {/* Index + label */}
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.1rem' }}>
                          <span style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.6rem',
                            letterSpacing: '0.22em',
                            color: hoveredLink === i ? 'var(--accent)' : 'var(--text-dim)',
                            transition: 'color 0.3s',
                            flexShrink: 0,
                            minWidth: '2ch',
                          }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                            fontWeight: 400,
                            letterSpacing: '-0.025em',
                            lineHeight: 1.08,
                            color: hoveredLink === null
                              ? 'var(--text-muted)'
                              : hoveredLink === i ? 'var(--text)' : 'var(--text-dim)',
                            transition: 'color 0.3s',
                            fontStyle: hoveredLink === i ? 'italic' : 'normal',
                          }}>
                            {link.label}
                          </span>
                        </div>

                        {/* Descriptor — fades in on hover */}
                        <span style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.72rem',
                          letterSpacing: '0.06em',
                          color: 'var(--text-muted)',
                          opacity: hoveredLink === i ? 1 : 0,
                          transform: hoveredLink === i ? 'translateX(0)' : 'translateX(8px)',
                          transition: 'opacity 0.35s, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                          flexShrink: 0,
                          whiteSpace: 'nowrap',
                        }}>
                          {link.desc}
                        </span>

                        {/* Arrow */}
                        <svg
                          width="16" height="16" viewBox="0 0 16 16" fill="none"
                          style={{
                            flexShrink: 0,
                            opacity: hoveredLink === i ? 1 : 0,
                            transform: hoveredLink === i ? 'translate(0,0) rotate(0deg)' : 'translate(-4px,4px) rotate(-20deg)',
                            transition: 'opacity 0.3s, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                            color: 'var(--accent)',
                          }}
                        >
                          <path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom row: email + socials */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5, ease }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    paddingTop: '1.5rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      Say hello
                    </p>
                    <a
                      href="mailto:info@schedio.studio"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', letterSpacing: '0.04em', color: 'var(--accent)', cursor: 'none' }}
                    >
                      info@schedio.studio
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                    {['Instagram', 'Behance', 'Dribbble'].map((s) => (
                      <a
                        key={s}
                        href="#"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.62rem',
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: 'var(--text-dim)',
                          cursor: 'none',
                          transition: 'color 0.25s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* ── Right panel: image reveal (desktop only) ── */}
              <div
                className="hidden lg:block"
                style={{ flex: '0 0 42%', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}
              >
                {/* Images: each fades in/out based on hovered link */}
                {NAV_LINKS.map((link, i) => (
                  <div
                    key={link.img}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: hoveredLink === i ? 1 : 0,
                      transition: 'opacity 0.55s ease',
                    }}
                  >
                    <Image
                      src={link.img}
                      alt={link.label}
                      fill
                      style={{ objectFit: 'cover', filter: 'brightness(0.7) saturate(0.85)' }}
                    />
                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(120deg, rgba(9,9,8,0.55) 0%, transparent 60%)',
                    }} />
                    {/* Link label watermark */}
                    <div style={{
                      position: 'absolute',
                      bottom: 'clamp(1.5rem, 3vw, 2.5rem)',
                      left: 'clamp(1.5rem, 3vw, 2.5rem)',
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        color: 'rgba(237,232,223,0.9)',
                        lineHeight: 1,
                        marginBottom: '0.4rem',
                      }}>
                        {link.label}
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                      }}>
                        {link.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Default / idle state */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '1rem',
                  opacity: hoveredLink === null ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }}>
                  <div style={{
                    width: 1,
                    height: 'clamp(4rem, 8vw, 8rem)',
                    background: 'linear-gradient(to bottom, transparent, var(--border), transparent)',
                  }} />
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    color: 'var(--text-dim)',
                    letterSpacing: '-0.01em',
                    textAlign: 'center',
                  }}>
                    Hover to explore
                  </p>
                  <div style={{
                    width: 1,
                    height: 'clamp(4rem, 8vw, 8rem)',
                    background: 'linear-gradient(to bottom, transparent, var(--border), transparent)',
                  }} />
                </div>
              </div>
            </div>

            {/* ── Top bar inside overlay: Logo + Close ── */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '4.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 clamp(1.25rem, 4vw, 3rem)',
              borderBottom: '1px solid var(--border)',
              zIndex: 10,
            }}>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <Image src="/images/logo/logo-main.svg" alt="Schedio" width={30} height={30} style={{ objectFit: 'contain' }} />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  color: 'var(--text)',
                }}>
                  Schedio
                </span>
              </Link>

              {/* Close button */}
              <CloseButton onClick={() => { setOpen(false); setHoveredLink(null); }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-label="Close menu"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        padding: '0.5rem 1.15rem',
        border: '1px solid',
        borderColor: hov ? 'var(--accent)' : 'var(--border)',
        borderRadius: 100,
        background: hov ? 'rgba(201,169,110,0.07)' : 'transparent',
        cursor: 'none',
        transition: 'border-color 0.3s, background 0.3s',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.68rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: hov ? 'var(--accent)' : 'var(--text)',
        transition: 'color 0.3s',
      }}>
        Close
      </span>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ color: hov ? 'var(--accent)' : 'var(--text)', transition: 'color 0.3s' }}>
        <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}
