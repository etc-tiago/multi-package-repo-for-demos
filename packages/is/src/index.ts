import { isPhone } from './lib/phone';
import { isSafePassword, isMediumPassword, isStrongPassword } from './lib/password';
import { isNumber } from './lib/number';
import { isCPF } from './lib/cpf';
import { isCNPJ } from './lib/cnpj';
import { isJson } from './lib/json';
import { isEmail } from './lib/email';
import { isSlug } from './lib/slug';
import { isDateString } from './lib/dateString';
import { isAddress } from './lib/isAddress';
import { isTime } from './lib/time';

export const is = (value: any) => {
  return {
    string: (): boolean => typeof value === 'string',
    number: (): boolean => isNumber(value),
    boolean: (): boolean => typeof value === 'boolean',
    object: (): boolean => typeof value === 'object',
    phone: (): boolean => isPhone(value),
    safePassword: (): boolean => isSafePassword(value),
    mediumPassword: (): boolean => isMediumPassword(value),
    strongPassword: (): boolean => isStrongPassword(value),
    cpf: (): boolean => isCPF(value),
    cnpj: (): boolean => isCNPJ(value),
    json: (): boolean => isJson(value),
    email: (): boolean => isEmail(value),
    slug: (minChar = 3, maxChar = 32): boolean => isSlug(value, minChar, maxChar),
    dateString: (): boolean => isDateString(value),
    address: (): boolean => isAddress(value).valid,
    time: (): boolean => isTime(value),
  };
};
