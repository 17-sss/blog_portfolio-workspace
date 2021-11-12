import { css, Theme } from '@emotion/react';
import { resetStyle, theme } from 'utils/style';

export const defaultStyle = ((theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Do+Hyeon&family=Nanum+Myeongjo:wght@400;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');

  ${resetStyle};
  html {
    font-size: ${theme.fontSizes.root};
    font-family: 'Noto Sans KR', 'Roboto', sans-serif, serif;
  }
`)(theme);
