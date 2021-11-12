import { FunctionComponent } from 'react';
import * as S from './style';

const SubTitleBox: FunctionComponent = function ({ children, ...props }) {
  return <S.SubTitleBoxLayout {...props}>{children}</S.SubTitleBoxLayout>;
};

export default SubTitleBox;
