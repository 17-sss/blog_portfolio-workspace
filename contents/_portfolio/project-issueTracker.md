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

<h4 class="bg--gray text--bold">🤝&nbsp;&nbsp;협업</h4>

- 팀원분들과 지속적으로 진행상황을 주고 받으며 작업하였습니다.
- 매일 하루 일정이 끝나고 줌으로 스크럼을 하였습니다.

<h4 class="bg--gray text--bold">🧚🏻&nbsp;&nbsp;구현 요약</h4>

- 서버와 통신을 하는 커스텀 훅 useFetch를 제작하였습니다.
- 서버와 통신 후 반환되는 모든 데이터에 대한 타입을 지정하였습니다.  
  반환되는 데이터 타입을 useFetch를 호출하는 컴포넌트에서도 알 수 있도록 제네릭을 활용하였습니다.
- 받아온 데이터를 “담당자” / “라벨” / “마일스톤” / “작성자” 옵션을 선택하여 필터링 할 수 있도록 제작하였습니다.

<h4 class="bg--gray text--bold">🤔&nbsp;&nbsp;고민한 점</h4>

<p>
  <strong>이슈 목록 필터링 기능 제작</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">커링 개념 접목</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>서버에서 필터링되지 않은 모든 데이터를 전송, 각 옵션에 부합하는 데이터를 필터링해야 함</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span>각 옵션에 따라 받아온 데이터를 필터링하는 함수들을 작성하여 해결</span>
    </p>
    <hr class="thin" />
  </li>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>필터링 함수가 옵션의 갯수만큼 다수 존재하며, 모든 필터링 함수를 한번에 실행. (동작과정을 확연하게 알 수 없음)
      </span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span
        >커링 개념을 접목한 <code class="language--text">pipe</code> 함수를 작성하여, 필터링 함수들을 <code class="language--text">pipe</code> 인자로써
        전달함으로써 해결 / <a href="https://boiled-feather-1c7.notion.site/Pipe-fa5c11ec8e2c41edb9ce85e04dd19bdf">예시 코드</a> ⭐️</span
      >
    </p>
  </li>
</ol>

<hr class="thin" />
<br/>

<p>
  <strong>서버에 데이터 요청</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">커스텀 훅 제작과 동작 방식 변경</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>데이터 요청을 필요한 컴포넌트내에서 fetch API와 관련된 로직을 작성 ⇒ 가독성 저하</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span
        >데이터 요청과 관련된 로직들을 분리하여 <code class="language--text">useFetch</code> 커스텀 훅으로 작성함으로써
        해결</span
      >
    </p>
    <hr class="thin" />
  </li>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>모든 (이슈목록, 마일스톤, 라벨, 유저) 데이터는 로그인한 유저의 정보가 있어야 불러올 수 있음</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span
        ><code class="language--text">useFetch</code>에 감시하고 있을 <u>상태 값(로그인한 유저 정보)</u>이 포함된
        <u>배열</u>을 <strong>인자</strong>로 전달하여 <strong>해결</strong></span
      >
    </p>
    <ul class="pl--24 alpha">
      <li>
        <span
          >인자(배열) 값은 <code class="language--text">useFetch</code>내에서 쓰이는 <strong>useEffect</strong> 훅의
          2번째 인자에 들어가게 됨</span
        ><br />
        <span>(배열 내의 모든 상태 값들이 <span class="text--pink text--italic">falsy</span>한 상태가 아니라면 데이터를 불러오도록 로직을 작성함)</span>
      </li>
    </ul>
  </li>
</ol>

<hr class="thin" />