import { FunctionComponent } from 'react';
import { Global } from '@emotion/react';
import { defaultStyle } from './style';

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
