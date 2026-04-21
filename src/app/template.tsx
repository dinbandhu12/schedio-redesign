'use client';

// Next.js template.tsx re-creates this component on every navigation,
// unlike layout.tsx which persists. This ensures state resets and
// scroll position resets on each page change.
export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
