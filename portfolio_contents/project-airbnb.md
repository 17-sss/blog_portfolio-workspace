---
portfolioInfo:
  {
    title: 'Airbnb 클론 프로젝트',
    subTitle: '코드스쿼드에서 진행한 3주간의 프로젝트',
    duration: { startDate: '2021-05-17', endDate: '2021-06-04' },
    memberInfo: '프론트엔드 2명, 백엔드 2명',
    skills: [React, TypeScript, Webpack],
    links: [{ name: 'Github Repository', href: 'https://github.com/bibi6666667/airbnb/tree/FE/dev' }],
    images: ['./airbnb/01.gif', './airbnb/02.gif'],
    type: 'project',
  }
options: { isPortfolio: true, hide: true }
---

#### 🤝 협업

- 지속적인 팀원분들과의 소통을 위하여 매일 회고를 작성하였습니다.
- 요구사항을 보고 회의하며 Task를 할당하여 작업하였습니다.

#### 🧚🏻 구현

- 처음으로 TypeScript를 적용한 프로젝트입니다.
- CRA를 사용하지 않고, Webpack으로 개발환경을 구성하였습니다.
- useReducer & ContextAPI를 활용하여 상태 관리를 하였습니다.
- Range Slider를 개발하여 요금 조정 모달을 제작하였습니다.

#### 🤔 고민한 점

- **Webpack 개발 환경**

  - 구성 이전에는 항상 CRA로 React 프로젝트를 구성하였습니다.  
    매번 개발 서버 실행 및 빌드 시 많은 시간이 소요되어 원인을 알고자 eject 명령을 사용하여 CRA의 구조를 보았으며 현 프로젝트에서는 쓰이지 않을 무수히 많은 플러그인, 로더들이 포함되어 있었으며, 현 프로젝트에서 필요로 하는 플러그인, 로더만을 사용하기 위해 직접 웹팩을 통해 개발 환경을 구성했던 경험이 있습니다.

- **요금 조정 모달 : Range Slider에서의 그래프**
  - 해당 프로젝트에서는 직접 만든 Range Slider를 통해 요금을 조정할 수 있어야 했습니다.  
    먼저, 받아온 요금 데이터를 기반으로 Canvas를 활용해 그래프를 그려내며 그려진 부분을 제외하고 색상을 투명하게 설정한 후에 조금 불투명한 배경색을 가진 div 태그를 그려진 그래프 위에 겹쳐 렌더링하였습니다. 이후, Range Slider의 2개의 버튼의 위치의 간격만큼 div 태그의 크기를 설정한 후 버튼의 위치에 따라 div 태그도 동적으로 크기가 변경되도록하며 요금 조정 모달을 완성할 수 있었습니다.
