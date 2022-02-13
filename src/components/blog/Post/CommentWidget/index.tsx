import React, { createRef, FunctionComponent, useEffect } from 'react';
import { UtterancesAttributesType } from '@utils/types';
import * as S from './style';

interface CommentWidgetProps {
  utterancesAttr: UtterancesAttributesType;
}

const CommentWidget: FunctionComponent<CommentWidgetProps> = function ({ utterancesAttr }) {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;
    const utterances: HTMLScriptElement = document.createElement('script');
    Object.entries(utterancesAttr).forEach(([key, value]) =>
      utterances.setAttribute(key.replace(/[\_]+/g, '-'), value),
    );
    element.current.appendChild(utterances);
  }, []);

  return <S.UtterancesLayout ref={element} />;
};

export default CommentWidget;
