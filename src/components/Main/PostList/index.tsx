import { FunctionComponent, useMemo } from 'react';
import styled from '@emotion/styled';
import PostItem from 'components/Main/PostItem';
import { PostListItemType } from 'utils/types/PostItem.types';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

type PostListProps = {
  selectedCategory: string;
  posts: PostListItemType[];
};

const PostList: FunctionComponent<PostListProps> = function ({ selectedCategory, posts }) {
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts);
  const postItems = useMemo(
    () =>
      postList.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      )),
    [postList],
  );

  return <PostListLayout ref={containerRef}>{postItems}</PostListLayout>;
};
export default PostList;

const PostListLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;
