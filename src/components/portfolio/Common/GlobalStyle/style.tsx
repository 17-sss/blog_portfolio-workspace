import { css, Theme } from '@emotion/react';
import { resetStyle, theme } from 'utils/style';

export const defaultStyle = ((theme: Theme) => css`
  ${resetStyle};
  html {
    font-size: ${theme.fontSizes.root};
    font-family: Noto Sans KR, sans-serif;
  }
`)(theme);
