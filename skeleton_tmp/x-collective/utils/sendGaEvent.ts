const sendGaEvent = (eventName: string, eventParams: Record<string, string> = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export default sendGaEvent;
