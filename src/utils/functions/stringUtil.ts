export const changeFirstCharUpperCase = (str: string): string =>
  str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
