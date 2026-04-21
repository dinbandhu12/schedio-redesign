'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  el?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  staggerDelay?: number;
  splitBy?: 'word' | 'line';
}

/**
 * Splits text into words/lines and animates them in
 * with a staggered slide-up reveal.
 */
export default function AnimatedText({
  text,
  el: Tag = 'p',
  className,
  delay = 0,
  staggerDelay = 0.04,
  splitBy = 'word',
}: AnimatedTextProps) {
  const chunks = splitBy === 'word' ? text.split(' ') : text.split('\n');

  return (
    <Tag
      className={className}
      style={{ overflow: 'hidden', display: splitBy === 'word' ? 'block' : undefined }}
      aria-label={text}
    >
      <span
        style={{
          display: splitBy === 'word' ? 'inline' : 'block',
        }}
      >
        {chunks.map((chunk, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'bottom',
            }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: '110%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.85,
                delay: delay + i * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {chunk}
            </motion.span>
            {splitBy === 'word' && i < chunks.length - 1 ? '\u00A0' : ''}
          </span>
        ))}
      </span>
    </Tag>
  );
}
