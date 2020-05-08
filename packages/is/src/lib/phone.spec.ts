import { isPhone } from './phone';

describe('Phones Validator', () => {
  it('Should return false', () => {
    expect(isPhone('123')).toBe(false);
    expect(isPhone('abas')).toBe(false);
    expect(isPhone('asdb90-123981as')).toBe(false);
    expect(isPhone('asdb90.123981as')).toBe(false);
  });
  it('Should return true', () => {
    expect(isPhone('12345678901')).toBe(true);
    expect(isPhone('54367325342')).toBe(true);
    expect(isPhone('43534534534')).toBe(true);
    expect(isPhone('67567567566')).toBe(true);
  });
});
