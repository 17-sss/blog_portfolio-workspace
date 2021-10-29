import { IGatsbyImageData } from 'gatsby-plugin-image';

type PostFrontmatterType = {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

type PostListItemType = {
  node: {
    id: string;
    frontmatter: PostFrontmatterType;
  };
};

export type { PostFrontmatterType, PostListItemType };
