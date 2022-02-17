import { ImageType } from "@utils/types";

interface PortfolioDurationType {
  startDate: string;
  endDate?: string;
  isIng?: boolean;
}

interface PortfolioLinkType {
  name: string;
  href: string;
}

export interface PortfolioInfoType {
  sectionType: string;
  title: string;
  subTitle: string;
  duration: PortfolioDurationType;
  memberInfo: string;
  skills: string[];
  links: PortfolioLinkType[];
  images: ImageType[];
  type: string;
}

// -----------------------------------------------------

export interface PortfolioMarkdownNode {
  frontmatter: {
    portfolioInfo: PortfolioInfoType;
  };
  html: string;
}

export interface PortfolioMarkdownNodeEdges {
  node: PortfolioMarkdownNode;
}

// =====================================================

export interface PortfolioMarkdownQuery {
  allMarkdownRemark: {
    edges: PortfolioMarkdownNodeEdges[];
  };
}
