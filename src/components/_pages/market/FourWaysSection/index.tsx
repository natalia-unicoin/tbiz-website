import { type FC } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

import useStyles from './FourWaysSection.styles';

type FourWaysCard = {
  title:string;
  description:string;
  image:string;
  color:string;
};

const FourWaysSection: FC = () => {
  const { t } = useTranslation('market');
  const { classes } = useStyles();

  const cards:FourWaysCard[] = [
    {
      title: t('four_ways.cards.0.title'),
      description: t('four_ways.cards.0.description'),
      image: '/images/market/lifestyle-1.jpg',
      color: '#e66222',
    },
    {
      title: t('four_ways.cards.1.title'),
      description: t('four_ways.cards.1.description'),
      image: '/images/market/lifestyle-2.jpg',
      color: '#317788',
    },
    {
      title: t('four_ways.cards.2.title'),
      description: t('four_ways.cards.2.description'),
      image: '/images/market/lifestyle-3.jpg',
      color: '#c0dee8',
    },
    {
      title: t('four_ways.cards.3.title'),
      description: t('four_ways.cards.3.description'),
      image: '/images/market/lifestyle-4.jpg',
      color: '#ebe462',
    },
  ];

  return (
    <section className={classes.fourWaysRoot}>
      <div className={classes.fourWaysContainer}>
        <div className={classes.fourWaysHeader}>
          <div className={classes.fourWaysHeaderTitleWrapper}>
            <h2 className={classes.fourWaysTitle}>
              {t('four_ways.title.prefix')}
              <span className={classes.fourWaysTitleHighlightCommunity}>
                {' '}{t('four_ways.title.highlight_community')}
              </span>
              <br />
              {t('four_ways.title.middle')}
              <br />
              <span className={classes.fourWaysTitleHighlightCollaboration}>
                {t('four_ways.title.highlight_collaboration')}
              </span>
            </h2>
          </div>

          <div className={classes.fourWaysHeaderTextWrapper}>
            <p className={classes.fourWaysHeaderText}>
              {t('four_ways.description')}
            </p>
          </div>
        </div>

        <div className={classes.fourWaysGrid}>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={classes.fourWaysCard}
            >
              <img
                src={card.image}
                alt={card.title}
                className={`${classes.fourWaysCardImage} fourWaysCardImage`}
              />

              <div
                className={`${classes.fourWaysCardOverlay} fourWaysCardOverlay`}
              />

              <div className={classes.fourWaysCardContent}>
                <h3 className={classes.fourWaysCardTitle}>
                  {card.title}
                </h3>

                <div
                  className={`${classes.fourWaysCardDescriptionWrapper} fourWaysCardDescriptionWrapper`}
                >
                  <p
                    className={`${classes.fourWaysCardDescription} fourWaysCardDescription`}
                  >
                    {card.description}
                  </p>
                </div>

                <div
                  className={`${classes.fourWaysCardIndicator} fourWaysCardIndicator`}
                  style={{ color: card.color }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${classes.fourWaysCardIndicatorIcon} fourWaysCardIndicatorIcon`}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourWaysSection;
