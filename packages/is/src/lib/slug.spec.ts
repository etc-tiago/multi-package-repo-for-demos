import { isSlug } from './slug';

describe('Validator de Slugs 🐌', () => {
  it('Not Valid', () => {
    expect(isSlug('123123')).toBe(false);
    expect(isSlug('P3x')).toBe(false);
    expect(isSlug('P3x.2')).toBe(false);
    expect(isSlug('12312+')).toBe(false);
    expect(isSlug('09a.sd8gf76')).toBe(false);
  });
  it('Valid', () => {
    expect(isSlug('asjlkdjka2sjlk')).toBe(true);
    expect(isSlug('asjlk3djk-asjlk')).toBe(true);
    expect(isSlug('09s8d90as')).toBe(true);
    expect(isSlug('09s8d_90as')).toBe(true);
    expect(isSlug('09asd8gf76')).toBe(true);
    expect(isSlug('09a_sd8-gf76')).toBe(true);
  });
  it('Valid with min/max', () => {
    expect(isSlug('asjlkdjka2sjlk', 5, 32)).toBe(true);
    expect(isSlug('asjlk3djk-asjlk', 2, 12)).toBe(false);
    expect(isSlug('09s8d90as', 2, 7)).toBe(false);
    expect(isSlug('09s8d_90as', 5, 7)).toBe(false);
    expect(isSlug('09asd8gf76', 7)).toBe(true);
    expect(isSlug('09a_sd8-gf76', 3)).toBe(true);
  });
});
