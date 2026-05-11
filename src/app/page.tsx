'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

import PageLoader    from '@/components/layout/PageLoader';
import Navbar        from '@/components/layout/Navbar';
import Footer        from '@/components/layout/Footer';

// Above-fold: loaded immediately
import Hero          from '@/components/sections/Hero';
import MarqueeStrip  from '@/components/sections/MarqueeStrip';
import About         from '@/components/sections/About';
import Services      from '@/components/sections/Services';
import Work          from '@/components/sections/Work';

// Below-fold: code-split, loaded as browser becomes idle
const Stats        = dynamic(() => import('@/components/sections/Stats'));
const Clients      = dynamic(() => import('@/components/sections/Clients'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const FAQ          = dynamic(() => import('@/components/sections/FAQ'));
const CTABanner    = dynamic(() => import('@/components/sections/CTABanner'));

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <PageLoader onComplete={handleLoaderComplete} />

      <Navbar isLoaded={loaded} />

      <main>
        <Hero         isLoaded={loaded} />
        <MarqueeStrip />
        <About />
        <Services />
        <Work />
        <Stats />
        <Clients />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>

      <Footer />
    </>
  );
}
