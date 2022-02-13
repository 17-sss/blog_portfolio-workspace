import { ImageType } from '@utils/types';

export interface PostFrontmatterType {
  title: string;
  date: string;
  categories: string[];
  summary?: string;
  options?: {
    isPortfolio?: boolean;
    hide?: boolean;
  };
  thumbnail?: ImageType;
}

// -----------------------------------------------------

export interface PostNodeType {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    html: string;
    frontmatter: PostFrontmatterType;
  };
}

// =====================================================

export interface BlogPostDataQuery {
  allMarkdownRemark: {
    edges: PostNodeType[];
  };
}
