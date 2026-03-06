import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

const useScrollByQuery = () => {
  const { query } = useRouter();

  useEffect(
    () => {
      if (query?.scrollTo && typeof query?.scrollTo === 'string') {
        scroller.scrollTo(query?.scrollTo, {
          duration: 800,
          delay: 0,
          offset: -50,
          smooth: 'easeInOutQuart',
        });
      }
    },
    [query],
  );
};

export default useScrollByQuery;
