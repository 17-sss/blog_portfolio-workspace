---
date: '2021-04-23'
title: '[Tech Article] React, 글자 4개로 리액트 컴포넌트를 최적화하는 방법'
categories: ['Tech Article']
thumbnail: '../images/background_tech_article.jpg'
---

# 기술 문서 읽기 챌린지 [2021년 4월 22일]

## **React, 글자 4개로 리액트 컴포넌트를 최적화하는 방법**

**useState**의 지연 초기화를 통해 리액트 함수 컴포넌트의 속도를 향상시키는 방법

**예제 1.**

```jsx
const [count, setCount] = useState(
    Number.parseInt(window.localStorage.getItem(cacheKey)),
);
```

**예제 2.**

```jsx
const [count, setCount] = useState(() =>
    Number.parseInt(window.localStorage.getItem(cacheKey)),
);
```

-   **위 두 예제 코드의 차이점**  
     상태 초기화 부분이 다르다.

    > 첫번째 예제는 localStorage에서 값을 찾아 정수로 파싱 -> count 상태의 초기 값으로 설정  
    > 두번째 예제는 **함수를 인자로 넘긴다는 점**을 제외한다면 첫번째와 유사.

    -   **직접적인 값 대신 함수를 `useState`의 인자로 넘기고 있다.. 이건 뭐지?**

        -   직접적인 값 대신 함수를 `useState`의 인자로 넘기는 것을 **지연 초기화** 라고 함.  
            useState의 초기 값을 구하기 위한 계산 비용이 클 때 `useState`의 지연 초기화를 사용하라고 하는데,  
            **지연 초기화는 상태가 최초로 생성될 때만 실행되기 때문** (이후 발생하는 리렌더링에서는 실행되지 않기 때문!)
        -   `useState` 훅은 `Counter` 컴포넌트를 처음 렌더링할 때 count상태를 초기 값으로 생성.  
            그 이후 `setCount`를 호출하면 `Counter` 함수가 다시 호출되고 `count`상태는 갱신.  
            그리고 리렌더링은 `count` 상태가 업데이트될 때마다 발생.  
            중요한 점은 리렌더링 되는 동안, 초기 값이 다시 사용되지 않는다는 것!

    -   첫 번째 예제에서는 리렌더링이 발생할 때마다 `localStorage`에서 값을 찾음.  
         하지만, 만약 최초 렌더링 시에만 값을 찾아도 된다면, **불필요한 계산을 하고 있는 것**!!  
         반면, 두 번째 예제는 지연 초기화를 사용하여 불필요한 계산을 방지할 수 있음!

-   **언제 지연 초기화를 사용해야 할까?**  
    이 문서에서는 '비용이 큰 계산'을 할 때 사용하라고 가이드하고 있다.  
    `localStorage`에서 값을 읽는 것은 비용이 큰 계산일 것.  
    배열의 `.map()`, `.filter()`, `.find()` 등을 사용하는 것도 비용이 큰 계산일 것.  
    만약 값을 얻기 위해 어떤 함수를 호출해야 한다면 비용이 큰 계산일 가능성이 높으며,  
    이러한 경우 지연 초기화를 사용하면 이득을 볼 수 있다!

<br/>

**참고 링크**

-   [글자 4개로 리액트 컴포넌트를 최적화하는 방법](https://ui.toast.com/weekly-pick/ko_20201022)