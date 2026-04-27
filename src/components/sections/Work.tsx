'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ui/ScrollReveal';

const cardEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  num: string;
  client: string;
  title: string;
  category: string;
  year: string;
  img: string;
  /** vertical pixel offset to break grid alignment */
  offset: number;
  /** card aspect ratio — varies to avoid uniformity */
  ratio: string;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    client: 'Lora Hayes',
    title: 'Personal Portfolio',
    category: 'UI/UX · Web',
    year: '2024',
    img: '/images/showcase/c7-2.jpg',
    offset: 0,
    ratio: '3/4',
  },
  {
    num: '02',
    client: 'Shree Ganesh',
    title: 'Industrial Identity',
    category: 'Branding · Site',
    year: '2024',
    img: '/images/showcase/c2.png',
    offset: 40,
    ratio: '3/4',
  },
  {
    num: '03',
    client: 'Dream Destination',
    title: 'Travel Platform',
    category: 'Product · UX',
    year: '2024',
    img: '/images/showcase/c3.png',
    offset: -20,
    ratio: '3/4',
  },
  {
    num: '04',
    client: 'Innovative Designs',
    title: 'Identity Refresh',
    category: 'Brand · System',
    year: '2023',
    img: '/images/showcase/c4.png',
    offset: 30,
    ratio: '3/4',
  },
  {
    num: '05',
    client: 'Horizon',
    title: 'SaaS Interface',
    category: 'Product · UI',
    year: '2023',
    img: '/images/showcase/c5.png',
    offset: -10,
    ratio: '3/4',
  },
  {
    num: '06',
    client: 'Motif Collective',
    title: 'Editorial Site',
    category: 'Web · CMS',
    year: '2023',
    img: '/images/showcase/c6.png',
    offset: 50,
    ratio: '3/4',
  },
];

export default function Work() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!pin || !track) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const ctx = gsap.context(() => {
        const getDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth + 80);

        gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: pin,
            pin: true,
            scrub: 0.8,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progress)
                progress.style.transform = `scaleX(${self.progress})`;
            },
          },
        });
      }, pin);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="projects"
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          padding:
            'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem) clamp(2.5rem, 5vw, 4rem)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          <ScrollReveal>
            <p className="text-label" style={{ whiteSpace: 'nowrap' }}>
              Case Studies — 03
            </p>
          </ScrollReveal>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <ScrollReveal delay={0.05}>
            <p className="text-label" style={{ whiteSpace: 'nowrap' }}>
              ({String(PROJECTS.length).padStart(2, '0')} selected)
            </p>
          </ScrollReveal>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <ScrollReveal delay={0.08}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 7vw, 8rem)',
                fontWeight: 400,
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
                color: 'var(--text)',
                maxWidth: '14ch',
              }}
            >
              Work we&rsquo;re <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>proud</em> to sign.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <Link
              href="/work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                color: 'var(--text-muted)',
                transition: 'color 0.25s, gap 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.gap = '1rem';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.gap = '0.65rem';
              }}
            >
              All case studies
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path
                  d="M3.5 14.5L14.5 3.5M14.5 3.5H7M14.5 3.5V11"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Horizontal pinned scroll (desktop) / snap-scroll (mobile) ── */}
      <div
        ref={pinRef}
        style={{
          borderTop: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="h-auto lg:h-screen"
      >
        <div
          ref={trackRef}
          className="flex items-center gap-8 lg:gap-16 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none h-full"
          style={{
            padding:
              'clamp(2rem, 3.5vw, 3rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4rem)',
            willChange: 'transform',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease: cardEase, delay: i * 0.07 }}
              style={{
                flexShrink: 0,
                width: 'clamp(240px, 26vw, 400px)',
                transform: `translateY(${p.offset}px)`,
              }}
            >
            <Link
              href="/work"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="snap-center lg:snap-none"
              style={{
                display: 'block',
                scrollSnapStop: 'always',
              }}
            >
              {/* Index + year strip */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '0.9rem',
                  padding: '0 0.25rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.25em',
                    color: hovered === i ? 'var(--accent)' : 'var(--text-dim)',
                    transition: 'color 0.3s',
                  }}
                >
                  Case {p.num} / {String(PROJECTS.length).padStart(2, '0')}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  &rsquo;{p.year.slice(2)}
                </span>
              </div>

              {/* Image card */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: p.ratio,
                  borderRadius: 10,
                  overflow: 'hidden',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    transform: hovered === i ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.75s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  <Image
                    src={p.img}
                    alt={p.client}
                    fill
                    sizes="(min-width:1024px) 480px, 80vw"
                    style={{ objectFit: 'cover' }}
                    priority={i < 2}
                  />
                </div>

                {/* Vignette */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(9,9,8,0) 40%, rgba(9,9,8,0.72) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Arrow chip */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: 'rgba(9,9,8,0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: hovered === i ? 1 : 0,
                    transform:
                      hovered === i ? 'scale(1) rotate(0deg)' : 'scale(0.6) rotate(-20deg)',
                    transition:
                      'opacity 0.3s, transform 0.45s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M2 11L11 2M11 2H4M11 2V9"
                      stroke="var(--text)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Category overlay bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-light)',
                    }}
                  >
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div style={{ marginTop: '1.25rem', padding: '0 0.25rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.35rem, 2vw, 1.85rem)',
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: '-0.015em',
                    color: hovered === i ? 'var(--accent-light)' : 'var(--text)',
                    transition: 'color 0.3s',
                    marginBottom: '0.35rem',
                  }}
                >
                  {p.client}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {p.title}
                </p>
              </div>
            </Link>
            </motion.div>
          ))}

          {/* Closing marker card */}
          <div
            style={{
              flexShrink: 0,
              width: 'clamp(220px, 22vw, 340px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <p
                className="text-label"
                style={{ color: 'var(--accent)', marginBottom: '1rem' }}
              >
                End of reel
              </p>
              <Link
                href="/work"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                  color: 'var(--text)',
                  lineHeight: 1.15,
                  display: 'inline-block',
                }}
              >
                See the full archive →
              </Link>
            </div>
          </div>
        </div>

        {/* Progress bar (desktop only) */}
        <div
          className="hidden lg:block"
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(40vw, 420px)',
            height: 2,
            background: 'var(--surface-2)',
            overflow: 'hidden',
            borderRadius: 2,
          }}
        >
          <div
            ref={progressRef}
            style={{
              width: '100%',
              height: '100%',
              background: 'var(--accent)',
              transform: 'scaleX(0)',
              transformOrigin: 'left center',
            }}
          />
        </div>

        {/* Scroll hint */}
        <div
          className="hidden lg:flex"
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            right: '2rem',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.62rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-body)',
          }}
        >
          <span>Scroll</span>
          <svg width="42" height="8" viewBox="0 0 42 8" fill="none">
            <path
              d="M0 4h40M37 1l4 3-4 3"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
