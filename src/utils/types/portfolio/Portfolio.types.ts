export type PortfolioMarkdownData = {
  node: PortfolioMarkdownNode;
};

export type PortfolioMarkdownNode = {
  frontmatter: {
    portfolioInfo: {
      title: string;
      duration: {
        startDate: string;
        endDate?: string;
      };
      memberInfo: string;
      skills: string[];
      images: string[];
      type: string;
    };
  };
  html: string;
};
