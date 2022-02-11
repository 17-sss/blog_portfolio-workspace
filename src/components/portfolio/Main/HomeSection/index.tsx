import React, { FunctionComponent, useCallback } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import WaveGraphic from '../WaveGraphic';
import { usePortfolioState } from 'src/utils/contexts/PortfolioContext';

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
