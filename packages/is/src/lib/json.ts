export const isJson = (obj: any) => {
  try {
    if (typeof obj === 'string') {
      JSON.parse(obj);
      return true;
    }
    if (typeof obj === 'object') {
      JSON.stringify(obj);
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
};
