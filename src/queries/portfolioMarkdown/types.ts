import { IGatsbyImageData } from 'gatsby-plugin-image';

interface PortfolioDurationType {
  startDate: string;
  endDate?: string;
}

interface PortfolioLinkType {
  name: string;
  href: string;
}

export interface PortfolioImageType {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
  publicURL: string;
}

export interface PortfolioInfoType {
  sectionType: string;
  title: string;
  subTitle: string;
  duration: PortfolioDurationType;
  memberInfo: string;
  skills: string[];
  links: PortfolioLinkType[];
  images: PortfolioImageType[];
  type: string;
}

// --

export interface PortfolioMarkdownNode {
  frontmatter: {
    portfolioInfo: PortfolioInfoType;
  };
  html: string;
}

export interface PortfolioMarkdownNodeEdges {
  node: PortfolioMarkdownNode;
}

export interface PortfolioMarkdownQuery {
  allMarkdownRemark: {
    edges: PortfolioMarkdownNodeEdges[];
  };
}
