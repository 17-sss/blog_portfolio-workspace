import { FunctionComponent } from 'react';
import * as S from './style';

const InnerContainer: FunctionComponent = function ({ children, ...props }) {
  return <S.InnerContainerLayout {...props}>{children}</S.InnerContainerLayout>;
};

export default InnerContainer;
