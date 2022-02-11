import React, { createRef, FunctionComponent, useEffect } from 'react';
import { BLOG_UTTERANCES_ATTR } from 'src/utils/constants';
import * as S from './style';

const CommentWidget: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;
    const utterances: HTMLScriptElement = document.createElement('script');
    Object.entries(BLOG_UTTERANCES_ATTR).forEach(([key, value]) => utterances.setAttribute(key, value));
    element.current.appendChild(utterances);
  }, []);

  return <S.UtterancesLayout ref={element} />;
};

export default CommentWidget;
