import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Meta } from 'components/_common';
import { NotFoundSection } from 'components/_pages/not-found';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Meta title="UnicoinX | Not found" />

      <NotFoundSection />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['market'])),
    },
  };
};

export default NotFoundPage;
