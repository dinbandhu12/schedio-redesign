'use client';

import { useState, useCallback } from 'react';
import type { Metadata } from 'next';

import PageLoader    from '@/components/layout/PageLoader';
import Navbar        from '@/components/layout/Navbar';
import Footer        from '@/components/layout/Footer';

import Hero          from '@/components/sections/Hero';
import MarqueeStrip  from '@/components/sections/MarqueeStrip';
import About         from '@/components/sections/About';
import Services      from '@/components/sections/Services';
import Work          from '@/components/sections/Work';
import Stats         from '@/components/sections/Stats';
import Clients       from '@/components/sections/Clients';
import Testimonials  from '@/components/sections/Testimonials';
import FAQ           from '@/components/sections/FAQ';
import CTABanner     from '@/components/sections/CTABanner';

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
