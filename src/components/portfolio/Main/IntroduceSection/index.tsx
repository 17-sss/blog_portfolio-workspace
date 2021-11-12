import React, { FunctionComponent, useMemo } from 'react';

import DirectionsWalkRoundedIcon from '@material-ui/icons/DirectionsWalkRounded';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import DirectionsBikeRoundedIcon from '@material-ui/icons/DirectionsBikeRounded';

import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';
import Paragrph from 'components/portfolio/Common/Paragraph';

const IntroduceSection: FunctionComponent = function ({ ...props }) {
  const { layoutId, itemTexts, subTitleText } = PORTFOLIO_SECTION_INFO.introduce;

  const introduceItems = useMemo(
    () =>
      Object.values(itemTexts).map(({ subject, contents }, i) => {
        const icons = [<DirectionsWalkRoundedIcon />, <DirectionsRunRoundedIcon />, <DirectionsBikeRoundedIcon />];
        return (
          <S.IntroduceItem key={i} idx={i}>
            <S.IntroduceCard>
              <S.IntroduceCardContent>
                <S.IntroduceIconBox>
                  <span className="inner">{icons.find((_, iconIdx) => i === iconIdx) ?? <></>}</span>
                </S.IntroduceIconBox>
                <Paragrph variant="h3">{subject}</Paragrph>
                <Paragrph variant="h5" isContent>
                  {contents}
                </Paragrph>
              </S.IntroduceCardContent>
            </S.IntroduceCard>
          </S.IntroduceItem>
        );
      }),
    [itemTexts],
  );

  return (
    <S.IntroduceSectionLayout id={layoutId} {...props}>
      <S.IntroduceSectionInnerBox>
        <S.IntroduceSubTitleBox>
          <Paragrph variant="h2">소개</Paragrph>
          <Paragrph variant="h4">{subTitleText}</Paragrph>
        </S.IntroduceSubTitleBox>
        <S.IntroduceList dataLength={introduceItems.length}>{introduceItems}</S.IntroduceList>
      </S.IntroduceSectionInnerBox>
    </S.IntroduceSectionLayout>
  );
};
export default IntroduceSection;
