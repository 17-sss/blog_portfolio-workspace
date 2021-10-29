import { FunctionComponent } from 'react';
import { PostFrontmatterType } from 'utils/types/PostItem.types';
import * as S from './style';

type PostItemProps = PostFrontmatterType & { link: string };

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <S.PostItemLayout to={link}>
      <S.ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />

      <S.PostItemContentBox>
        <S.TitleBox>{title}</S.TitleBox>
        <S.DateBox>{date}</S.DateBox>
        <S.CategoryBox>
          {categories.map(category => (
            <S.CategoryItemBox key={category}>{category}</S.CategoryItemBox>
          ))}
        </S.CategoryBox>
        <S.SummaryBox>{summary}</S.SummaryBox>
      </S.PostItemContentBox>
    </S.PostItemLayout>
  );
};

export default PostItem;
