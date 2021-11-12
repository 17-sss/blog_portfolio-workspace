import React, { FunctionComponent } from 'react';
import * as S from './style';

export type IntroduceListProps = {
  children?: React.ReactNode | React.ReactNode[];
};

const IntroduceList: FunctionComponent<IntroduceListProps> = function ({ children, ...props }) {
  return <S.IntroduceListLayout {...props}>{children}</S.IntroduceListLayout>;
};
export default IntroduceList;
