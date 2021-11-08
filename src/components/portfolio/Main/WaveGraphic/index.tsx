import { FunctionComponent, useMemo } from 'react';
import * as S from './style';

export type WaveGraphicProps = {
  waveImages: {
    waveImgUrl: string;
    waveBackImgUrl: string;
  };
};

export type WaveProps = {
  idx: number;
  imageUrl: string;
};

const WaveGraphic: FunctionComponent<WaveGraphicProps> = function ({
  waveImages: { waveImgUrl = '', waveBackImgUrl = '' } = { waveImgUrl: '', waveBackImgUrl: '' },
}) {
  const waveItems = useMemo(() => {
    const WAVE_COUNT = 4;
    return Array.from({ length: WAVE_COUNT }, (_, i) => <S.Wave key={i} idx={i} imageUrl={waveImgUrl} />);
  }, [waveImgUrl]);

  return <S.WaveGraphicLayout waveBackImgUrl={waveBackImgUrl}>{waveItems}</S.WaveGraphicLayout>;
};

export default WaveGraphic;
