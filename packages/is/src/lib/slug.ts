export const isSlug = (slug: string, minChar = 3, maxChar = 32): boolean => {
  if (parseInt(slug, 10).toString() === slug) {
    return false;
  }
  const regex = new RegExp('^(?=.*[a-z])[a-z0-9_-]{' + minChar + ',' + maxChar + '}$');
  return regex.test(slug);
};
