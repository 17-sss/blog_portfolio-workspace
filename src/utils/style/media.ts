import { MAX_WIDTH_INFO } from "utils/constants";

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

const { setDesktop: desktopMax, setTablet: tabletMax } = MAX_WIDTH_INFO;
const media = {
  desktop: createResponse({ minWidth: desktopMax }),
  tablet: createResponse({ minWidth: tabletMax, maxWidth: desktopMax }),
  mobile: createResponse({ maxWidth: tabletMax }),
};

/* 
${media.desktop} {
  max-width: ${`${MAX_WIDTH_INFO.desktop}px`};
}

${media.tablet} {
  max-width: ${`${MAX_WIDTH_INFO.tablet}px`};
}

${media.mobile} {
}
 */
export { createResponse, media };
