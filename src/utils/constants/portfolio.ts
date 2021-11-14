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

type ContentRequiredType = RequiredType & { subTitle: string };

type ContactType = 'github' | 'instagram' | 'email';
type IntroduceListItemType = 'motivation' | 'goal' | 'direction';
export type ProfileCardTypes = {
  name: string;
  antecedents: string[];
  imageInfo: { alt: string; staticSrc: string };
  contactInfo: { [type in ContactType]?: string };
};

type IntroduceSectionInfo = ContentRequiredType & {
  profileCard: ProfileCardTypes;
  introduceList: {
    items: {
      [type in IntroduceListItemType]: { subject: string; contents: string };
    };
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
    subTitle: '꾸준함이라는 덕목이 최고의 미덕이라고 생각하는 주니어 개발자입니다.',
    profileCard: {
      name: '손호영',
      antecedents: [
        '2021.07 ~ 2021.08|네이버 부스트캠프 (웹 풀스택 : 챌린지) 교육과정 수료',
        '2021.01 ~ 2021.06|코드스쿼드 마스터즈 코스 (프론트엔드) 교육과정 수료',
        '2018.11 ~ 2020.12|프로그램 유지보수 개발자',
        '2017.11 ~ 2018.04|Java & SpringFramework 기반 국비지원 교육과정 수료',
      ],
      imageInfo: { staticSrc: '/profile-image.jpeg', alt: `Hoyoung's profile image` },
      contactInfo: {
        github: `https://github.com/17-sss`,
        instagram: `https://www.instagram.com/17__sss/`,
        email: `mailto:xzxking17@gmail.com`,
      },
    },
    introduceList: {
      items: {
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
  },
  skills: { layoutId: 'section--skills', subTitle: '지금까지 사용했던 기술들을 나타낸 공간입니다.' },
  project: { layoutId: 'section--project', subTitle: '' },
};
