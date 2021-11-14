import React, { FunctionComponent, useMemo } from 'react';

import DirectionsWalkRoundedIcon from '@material-ui/icons/DirectionsWalkRounded';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import DirectionsBikeRoundedIcon from '@material-ui/icons/DirectionsBikeRounded';

import IntroduceList from '../IntroduceList';
import IntroduceListItem from '../IntroduceListItem';
import ProfileCard from '../ProfileCard';

import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const IntroduceSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, subTitle, introduceList, profileCard } = PORTFOLIO_SECTION_INFO.introduce;
  const itemTexts = introduceList.items;

  const IntroduceListItems = useMemo(
    () =>
      Object.values(itemTexts).map(({ subject, contents }, i) => {
        const icons = [<DirectionsWalkRoundedIcon />, <DirectionsRunRoundedIcon />, <DirectionsBikeRoundedIcon />];
        return <IntroduceListItem key={i} idx={i} subject={subject} contents={contents} icon={icons[i]} />;
      }),
    [itemTexts],
  );

  return (
    <S.IntroduceSectionLayout id={layoutId} {...props}>
      <S.IntroduceSectionInnerBox>
        <S.IntroduceTitleBox title={"Introduce"} subTitle={subTitle} />
        <ProfileCard {...{ ...profileCard }} />
        <IntroduceList>{IntroduceListItems}</IntroduceList>
      </S.IntroduceSectionInnerBox>
    </S.IntroduceSectionLayout>
  );
};
export default IntroduceSection;
