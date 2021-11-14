import { FunctionComponent } from 'react';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const SkillSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, subTitle } = PORTFOLIO_SECTION_INFO.skills;

  return (
    <S.SkillSectionLayout id={layoutId} {...props}>
      <S.SkillSectionInnerBox>
        <S.SkillTitleBox title={'Skills'} subTitle={subTitle} />
      </S.SkillSectionInnerBox>
    </S.SkillSectionLayout>
  );
};

export default SkillSection;
