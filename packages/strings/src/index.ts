export const stringSize = (value: string, minSize = 3, maxSize = 63): boolean => {
  if (!value) {
    return false;
  }
  if (value.length < minSize || value.length > maxSize) {
    return false;
  }
  return true;
};
