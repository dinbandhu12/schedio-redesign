'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ui/ScrollReveal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  num: string;
  title: string;
  italicTitle: string;
  tags: string[];
  deliverables: string[];
  img: string;
}

const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Design',
    italicTitle: 'Design.',
    tags: ['UI Systems', 'UX Research', 'Interaction', 'Prototyping'],
    deliverables: [
      'Product design systems',
      'High-fidelity prototypes',
      'Usability & research',
      'Interface design language',
    ],
    img: '/images/showcase/img-10.png',
  },
  {
    num: '02',
    title: 'Branding',
    italicTitle: 'Branding.',
    tags: ['Identity', 'Logo Craft', 'Typography', 'Guidelines'],
    deliverables: [
      'Brand strategy & voice',
      'Logo & visual identity',
      'Brand book & guidelines',
      'Palette, type & motion',
    ],
    img: '/images/showcase/img-09.png',
  },
  {
    num: '03',
    title: 'Development',
    italicTitle: 'Development.',
    tags: ['Next.js', 'Headless CMS', 'Performance', 'Animation'],
    deliverables: [
      'Next.js production builds',
      'Headless CMS integration',
      'Custom WebGL & motion',
      'Core-Web-Vitals tuning',
    ],
    img: '/images/showcase/img-11.png',
  },
  {
    num: '04',
    title: 'Direction',
    italicTitle: 'Direction.',
    tags: ['Art Direction', 'Campaign', 'Motion', 'Concept'],
    deliverables: [
      'Creative direction',
      'Campaign & launch concept',
      'Motion, video & 3D',
      'Editorial art direction',
    ],
    img: '/images/showcase/img-12.png',
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      const triggers: ScrollTrigger[] = [];
      blockRefs.current.forEach((el, i) => {
        if (!el) return;
        const t = ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
        triggers.push(t);
      });
      return () => triggers.forEach((t) => t.kill());
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
        position: 'relative',
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          padding:
            'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4rem)',
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
              Services — 02
            </p>
          </ScrollReveal>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <ScrollReveal delay={0.05}>
            <p className="text-label" style={{ whiteSpace: 'nowrap' }}>
              (Four disciplines)
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.08}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 7.2vw, 8.2rem)',
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
              color: 'var(--text)',
              maxWidth: '14ch',
            }}
          >
            Every pixel,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
              every line of code,
            </em>{' '}
            on purpose.
          </h2>
        </ScrollReveal>
      </div>

      {/* ── Desktop: Sticky image + scrolling list ── */}
      <div
        className="hidden lg:grid"
        style={{
          gridTemplateColumns: '55% 45%',
          borderTop: '1px solid var(--border)',
          position: 'relative',
        }}
      >
        {/* Sticky visual panel */}
        <div
          style={{
            borderRight: '1px solid var(--border)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'sticky',
              top: 0,
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: 'clamp(2rem, 2vw, 4rem)',
            }}
          >
            {/* Image stack */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '5/4',
                borderRadius: 14,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: '0 50px 100px rgba(0,0,0,0.5)',
              }}
            >
              {SERVICES.map((s, i) => (
                <div
                  key={s.num}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: active === i ? 1 : 0,
                    transform: active === i ? 'scale(1)' : 'scale(1.08)',
                    transition:
                      'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(min-width:1024px) 45vw, 100vw"
                    style={{ objectFit: 'cover' }}
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Active label overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <span
                  className="text-label"
                  style={{ color: 'var(--accent-light)' }}
                >
                  Currently viewing
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '1.15rem',
                    color: 'var(--text)',
                  }}
                >
                  {SERVICES[active].title}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable service list */}
        <div>
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              ref={(el) => {
                blockRefs.current[i] = el;
              }}
              style={{
                minHeight: '100vh',
                padding: 'clamp(4rem, 7vw, 6rem) clamp(2rem, 5vw, 4rem)',
                borderBottom:
                  i < SERVICES.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '2.25rem',
              }}
            >
              <div>
                <p
                  className="text-label"
                  style={{
                    color: active === i ? 'var(--accent)' : 'var(--text-muted)',
                    marginBottom: '1rem',
                    transition: 'color 0.3s',
                  }}
                >
                  // Service {s.num} / {String(SERVICES.length).padStart(2, '0')}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(3rem, 6.5vw, 6.5rem)',
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: '-0.025em',
                    color: active === i ? 'var(--text)' : 'var(--text-muted)',
                    transition: 'color 0.45s',
                  }}
                >
                  {s.italicTitle}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      border: '1px solid var(--border)',
                      padding: '0.5rem 1rem',
                      borderRadius: 999,
                      fontSize: '0.74rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '0.5rem',
                }}
              >
                {s.deliverables.map((d, k) => (
                  <li
                    key={d}
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      alignItems: 'baseline',
                      padding: '1rem 0',
                      borderTop: '1px solid var(--border)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.62rem',
                        letterSpacing: '0.22em',
                        color: 'var(--text-dim)',
                        fontFamily: 'var(--font-body)',
                        minWidth: '1.5rem',
                      }}
                    >
                      0{k + 1}
                    </span>
                    <span
                      style={{
                        color: 'var(--text)',
                        fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {d}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                style={{
                  marginTop: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  alignSelf: 'flex-start',
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
                Start a {s.title.toLowerCase()} project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M2.5 13.5L13.5 2.5M13.5 2.5H6M13.5 2.5V10"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile: stacked cards ── */}
      <div className="lg:hidden" style={{ borderTop: '1px solid var(--border)' }}>
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            style={{
              padding: 'clamp(3rem, 7vw, 4rem) clamp(1.25rem, 4vw, 2rem)',
              borderBottom:
                i < SERVICES.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            <div
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: 12,
                overflow: 'hidden',
                marginBottom: '1.75rem',
                // border: '1px solid var(--border)',
              }}
            >
              <Image src={s.img} alt={s.title} fill sizes="100vw" style={{ objectFit: 'cover' }} />
            </div>

            <p
              className="text-label"
              style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}
            >
              Service {s.num}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(2.4rem, 10vw, 3.8rem)',
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              {s.italicTitle}
            </h3>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    border: '1px solid var(--border)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 999,
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <ul style={{ listStyle: 'none' }}>
              {s.deliverables.map((d, k) => (
                <li
                  key={d}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '0.85rem 0',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      color: 'var(--text-dim)',
                      minWidth: '1.2rem',
                    }}
                  >
                    0{k + 1}
                  </span>
                  <span style={{ color: 'var(--text)', fontSize: '0.95rem' }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
