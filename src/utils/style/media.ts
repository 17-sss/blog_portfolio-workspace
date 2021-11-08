import { MAX_WIDTH_INFO } from 'utils/constants';

type CreateResponseType = {
  minWidth?: number;
  maxWidth?: number;
};
const createResponse = ({ minWidth, maxWidth }: CreateResponseType) => {
  const WRONG_INPUT = '잘못된 입력입니다.';
  try {
    if (!maxWidth && !minWidth) throw Error('[!] maxWidth와 minWidth 모두 정의되지 않았습니다.');
    const isMaxWidth = maxWidth && maxWidth >= 0 && !minWidth;
    const isMinWidth = minWidth && minWidth >= 0 && !maxWidth;

    if (minWidth && maxWidth) {
      if (minWidth > maxWidth) throw new Error(`[!] ${WRONG_INPUT} maxWidth보다 minWidth가 더 큽니다.`);
      return `@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
    }
    if (isMinWidth) return `@media (min-width: ${minWidth}px)`;
    if (isMaxWidth) return `@media (max-width: ${maxWidth}px)`;
    throw new Error(`[!] ${WRONG_INPUT}`);
  } catch (e) {
    const { message } = e as Error;
    console.error(message);
    return null;
  }
};

const { set: { desktop, tablet, mobile } } = MAX_WIDTH_INFO;
const media = {
  desktop: createResponse({ maxWidth: desktop }),
  tablet: createResponse({ maxWidth: tablet }),
  mobile: createResponse({ maxWidth: mobile }),
};
/*
  @media screen and (max-width:1299px) {
    // 일반 데스크탑
  }

  @media screen and (max-width:1023px) {
    // 타블렛
  }

  @media screen and (max-width:767px) {
    // 모바일
  }
*/

export { createResponse, media };
