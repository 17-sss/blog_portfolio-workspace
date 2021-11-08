import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { WaveGraphicProps, WaveProps } from '.';

// WaveGraphicLayout
export const WaveGraphicLayout = styled.div<Pick<WaveGraphicProps['waveImages'], 'waveBackImgUrl'>>`
  position: relative;
  width: 100%;
  height: inherit;

  background-image: ${({ waveBackImgUrl }) => `url(${waveBackImgUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;
`;

// Wave
type CreateWaveAnimationType = {
  animation: string;
  zIndex: number;
  opacity: number;
  animationDelay: number;
  bottom: number;
};
const createWaveAnimation = ({ animation, zIndex, opacity, animationDelay, bottom }: CreateWaveAnimationType) => css`
  animation: ${animation};
  z-index: ${zIndex};
  opacity: ${opacity};
  animation-delay: ${`${animationDelay}s`};
  bottom: ${`${bottom}px`};
`;

export const Wave = styled.div<WaveProps>`
  position: absolute;
  width: 100%;
  height: 100px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: 1000px 100px; // 이미지 width, height 순서

  bottom: 0;
  left: 0;

  // Animation -- START
  @keyframes animate1 {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 1000px;
    }
  }

  @keyframes animate2 {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -1000px;
    }
  }

  ${({ idx }) => {
    switch (idx) {
      case 0:
        return createWaveAnimation({
          animation: `animate1 30s linear infinite`,
          animationDelay: 0,
          bottom: 0,
          zIndex: 1000,
          opacity: 0.8,
        });
      case 1:
        return createWaveAnimation({
          animation: `animate2 15s linear infinite`,
          animationDelay: -5,
          bottom: 10,
          zIndex: 999,
          opacity: 0.4,
        });
      case 2:
        return createWaveAnimation({
          animation: `animate1 30s linear infinite`,
          animationDelay: -2,
          bottom: 15,
          zIndex: 998,
          opacity: 0.2,
        });
      case 3:
        return createWaveAnimation({
          animation: `animate2 5s linear infinite`,
          animationDelay: -5,
          bottom: 20,
          zIndex: 997,
          opacity: 0.6,
        });
      default:
        return;
    }
  }};
  // Animation -- END
`;