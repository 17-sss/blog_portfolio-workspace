import { MAX_WIDTH_INFO } from 'utils/constants';

type CreateResponseType = {
  minWidth?: number;
  maxWidth?: number;
  isAtMedia?: boolean;

  // 인자로 들어오는 minWidth나 maxWidth를 기준으로하여 비율빼거나 더함.
  percentOption?: {
    percent: number;
    calcType: 'plus' | 'minus';
  };
};
export const createResponse = ({ minWidth, maxWidth, isAtMedia, percentOption }: CreateResponseType) => {
  const WRONG_INPUT = '잘못된 입력입니다.';
  try {
    if (!maxWidth && !minWidth) throw Error('[!] maxWidth와 minWidth 모두 정의되지 않았습니다.');
    const isMaxWidth = maxWidth && maxWidth >= 0 && !minWidth;
    const isMinWidth = minWidth && minWidth >= 0 && !maxWidth;

    const strAtMedia = isAtMedia ? `@media ` : '';

    if (minWidth && maxWidth) {
      // 이 경우 minusPercent는 작동하지 않음
      if (minWidth > maxWidth) throw new Error(`[!] ${WRONG_INPUT} maxWidth보다 minWidth가 더 큽니다.`);
      return `${strAtMedia}(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
    }

    if (percentOption && percentOption.percent > 100) percentOption.percent = 100;
    const isPlus = percentOption?.calcType === 'plus';

    if (isMinWidth) {
      const calcMinWidth = percentOption && Math.floor(minWidth * (percentOption.percent * 0.01));
      return `${strAtMedia}(min-width: ${
        calcMinWidth ? minWidth + (isPlus ? calcMinWidth : -calcMinWidth) : minWidth
      }px)`;
    }

    if (isMaxWidth) {
      const calcMaxWidth = percentOption && Math.floor(maxWidth * (percentOption.percent * 0.01));
      return `${strAtMedia}(max-width: ${
        calcMaxWidth ? maxWidth + (isPlus ? calcMaxWidth : -calcMaxWidth) : maxWidth
      }px)`;
    }

    throw new Error(`[!] ${WRONG_INPUT}`);
  } catch (e) {
    const { message } = e as Error;
    console.error(message);
    return null;
  }
};

// ------

export type MediaTypes = 'tabletDesktop' | 'desktop' | 'tablet' | 'mobile';
type GetMediaQueriesProps = Pick<CreateResponseType, 'isAtMedia' | 'percentOption'> & {
  type: MediaTypes;
};
export const getMediaQueries = ({ type, isAtMedia = true, percentOption }: GetMediaQueriesProps) => {
  const {
    set: { MAX_TABLET, MAX_MOBILE },
  } = MAX_WIDTH_INFO;
  const stringMediaQueries = {
    tabletDesktop: createResponse({ minWidth: MAX_MOBILE + 1, isAtMedia, percentOption }) ?? '',
    desktop: createResponse({ minWidth: MAX_TABLET + 1, isAtMedia, percentOption }) ?? '',
    tablet: createResponse({ maxWidth: MAX_TABLET, isAtMedia, percentOption }) ?? '',
    mobile: createResponse({ maxWidth: MAX_MOBILE, isAtMedia, percentOption }) ?? '',
  };
  return stringMediaQueries[type];
};
/*
  [1]
    - 타블렛 & 데스크탑 768 ~
      @media (min-width: 768px)
    - 데스크탑  1024 ~
      @media (min-width: 1024px)
  [2]
    - 타블렛  0 ~ 1023
      @media (max-width:1023px)
    - 모바일  0 ~ 767
      @media (max-width:767px)
*/

// ------
