import { stringSize } from './';

describe('Name Size Valid', () => {
  it('Valid sizes without min/mas', () => {
    expect(stringSize('valid')).toBe(true);
    expect(stringSize('in')).toBe(false);
    expect(stringSize('in')).toBe(false);
    expect(stringSize('test test test box some letters box box! string size string size string size')).toBe(false);
  });
  it('Valid sizes with min', () => {
    expect(stringSize('valid', 4)).toBe(true);
    expect(stringSize('in', 3)).toBe(false);
  });
  it('Valid sizes with min and max', () => {
    expect(stringSize('valid', 4, 10)).toBe(true);
    expect(stringSize('in', 3, 4)).toBe(false);
  });
  it('Valid sizes without value', () => {
    expect(stringSize('', 4, 10)).toBe(false);
  });
});
