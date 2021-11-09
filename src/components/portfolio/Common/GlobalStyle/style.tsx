import { css, Theme } from '@emotion/react';
import { resetStyle, theme } from 'utils/style';

export const defaultStyle = ((theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700;800&display=swap');

  ${resetStyle};
  html {
    font-size: ${theme.fontSizes.root};
    font-family: Noto Sans KR, sans-serif;
  }
`)(theme);
