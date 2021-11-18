import React, { Fragment, FunctionComponent, useMemo } from 'react';

import DirectionsWalkRoundedIcon from '@material-ui/icons/DirectionsWalkRounded';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import DirectionsBikeRoundedIcon from '@material-ui/icons/DirectionsBikeRounded';

import useObserveItems from 'hooks/useObserveItems';
import IntroduceItem from '../IntroduceItem';
import ProfileCard from '../ProfileCard';
import { NormalGridList } from 'components/portfolio/Common';
import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const IntroduceSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, subTitle, introduceList, profileCard } = PORTFOLIO_SECTION_INFO.introduce;
  const itemTexts = introduceList.items;

  const introduceListItems = useMemo(
    () =>
      Object.values(itemTexts).map(({ subject, contents }, i) => {
        const icons = [<DirectionsWalkRoundedIcon />, <DirectionsRunRoundedIcon />, <DirectionsBikeRoundedIcon />];
        return <IntroduceItem key={i} idx={i} subject={subject} contents={contents} icon={icons[i]} />;
      }),
    [itemTexts],
  );

  // 최종적으로 렌더링 할 JSX.Elements
  const resultElements = useMemo(() => {
    if (!introduceListItems) return;
    return [
      <S.IntroduceTitleBox title={'Introduce'} subTitle={subTitle} />,
      <ProfileCard {...{ ...profileCard }} />,
      <NormalGridList>{introduceListItems}</NormalGridList>,
    ];
  }, [introduceListItems]);

  const { ref, sliceData } = useObserveItems<HTMLDivElement, JSX.Element>({
    data: resultElements ?? [],
  });
  // --

  return (
    <S.IntroduceSectionLayout id={layoutId} {...props}>
      <S.IntroduceSectionInnerBox
        ref={ref}
        children={sliceData?.map((ele, i) => (
          <Fragment key={i} children={ele} />
        ))}
      />
    </S.IntroduceSectionLayout>
  );
};
export default IntroduceSection;
