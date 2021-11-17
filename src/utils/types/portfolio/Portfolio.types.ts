import { IGatsbyImageData } from 'gatsby-plugin-image';

export type PortfolioMarkdownData = {
  node: PortfolioMarkdownNode;
};

type PortfolioDuration = {
  startDate: string;
  endDate?: string;
};

type PortfolioLinks = {
  name: string;
  href: string;
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
      duration: PortfolioDuration;
      memberInfo: string;
      skills: string[];
      links: PortfolioLinks[];
      images: PortfolioImage[];
      type: string;
    };
  };
  html: string;
};
