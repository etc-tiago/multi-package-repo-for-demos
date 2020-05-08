import { stringSize } from '../../strings';
import { is } from '../';

interface IIsAddress {
  valid: boolean;
  reason?: string;
}

const isInvalid = (reason: string): IIsAddress => ({ reason, valid: false });
const isObjectInvalid = (obj: any) => !obj || !is(obj).object();
const isPlaceInvalid = (place: any) => place === '' || !is(place).string();
const isComponentInvalid = (complement: any) => complement && !stringSize(complement, 1, 30);
const isDistrictInvalid = (district: any) => district === '' || !is(district).string();
const isCityInvalid = (city: any) => city === '' || !is(city).string();
const isStateInvalid = (state: any) => state === '' || !is(state).string() || !stringSize(state, 2);

export const isAddress = (data: any): IIsAddress => {
  if (isObjectInvalid(data)) {
    return isInvalid('Endereço inválido.');
  }
  if (isPlaceInvalid(data.place)) {
    return isInvalid('Rua inválida.');
  }
  if (isComponentInvalid(data.complement)) {
    return isInvalid('Complemento inválido.');
  }
  if (isDistrictInvalid(data.district)) {
    return isInvalid('Bairro inválido.');
  }
  if (isCityInvalid(data.city)) {
    return isInvalid('Cidade inválida.');
  }
  if (isStateInvalid(data.state)) {
    return isInvalid('Estado inválido.');
  }
  if (!is(data.country).number()) {
    return isInvalid('País inválido.');
  }
  return { valid: true };
};
