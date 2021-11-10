import { IGatsbyImageData } from 'gatsby-plugin-image';

type PostFrontmatterType = {
  title: string;
  date: string;
  categories: string[];
  summary?: string;
  hide?: boolean;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    publicURL: string;
  };
};
type PostListItemType = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: PostFrontmatterType;
  };
};

type PostPageItemType = {
  node: {
    html: string;
    frontmatter: PostFrontmatterType;
  };
};

export type { PostFrontmatterType, PostListItemType, PostPageItemType };
