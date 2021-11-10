import { Fragment, FunctionComponent } from 'react';
import { usePortfolioState } from 'utils/contexts/PortfolioContext';
import { HomeSection, AboutSection, SkillSection, ProjectSection, WaveGraphic } from 'components/portfolio/Main';
import * as S from './style';

const PortfolioComposition: FunctionComponent = function () {
  const { waveImages } = usePortfolioState();

  return (
    <Fragment>
      <S.WaveGraphicBox>
        <WaveGraphic waveImages={waveImages} />
      </S.WaveGraphicBox>
      <S.SectionBox>
        <HomeSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
      </S.SectionBox>
    </Fragment>
  );
};

export default PortfolioComposition;
