import React, { FunctionComponent } from 'react';
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
        <S.IntroParagraph>Developer Hoyoung's portfolio.</S.IntroParagraph>
      </S.SectionInnerBox>
    </S.HomeSectionLayout>
  );
};

export default HomeSection;
