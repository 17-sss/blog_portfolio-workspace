---
date: '2021-04-13'
title: '[Tech Article] styled-components 를 사용하는 8가지 이유'
categories: ['Tech Article']
thumbnail: './background_tech_article.jpg'
---

# 기술 문서 읽기 챌린지 [2021년 4월 13일]

## **styled-components 를 사용하는 8가지 이유**

```jsx
const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
    return <div style={divStyle}>Hello World!</div>;
}
```

먼저 React에서는 위와 같이 Inline CSS를 react components에 넣는건  
React에서 지속성과 확장성이 떨어지므로 권장하지 않음

**왜 styled-components 사용해야해??**

1. 자유로운 CSS 커스텀 컴포넌트를 만들 수 있음!
    - styled-components를 사용하면 사용자 인터페이스 디자인 포커스는  
       HTML 요소 또는 React 컴포넌트가 className 을 가진 것 처럼 자체 스타일을 포함하고  
       전체 프로젝트에서 쉽게 재사용 할 수 있는 styled-component로 전환됨
2. 인라인 스타일링

    - _일반적으로 인라인 스타일링은 리액트 팀에 의해 권장되지 않음!_
        - 인라인 스타일은 의사 및 미디어 쿼리를 사용할 수 없기 때문
        - 브라우저 호환성, camel-casing 및 automatically appended scalar quantities 에 대한 많은 우려.
    - 위 문항에 대한 예시

        - 일반적인 인라인 스타일링 (안좋음)
            ```js
            const paragraphStyles = {
                color: red,
                backgroundColor: black,
                padding: 2px
            }
            ```
            ```html
            <!-- Output -->
            <p style="{paragraphStyles}">inline styles applied here</p>
            ```
        - styled-components

            ```jsx
            import styled from 'styled-components';

            const Text = styled.div`
                color: red,
                background: black
            `;
            return <Text>Styled with CSS-in-JS </Text>;
            ```

            ```html
            <style>
                .hash12345tf {
                    background-color: black;
                    color: red;
                }
            </style>
            <p class="hash12345tf">Styled with CSS-in-JS</p>
            ```

3. 더 많은 사항은 링크 (첫번째 문서) 보기!

**styled-components 사용 시 참고 컨벤션**

-   부모가 되는 component는 `Styled`라는 키워드를 붙임.
-   자식들은 그냥 이름으로!!
    -   난 맨날 다... `Styled`를 붙였었다
    -   `Wrapper`라는 이름도 좋지 않다고 한다..
-   추가적인 내용은 두번째 문서 참고!

<br/>

**참고 링크**

-   [styled-components 를 사용하는 8가지 이유](https://analogcoding.tistory.com/181)
-   [Naming Styled Components (스타일링 컴포넌트 네이밍 컨벤션)](https://itchallenger.tistory.com/m/159)
-   [CSS-in-JS에 관해 알아야 할 모든 것](https://d0gf00t.tistory.com/22)
