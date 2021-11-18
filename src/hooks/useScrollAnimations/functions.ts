type SetInlineStyleProps = {
  target: HTMLElement;
  duration?: number;
  idx?: number;
  isIdxDelay?: boolean;
};

export const setBlinkInlineStyle = ({ target, isIdxDelay, duration = 2, idx }: SetInlineStyleProps) => {
  const isIdx = typeof idx !== 'undefined' && idx >= 0;
  const strDuration = `${isIdxDelay && isIdx ? (idx + 1) * duration : duration}s`;
  target.style.animation = `${strDuration} animations__blink`;
  target.style.visibility = 'visible';
};

type SetSlideInlineStyleProps = SetInlineStyleProps & {
  direction: 'left' | 'right';
  isMarginAuto?: boolean;
};
export const setSlideInlineStyle = ({ target, duration = 2, idx, direction, isMarginAuto, isIdxDelay }: SetSlideInlineStyleProps) => {
  const isIdx = typeof idx !== 'undefined' && idx >= 0;
  const strDuration = `${isIdxDelay && isIdx ? (idx + 1) * duration : duration}s`;
  const isLeft = direction === 'left';
  if (isMarginAuto) {
    if (isLeft) target.style.marginLeft = 'auto';
    else target.style.marginRight = 'auto';
  }

  target.style.position = 'relative';
  target.style.animation = `${strDuration} animations__slide--${isLeft ? 'left' : 'right'}`;
  target.style.visibility = 'visible';
};

export const setClearInlineStyle = (target: HTMLElement) => {
  const { position, animation, visibility, marginLeft, marginRight } = target.style;
  position && (target.style.position = '');
  animation && (target.style.animation = '');
  visibility && (target.style.visibility = '');
  marginLeft && (target.style.marginLeft = '');
  marginRight && (target.style.marginRight = '');
};
