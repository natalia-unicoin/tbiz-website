import {
  type FC,
  type ReactNode,
  useMemo,
} from 'react';
import { useRouter } from 'next/router';

import { PAGES_WITHOUT_HEADER, PAGES_WITH_STICKY_ELEMENTS } from 'constants/routes';

import { Header, Footer } from 'components';

import useStyles from './MainLayout.styles';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { classes, cx } = useStyles();

  const { pathname } = useRouter();

  const withSticky = useMemo(
    () => PAGES_WITH_STICKY_ELEMENTS.some((route) => route === pathname),
    [pathname],
  );

  const withoutHeader = useMemo(
    () => PAGES_WITHOUT_HEADER.some((route) => route === pathname),
    [pathname],
  );

  return (
    <div
      className={cx(
        classes.root,
        withSticky && 'withSticky',
        withoutHeader && 'withoutHeader',
      )}
    >
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
