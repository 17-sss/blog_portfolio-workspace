import React, { FunctionComponent } from 'react';
import * as S from './style';

type MarkdownRendererProps = {
  html: string;
};

const MarkdownRenderer: FunctionComponent<MarkdownRendererProps> = function ({ html }) {
  return <S.MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownRenderer;
