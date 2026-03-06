'use client';

import React from 'react';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import WarOnInnovation from '@/components/WarOnInnovation';
import StrategicResponse from '@/components/StrategicResponse';
import LeadershipPositioning from '@/components/LeadershipPositioning';
import InTheMedia from '@/components/InTheMedia';
import PositionedEra from '@/components/PositionedEra';
import FinalCTA from '@/components/FinalCTA';
import DigitalAssetTreasury from '@/components/DigitalAssetTreasury';
import Financials from '@/components/Financials';
import InvestorRelations from '@/components/InvestorRelations';
const TransparentBusiness = () => {
    return (
        <>
            <Hero />
            <StorySection />
            <WarOnInnovation />
            <PositionedEra />
            <StrategicResponse />
            <DigitalAssetTreasury />
            <Financials />
            <InvestorRelations />
            <LeadershipPositioning />
            <InTheMedia />
            <FinalCTA />
        </>
    );
};

export default TransparentBusiness;
