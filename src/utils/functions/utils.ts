export const changeFirstCharUpperCase = (str: string): string =>
  str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());

export const getSeparateNumStr = (str: string) => {
  const REG_EX = /(?<num>([\d\.]+))(?<str>([a-z]+))/gi;
  const matchs = [...str.matchAll(REG_EX)];
  if (!matchs || !matchs.length) return null;
  const groups = matchs[0].groups;
  if (!groups) return null;

  const result = {
    num: +groups.num,
    str: groups.str,
  };
  return result;
};

export const isNullOrUndefined = (param: any) => param === null || typeof param === 'undefined';

export const getExtension = (str: string) => {
  const match = str.match(/\.\w+$/gi);
  if (!match || !match.length) return;
  return match[0];
}
