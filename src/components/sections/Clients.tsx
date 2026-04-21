'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

const LOGOS = [
  { src: '/images/clients/logo-01.png', alt: 'Client' },
  { src: '/images/clients/logo-02.png', alt: 'Client' },
  { src: '/images/clients/logo-03.png', alt: 'Client' },
  { src: '/images/clients/logo-04.png', alt: 'Client' },
  { src: '/images/clients/logo-05.png', alt: 'Client' },
];

export default function Clients() {
  // Duplicate for seamless CSS loop
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section
      style={{
        padding: `var(--section-pad) 0`,
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      <ScrollReveal>
        <p
          className="text-label"
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            paddingInline: 'clamp(1.25rem, 4vw, 3rem)',
          }}
        >
          Trusted by brands — big and small
        </p>
      </ScrollReveal>

      {/* Seamless CSS marquee — no Framer Motion restart glitch */}
      <div
        style={{
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(3rem, 7vw, 6rem)',
            animation: 'ticker-left 25s linear infinite',
            willChange: 'transform',
          }}
        >
          {doubled.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 'clamp(80px, 11vw, 130px)',
                height: 40,
                position: 'relative',
                opacity: 0.4,
                filter: 'grayscale(1) brightness(5)',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '0.4')}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
