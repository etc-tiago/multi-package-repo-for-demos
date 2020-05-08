import { onlyNumbers } from './';

describe('Keep Only Numbers on string', () => {
  it('Should return empty string', () => {
    expect(onlyNumbers('asjlkdjkasjlk')).toBe('');
  });
  it('Should return 2 in string format', () => {
    expect(onlyNumbers('2asjlkdjk-asjlk')).toBe('2');
  });
  it('Should return 09890 in string format', () => {
    expect(onlyNumbers('09s8d90as')).toBe('09890');
  });
  it('Should return 09890 in string format', () => {
    expect(onlyNumbers('09s8d_90as')).toBe('09890');
  });
  it('Should return 09876 in string format', () => {
    expect(onlyNumbers('09asd8gf76')).toBe('09876');
  });
  it('Should return 09876 in string format', () => {
    expect(onlyNumbers('09a_sd8-gf76')).toBe('09876');
  });
  it('Should return NaN when parse', () => {
    // tslint:disable-next-line: no-unused-expression
    expect(onlyNumbers('asjlkdjkasjlk', true)).toBeNaN();
  });
});
