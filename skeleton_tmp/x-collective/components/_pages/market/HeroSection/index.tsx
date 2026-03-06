import { type FC } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import useStyles from './HeroSection.styles';

const HeroSection:FC = () => {
  const { t } = useTranslation('market');
  const { classes } = useStyles();

  return (
    <section className={classes.heroRoot}>
      <div className={classes.heroBackground}>
        <img
          src="/images/market/hero-lifestyle-2.jpg"
          alt="Hero Background"
          className={classes.heroBackgroundImage}
        />
        <div className={classes.heroBackgroundOverlay} />
      </div>

      <div className={classes.heroContent}>
        <motion.h1
          className={classes.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('hero.title_part1') as string}{' '}
          <span className={classes.heroTitleHighlight}>
            {t('hero.title_highlight') as string}
          </span>
          {' '}{t('hero.title_part2') as string}
        </motion.h1>

        <motion.p
          className={classes.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.button
          className={classes.heroButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          type="button"
        >
          {t('hero.cta')}
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
