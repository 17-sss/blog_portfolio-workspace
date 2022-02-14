import { Fragment } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CustomIconProps, iconList } from '.';

export const CustomIconLayout = styled(({ iconType, ...props }: CustomIconProps) => {
  const Current = iconList[iconType ?? "JavaScript"];
  const isObject = typeof Current === "object";
  return isObject ? <Fragment /> : <Current {...props} />;
})`
  ${({ iconColor }) => iconColor && css` fill: ${iconColor};`};
  ${({ iconSize }) => iconSize && css`width: ${iconSize}; height: ${iconSize}`};
`;