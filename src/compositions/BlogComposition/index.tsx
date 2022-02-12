import { Fragment, FunctionComponent } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { Introduction, CategoryList, PostList } from '@components/blog/Main';
import { PostListItemType } from '@utils/types';

type BlogCompositionProps = {
  profileImage: IGatsbyImageData;
  categoryList: {
    [key: string]: number;
  };
  selectedCategory: string;
  posts: PostListItemType[];
};

const BlogComposition: FunctionComponent<BlogCompositionProps> = function ({
  profileImage,
  categoryList,
  selectedCategory,
  posts,
}) {
  return (
    <Fragment>
      <Introduction profileImage={profileImage} />
      <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
      <PostList selectedCategory={selectedCategory} posts={posts} />
    </Fragment>
  );
};

export default BlogComposition;
