import { MAX_WIDTH_INFO } from 'utils/constants';

type CreateResponseType = {
  minWidth?: number;
  maxWidth?: number;
  isAtMedia?: boolean;
};
export const createResponse = ({ minWidth, maxWidth, isAtMedia }: CreateResponseType) => {
  const WRONG_INPUT = '잘못된 입력입니다.';
  try {
    if (!maxWidth && !minWidth) throw Error('[!] maxWidth와 minWidth 모두 정의되지 않았습니다.');
    const isMaxWidth = maxWidth && maxWidth >= 0 && !minWidth;
    const isMinWidth = minWidth && minWidth >= 0 && !maxWidth;

    const strAtMedia = isAtMedia ? `@media ` : '';

    if (minWidth && maxWidth) {
      if (minWidth > maxWidth) throw new Error(`[!] ${WRONG_INPUT} maxWidth보다 minWidth가 더 큽니다.`);
      return `${strAtMedia}(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
    }
    if (isMinWidth) return `${strAtMedia}(min-width: ${minWidth}px)`;
    if (isMaxWidth) return `${strAtMedia}(max-width: ${maxWidth}px)`;
    throw new Error(`[!] ${WRONG_INPUT}`);
  } catch (e) {
    const { message } = e as Error;
    console.error(message);
    return null;
  }
};

// ------

export type MediaTypes = 'tabletDesktop' | 'desktop' | 'tablet' | 'mobile';
export const getMediaQueries = (type: MediaTypes, isAtMedia: boolean = true) => {
  const {
    set: { MAX_TABLET, MAX_MOBILE },
  } = MAX_WIDTH_INFO;
  const stringMediaQueries = {
    tabletDesktop: createResponse({ minWidth: MAX_MOBILE + 1, isAtMedia }) ?? '',
    desktop: createResponse({ minWidth: MAX_TABLET + 1, isAtMedia }) ?? '',
    tablet: createResponse({ maxWidth: MAX_TABLET, isAtMedia }) ?? '',
    mobile: createResponse({ maxWidth: MAX_MOBILE, isAtMedia }) ?? '',
  };
  return stringMediaQueries[type];
};
/*
  [1]
    - 타블렛 & 데스크탑 768 ~
      @media (min-width: 768px)
    - 데스크탑 1024 ~
      @media (min-width: 1024px)
  [2]
    - 타블렛 768 ~ 1023
      @media (max-width:1023px)
    - 모바일 0 ~ 767
      @media (max-width:767px)
*/

// ------