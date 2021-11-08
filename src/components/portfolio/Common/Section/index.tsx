import { FunctionComponent } from 'react';
import * as S from './style';

const Section: FunctionComponent = function ({ children, ...props }) {
  return (
    <S.SectionLayout {...props}>
      <S.SectionInnerBox>{children}</S.SectionInnerBox>
    </S.SectionLayout>
  );
};

export default Section;
