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
- 컴포넌트 작성 시 특정 페이지에만 의존하지 않도록 `Storybook`을 활용하여 개발하였습니다.
- **디자인** 및 **목차(Toc)** 기능 등 라이브러리를 사용하지 않고 개발하였습니다.

<h6 class="text--bold">글 작성 편의를 위한 CLI 제작</h6>

- 현 프로젝트에서의 문서 타입은 `Post`, `Project`, `Resume`가 존재합니다. (모두 **frontmatter** 형태가 다릅니다)
- CLI를 통해 사용자가 문서 타입을 선택하고, 정보를 입력하면..  
  → 이에 부합하는 **frontmatter** 데이터를 가진 Markdown이 생성됩니다.

<h4 class="bg--gray text--bold">🤔&nbsp;&nbsp;고민한 점</h4>

<p>
  <strong>글 검색 시 많은 이벤트 호출</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">Debounce 활용하여 제어</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>블로그 글 검색 시, 사용자가 입력할 때마다 이벤트 발생</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span>입력할 때마다 이벤트가 호출되는 것이 아닌 마지막 호출에서 1초가 지난 후 함수의 기능이 동작하도록 함</span>
    </p>
  </li>
</ol>

<hr class="thin" />
<br/>

<p>
  <strong>부모 컴포넌트에서 자식 컴포넌트의 상태를 업데이트하려면?</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">useImperativeHandle 활용</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>부모의 상태를 업데이트할 때, 자식 컴포넌트 내부 상태도 업데이트 되어야 함.</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span class="bg--green text--italic">👇 <strong>내용 참고</strong></span>
    </p>
    <ul class="pl--24 alpha">
      <li>
        <span>전역 상태 관리를 통해서 문제를 해결하려 했지만, 단 하나의 자식만 업데이트되면 됨.</span><br/>
        <span>(효율적이지 않다고 생각)</span>
      </li>
      <li>자식 컴포넌트에 <code class="language--text ">forwardRef</code> & <code class="language--text ">useImperativeHandle</code> 적용
      <li>자식 컴포넌트의 <code class="language--text ">useImperativeHandle</code>에 컴포넌트 상태를 변경하는 함수 정의</li>
      <li>부모 컴포넌트에서 <strong>ref</strong>를 통해 자식 컴포넌트에 정의한 함수 사용</li>
    </ul>
  </li>
</ol>

<hr class="thin" />
