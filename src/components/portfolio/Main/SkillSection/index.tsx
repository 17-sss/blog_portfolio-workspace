import { InnerContainer } from 'components/portfolio/Common';
import { FunctionComponent } from 'react';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const SkillSection: FunctionComponent = function ({ ...props }) {
  const { layoutId } = PORTFOLIO_SECTION_INFO.skills;

  return (
    <S.SkillSectionLayout id={layoutId} {...props}>
      <InnerContainer>스킬</InnerContainer>
    </S.SkillSectionLayout>
  );
};

export default SkillSection;