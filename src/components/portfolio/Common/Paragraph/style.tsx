import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { ParagrphProps } from '.';

export const ParagraphLayout = styled(({ isTitle, isContent, ...props }: ParagrphProps) => <Typography {...props} />)`
  color: ${({ theme }) => theme.grayScaleColors.titleActive};
  text-align: center;
  padding: 12px 0;

  ${({ isTitle }) => isTitle && css`font-family: 'Comfortaa', 'Roboto', 'Helvetica', 'Arial', sans-serif, serif;`};
  ${({ isContent, theme }) =>
    isContent &&
    css`
      color: ${theme.grayScaleColors.font};
      text-align: initial;
    `};
`;
