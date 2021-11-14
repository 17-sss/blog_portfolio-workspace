import { CircleProgress } from 'components/portfolio/Common';
import { FunctionComponent } from 'react';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const SkillSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, subTitle } = PORTFOLIO_SECTION_INFO.skills;

  return (
    <S.SkillSectionLayout id={layoutId} {...props}>
      <S.SkillSectionInnerBox>
        <S.SkillTitleBox title={'Skills'} subTitle={subTitle} />
        <div>
          <CircleProgress value={100} size={"10vh"} />
          <CircleProgress value={40} />
        </div>
        <div></div>
      </S.SkillSectionInnerBox>
    </S.SkillSectionLayout>
  );
};

export default SkillSection;
