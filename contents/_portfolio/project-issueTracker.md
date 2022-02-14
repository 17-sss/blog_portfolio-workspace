---
portfolioInfo:
  {
    sectionType: 'projects',
    title: 'Issue Tracker',
    subTitle: '코드스쿼드에서 진행한 3주간의 프로젝트',
    duration: { startDate: '2021-06-07', endDate: '2021-06-25' },
    memberInfo: '프론트엔드 2명, 백엔드 2명, iOS 2명',
    skills: [React, TypeScript, Recoil, Material UI],
    images: ['./issueTracker/01.gif', './issueTracker/02.gif', './issueTracker/03.gif'],
    links: [{ name: 'Github Repository', href: 'https://github.com/malaheaven/issue-tracker' }],
    type: 'project',
  }
options: { isPortfolio: true, hide: true }
---

#### 🤝 협업

- 백엔드분들과 지속적으로 주고 받으며 작업하였습니다.
- 매일 하루 일정이 끝나고 줌으로 스크럼을 하였습니다.

#### 🧚🏻 구현

- 서버와 통신을 하는 커스텀 훅 useFetch를 제작하였습니다.
- 서버와 통신 후 반환되는 모든 데이터에 대한 타입을 지정하였습니다  
  반환되는 데이터 타입을 useFetch를 호출하는 컴포넌트에서도 알 수 있도록 제네릭을 활용하였습니다.
- 받아온 데이터를 담당자 / 라벨 / 마일스톤 / 작성자 옵션을 선택하여 필터링 할 수 있도록 제작하였습니다.

#### 🤔 고민한 점

- **이슈리스트 필터링**
  - 메인 화면 (이슈리스트)에서 필터링을 하기위해, 서버에서 보내준 데이터를 필터링 시 어려움이 있었습니다.  
     필터링 기능은 여러 개의 옵션을 컨트롤 할 수 있어야 했습니다. 받아온 데이터를 기반으로 각 옵션에 부합하는 데이터를 필터링하기 위해 pipe 함수 구현하였으며 각 옵션의 필터링을 실행하는 함수들을 작성 후, pipe 함수에 인자로 전달하여 선택한 옵션들에 부합하는 데이터들을 성공적으로 필터링 할 수 있었습니다.
- **불필요한 데이터 요청**
  - 페이지 컴포넌트 렌더링 시 서버에 데이터를 2번 이상 요청하는 문제가 있었습니다.  
    해당 문제를 해결하기 위하여 커스텀 훅 useFetch을 호출한 컴포넌트에서 useFetch내에서 쓰이는 useEffect의 두번째 인자로 들어가는 Dependency List에 값들을 전달해주어 조건에 따라 데이터가 요청이 되도록 수정하여 불필요한 요청을 제어 할 수 있었습니다. 또한, 이 일련의 과정들이 많은 컴포넌트에서 동일하게 쓰이기에 커스텀 훅을 제작하여 리팩토링하여 코드의 재사용성을 높일 수 있었습니다.