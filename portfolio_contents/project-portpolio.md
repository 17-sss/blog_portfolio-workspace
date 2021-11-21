---
portfolioInfo:
  {
    sectionType: 'projects',
    title: 'Rano Portfolio',
    subTitle: '나만의 포트폴리오 프로젝트',
    duration: { startDate: '2021-11-08', endDate: '2021-11-20' },
    memberInfo: '개인 프로젝트',
    skills: [gatsby, React, TypeScript, emotion, Material UI],
    links:
      [
        { name: '배포 링크', href: 'https://17-sss.github.io/portfolio' },
        { name: 'Github Repository ', href: 'https://github.com/17-sss/blog_portfolio-workspace' },
        {
          name: '개발일지',
          href: 'https://boiled-feather-1c7.notion.site/b4fe56b733a64255aba72d3cce8defab?v=044c094f5c9f4bf1a8fa66248cf3e095',
        },
      ],
    images: ['./portfolio/01.jpg', './portfolio/02.jpg', './portfolio/03.jpg', './portfolio/04.jpg'],
    type: 'project',
  }
options: { isPortfolio: true, hide: true }
---

#### 🧚🏻 구현

- 모든 컴포넌트, 로직들을 재사용성을 생각하여 분리하는데 초점을 두었습니다.
- 반응형과 애니메이션을 처음으로 깊이 있게 고민하며 제작한 프로젝트입니다.
- Intersection Observer를 활용하여 각 요소에 접근하였을 때 애니메이션이 실행되도록 하였습니다.
- Context API를 활용하여 전역 상태관리를 하였습니다.

#### 🤔 고민한 점

- **사용자의 화면이 각 요소에 도달했을 때 애니메이션 실행**
  - 사용자가 보고있는 화면이 각 요소가 있는 영역에 도달했을 때 애니메이션 실행 될 수 있도록 Scroll Event를 활용에 대해 고민하였지만,  
    많은 리소스가 소모될 것 같아 Intersection Observer API를 기반으로 커스텀훅 `useScrollAnimations` 을 제작하였습니다.
  - 외부 스타일 시트의 영향을 최대한 받지 않도록 "인라인 스타일"에 애니메이션 관련 스타일이 적용되도록 하였습니다.
  - 내부적으로 DFS 알고리즘을 활용하여 컴포넌트에서 렌더링하는 모든 자식 요소들을 observe 하도록하였습니다.
  - 이 커스텀 훅을 사용하는 컴포넌트에서 요소들의 selector를 전달해주어 Intersection Observer가 감시를 허용하거나 제외할 수 있도록 작업하였습니다.

- **컴포넌트에서 ref가 전달이 되지 않는 문제**
  - 컴포넌트에서 렌더링하는 자식 컴포넌트들에 ref를 전달이 되지 않는 문제가 있었습니다.  
    이 문제를 해결하는 과정에서 리액트의 컴포넌트는 캡슐화의 성질을 가지고 있다는 것을 다시 한번 상기시킬 수 있었으며, 재사용이 용이한 컴포넌트들은 추가적인 작업이 필요할 수 있다는 것을 알게 되었습니다. 해당 문제는 부모 컴포넌트에서 생성한 ref를 자식 컴포넌트에서 전달받아 사용할 수 있도록 자식 컴포넌트에 forwardRef를 적용함으로써 해결할 수 있었습니다.

> 많은 고민을 하며 제작했던 프로젝트입니다. [개발일지](https://boiled-feather-1c7.notion.site/b4fe56b733a64255aba72d3cce8defab?v=044c094f5c9f4bf1a8fa66248cf3e095)도 봐주시면 감사하겠습니다!  
> 또한, 새로운 프로젝트가 생긴다면 계속해서 추가할 예정입니다!

<!-- 고민했던 건데 쓰기가 좀 그래.. -->

<!--
- **material-ui를 사용하여 배포 시 렌더링이 되지 않는 문제**
  - 해당 문제를 해결하기 위해 gatsby의 material-ui 관련 플러그인을 설치했으나 해결이 되지 않았습니다.
    제가 사용하는 gatsby의 버전 (4버전)과 호환되지 않아 적용할 수 없었습니다.
    이 문제를 해결하기 위해 —force 명령을 사용하여 해결하였으며, 현 버전과 호환되는 플러그인이 나온다면 수정할 예정입니다.
-->
