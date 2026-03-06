import { scroller } from 'react-scroll';

const scrollToElement = (elementName: string, offset?: number) => {
  scroller.scrollTo(elementName, {
    duration: 800,
    delay: 0,
    offset: typeof offset === 'number' ? offset : -50,
    smooth: 'easeInOutQuart',
  });
};

export default scrollToElement;
