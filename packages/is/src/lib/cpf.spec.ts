import { isCPF } from './cpf';

describe('CPF Validator', () => {
  it('Should return false', () => {
    expect(isCPF('20190218316')).toBe(false);
    expect(isCPF('03668439385')).toBe(false);
  });
  it('Should return true', () => {
    expect(isCPF('66215263001')).toBe(true);
    expect(isCPF('66843938035')).toBe(true);
  });
});
