import { isCNPJ } from './cnpj';

describe('CNPJ Validator', () => {
  it('Should return false', () => {
    expect(isCNPJ('20190218316222')).toBe(false);
    expect(isCNPJ('03668439385333')).toBe(false);
  });
  it('Should return true', () => {
    expect(isCNPJ('26329429000110')).toBe(true);
    expect(isCNPJ('03893966000193')).toBe(true);
  });
});
