import { type FC } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import useStyles from './JoinFlowSection.styles';

const JoinFlowSection:FC = () => {
  const { t } = useTranslation('market');
  const { classes } = useStyles();

  return (
    <section className={classes.joinFlowRoot}>
      {/* Background Image */}
      <div className={classes.joinFlowBackground}>
        <img
          src="/images/market/lifestyle-hero.jpg"
          alt="Join Background"
          className={classes.joinFlowBackgroundImage}
        />
        <div className={classes.joinFlowBackgroundOverlay} />
      </div>

      {/* Content */}
      <div className={classes.joinFlowContainer}>
        <div className={classes.joinFlowContent}>
          <motion.h2
            className={classes.joinFlowTitle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('join_flow.title.line1') as string}<br />
            {t('join_flow.title.line2') as string}
          </motion.h2>

          <motion.p
            className={classes.joinFlowDescription}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('join_flow.description')}
          </motion.p>

          <motion.div
            className={classes.joinFlowActions}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className={classes.joinFlowButtonPrimary}>
              {t('join_flow.cta_primary')}
            </button>

            <button className={classes.joinFlowButtonSecondary}>
              {t('join_flow.cta_secondary')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinFlowSection;
