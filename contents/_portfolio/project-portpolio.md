---
portfolioInfo:
  {
    sectionType: 'projects',
    title: 'Rano Portfolio',
    subTitle: '나만의 포트폴리오 프로젝트',
    duration: { startDate: '2021-11-08', endDate: '2021-11-20' },
    memberInfo: '개인 프로젝트',
    skills: [Gatsby, React, TypeScript, Material UI],
    links:
      [
        { name: '배포 링크', href: 'https://17-sss.github.io/portfolio' },
        { name: 'GitHub Repository ', href: 'https://github.com/17-sss/blog_portfolio-workspace' },
        {
          name: '개발일지',
          href: 'https://boiled-feather-1c7.notion.site/Rano-s-Blog-Portfolio-8ec62a21b87e4c4c97a05b160c990e09',
        },
      ],
    images:
      [
        './portfolio/01.webp',
        './portfolio/02.webp',
        './portfolio/03.webp',
        './portfolio/04.webp',
        './portfolio/05.webp',
      ],
    type: 'project',
  }
options: { isPortfolio: true, hide: true }
---

<h4 class="bg--gray text--bold"> 🧚🏻&nbsp;&nbsp;구현 요약</h4>

- 모든 컴포넌트, 로직들을 재사용성을 생각하여 분리하는데 초점을 두었습니다.
- 반응형과 애니메이션을 처음으로 깊이 있게 고민하며 제작한 프로젝트입니다.
- Intersection Observer를 활용하여 현재 보고있는 화면이 각 요소에 접근 시 애니메이션이 실행되도록 하였습니다.
- Context API를 활용하여 전역 상태관리를 하였습니다.

<h4 class="bg--gray text--bold">🤔&nbsp;&nbsp;고민한 점</h4>

<p>
  <strong>사용자가 보고 있는 화면이 각 요소가 있는 영역에 도달했을 때 애니메이션이 실행</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">Intersection Observer 활용</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span
        >해당 기능을 구현하기 위해 <strong>Scroll Event</strong>를 활용에 대해 고민했지만, 많은 리소스가 소모될 것
        같음</span
      >
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span
        ><strong>Intersection Observer API</strong>를 기반으로 한 커스텀 훅
        <code class="language--text">useScrollAnimations</code>를 제작
      </span>
    </p>
    <hr class="thin" />
  </li>

  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>외부 스타일 시트의 영향을 최대한 받지 않고, 스타일이 적용되어야 함</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span>"인라인 스타일"에 애니메이션 관련 스타일 적용</span>
    </p>
    <hr class="thin" />
  </li>

  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>컴포넌트의 최상위 요소가 아닌 모든 <u>자식 요소</u>까지 <u>애니메이션이 적용</u>되어야 함</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span
        ><strong>DFS</strong> 알고리즘을 활용하여 컴포넌트에서 렌더링하는 <u>모든 자식 요소</u>들을
        <strong>Observe</strong> 하도록 개선</span
      >
    </p>
    <hr class="thin" />
  </li>

  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>특정 자식 요소는 <strong>Observe</strong>되어서는 안됨.</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span
        >제외 될 요소의 <strong>css selector</strong>를 <code class="language--text">useScrollAnimations</code>에
        전달하여 <strong>Observe</strong> 하지 않도록 함.</span
      >
    </p>
  </li>
</ol>

<hr class="thin" />
<br/>

<p>
  <strong>생성한 컴포넌트에 Ref가 전달이 되어야 함</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">React의 forwardRef 활용</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>컴포넌트에서 렌더링하는 <u>자식 컴포넌트들</u>에 <strong>ref</strong> 프로퍼티가 전달되지 않는 문제</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span
        >자식 <u>컴포넌트</u>에 <strong>forwardRef</strong>를 <u>적용</u>하여 자식 컴포넌트를 렌더링하는 컴포넌트에서
        <strong>ref</strong> 참조할 수 있도록 함</span
      >
    </p>
  </li>
</ol>

<hr class="thin" />
<br/>

<p>
  <strong>페이지 컴포넌트에 적용된 쿼리문에 의해 가독성 저하</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">커스텀 훅을 작성하여 분리</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>각 페이지에 필요한 정적 데이터들은 기본적으로 페이지 컴포넌트에서만 쿼리문을 작성하여 불러올 수 있음 (<code class="language--text">Gatsby</code> 프레임워크의 특징)</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span><code class="language--text">Gatsby</code>의 <code class="language--text">useStaticQuery</code>를 활용한 커스텀 훅을 작성하여 쿼리문을 분리한 후 필요한 곳에서만 불러옴</span>
    </p>
  </li>
</ol>

<hr class="thin" />
