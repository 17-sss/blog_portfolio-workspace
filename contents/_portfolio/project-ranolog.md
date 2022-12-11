---
portfolioInfo:
  {
    sectionType: 'projects',
    title: 'Ranolog',
    subTitle: 'Next.js로 만드는 나만의 블로그',
    duration: { startDate: '2022-11-03', endDate: '2022-12-10' },
    memberInfo: '개인 프로젝트',
    skills: ['Next.js', 'React', 'TypeScript', 'Storybook'],
    links:
      [
        { name: 'Deploy', href: 'https://hoyoung.dev' },
        { name: 'Storybook', href: 'https://ranolog-storybook.vercel.app/' },
        { name: 'GitHub', href: 'https://github.com/17-sss/ranolog' },
        { name: '개발 일지', href: 'https://boiled-feather-1c7.notion.site/Ranolog-955bb8846ad543f4bfaef7923d591dba' },
      ],
    images: ['./ranolog/01.webp', './ranolog/02.webp', './ranolog/03.webp'],
    type: 'project',
  }
options: { isPortfolio: true, hide: true }
---

<h4 class="bg--gray text--bold"> 🧚🏻&nbsp;&nbsp;구현 요약</h4>

- 컴포넌트의 재사용화를 위해 커스텀 훅으로 비즈니스 로직 분리했습니다.
- 개발 시 컴포넌트 단위로 테스트하며 작업하기 위해 `Storybook`을 활용하였습니다.
- `emotion`, `Styled System`을 활용하여 반응형 작업을 하였습니다.

<h4 class="bg--gray text--bold">🤔&nbsp;&nbsp;고민한 점</h4>

<p>
  <strong>컴포넌트의 부모 컴포넌트에서 컴포넌트의 상태 변경</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">useImperativeHandle 활용</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>컴포넌트의 부모 컴포넌트에서 컴포넌트의 상태 변경</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span class="bg--green text--italic">👇 <strong>내용 참고</strong></span>
    </p>
    <ul class="pl--24 alpha">
      <li>컴포넌트에 <code class="language--text ">forwardRef</code> & <code class="language--text ">useImperativeHandle</code> 적용</li>
      <li>컴포넌트의 <code class="language--text ">useImperativeHandle</code>에 컴포넌트 상태를 변경하는 함수 정의</li>
      <li>부모 컴포넌트에서 컴포넌트에 <strong>ref</strong>를 전달</li>
      <li>부모 컴포넌트에서 <strong>ref</strong>를 통해 컴포넌트에 정의한 함수 사용</li>
    </ul>
  </li>
</ol>

<hr class="thin" />
<br/>

<p>
  <strong>검색 시 많은 이벤트 호출</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">Debounce 활용하여 제어</span>
</p>
<hr class="thin" />

<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>블로그 글 검색 시, 입력할 때마다 이벤트 발생</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span>입력할 때마다 이벤트가 호출되는 것이 아닌 마지막 호출에서 1초가 지난 후 함수의 기능이 동작하도록 함</span>
    </p>
  </li>
</ol>

<hr class="thin" />
