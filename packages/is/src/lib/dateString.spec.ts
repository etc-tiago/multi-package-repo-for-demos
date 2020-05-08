import { isDateString } from './dateString';

describe('Validator de Datas', () => {
  it('Invalid', () => {
    expect(isDateString('2019-21-16')).toBe(false);
    expect(isDateString('2019-12-32')).toBe(false);
    expect(isDateString('1900-01-01')).toBe(false);
    expect(isDateString('1899-12-31')).toBe(false);
  });
  it('Valid', () => {
    expect(isDateString('2019-01-16')).toBe(true);
    expect(isDateString('1933-11-12')).toBe(true);
  });
});
