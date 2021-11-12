import React, { FunctionComponent, useMemo } from 'react';

import DirectionsWalkRoundedIcon from '@material-ui/icons/DirectionsWalkRounded';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import DirectionsBikeRoundedIcon from '@material-ui/icons/DirectionsBikeRounded';

import IntroduceList from '../IntroduceList';
import IntroduceItem from '../IntroduceItem';
import { Paragraph } from 'components/portfolio/Common';

import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const IntroduceSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, itemTexts, subTitleText } = PORTFOLIO_SECTION_INFO.introduce;

  const introduceItems = useMemo(
    () =>
      Object.values(itemTexts).map(({ subject, contents }, i) => {
        const icons = [<DirectionsWalkRoundedIcon />, <DirectionsRunRoundedIcon />, <DirectionsBikeRoundedIcon />];
        return <IntroduceItem key={i} idx={i} subject={subject} contents={contents} icon={icons[i]} />;
      }),
    [itemTexts],
  );

  return (
    <S.IntroduceSectionLayout id={layoutId} {...props}>
      <S.IntroduceSectionInnerBox>
        <S.IntroduceTitleBox>
          <Paragraph variant="h2" isTitle>Introduce</Paragraph>
          <Paragraph variant="h4">{subTitleText}</Paragraph>
        </S.IntroduceTitleBox>
        <IntroduceList>{introduceItems}</IntroduceList>
        <IntroduceList>{introduceItems}</IntroduceList>
      </S.IntroduceSectionInnerBox>
    </S.IntroduceSectionLayout>
  );
};
export default IntroduceSection;
