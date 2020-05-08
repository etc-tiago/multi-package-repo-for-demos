/**
 * Validate phone
 * First remove all non-numbers and validate by length == 11
 * @param {string | number} phone
 */
export const isPhone = (phone: string | number): boolean => phone.toString().replace(/\D/g, '').length === 11;
