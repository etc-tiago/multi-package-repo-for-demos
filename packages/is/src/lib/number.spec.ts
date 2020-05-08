import { isNumber } from './number';

describe('isNumber', () => {
  it('Invalid', () => {
    expect(isNumber('2019-21=16')).toBe(false);
  });
  it('Valid', () => {
    expect(isNumber('19239012')).toBe(true);
  });
});
