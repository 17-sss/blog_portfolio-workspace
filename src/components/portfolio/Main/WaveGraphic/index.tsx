import { FunctionComponent, useMemo } from 'react';
import { ImageType } from '@utils/types';
import * as S from './style';

export type WaveGraphicProps = {
  waveImages: {
    waveImg: ImageType | null;
    waveBackImg: ImageType | null;
  }
};

const WaveGraphic: FunctionComponent<WaveGraphicProps> = function ({ waveImages }) {
  const { waveImg, waveBackImg } = waveImages;

  const waveItems = useMemo(() => {
    if (!waveImg) return;
    const WAVE_COUNT = 4;
    const { publicURL } = waveImg;
    return Array.from({ length: WAVE_COUNT }, (_, i) => <S.Wave key={i} idx={i} imageUrl={publicURL} />);
  }, [waveImg]);

  const backgroundImageData = useMemo(() => {
    if (!waveBackImg) return;
    const { childImageSharp: { gatsbyImageData } } = waveBackImg;
    if (!gatsbyImageData) return;
    return gatsbyImageData;
  }, [waveBackImg]);

  return (
    <S.WaveGraphicLayout>
      {backgroundImageData && <S.WaveGatsbyImage image={backgroundImageData} alt="background image" />}
      {waveItems}
    </S.WaveGraphicLayout>
  );
};

export default WaveGraphic;
