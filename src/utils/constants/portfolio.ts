export const PORTFOLIO_HEADER_HEIGHT = 60;

export const portfolioSectionNames = ['home', 'introduce', /* 'skills', */ 'projects'] as const;
export type PortfolioSectionNameType = typeof portfolioSectionNames[number];
type PortfolioSectionIdInfoType = {
  [name in PortfolioSectionNameType]: string;
};

export const portfolioSectionIdInfo: PortfolioSectionIdInfoType = {
  home: 'section--home',
  introduce: 'section--introduce',
  /* skills: 'section--skills', */
  projects: 'section--projects',
};
