import { FunctionComponent } from 'react';
import { PostFrontmatterType } from '@hooks/queries';
import * as S from './style';

interface PostItemProps extends PostFrontmatterType {
  link: string;
}

const PostItem: FunctionComponent<PostItemProps> = function ({ title, date, categories, summary, thumbnail, link }) {
  const gatsbyImageData = thumbnail?.childImageSharp.gatsbyImageData;

  return (
    <S.PostItemLayout to={link}>
      {gatsbyImageData && <S.ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />}

      <S.PostItemContentBox>
        <S.TitleBox>{title}</S.TitleBox>
        <S.DateBox>{date}</S.DateBox>
        <S.CategoryBox>
          {categories.map(category => (
            <S.CategoryItemBox key={category}>{category}</S.CategoryItemBox>
          ))}
        </S.CategoryBox>
        {summary && <S.SummaryBox>{summary}</S.SummaryBox>}
      </S.PostItemContentBox>
    </S.PostItemLayout>
  );
};

export default PostItem;
