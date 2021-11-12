import React, { FunctionComponent, useCallback } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import WaveGraphic from '../WaveGraphic';
import { usePortfolioState } from 'utils/contexts/PortfolioContext';

import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const HomeSection: FunctionComponent = function ({ ...props }) {
  const { waveImages } = usePortfolioState();
  const { layoutId, greetingText } = PORTFOLIO_SECTION_INFO.home;

  const handleScrollDownButtonClick = useCallback((e : React.MouseEvent<HTMLButtonElement>) => {
    const closestTarget = (e.target as HTMLElement).closest("button");
    if (!closestTarget) return;

    const layoutId = PORTFOLIO_SECTION_INFO["introduce"].layoutId;
    const sectionEle = document.querySelector(`#${layoutId}`) as HTMLElement;
    if (!sectionEle) return;

    window.scrollTo({
      top: sectionEle.offsetTop,
      behavior: 'smooth',
    });
  }, []);

  return (
    <S.HomeSectionLayout id={layoutId} {...props}>
      <S.WaveGraphicBox>
        <WaveGraphic waveImages={waveImages} />
      </S.WaveGraphicBox>

      <S.HomeSectionInnerBox>
        <S.IntroParagraph>{greetingText}</S.IntroParagraph>
        <S.ScrollInfoBox>
          <span>Scroll Down</span>
          <S.ScrollDownButton onClick={handleScrollDownButtonClick}>
            <KeyboardArrowDownIcon />
          </S.ScrollDownButton>
        </S.ScrollInfoBox>
      </S.HomeSectionInnerBox>
    </S.HomeSectionLayout>
  );
};

export default HomeSection;
