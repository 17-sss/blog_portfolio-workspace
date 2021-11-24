import { FunctionComponent, useMemo } from 'react';
import styled from '@emotion/styled';
import PostItem from 'components/blog/Main/PostItem';
import { PostListItemType } from 'utils/types';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import { BLOG_EXCLUDE_CATEGORIES } from 'utils/constants';

type PostListProps = {
  selectedCategory: string;
  posts: PostListItemType[];
};

const PostList: FunctionComponent<PostListProps> = function ({ selectedCategory, posts }) {
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts);
  const postItems = useMemo(
    () =>
      postList.map(({ node }: PostListItemType) => {
        const { id, frontmatter, fields } = node;
        const { options, categories } = frontmatter;
        const isHide = options?.hide;
        const isExcludedCategory =
          categories && categories.some(category => BLOG_EXCLUDE_CATEGORIES.includes(category));
        if (isHide || isExcludedCategory) return;

        return <PostItem {...frontmatter} link={fields.slug} key={id} />;
      }),
    [postList],
  );

  return <PostListLayout ref={containerRef}>{postItems}</PostListLayout>;
};
export default PostList;

const PostListLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 50px 20px;
  }
`;
