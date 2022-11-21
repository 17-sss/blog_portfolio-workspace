import React, { FunctionComponent, useCallback } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import WaveGraphic from '../WaveGraphic';
import { usePortfolioState } from '@utils/contexts/PortfolioContext';
import { portfolioSectionIdInfo } from '@utils/constants';

import * as S from './style';

interface HomeSectionProps {
  layoutId: string;
  text: string;
}

const HomeSection: FunctionComponent<HomeSectionProps> = function ({ layoutId, text, ...props }) {
  const { waveImages } = usePortfolioState();

  const handleScrollDownButtonClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const closestTarget = (e.target as HTMLElement).closest('button');
    if (!closestTarget) return;

    const { introduce } = portfolioSectionIdInfo;
    const introduceSectionEle = document.querySelector(`#${introduce}`) as HTMLElement;
    if (!introduceSectionEle) return;

    window.scrollTo({
      top: introduceSectionEle.offsetTop,
      behavior: 'smooth',
    });
  }, []);

  return (
    <S.HomeSectionLayout id={layoutId} {...props}>
      <S.WaveGraphicBox>
        <WaveGraphic waveImages={waveImages} />
      </S.WaveGraphicBox>

      <S.HomeSectionInnerBox>
        <S.IntroParagraph align="center">{text}</S.IntroParagraph>
        <S.ScrollInfoBox>
          <span>Scroll Down</span>
          <S.ScrollDownButton onClick={handleScrollDownButtonClick} aria-label={'Scroll Down'}>
            <KeyboardArrowDownIcon />
          </S.ScrollDownButton>
        </S.ScrollInfoBox>
      </S.HomeSectionInnerBox>
    </S.HomeSectionLayout>
  );
};

export default HomeSection;
