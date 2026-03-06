import { type FC } from 'react';
import { useRouter } from 'next/router';
import NextImage from 'next/image';
import { useTranslation } from 'next-i18next';

import { LANDING } from 'constants/routes';

import { ContentLayout } from 'components/_layouts';

import useStyles from './NotFoundSection.styles';

const NotFoundSection: FC = () => {
  const {
    cx,
    classes,
    theme,
  } = useStyles();

  const { push } = useRouter();

  const { t } = useTranslation('market');

  const handleButtonClick = (pathname: string) => {
    push(pathname);
  };

  return (
    <section className={classes.notFoundSection}>
      <picture className="notFoundPicture">
        <source
          type="image/webp"
          srcSet="/images/error/error-bg-xxxs.webp"
          media={`(max-width: ${theme.breakpoints.values.xxxs}px)`}
        />

        <source
          type="image/webp"
          srcSet="/images/error/error-bg-xs.webp"
          media={`(max-width: ${theme.breakpoints.values.xs}px)`}
        />

        <source
          type="image/webp"
          srcSet="/images/error/error-bg-sm.webp"
          media={`(max-width: ${theme.breakpoints.values.sm}px)`}
        />

        <source
          type="image/webp"
          srcSet="/images/error/error-bg-xxl.webp"
          media={`(max-width: ${theme.breakpoints.values.xxl}px)`}
        />

        <NextImage
          className="notFoundImage"
          src="/images/error/error-bg-xxxl.webp"
          alt="Not found"
          fill
        />
      </picture>

      <NextImage
        className={classes.vectorCornerImage}
        src="/images/error/vector-corner.svg"
        alt="Vector corner"
        width={180}
        height={180}
      />

      <ContentLayout
        className={classes.notFoundRoot}
        noPaddingTop
        noPaddingBottom
      >
        <h1 className={classes.notFoundTitle}>
          404
        </h1>

        <p className={classes.notFoundDescription}>
          {t('error__description_1')}
        </p>

        <p className={cx(classes.notFoundDescription, 'notFoundDescription2')}>
          {t('error__description_2')}
        </p>

        <p className={classes.notFoundPageDescription}>
          {t('error__not_found_description')}
        </p>

        <button
          className={cx(classes.notFoundButton, 'notFoundBackButton')}
          onClick={handleButtonClick.bind(null, LANDING)}
        >
          {t('button__back')}
        </button>
      </ContentLayout>
    </section>
  );
};

export default NotFoundSection;
