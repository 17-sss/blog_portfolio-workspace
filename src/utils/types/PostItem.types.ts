type PostFrontmatterType = {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    publicURL: string;
  };
};

type PostListItemType = {
  node: {
    id: string;
    frontmatter: PostFrontmatterType;
  };
};

export type { PostFrontmatterType, PostListItemType };
