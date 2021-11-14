import { FunctionComponent } from 'react';
import * as S from './style';

const NormalGridList: FunctionComponent = function ({ children, ...props }) {
  return <S.NormalGridListLayout {...props}>{children}</S.NormalGridListLayout>;
};

export default NormalGridList;
