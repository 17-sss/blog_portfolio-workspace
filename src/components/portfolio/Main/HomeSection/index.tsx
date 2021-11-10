import React, { FunctionComponent } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import WaveGraphic from '../WaveGraphic';
import { usePortfolioState } from 'utils/contexts/PortfolioContext';

import { PORTFOLIO_SECTION_INFO } from 'utils/constants';
import * as S from './style';

const HomeSection: FunctionComponent = function ({ ...props }) {
  const { waveImages } = usePortfolioState();
  const { layoutId, texts } = PORTFOLIO_SECTION_INFO.home;

  return (
    <S.HomeSectionLayout id={layoutId} {...props}>

      <S.WaveGraphicBox>
        <WaveGraphic waveImages={waveImages} />
      </S.WaveGraphicBox>

      <S.HomeSectionInnerBox>
        <S.IntroParagraph>{texts?.greetingText ?? ''}</S.IntroParagraph>
        <S.ScrollInfoBox>
          <span>Scroll Down</span>
          <S.ScrollDownButton>
            <KeyboardArrowDownIcon />
          </S.ScrollDownButton>
        </S.ScrollInfoBox>
      </S.HomeSectionInnerBox>

    </S.HomeSectionLayout>
  );
};

export default HomeSection;
