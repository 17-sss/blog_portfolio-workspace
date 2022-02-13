import { FunctionComponent } from 'react';
import * as S from './style';

const MainContainer: FunctionComponent = function ({ children }) {
  return <S.MainContainerLayout>{children}</S.MainContainerLayout>;
};

export default MainContainer;
