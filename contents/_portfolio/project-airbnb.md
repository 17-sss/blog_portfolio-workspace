---
portfolioInfo:
  {
    sectionType: 'projects',
    title: 'Airbnb 클론 프로젝트',
    subTitle: '코드스쿼드에서 진행한 3주간의 프로젝트',
    duration: { startDate: '2021-05-17', endDate: '2021-06-04' },
    memberInfo: '프론트엔드 2명, 백엔드 2명',
    skills: [React, TypeScript, Webpack],
    links: [{ name: 'GitHub Repository', href: 'https://github.com/bibi6666667/airbnb/tree/FE/dev' }],
    images: ['./airbnb/01.gif', './airbnb/02.gif'],
    type: 'project',
  }
options: { isPortfolio: true, hide: true }
---

<h4 class="bg--gray text--bold">🤝&nbsp;&nbsp;협업</h4>

- 지속적인 팀원분들과의 소통을 위하여 매일 회고를 작성하였습니다.
- 요구사항을 보고 회의하며 Task를 할당하여 작업하였습니다.

<h4 class="bg--gray text--bold">🧚🏻&nbsp;&nbsp;구현 요약</h4>

- 처음으로 TypeScript를 적용한 프로젝트입니다.
- CRA를 사용하지 않고, Webpack으로 개발환경을 구성하였습니다.
- React의 useReducer & Context API를 활용하여 상태 관리를 하였습니다.
- Range Slider를 개발하여 요금 조정 모달을 제작하였습니다.

<h4 class="bg--gray text--bold">🤔&nbsp;&nbsp;고민한 점</h4>

<p>
  <strong>개발 서버 실행 및 빌드 시 많은 시간이 소요</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">webpack을 통해 직접 개발환경 구성</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>매번 CRA를 통한 개발환경을 구성하였는데, 개발 서버 실행 및 빌드 시 많은 시간이 소요됨</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span>내부적으로 어떤 라이브러리를 사용하고 있는지 분석하기위해 <strong>eject</strong> 명령을 사용</span>
    </p>
    <ul class="pl--24 alpha">
      <li>이 프로젝트에서 쓰이지 않을 많은 Webpack 플러그인, 로더들이 다수 존재</li>
      <li>필수적으로 쓰여야 할 플러그인, 로더만을 포함하여 개발환경을 구성하여 해결.</li>
    </ul>
  </li>
</ol>

<hr class="thin" />
<br/>

<p>
  <strong>요금 조정 모달 컴포넌트를 제작하는데 최선의 방법은?</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">DOM 요소들의 활용</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>라이브러리를 전혀 사용하지 않고 그래프를 그려야 함.</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span>다수의 요금 데이터를 기반으로 div 요소들을를 생성하여 그래프 제작</span>
    </p>
    <hr class="thin" />
  </li>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>div 요소들을 활용한 그래프는 DOM 트리가 복잡해진다고 생각하게 됨</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span>canvas 요소를 활용하여 그래프를 제작</span>
    </p>
    <hr class="thin" />
  </li>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span
        >그려진 canvas의 width를 기준으로 이동하는 요금 조정 버튼의 위치가 변경될 때 <u>요금 범위 상태</u>가 동적으로 변해야
        함</span
      >
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span
        ><strong>canvas</strong>의 <u>전체 width</u>를 <u>데이터 갯수 기준</u>으로 <strong>나눈 후</strong>에
        그래프내에서 변경되는 <u>요금 조정 버튼</u>들의 <u>위치</u> 값을 계산</span
      >
    </p>
    <p class="pl--24">⇒ 요금 조정 버튼들의 위치를 기반으로 요금 범위 값을 계산</p>
  </li>
</ol>

<hr class="thin" />

