export const onlyNumbers = (value: string, parse = false): string | number => {
  const newValue = (value || '').toString().replace(/\D/g, '');
  return parse ? parseInt(newValue, 10) : newValue;
};
