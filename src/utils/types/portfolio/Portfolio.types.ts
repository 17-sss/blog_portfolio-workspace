type PortfolioMarkdownData = {
  node: {
    frontmatter: {
      title: string;
      date: string;
    };
    html: string;
  };
};

export { PortfolioMarkdownData };
