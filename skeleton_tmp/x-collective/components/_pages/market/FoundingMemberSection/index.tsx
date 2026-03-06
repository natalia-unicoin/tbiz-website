import { type FC } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import useStyles from './FoundingMemberSection.styles';

const FoundingMemberSection:FC = () => {
  const { t } = useTranslation('market');
  const { classes } = useStyles();

  const tags = [
    t('founding.tags.0'),
    t('founding.tags.1'),
    t('founding.tags.2'),
  ];

  return (
    <section className={classes.foundingMemberRoot}>
      <div className={classes.foundingMemberContainer}>
        <div className={classes.foundingMemberLayout}>
          <div className={classes.foundingMemberColumn}>
            <div className={classes.foundingMemberImageWrapper}>
              <img
                src="/images/market/founding-lifestyle.jpg"
                alt="Founding Member"
                className={classes.foundingMemberImage}
              />
            </div>
          </div>

          <div className={classes.foundingMemberContent}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={classes.foundingMemberTitle}>
                {t('founding.title')}
              </h2>

              <p className={classes.foundingMemberDescription}>
                {t('founding.description_part1')}{' '}
                <span className={classes.foundingMemberDescriptionHighlight}>
                  {t('founding.description_highlight')}
                </span>
                {t('founding.description_part2')}
              </p>

              <div className={classes.foundingMemberTagsWrapper}>
                {tags.map((tag) => (
                  <span key={tag} className={classes.foundingMemberTag}>
                    {tag}
                  </span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={classes.foundingMemberButton}
                type="button"
              >
                {t('founding.cta')}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingMemberSection;
