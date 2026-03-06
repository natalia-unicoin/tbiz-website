import { type FC, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import useStyles from './HowItWorksSection.styles';

type HowItWorksStep = {
  id:string;
  title:string;
  description:string;
  image:string;
  color:string;
};

const HowItWorksSection:FC = () => {
  const { t } = useTranslation('market');
  const { classes } = useStyles();

  const steps:HowItWorksStep[] = [
    {
      id: '01',
      title: t('how_it_works.steps.0.title'),
      description: t('how_it_works.steps.0.description'),
      image: '/images/market/hiw-new-1.jpg',
      color: '#e66222',
    },
    {
      id: '02',
      title: t('how_it_works.steps.1.title'),
      description: t('how_it_works.steps.1.description'),
      image: '/images/market/hiw-new-2.jpg',
      color: '#317788',
    },
    {
      id: '03',
      title: t('how_it_works.steps.2.title'),
      description: t('how_it_works.steps.2.description'),
      image: '/images/market/hiw-new-3.jpg',
      color: '#c0dee8',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number|null>(null);

  return (
    <section id="how-it-works" className={classes.howItWorksRoot}>
      <div className={classes.howItWorksContainer}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={classes.howItWorksTitle}
        >
          {t('how_it_works.title.prefix') as string}{' '}
          <span className={classes.howItWorksTitleHighlight}>
            {t('how_it_works.title.highlight') as string}
          </span>
        </motion.h2>

        <div className={classes.howItWorksGrid}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={classes.howItWorksCardWrapper}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className={classes.howItWorksCardInner}
                style={{
                  transform: hoveredIndex === index
                    ? 'rotateY(180deg)'
                    : 'rotateY(0deg)',
                }}
              >
                {/* Front Side */}
                <div className={classes.howItWorksCardSideFront}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className={`${classes.howItWorksCardImageFront} howItWorksCardImageFront`}
                  />
                  <div
                    className={`${classes.howItWorksCardOverlayFront} howItWorksCardOverlayFront`}
                  />
                  <span className={classes.howItWorksCardFrontId}>
                    {step.id}
                  </span>
                  <div className={classes.howItWorksCardFrontTitleWrapper}>
                    <h3 className={classes.howItWorksCardFrontTitle}>
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className={classes.howItWorksCardSideBack}
                  style={{ borderColor: step.color }}
                >
                  <span
                    className={classes.howItWorksCardBackId}
                    style={{ color: step.color }}
                  >
                    {step.id}
                  </span>
                  <h3
                    className={classes.howItWorksCardBackTitle}
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h3>
                  <p className={classes.howItWorksCardBackDescription}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
