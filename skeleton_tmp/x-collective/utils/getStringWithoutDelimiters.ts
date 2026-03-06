const getStringWithoutDelimiters = (value: string): string => {
  return value.replace(/,/g, '');
};

export default getStringWithoutDelimiters;
