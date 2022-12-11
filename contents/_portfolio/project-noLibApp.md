---
portfolioInfo:
  {
    sectionType: 'projects',
    title: 'No Library App',
    subTitle: '라이브러리, 프레임워크 없이 SPA 만들기',
    duration: { startDate: '2022-01-16', endDate: '2022-02-06' },
    memberInfo: '개인 프로젝트',
    skills: [HTML, CSS, JavaScript, TypeScript],
    links: [{ name: 'GitHub Repository', href: 'https://github.com/17-sss/no-lib-App' }],
    images: ['./noLibApp/01.gif', './noLibApp/02.gif', './noLibApp/03.gif', './noLibApp/04.gif', './noLibApp/05.gif'],
    type: 'project',
  }
options: { isPortfolio: true, hide: true }
---

<h4 class="bg--gray text--bold"> 🧚🏻&nbsp;&nbsp;구현 요약</h4>

- `HTML`, `CSS`, `JS` 와 `Webpack` 을 활용하여 **Single Page Application**를 제작합니다.
- 상태 변경에 따라 렌더링하는 HTML 요소들도 업데이트 할 수 있도록 DIFF 알고리즘을 활용하였습니다.
- 많은 이벤트가 등록되는 현상을 피하기 위해 이벤트 델리게이션 기법을 활용하였습니다.
- 로컬 스토리지를 활용하여 새로고침이 되어도 현재 작성하고 있는 정보들이 유지되도록 하였습니다.

<h4 class="bg--gray text--bold">🤔&nbsp;&nbsp;고민한 점</h4>

<p>
  <strong>컴포넌트의 템플릿(HTML 요소들)을 원하는 타깃 요소에 렌더링</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">id 선택자 적용, 고유 컴포넌트 id 생성</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span
        ><strong>컴포넌트</strong>에서 추가적으로 생성하는 <strong class="text--brown">자식 컴포넌트</strong>의 템플릿이
        <strong>컴포넌트</strong>가 생성된 타깃 요소에 렌더링 됨</span
      >
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span
        ><strong>컴포넌트</strong>가 렌더링하는 템플릿 내의 HTML 요소 중
        <strong class="text--brown">자식 컴포넌트</strong>를 렌더링 하고자 하는 요소의 id 선택자를 전달.</span
      >
    </p>
    <hr class="thin" />
  </li>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>같은 컴포넌트가 다수 생성될 시에 적용된 id 선택자의 정보들이 <strong>중복</strong>됨.</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span>컴포넌트 자체에 <u>고유 컴포넌트 id</u>를 <strong>생성</strong>함으로써 해결</span>
    </p>
    <ul class="pl--24 alpha">
      <li>
        <span>고유 컴포넌트 id 정보를 기반으로 데이터를 추가, 수정, 삭제 시 원활한 동작을 가능하게 함.</span>
      </li>
    </ul>
  </li>
</ol>

<hr class="thin" />
<br/>

<p>
  <strong>컴포넌트 상태 변경에 따라 렌더링되는 HTML 요소들 업데이트</strong>
  <span>⇒</span>
  <span class="text--italic text--bold text--gray">DIFF 알고리즘 활용</span>
</p>
<hr class="thin" />
<ol>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>상태 변경이 감지되었을 때, 컴포넌트가 렌더링하는 요소들도 업데이트 되어야 함</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span>상태 변경 시 컴포넌트의 HTML 요소들을 렌더링하는 메소드를 실행하도록 변경</span>
    </p>
    <hr class="thin" />
  </li>
  <li>
    <p>
      <code class="language--text text--brown text--bold">문제</code>
      <span>컴포넌트의 템플릿의 요소들은 변경된 상태에 따라 내용이 업데이트 되어야 함.</span>
    </p>
    <p>
      <code class="language--text text--purple text--bold">해결</code>
      <span class="bg--green text--italic">👇 <strong>내용 참고</strong></span>
    </p>
    <ul class="pl--24 alpha">
      <li>
        <span>컴포넌트가 생성 되어있는 요소(타깃 요소)의 <strong>자식 요소</strong>들의 정보를 가져옴</span>
      </li>
      <li>
        <span>컴포넌트가 렌더링하는 템플릿(HTML 요소들)을 변경된 상태 데이터를 기반으로 재생성 </span>
      </li>
      <li>
        <span><strong>타깃 요소의 자식 요소들</strong> 중에서 재생성한 컴포넌트의 템플릿의 내용이 들어갈 곳을 찾음</span>
      </li>
      <li>
        <span>들어갈 곳을 찾은 후 <strong>세부적으로 비교</strong>한 뒤 내용 업데이트 (추가 / 제거 여부, 속성, 텍스트 등)</span>
      </li>
    </ul>
  </li>
</ol>

<hr class="thin" />
