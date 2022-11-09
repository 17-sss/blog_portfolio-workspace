import React, { FunctionComponent } from 'react';
import * as S from './style';

interface MainContainerProps {
  children?: React.ReactNode;
}
const MainContainer: FunctionComponent<MainContainerProps> = function ({ children }) {
  return <S.MainContainerLayout>{children}</S.MainContainerLayout>;
};

export default MainContainer;
