import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { ParagraphProps } from '.';

export const ParagraphLayout = styled(({ isTitle, isContent, ...props }: ParagraphProps) => (<Typography {...props} />))<ParagraphProps>`
  font-family: ${({ isTitle }) =>
    (isTitle ? 'Comfortaa,' : '') +
    `'Noto Sans KR', 'Roboto', 'Helvetica', 'Arial', 'Do Hyeon', 'Nanum Myeongjo', sans-serif`};

  color: ${({ theme }) => theme.grayScaleColors.titleActive};
  text-align: center;
  padding: 12px 0;

  ${({ isContent, theme }) =>
    isContent &&
    css`
      color: ${theme.grayScaleColors.font};
      text-align: initial;
    `};
`;
