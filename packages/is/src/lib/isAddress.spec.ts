import { isAddress } from './isAddress';

describe('Helper isAddress', () => {
  // it('Null object', () => {
  //   const is = isAddress(null);
  //   expect(is.valid).toBe(false);
  //   expect(is.reason).toBe('Endereço inválido.');
  // });
  // it('Objeto vazio', () => {
  //   const is = isAddress({});
  //   expect(is.valid).toBe(false);
  //   expect(is.reason).toBe('Rua inválida.');
  // });

  // it('Objeto com apenas place e complemento', () => {
  //   const is = isAddress({ place: 'Rua imaginária', complement: '' });
  //   expect(is.valid).toBe(false);
  //   expect(is.reason).toBe('Bairro inválido.');
  // });

  // it('Objeto com apenas place, complemento e bairro', () => {
  //   const is = isAddress({ place: 'Rua imaginária', complement: '', district: 'Centro' });
  //   expect(is.valid).toBe(false);
  //   expect(is.reason).toBe('Cidade inválida.');
  // });

  // it('Objeto com apenas place, complemento, bairro e cidade', () => {
  //   const is = isAddress({
  //     place: 'Rua imaginária',
  //     complement: '',
  //     district: 'Centro',
  //     city: 'Francisco Beltrão',
  //   });
  //   expect(is.valid).toBe(false);
  //   expect(is.reason).toBe('Estado inválido.');
  // });

  // it('Objeto com apenas place, complemento, bairro, cidade e estado', () => {
  //   const is = isAddress({
  //     place: 'Rua imaginária',
  //     complement: '',
  //     district: 'Centro',
  //     city: 'Francisco Beltrão',
  //     state: 'PR',
  //   });
  //   expect(is.valid).toBe(false);
  //   expect(is.reason).toBe('País inválido.');
  // });

  // it('Objeto com apenas país não númerico', () => {
  //   const is = isAddress({
  //     place: 'Rua imaginária',
  //     complement: '',
  //     district: 'Centro',
  //     city: 'Francisco Beltrão',
  //     state: 'PR',
  //     country: 'a01',
  //   });
  //   expect(is.valid).toBe(false);
  //   expect(is.reason).toBe('País inválido.');
  // });

  // it('Objeto com apenas país númerico mas em formato string', () => {
  //   const is = isAddress({
  //     place: 'Rua imaginária',
  //     complement: '',
  //     district: 'Centro',
  //     city: 'Francisco Beltrão',
  //     state: 'PR',
  //     country: '1',
  //   });
  //   expect(is.valid).toBe(true);
  //   expect(is.reason).toBeUndefined();
  // });

  it('Objeto completo', () => {
    const is = isAddress({
      place: 'Rua imaginária',
      complement: '',
      district: 'Centro',
      city: 'Francisco Beltrão',
      state: 'PR',
      country: 1,
    });
    expect(is.valid).toBe(true);
    expect(is.reason).toBeUndefined();
  });
});
