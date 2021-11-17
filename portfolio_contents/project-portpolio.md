---
portfolioInfo:
  {
    title: 'Rano Portfolio',
    subTitle: '나만의 포트폴리오 프로젝트',
    duration: { startDate: '2021-11-08', endDate: '2021-11-18' },
    memberInfo: '개인 프로젝트',
    skills: [gatsby, React, TypeScript, emotion, material-ui],
    links:
      [
        { name: '배포 링크', href: 'https://17-sss.github.io/portfolio' },
        { name: 'Github Repository ', href: 'https://github.com/17-sss/blog_portfolio-workspace' },
        { name: '개발일지', href: 'https://boiled-feather-1c7.notion.site/b4fe56b733a64255aba72d3cce8defab?v=044c094f5c9f4bf1a8fa66248cf3e095' },
      ],
    images: ['./portfolio/01.jpg', './portfolio/02.jpg', './portfolio/03.jpg', './portfolio/04.jpg'],
    type: 'project',
  }
options: { isPortfolio: true, hide: true }
---

#### 🧚🏻 구현

- 모든 컴포넌트, 로직들을 재사용성을 생각하여 분리하는데 초점을 두었습니다.
- Intersection Observer를 활용하여 해당 구역에 접근하였을 때 렌더링이 되도록 하였습니다.
- 반응형 디자인과 애니메이션에 중점을 둔 프로젝트입니다.
- Context API를 활용하여 전역 상태관리를 하였습니다.

#### 🤔 고민한 점

- **material-ui를 사용하여 배포 시 렌더링이 되지 않는 문제**

  - 해당 문제를 해결하기 위해 gatsby의 material-ui 관련 플러그인을 설치했으나 해결이 되지 않았습니다.  
    제가 사용하는 gatsby의 버전 (4버전)과 호환되지 않아 적용할 수 없었습니다. 이 문제를 해결하기 위해 —force 명령을 사용하여 해결하였으며, 현 버전과 호환되는 플러그인이 나온다면 수정할 예정입니다.
<!-- 
- **사용자가 보고 있는 화면 영역에 들어왔을 때 렌더링**
  - 해당 프로젝트는 반응형, 애니메이션 등 사용자 경험에 초점을 둔 프로젝트입니다.  
    사용자가 보고 있는 영역에 들어왔을 때 렌더링 될 수 있도록 처음엔 Scroll Event를 활용하여 시도했지만, 많은 리소스가 소모될 것 같아 Intersection Observer API를 활용하여 각 구역을 감싸고 있는 요소만을 관찰함으로써 사용자가 보고 있는 화면 영역 내에서 특정 위치에 도달했을 떄 다음 요소가 렌더링 되도록 하였습니다. 
-->
