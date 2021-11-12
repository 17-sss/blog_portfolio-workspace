import { FunctionComponent } from 'react';
import * as S from './style';

const TitleBox: FunctionComponent = function ({ children, ...props }) {
  return <S.TitleBoxLayout {...props}>{children}</S.TitleBoxLayout>;
};

export default TitleBox;
