import { isEmail } from './email';

describe('Validator de Senhas', () => {
  it('Not Valid Email', () => {
    expect(isEmail('valid')).toBe(false);
    expect(isEmail('test@.com')).toBe(false);
    expect(isEmail('test.com')).toBe(false);
  });
  it('Valid Email', () => {
    expect(isEmail('test@test.com')).toBe(true);
    expect(isEmail('test@sub.test.com')).toBe(true);
  });
});
