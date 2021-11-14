import { FunctionComponent, useMemo } from 'react';
import { NormalGridList } from 'components/portfolio/Common';
import CircularSkillItem from '../CircularSkillItem';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const SkillSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, subTitle, topSkills } = PORTFOLIO_SECTION_INFO.skills;

  const topSkillItems = useMemo(() => {
    if (!topSkills.length) return;
    const SIZE = '13vh';
    return topSkills.map((v, i) => {
      const { name, color, percent: value } = v;
      return <CircularSkillItem key={i} size={SIZE} {...{ name, value, color }} />;
    });
  }, [topSkills]);

  return (
    <S.SkillSectionLayout id={layoutId} {...props}>
      <S.SkillSectionInnerBox>
        <S.SkillTitleBox title={'Skills'} subTitle={subTitle} />
        <NormalGridList>{topSkillItems}</NormalGridList>
      </S.SkillSectionInnerBox>
    </S.SkillSectionLayout>
  );
};

export default SkillSection;
