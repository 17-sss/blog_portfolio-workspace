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
