import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { ParagraphProps } from '.';

export const ParagraphLayout = styled(({ isTitle, isContent, additionalFonts, ...props }: ParagraphProps) => (<Typography {...props} />))`
  font-family: ${({ isTitle, additionalFonts }) =>
    (isTitle ? 'Comfortaa,' : '') +
    (additionalFonts ? `${additionalFonts.join(',')},` : '') +
    `'Noto Sans KR', 'Roboto', 'Helvetica', 'Arial', sans-serif, serif`};

  color: ${({ theme }) => theme.grayScaleColors.titleActive};
  padding: 12px 0;

  ${({ isContent, theme }) =>
    isContent &&
    css`
      color: ${theme.grayScaleColors.font};
      text-align: initial;
    `};
`;
