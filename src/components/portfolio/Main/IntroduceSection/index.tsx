import React, { FunctionComponent, MutableRefObject, useMemo, useRef } from 'react';

import DirectionsWalkRoundedIcon from '@material-ui/icons/DirectionsWalkRounded';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import DirectionsBikeRoundedIcon from '@material-ui/icons/DirectionsBikeRounded';

import IntroduceItem from '../IntroduceItem';
import ProfileCard from '../ProfileCard';

import { useScrollAnimations } from 'src/hooks';
import { NormalGridList } from 'src/components/portfolio/Common';
import { PortfolioIntroduceType } from 'src/queries';

import * as S from './style';

interface IntroduceSectionProps extends PortfolioIntroduceType {
  layoutId: string;
}

const IntroduceSection: FunctionComponent<IntroduceSectionProps> = function ({ ...props }) {
  const { layoutId, text: subTitle, introduceList, profileCard } = props;

  const eleRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  useScrollAnimations({ eleRef });

  const introduceListItems = useMemo(
    () =>
      Object.values(introduceList).map(({ subject, contents }, i) => {
        const icons = [<DirectionsWalkRoundedIcon />, <DirectionsRunRoundedIcon />, <DirectionsBikeRoundedIcon />];
        return <IntroduceItem key={i} idx={i} subject={subject} contents={contents} icon={icons[i]} />;
      }),
    [introduceList],
  );

  return (
    <S.IntroduceSectionLayout id={layoutId} {...props}>
      <S.IntroduceSectionInnerBox ref={eleRef}>
        <S.IntroduceTitleBox title={'Introduce'} subTitle={subTitle} />
        <ProfileCard {...{ ...profileCard }} />
        <NormalGridList>{introduceListItems}</NormalGridList>
      </S.IntroduceSectionInnerBox>
    </S.IntroduceSectionLayout>
  );
};
export default IntroduceSection;
