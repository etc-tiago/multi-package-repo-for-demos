const hasValidValue = (value: string): boolean => {
  if (value === '' || value.length !== 11 || !/^\d{11}$/.test(value) || /^(\d)(\1){10}$/.test(value)) {
    return false;
  }
  return true;
};

export const isCPF = (input: number | string) => {
  const cpf = input.toString().replace(/\D/g, '');
  if (!hasValidValue(cpf)) {
    return false;
  }
  const digits = cpf.split('').map((x: any) => parseInt(x, 10));
  for (let j = 0; j < 2; j++) {
    let sum = 0;
    for (let i = 0; i < 9 + j; i++) {
      sum += digits[i] * (10 + j - i);
    }
    let checkDigit = 11 - (sum % 11);
    if (checkDigit === 10 || checkDigit === 11) {
      checkDigit = 0;
    }
    if (checkDigit !== digits[9 + j]) {
      return false;
    }
  }
  return true;
};
