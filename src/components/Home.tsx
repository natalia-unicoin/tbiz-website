'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import FourWays from '@/components/FourWays';
import HowItWorks from '@/components/HowItWorks';
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';
import JoinFlow from '@/components/JoinFlow';
import NewsSection from '@/components/NewsSection';
import TokenDetails from '@/components/TokenDetails';
import InstagramMesh from '@/components/InstagramMesh';

const Home = () => {
    return (
        <>
            <Hero />
            {/* <Manifesto /> */}
            {/* <FourWays /> */}
            <HowItWorks />
            <ComparisonSection />
            <TokenDetails />
            {/* <TokenSection /> */}
            {/* <FoundingMember /> */}
            {/* <StatsSection /> */}
            <NewsSection />
            <InstagramMesh />
            <JoinFlow />
        </>
    );
};

export default Home;
