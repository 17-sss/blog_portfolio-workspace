import React, { createRef, FunctionComponent, useEffect } from 'react';
import { UTTERANCES_ATTR } from 'utils/constants';
import * as S from './style';

const CommentWidget: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;
    const utterances: HTMLScriptElement = document.createElement('script');
    Object.entries(UTTERANCES_ATTR).forEach(([key, value]) => utterances.setAttribute(key, value));
    element.current.appendChild(utterances);
  }, []);

  return <S.UtterancesLayout ref={element} />;
};

export default CommentWidget;
