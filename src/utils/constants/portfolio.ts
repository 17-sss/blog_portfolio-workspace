export type PortfolioSectionNames = 'home' | 'introduce' | 'skills' | 'project';

type PortfolioHeaderType = {
  logo: string;
  items: PortfolioSectionNames[];
  height: number;
};
export const PORTFOLIO_HEADER: PortfolioHeaderType = {
  logo: 'PORTFOLIO',
  items: ['home', 'introduce', 'skills', 'project'],
  height: 60,
};

type PortfolioSectionInfoType = {
  [type in PortfolioSectionNames]: {
    layoutId: string;
    texts?: {
      [key: string]: string | string[];
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
  introduce: {
    layoutId: 'section--introduce',
    texts: {
      introduceTexts: [
        `끊임없는 성장을 이뤄나가는 Frontend 개발자 손호영입니다.`,
        `기억과 학습은 꾸준함이 중요하다고 생각하여 매일 기록하고 일기를 써나갑니다.`,
        `분야를 가리지 않고 학습하며 개발에 대한 관심사를 넓혀나갑니다.`,
        `한 곳에 안주하지 않도록 스스로 새로운 과제를 내어줌으로써 발전해 나아갑니다.`,
        `다양한 교육을 통해 협업 경험과 실무 능력을 쌓았습니다.`,
        `협업에 필요한 클린 코드 작성에 대해 고민합니다.`,
        `재사용 가능한 구성요소를 만드는 데 관심이 있습니다.`,
      ],
    },
  },
  skills: { layoutId: 'section--skills' },
  project: { layoutId: 'section--project' },
};
