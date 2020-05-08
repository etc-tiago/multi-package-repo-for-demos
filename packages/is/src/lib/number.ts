import { onlyNumbers } from '../../numbers';

export const isNumber = (value: any) => parseInt(value, 10) && onlyNumbers(value) === value.toString();
