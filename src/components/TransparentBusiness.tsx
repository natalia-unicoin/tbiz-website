'use client';

import React from 'react';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import NewsSection from '@/components/NewsSection';
import FinalCTA from '@/components/FinalCTA';
import ScrollIndicator from '@/components/ScrollIndicator';

const TransparentBusiness = () => {
    return (
        <>
            <ScrollIndicator />
            <Hero />
            <StorySection />
            <FinalCTA />
            <NewsSection />
        </>
    );
};

export default TransparentBusiness;
