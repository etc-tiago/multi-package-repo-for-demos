export const isDateString = (input: string, minYear = 1900) => {
  if (isNaN(Date.parse(input))) {
    return false;
  }
  const minYearCalc: number = new Date(minYear, 1).getTime();
  const datetime: number = new Date(input).getTime();
  return datetime > minYearCalc;
};
