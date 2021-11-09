import React, { FunctionComponent } from 'react';
import { PORTFOLIO_HOME_SECTION } from 'utils/constants';
import { usePortfolioState } from 'utils/contexts/PortfolioContext';
import WaveGraphic from '../WaveGraphic';
import * as S from './style';

const HomeSection: FunctionComponent = function ({ ...props }) {
  const { waveImages } = usePortfolioState();

  return (
    <S.HomeSectionLayout {...props}>
      <S.WaveGraphicBox>
        <WaveGraphic waveImages={waveImages} />
      </S.WaveGraphicBox>
      <S.SectionInnerBox>
        <S.IntroParagraph>{PORTFOLIO_HOME_SECTION.greetingText}</S.IntroParagraph>
      </S.SectionInnerBox>
    </S.HomeSectionLayout>
  );
};

export default HomeSection;
