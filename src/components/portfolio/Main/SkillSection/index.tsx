import { FunctionComponent } from 'react';
import { Paragraph } from 'components/portfolio/Common';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const SkillSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, subTitle } = PORTFOLIO_SECTION_INFO.skills;

  return (
    <S.SkillSectionLayout id={layoutId} {...props}>
      <S.SkillSectionInnerBox>
        <S.SkillTitleBox>
          <Paragraph variant="h2" isTitle>Skill</Paragraph>
          <Paragraph variant="h4">{subTitle}</Paragraph>
        </S.SkillTitleBox>
      </S.SkillSectionInnerBox>
    </S.SkillSectionLayout>
  );
};

export default SkillSection;
