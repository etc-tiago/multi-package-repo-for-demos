import { isJson } from './json';

describe('JSON Validator', () => {
  it('Should return false', () => {
    expect(isJson('{,}')).toBe(false);
    expect(isJson('')).toBe(false);
    expect(isJson('[q]')).toBe(false);
    expect(isJson('1899-12-31')).toBe(false);
    expect(isJson(1899)).toBe(false);
  });
  it('Should return true', () => {
    expect(isJson('{"a": true}')).toBe(true);
    expect(isJson('{}')).toBe(true);
    expect(isJson('[]')).toBe(true);
  });
});
