import React, { FunctionComponent } from 'react';
import * as S from './style';

type PostContentProps = {
  html: string;
};

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <S.MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
