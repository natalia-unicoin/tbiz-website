const firstDisplayElement = (classElement: string, callback: (flag: boolean) => void) => {
  const elementScroll = document.getElementsByClassName(classElement);

  const elementPosition = {
    top: elementScroll[0].getBoundingClientRect().top + window.scrollY - window.innerHeight,
    bottom: elementScroll[0].getBoundingClientRect().bottom + window.scrollY,
  };

  if ((window.scrollY >= elementPosition.top) && (window.scrollY < elementPosition.bottom)) {
    callback(true);
  }

  const handleScroll = () => {
    if ((window.scrollY >= elementPosition.top) && (window.scrollY < elementPosition.bottom)) {
      callback(true);
      window.removeEventListener('scroll', handleScroll, true);
    }
  };

  window.addEventListener('scroll', handleScroll, true);

  return () => {
    window.removeEventListener('scroll', handleScroll, true);
  };
};

export default firstDisplayElement;
