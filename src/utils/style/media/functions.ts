import { MAX_WIDTH_INFO } from 'utils/constants';

type CreateResponseType = {
  minWidth?: number;
  maxWidth?: number;
  isAtMedia?: boolean;
  minusPercent?: number; // 인자로 들어오는 minWidth나 maxWidth를 기준으로하여 비율(minusPercent)만큼 빼냄
};
export const createResponse = ({ minWidth, maxWidth, isAtMedia, minusPercent }: CreateResponseType) => {
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

    if (minusPercent && minusPercent > 100) minusPercent = 100;
    if (isMinWidth)
      return `${strAtMedia}(min-width: ${
        minusPercent ? minWidth - Math.floor(minWidth * (minusPercent * 0.01)) : minWidth
      }px)`;

    if (isMaxWidth)
      return `${strAtMedia}(max-width: ${
        minusPercent ? maxWidth - Math.floor(maxWidth * (minusPercent * 0.01)) : maxWidth
      }px)`;

    throw new Error(`[!] ${WRONG_INPUT}`);
  } catch (e) {
    const { message } = e as Error;
    console.error(message);
    return null;
  }
};

// ------

export type MediaTypes = 'tabletDesktop' | 'desktop' | 'tablet' | 'mobile';
type GetMediaQueriesProps = Pick<CreateResponseType, 'isAtMedia' | 'minusPercent'> & {
  type: MediaTypes;
};
export const getMediaQueries = ({ type, isAtMedia = true, minusPercent }: GetMediaQueriesProps) => {
  const {
    set: { MAX_TABLET, MAX_MOBILE },
  } = MAX_WIDTH_INFO;
  const stringMediaQueries = {
    tabletDesktop: createResponse({ minWidth: MAX_MOBILE + 1, isAtMedia, minusPercent }) ?? '',
    desktop: createResponse({ minWidth: MAX_TABLET + 1, isAtMedia, minusPercent }) ?? '',
    tablet: createResponse({ maxWidth: MAX_TABLET, isAtMedia, minusPercent }) ?? '',
    mobile: createResponse({ maxWidth: MAX_MOBILE, isAtMedia, minusPercent }) ?? '',
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
