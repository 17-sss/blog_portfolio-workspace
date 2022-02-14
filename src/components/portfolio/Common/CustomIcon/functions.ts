import { iconNames, IconNameType } from '.';

export const findIconName = (name: string) => {
  const iconKeys = Object.values(iconNames) as IconNameType[];
  const findNames = iconKeys.filter(
    v => name.toLowerCase().includes(v.toLowerCase()) || v.toLowerCase().includes(name.toLowerCase()),
  );

  if (findNames.length > 1) return findNames.find(v => v === name) ?? findNames[0];
  else if (findNames.length === 1) return findNames[0];
  else return;
};
