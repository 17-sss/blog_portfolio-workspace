import { Fragment } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { iconList } from './icons';
import { CustomIconProps } from '.';

type IconLayoutProps = Required<Pick<CustomIconProps, "type">> & Omit<CustomIconProps, "type">;
export const IconLayout = styled(({ color, type, ...props }: IconLayoutProps) => {
  const Icon = iconList[type];
  return (typeof Icon !== "object") ? <Icon {...props} /> : <Fragment />;
})`
  ${({ color }) => color && css` fill: ${color};`};
  ${({ size }) => size && css`width: ${size}; height: ${size}`};
`;
