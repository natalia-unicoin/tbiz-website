import { type FC, useState } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

import useStyles from './Header.styles';

const Navbar: FC = () => {
  const { classes } = useStyles();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={classes.headerRoot}
    >
      <div className={classes.headerContainer}>
        <div className={classes.headerLogoWrapper}>
          <img
            src="/images/market/logo-full.png"
            alt="The X Collective"
            className={classes.headerLogoImg}
          />
        </div>

        <div className={classes.headerRight}>
          <div className={classes.headerLangSwitcher}>
            <span className={classes.headerLangActive}>EN</span>

            <span className={classes.headerLangSeparator}>|</span>

            <span className={classes.headerLangInactive}>ES</span>
          </div>

          <button className={classes.headerJoinBtn}>Join</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
