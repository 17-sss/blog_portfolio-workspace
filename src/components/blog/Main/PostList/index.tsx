import { FunctionComponent, useMemo } from 'react';
import styled from '@emotion/styled';

import PostItem from '@components/blog/Main/PostItem';
import { useInfiniteScroll } from '@hooks/common';
import { PostNodeType } from '@hooks/queries';

interface PostListProps {
  selectedCategory: string;
  postData: PostNodeType[];
  excludeCategories: string[];
}

const PostList: FunctionComponent<PostListProps> = function ({ selectedCategory, postData, excludeCategories }) {
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, postData);
  const postItems = useMemo(
    () =>
      postList.map(({ node }: PostNodeType) => {
        const { id, frontmatter, fields } = node;
        const { options, categories } = frontmatter;
        const isHide = options?.hide;
        const isExcludedCategory =
          categories && categories.some(category => category && excludeCategories.includes(category));
        if (isHide || isExcludedCategory) return;

        const link = `/posts${fields.slug}`;

        return <PostItem {...{ ...frontmatter, link }} key={id} />;
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
