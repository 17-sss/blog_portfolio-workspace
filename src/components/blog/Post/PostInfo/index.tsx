import React, { FunctionComponent } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import * as S from './style';

export interface PostInfoProps {
  title: string;
  date: string;
  categories: string[];
  thumbnail?: IGatsbyImageData;
}

const PostInfo: FunctionComponent<PostInfoProps> = function ({ title, date, categories, thumbnail }) {
  const goBackPage = () => window.history.back();
  return (
    <S.PostInfoLayout thumbnail={thumbnail}>
      {thumbnail && <S.BackgroundImage image={thumbnail} alt="thumbnail" />}
      <S.InfoBox>
        <S.PrevPageIcon onClick={goBackPage}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </S.PrevPageIcon>
        <S.Title>{title}</S.Title>
        <S.Contents>
          <div>{categories.join(' / ')}</div>
          <div>{date}</div>
        </S.Contents>
      </S.InfoBox>
    </S.PostInfoLayout>
  );
};

export default PostInfo;