import { IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FunctionComponent } from 'react';
import PostHeadInfo, { PostHeadInfoProps } from '../PostHeadInfo';
import * as S from './style';

export type GatsbyImgProps = {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
};

export type PostHeadProps = PostHeadInfoProps & {
  thumbnail?: IGatsbyImageData
}


const PostHead: FunctionComponent<PostHeadProps> = function ({ title, date, categories, thumbnail }) {
  return (
    <S.PostHeadLayout thumbnail={thumbnail}>
      {thumbnail && <S.BackgroundImage image={thumbnail} alt="thumbnail" />}
      <PostHeadInfo title={title} date={date} categories={categories} />
    </S.PostHeadLayout>
  );
};

export default PostHead;