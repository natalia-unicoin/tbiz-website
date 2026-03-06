import { type FC } from 'react';
import { useTranslation } from 'next-i18next';

import useStyles from './TokenSection.styles';

const TokenSection:FC = () => {
  const { t } = useTranslation('market');
  const { classes } = useStyles();

  const earnItems = [
    t('token.earn.items.0'),
    t('token.earn.items.1'),
    t('token.earn.items.2'),
    t('token.earn.items.3'),
    t('token.earn.items.4'),
  ];

  const redeemItems = [
    t('token.redeem.items.0'),
    t('token.redeem.items.1'),
    t('token.redeem.items.2'),
    t('token.redeem.items.3'),
    t('token.redeem.items.4'),
  ];

  return (
    <section id="token" className={classes.tokenRoot}>
      <div className={classes.tokenContainer}>
        <div className={classes.tokenHeader}>
          <h2 className={classes.tokenTitle}>
            {t('token.title')}
          </h2>

          <p className={classes.tokenSubtitle}>
            {t('token.subtitle')}
          </p>
        </div>

        <div className={classes.tokenGrid}>
          {/* Earn Card */}
          <div className={classes.tokenCard}>
            <div
              className={`${classes.tokenGlow} ${classes.tokenGlowEarn} tokenGlowEarn`}
            />

            <h3
              className={classes.tokenCardTitle}
              style={{ color: '#317788' }}
            >
              {t('token.earn.title')}
            </h3>

            <ul className={classes.tokenList}>
              {earnItems.map((item, index) => (
                <li
                  key={item}
                  className={classes.tokenListItem}
                >
                  <span
                    className={`${classes.tokenListNumber} tokenListNumber`}
                    style={{ color: '#317788' }}
                  >
                    0{index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Redeem Card */}
          <div className={classes.tokenCard}>
            <div
              className={`${classes.tokenGlow} ${classes.tokenGlowRedeem} tokenGlowRedeem`}
            />

            <h3
              className={classes.tokenCardTitle}
              style={{ color: '#e66222' }}
            >
              {t('token.redeem.title')}
            </h3>

            <ul className={classes.tokenList}>
              {redeemItems.map((item, index) => (
                <li
                  key={item}
                  className={classes.tokenListItem}
                >
                  <span
                    className={`${classes.tokenListNumber} tokenListNumber`}
                    style={{ color: '#e66222' }}
                  >
                    0{index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TokenSection;
