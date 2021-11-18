import React, { Fragment, FunctionComponent, MutableRefObject, useMemo, useRef } from 'react';

import { useCheckMediaQuery, useScrollAnimations } from 'hooks';

import CircularSkillItem from '../CircularSkillItem';
import SkillContainer from '../SkillContainer';
import SkillItem from '../SkillItem';

import { PORTFOLIO_SECTION_INFO, SkillCategoryNames } from 'utils/constants';
import { findIconName } from 'components/portfolio/Common/CustomIcon';
import * as S from './style';

type SkillItemsType = { [name in SkillCategoryNames]: React.ReactNode };
const SkillSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, subTitle, skillList } = PORTFOLIO_SECTION_INFO.skills;

  const eleRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  useScrollAnimations({ eleRef });

  const isDesktop = useCheckMediaQuery('desktop');

  // 제일 많이 쓰는 기술들
  const topSkillItems = useMemo(() => {
    const frontendSkills = skillList['Front-end'];
    const SIZE = isDesktop ? 160 : 150;

    return frontendSkills.slice(0, 5).map((v, i) => {
      const { name, color, percent } = v;
      const value = percent ?? 0;
      return <CircularSkillItem key={i} size={SIZE} {...{ name, value, color }} />;
    });
  }, [skillList, isDesktop]);

  // 접해봤던 기술들
  const skillContainers = useMemo(() => {
    const skillListKeys = Object.keys(skillList) as SkillCategoryNames[];
    const result = skillListKeys.reduce((result, keyName, i) => {
      const currData = skillList[keyName];
      const arrEle = currData.map(({ name, color }, i) => {
        const findName = findIconName(name);
        return <SkillItem key={i} iconType={findName} color={color} />;
      });
      result[keyName] = (
        <SkillContainer idx={i} subject={keyName}>
          {arrEle}
        </SkillContainer>
      );
      return result;
    }, {} as SkillItemsType);
    return result;
  }, [skillList]);

  return (
    <S.SkillSectionLayout id={layoutId} {...props}>
      <S.SkillSectionInnerBox ref={eleRef}>
        <S.SkillTitleBox title={'Skills'} subTitle={subTitle} />,
        <S.TopSkillCard>
          <S.TopSkillList>{topSkillItems}</S.TopSkillList>
        </S.TopSkillCard>
        <S.SkillContainerBox>
          {(Object.keys(skillContainers) as SkillCategoryNames[]).map((key, i) => (
            <Fragment key={i}>{skillContainers[key]}</Fragment>
          ))}
        </S.SkillContainerBox>
      </S.SkillSectionInnerBox>
    </S.SkillSectionLayout>
  );
};

export default SkillSection;
