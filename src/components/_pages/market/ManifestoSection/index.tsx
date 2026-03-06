import { type FC } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import useStyles from './ManifestoSection.styles';

const ManifestoSection: FC = () => {
  const { t } = useTranslation('market');
  const { classes } = useStyles();

  return (
    <section id="manifesto" className={classes.manifestoRoot}>
      <div className={classes.manifestoContainer}>
        <div className={classes.manifestoContent}>

          <motion.h2
            className={classes.manifestoTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('manifesto.title_part1') as string}{' '}
            <span className={classes.manifestoTitleHighlight}>{t('manifesto.title_highlight') as string}</span>.
          </motion.h2>

          <motion.p
            className={classes.manifestoDescription}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={classes.manifestoDescriptionBold}>{t('manifesto.description_bold') as string}</span>{' '}
            {t('manifesto.description_text') as string}
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
