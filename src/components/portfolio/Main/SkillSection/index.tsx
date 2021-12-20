import React, { Fragment, FunctionComponent, MutableRefObject, useCallback, useMemo, useRef, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import CircularSkillItem from '../CircularSkillItem';
import SkillContainer from '../SkillContainer';
import SkillItem from '../SkillItem';

import { usePortfolioState } from 'utils/contexts/PortfolioContext';
import { useCheckMediaQuery, useScrollAnimations } from 'hooks';
import { TabletDesktop } from 'components/common';
import { DetailRenderer } from 'components/portfolio/Common';
import { PORTFOLIO_SECTION_INFO, SkillCategoryNames } from 'utils/constants';
import { findIconName } from 'components/portfolio/Common/CustomIcon';
import * as S from './style';

type SkillItemsType = { [name in SkillCategoryNames]: React.ReactNode };
const SkillSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, subTitle, skillList, topSkillImages } = PORTFOLIO_SECTION_INFO.skills;
  const { markdownData } = usePortfolioState();

  const [isTopSkillHover, setIsTopSkillHover] = useState<boolean>(false);

  const eleRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  useScrollAnimations({ eleRef, options: { excludeOptions: { excludeSelectors: ['#top__detail__box'] } } });

  const isDesktop = useCheckMediaQuery('desktop');

  // 제일 많이 쓰는 기술들
  const topSkillItems = useMemo(() => {
    const isEmptyTopSkillImages: boolean = !topSkillImages || topSkillImages.length <= 0;
    if (isEmptyTopSkillImages) {
      const frontendSkills = skillList['Front-end'];
      const SIZE = isDesktop ? 160 : 150;
      return frontendSkills.slice(0, 5).map((v, i) => {
        const { name, color, percent } = v;
        const value = percent ?? 0;
        return <CircularSkillItem key={i} size={SIZE} {...{ name, value, color }} />;
      });
    } else {
      return topSkillImages!.map(({ name, src }, i) => (
        <S.TopSkillImageItem key={i}>
          <img src={src} alt={name} />
        </S.TopSkillImageItem>
      ));
    }
  }, [topSkillImages, skillList, isDesktop]);

  // 제일 많이 쓰는 기술들 간단 정리
  const topSkillDetailHtml = useMemo(
    () =>
      markdownData.find(({ node: { frontmatter } }) => {
        const { portfolioInfo } = frontmatter;
        return portfolioInfo.sectionType === 'skills';
      })?.node.html,
    [markdownData],
  );

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

  // Events
  const handleTopSkillCardMouseEnter = useCallback(() => setIsTopSkillHover(() => true), []);
  const handleTopSkillCardMouseLeave = useCallback(() => setIsTopSkillHover(() => false), []);
  return (
    <S.SkillSectionLayout id={layoutId} {...props}>
      <S.SkillSectionInnerBox ref={eleRef}>
        <S.SkillTitleBox title={'Skills'} subTitle={subTitle} />

        <S.TopSkillCard onMouseEnter={handleTopSkillCardMouseEnter} onMouseLeave={handleTopSkillCardMouseLeave}>
          {topSkillItems && <S.TopSkillList>{topSkillItems}</S.TopSkillList>}
          <TabletDesktop>
            <S.TopSkillDetailBox id="top__detail__box" isHover={isTopSkillHover}>
              <S.TopSkillDetailCloseButton onClick={handleTopSkillCardMouseLeave}>
                <CloseIcon />
              </S.TopSkillDetailCloseButton>
              {topSkillDetailHtml && <DetailRenderer html={topSkillDetailHtml} />}
            </S.TopSkillDetailBox>
          </TabletDesktop>
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
