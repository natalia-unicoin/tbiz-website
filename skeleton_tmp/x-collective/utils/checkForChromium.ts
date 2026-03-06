const checkForChromium = () => {
  if (typeof window === 'undefined') return false;
  // Need for correct work
  // @ts-ignore
  const isChromium = window?.chrome;
  const winNav = window?.navigator;
  const isIEedge = winNav?.userAgent?.indexOf('Edg') > -1;

  return isChromium && !isIEedge;
};

export default checkForChromium;
