import { useState, useEffect } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { scroller } from 'react-scroll';

import {
  HowItWorksSection,
  HeroSection,
  FoundingMemberSection,
  ManifestoSection,
  FourWaysSection,
  TokenSectionSection,
  JoinFlowSection,
} from 'components/_pages/market';

const REVALIDATE_PAGE = 86400;

const HomePage: NextPage = () => {
  const [investmentCompleted] = useState(false);

  useEffect(() => {
    if (investmentCompleted) {
      scroller.scrollTo('purchase_section', {
        duration: 800,
        delay: 0,
        offset: 50,
        smooth: 'easeInOutQuart',
      });
    }
  }, [investmentCompleted]);

  return (
    <>
      <HeroSection />

      <FoundingMemberSection />

      <ManifestoSection />

      <FourWaysSection />

      <HowItWorksSection />

      <TokenSectionSection />

      <JoinFlowSection />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'market',
      ])),
    },
    revalidate: REVALIDATE_PAGE,
  };
};

export default HomePage;
