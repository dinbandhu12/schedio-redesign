'use client';

const ITEMS_A = ['Web Design', 'Branding', 'Development', 'UI/UX', 'Digital Strategy', 'Visual Identity', 'Motion Design', 'SEO'];
const ITEMS_B = ['Creative Studio', 'Mumbai', 'Since 2019', 'Design-First', 'Pixel Perfect', 'Fast Builds', 'Strategy', 'Impact'];

function Dot() {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: 'var(--accent-dim)',
        flexShrink: 0,
        margin: '0 2rem',
        verticalAlign: 'middle',
      }}
    />
  );
}

function MarqueeRow({
  items,
  direction = 'left',
  duration = 38,
}: {
  items: string[];
  direction?: 'left' | 'right';
  duration?: number;
}) {
  // Duplicate once → animate by -50% → perfectly seamless
  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: 'hidden', display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: `ticker-${direction} ${duration}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1.3rem)',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              fontStyle: i % 3 === 1 ? 'italic' : 'normal',
              /* Alternate: filled cream vs outlined */
              color: i % 2 === 0 ? 'var(--text-muted)' : 'transparent',
              WebkitTextStroke: i % 2 !== 0 ? '1px var(--text-dim)' : undefined,
              flexShrink: 0,
            }}
          >
            {item}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <div
      style={{
        borderTop:    '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: 'clamp(0.9rem, 1.8vw, 1.3rem) 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(0.55rem, 1vw, 0.85rem)',
        overflow: 'hidden',
      }}
    >
      <MarqueeRow items={ITEMS_A} direction="left"  duration={40} />
      <MarqueeRow items={ITEMS_B} direction="right" duration={36} />
    </div>
  );
}
