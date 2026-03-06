type Options = Record<string, string | number | boolean | Date>;

const EXPIRES_INCREMENT = 1000; // Seconds to milliseconds

export const getCookie = (name: string) => {
  if (typeof document === 'undefined') return;

  const matches = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));

  return matches ? decodeURIComponent(matches[2]) : undefined;
};

export const setCookie = (name: string, value: string, options: Options) => {
  if (typeof document === 'undefined') return;

  const optionList = options || {};

  let expires = optionList?.expires;

  if (typeof expires === 'number' && expires) {
    const currentData = new Date();
    currentData.setTime(currentData.getTime() + expires * EXPIRES_INCREMENT);
    optionList.expires = currentData;
    expires = currentData;
  }

  if (expires && typeof expires === 'object') {
    optionList.expires = expires.toUTCString();
  }

  const valueForSet = encodeURIComponent(value);

  let updatedCookie = `${name}=${valueForSet}`;

  for (const optionName in optionList) {
    if (Object.prototype.hasOwnProperty.call(optionList, optionName)) {
      updatedCookie += `; ${optionName}`;
      const optionValue = optionList[optionName];

      if (optionValue !== true) {
        updatedCookie += `=${optionValue}`;
      }
    }
  }

  document.cookie = updatedCookie;
};
