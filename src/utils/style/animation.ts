import { css } from '@emotion/react';

type SetSlideAnimationProps = {
  duration?: number;
  idx?: number;
  direction: 'left' | 'right';
  isMarginAuto?: boolean;
};
export const setSlideAnimation = ({ duration = 0.8, idx, direction, isMarginAuto }: SetSlideAnimationProps) => css`
  /* margin-right: auto; */
  @keyframes ${`slide-${direction === 'left' ? 'left' : 'right'}`} {
    from {
      ${direction === 'left' ? css`left: 100%;` : css`right: 100%;`};
      opacity: 0;
    }
    to {
      ${direction === 'left' ? css`left: 0%;` : css`right: 0%;`};
      opacity: 1;
    }
  }

  animation: ${`${idx && idx >= 0 ? (idx + 1) * duration : duration}s slide-${
    direction === 'left' ? 'left' : 'right'
  }`};
  ${isMarginAuto && direction === 'left' ? css` margin-left: auto; ` : css` margin-right: auto; `}
`;

type SetFadeAnimationProps = {
  duration?: number;
  idx?: number;
  type?: 'fadeIn' | 'fadeOut';
  isBlink?: boolean;
  opacityOptions?: {
    from: number;
    to: number;
  };
};
export const setFadeAnimation = (
  { idx, duration = 2, type = 'fadeIn', isBlink, opacityOptions }: SetFadeAnimationProps = { duration: 2, type: 'fadeIn' },
) => {
  const strDuration = `${idx && idx >= 0 ? (idx + 1) * duration : duration}s`;
  const strBlink = `${isBlink ? 'ease-in-out infinite alternate' : ''}`;
  const nOpacityFrom = opacityOptions?.from ?? (type === 'fadeIn' ? 0 : 1);
  const nOpacityTo = opacityOptions?.to ?? (type === 'fadeIn' ? 1 : 0);

  return css`
    @keyframes fade {
      from {
        opacity: ${nOpacityFrom};
      }
      to {
        opacity: ${nOpacityTo};
      }
    }
    animation: fade ${strDuration} ${strBlink};
  `;
};


type setWaveAnimationProps = {
  direction: "left" | "right";
  animationProps: {
    duration: number;
    timingFunction: string;
    delay: number;
  }
  zIndex: number;
  opacity: number;
  bottom: number;
};
export const setWaveAnimation = ({ direction, animationProps, zIndex, opacity, bottom }: setWaveAnimationProps) => {
  const { duration, timingFunction, delay } = animationProps;
  const animationName = `wave-${direction === 'left' ? 'left' : 'right'}`;
  const currAnimation = `${duration}s ${timingFunction} ${delay}s ${animationName}`;

  return css`
    animation: ${currAnimation}; /* duration | timing-function | delay | name */
    animation-iteration-count: infinite;
    z-index: ${zIndex};
    opacity: ${opacity};
    bottom: ${`${bottom}px`};

    @keyframes ${`wave-${direction === 'left' ? 'left' : 'right'}`} {
      0% {
        background-position-x: 0;
      }
      100% {
        background-position-x: ${`${1000 * (direction === 'left' ? -1 : 1)}px`}; // left는 음수
      }
    }
  `;
};
