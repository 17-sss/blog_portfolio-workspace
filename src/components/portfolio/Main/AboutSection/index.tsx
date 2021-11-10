import { InnerContainer } from 'components/portfolio/Common';
import { FunctionComponent } from 'react';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const AboutSection: FunctionComponent = function ({ ...props }) {
  const { layoutId } = PORTFOLIO_SECTION_INFO.about;

  return (
    <S.AboutSectionLayout id={layoutId} {...props}>
      <InnerContainer>내소개</InnerContainer>
    </S.AboutSectionLayout>
  );
};

export default AboutSection;
