interface NewParams {
  [key: string]: string;
}

export const getUrlWithoutParams = (): string => {
  if (typeof window !== 'undefined' && window?.history?.pushState) {
    const {
      protocol,
      host,
      pathname,
    } = window.location;

    return `${protocol}//${host}${pathname}`;
  }
};

export const clearUrlParams = (): void => {
  const urlWithoutParams = getUrlWithoutParams();

  if (urlWithoutParams) {
    window.history.pushState({ path: urlWithoutParams }, '', urlWithoutParams);
  }
};

export const addUrlParams = (newParams: NewParams): void => {
  const urlWithoutParams = getUrlWithoutParams();

  if (urlWithoutParams && newParams) {
    const searchParams = new URLSearchParams(window.location.search);

    Object.keys(newParams)?.map(
      (key) => searchParams.set(key, newParams[key]),
    );

    const urlWithParams = `${urlWithoutParams}?${searchParams.toString()}`;

    window.history.pushState({ path: urlWithParams }, '', urlWithParams);
  }
};
