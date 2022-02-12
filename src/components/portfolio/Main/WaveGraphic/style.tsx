import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { setWaveAnimation } from '@utils/style';

// WaveGraphicLayout
export const WaveGraphicLayout = styled.div`
  position: relative;
  margin: 0 auto;

  width: 100%;
  max-width: 3000px;
  height: inherit;

  overflow: hidden;
`;

// WaveGatsbyImage (Background Image)
export const WaveGatsbyImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;

// Wave
type WaveProps = {
  idx: number;
  imageUrl: string;
};
export const Wave = styled.div<WaveProps>`
  position: absolute;
  width: 100%;
  height: 100px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: 1000px 100px; // 이미지 width, height 순서

  bottom: 0;
  left: 0;

  ${({ idx }) => {
    switch (idx) {
      case 0:
        return setWaveAnimation({
          direction: 'right',
          animationProps: { duration: 30, timingFunction: 'linear', delay: 0 },
          bottom: 0,
          zIndex: 1000,
          opacity: 0.8,
        });
      case 1:
        return setWaveAnimation({
          direction: 'left',
          animationProps: { duration: 15, timingFunction: 'linear', delay: -5 },
          bottom: 10,
          zIndex: 999,
          opacity: 0.4,
        });
      case 2:
        return setWaveAnimation({
          direction: 'right',
          animationProps: { duration: 30, timingFunction: 'linear', delay: -2 },
          bottom: 15,
          zIndex: 998,
          opacity: 0.2,
        });
      case 3:
        return setWaveAnimation({
          direction: 'left',
          animationProps: { duration: 5, timingFunction: 'linear', delay: -5 },
          bottom: 20,
          zIndex: 997,
          opacity: 0.6,
        });
      default:
        return;
    }
  }};
`;
