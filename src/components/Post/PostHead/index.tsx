import React, { FunctionComponent } from 'react';
import PostHeadInfo from '../PostHeadInfo';

import { PostHeadProps } from './props';
import * as S from './style';

const PostHead: FunctionComponent<PostHeadProps> = function ({ title, date, categories, thumbnail }) {
  return (
    <S.PostHeadLayout>
      <S.BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </S.PostHeadLayout>
  );
};

export default PostHead;