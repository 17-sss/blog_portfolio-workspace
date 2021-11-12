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

// PortfolioSectionInfoType을 위한 type들
type RequiredType = {
  layoutId: string;
};
type HomeSectionInfo = RequiredType & {
  greetingText: string;
};

type ContentRequiredType = RequiredType & { subTitleText: string };

type introduceTextNames = 'motivation' | 'goal' | 'direction';
type IntroduceSectionInfo = ContentRequiredType & {
  itemTexts: {
    [type in introduceTextNames]: { subject: string; contents: string };
  };
};
type UnspecifiedInfo = ContentRequiredType & { texts?: [key: string] };

// ------------

type PortfolioSectionInfoType = {
  home: HomeSectionInfo;
  introduce: IntroduceSectionInfo;
  skills: UnspecifiedInfo;
  project: UnspecifiedInfo;
};

export const PORTFOLIO_SECTION_INFO: PortfolioSectionInfoType = {
  home: {
    layoutId: 'section--home',
    greetingText: `Developer Hoyoung's portfolio.`,
  },
  introduce: {
    layoutId: 'section--introduce',
    subTitleText: '꾸준함이라는 덕목이 최고의 미덕이라고 생각하는 주니어 개발자입니다.',
    itemTexts: {
      motivation: {
        subject: '동기',
        contents:
          '저는 과거에 운동선수를 했던 경험이 있습니다. 선수 시절에 병상에서 개발자 도구를 통해 웹이 문자로만 되어 있는 것을 보고 흥미를 가지게 되었고, 꿈을 품게 되었습니다.',
      },
      goal: {
        subject: '목표',
        contents:
          '그저 흥미로 시작했고 지금도 여전히 좋아하는 분야입니다. 현재 프론트엔드 개발자가 되기 위해 다양한 교육과정을 수료했으며, 프론트엔드 개발자라는 꿈을 이루고 더 나아가 풀스택 개발자가 되는 것이 목표입니다.',
      },
      direction: {
        subject: '방향',
        contents:
          '무엇보다 꾀 많은 토끼보다는 포기하지 않는 거북이가 옳다고 생각합니다. 지금처럼 꾸준하게 학습하며 프론트엔드 개발자라는 하나의 목표가 이루어지고 더욱 성장하기 위해 필요 지식을 습득하여 다음 목표를 향해 나아갈 것입니다.',
      },
    },
  },
  skills: { layoutId: 'section--skills', subTitleText: '지금까지 사용했던 기술들을 나타낸 공간입니다.' },
  project: { layoutId: 'section--project', subTitleText: '' },
};
