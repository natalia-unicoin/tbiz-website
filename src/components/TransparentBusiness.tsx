'use client';

import React from 'react';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import NewsSection from '@/components/NewsSection';
import FinalCTA from '@/components/FinalCTA';
import ScrollIndicator from '@/components/ScrollIndicator';

const TransparentBusiness = () => {
    return (
        <main style={{ position: 'relative', backgroundColor: '#0B1120' }}>
            <ScrollIndicator />

            {/* STICKY STACK: Hero stays fixed, rest of the site slides over it */}
            <div style={{ position: 'sticky', top: 0, zIndex: 0, height: '100vh', overflow: 'hidden' }}>
                <Hero />
            </div>

            {/* RELATIVE STACK: Slides over the Hero */}
            <div style={{ position: 'relative', zIndex: 10, backgroundColor: '#FFFFFF', boxShadow: '0 -20px 40px rgba(0,0,0,0.1)' }}>
                <StorySection />
                <FinalCTA />
                <NewsSection />
            </div>
        </main>
    );
};

export default TransparentBusiness;
