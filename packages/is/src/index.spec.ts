import { is } from './';

describe('isBool', () => {
  it('Invalid', () => {
    expect(is('2019-21-16').boolean()).toBe(false);
    expect(is(2019).boolean()).toBe(false);
    expect(is({}).boolean()).toBe(false);
  });
  it('Valid', () => {
    expect(is(false).boolean()).toBe(true);
    expect(is(true).boolean()).toBe(true);
  });
});

describe('isObject', () => {
  it('Invalid', () => {
    expect(is('2019-21-16').object()).toBe(false);
    expect(is(2019).object()).toBe(false);
    expect(is('{}').object()).toBe(false);
  });
  it('Valid', () => {
    expect(is([{}]).object()).toBe(true);
    expect(is({}).object()).toBe(true);
  });
});
