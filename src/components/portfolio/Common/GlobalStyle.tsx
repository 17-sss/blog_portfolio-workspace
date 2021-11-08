import { FunctionComponent } from 'react';
import { Global, css, Theme } from '@emotion/react';
import { resetStyle, theme } from 'utils/style';

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;

const defaultStyle = ((theme: Theme) => css`
  ${resetStyle};
  html {
    font-size: ${theme.fontSizes.root};
  }
`)(theme);
