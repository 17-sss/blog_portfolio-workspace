import { IGatsbyImageData } from 'gatsby-plugin-image';

export type PortfolioMarkdownData = {
  node: PortfolioMarkdownNode;
};

export type PortfolioImage = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
  publicURL: string;
};

export type PortfolioMarkdownNode = {
  frontmatter: {
    portfolioInfo: {
      title: string;
      subTitle: string;
      duration: {
        startDate: string;
        endDate?: string;
      };
      memberInfo: string;
      skills: string[];
      images: PortfolioImage[];
      type: string;
    };
  };
  html: string;
};

