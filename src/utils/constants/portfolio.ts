export type PortfolioSectionNames = 'home' | 'about' | 'skills' | 'project';

type PortfolioHeaderType = {
  logo: string;
  items: PortfolioSectionNames[];
  height: number;
};
export const PORTFOLIO_HEADER : PortfolioHeaderType = {
  logo: 'PORTFOLIO',
  items: ['home', 'about', 'skills', 'project'],
  height: 60,
};

type PortfolioSectionInfoType = {
  [type in PortfolioSectionNames]: {
    layoutId: string;
    texts?: {
      [key: string]: string;
    };
  };
};

export const PORTFOLIO_SECTION_INFO: PortfolioSectionInfoType = {
  home: {
    layoutId: 'section--home',
    texts: {
      greetingText: `Developer Hoyoung's portfolio.`,
    },
  },
  about: { layoutId: 'section--about' },
  skills: { layoutId: 'section--skills' },
  project: { layoutId: 'section--project' },
};
