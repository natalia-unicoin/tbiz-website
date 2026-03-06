const getDelimitedString = (value?: string | number): string => {
  if (!value) {
    return '0';
  }

  let stringValue = value.toString();
  let fractional = '';

  if (stringValue.indexOf('.') !== -1) {
    fractional = `.${stringValue.split('.')[1]}`;
    [stringValue] = stringValue.split('.');
  }

  stringValue = stringValue.replace(/[\D\s._-]+/g, '');
  const numberValue = stringValue ? parseInt(stringValue, 10) : 0;

  return numberValue.toLocaleString('en-US') + fractional;
};

export default getDelimitedString;
