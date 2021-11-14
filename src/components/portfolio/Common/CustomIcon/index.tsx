import { Fragment, FunctionComponent } from 'react';
import { IconNameType, iconNames } from './icons';
import * as S from './style';

export type CustomIconProps = { color?: string; type?: IconNameType; size?: string };
const CustomIcon: FunctionComponent<CustomIconProps> = function ({ type, children, ...props }) {
  return type ? <S.IconLayout type={type} {...props} /> : <Fragment />;
};

export { iconNames };
export type { IconNameType };
export default CustomIcon;
