---
date: '2021-06-14'
title: '[상태관리] React의 또 다른 상태관리 라이브러리, Recoil'
categories: ['JavaScript', 'State Management']
thumbnail: '../images/background_recoil.png'
---

## React의 또 다른 상태관리 라이브러리, Recoil

### **1.** Recoil은 왜 만들어졌을까?

[Recoil 공식 : 동기](https://recoiljs.org/ko/docs/introduction/motivation)

호환성 및 단순함을 이유로 외부의 글로벌 상태관리 라이브러리보다는 React 자체에 내장된 상태 관리 기능을 사용하는 것이 가장 좋음.  
 그러나 React는 다음과 같은 한계가 있다.

-   컴포넌트의 상태는 공통된 상위요소까지 끌어올림으로써 공유될 수 있지만,  
     이 과정에서 거대한 트리가 다시 렌더링되는 효과를 야기하기도 함
-   Context는 단일 값만 저장할 수 있으며, 자체 소비자(consumer)를 가지는 여러 값들의 집합을 담을 수는 없음.
-   이 두가지 특성이 트리의 최상단(state가 존재하는 곳)부터 트리의 잎(state가 사용되는 곳)까지의  
    코드 분할을 어렵게 함.

### **2.** 주요 개념

[Recoil 공식 : 주요 개념](https://recoiljs.org/ko/docs/introduction/core-concepts)

Recoil을 사용하면 atoms (공유 상태)에서 selectors (순수 함수)를 거쳐  
React 컴포넌트로 내려가는 data-flow graph를 만들 수 있음.

-   Atoms는 컴포넌트가 구독할 수 있는 상태의 단위
-   Selectors는 atoms 상태값을 동기 또는 비동기 방식을 통해 변환.

**1)** Atoms

-   Atoms는 상태의 단위이며, 업데이트와 구독이 가능
-   atom이 업데이트되면 각각의 구독된 컴포넌트는 새로운 값을 반영하여 다시 렌더링
-   atoms는 런타임에서 생성될 수도 있다.
-   Atoms는 React의 로컬 컴포넌트의 상태 대신 사용할 수 있다.
-   동일한 atom이 여러 컴포넌트에서 사용되는 경우 모든 컴포넌트는 상태를 공유함.

**1-1)** `atom` 함수를 사용하여 Atom 생성

```jsx
const fontSizeState = atom({
    key: 'fontSizeState',
    default: 14,
});
```

-   Atoms는 디버깅, 지속성 및 모든 atoms의 map을 볼 수 있는 특정 고급 API에 사용되는 고유한 키가 필요.  
     2개 이상의 atom이 같은 키를 갖는 것은 오류이기 때문에 키값은 전역적으로 고유하도록 해야 함!
-   React 컴포넌트의 상태처럼 기본값도 가짐!

**1-2)** `useRecoilState()`를 사용하여 생성한 atom을 읽고 씀

```js
function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    return (
        <button
            onClick={() => setFontSize((size) => size + 1)}
            style={{ fontSize }}
        >
            Click to Enlarge
        </button>
    );
}

// 위에서 생성한 FontButton 컴포넌트를 클릭하면 버튼의 글꼴 크기가 1만큼 증가하며,
// fontSizeState atom을 사용하는 다른 컴포넌트(Text 컴포넌트)의 글꼴 크기도 같이 변화한다.
function Text() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    return <p style={{ fontSize }}>This text will increase in size too.</p>;
}
```

-   위 예제에 나왔듯 React의 useState와 비슷하지만 _상태가 컴포넌트 간에 공유될 수 있다는 차이_ 가 있음.

**2)** Selectors

-   Selector는 atoms나 다른 selectors를 입력으로 받아들이는 순수 함수(pure function)
    -   상위의 atoms 또는 selectors가 업데이트되면 하위의 selector 함수도 다시 실행됨.
    -   컴포넌트들은 selectors를 atoms처럼 구독할 수 있으며 selectors가 변경되면 컴포넌트들도 다시 렌더링됨.
-   Selectors는 상태를 기반으로 하는 파생 데이터를 계산하는 데 사용됨
    -   최소한의 상태 집합만 atoms에 저장
    -   다른 모든 파생되는 데이터는 selectors에 명시한 함수를 통해  
        효율적으로 계산함으로써 쓸모없는 상태의 보존을 방지
-   Selectors는 어떤 컴포넌트가 자신을 필요로하는지, 또 자신은 어떤 상태에 의존하는지를 추적하기에  
     이러한 함수적인 접근방식을 매우 효율적으로 만듬!
-   컴포넌트의 관점에서 보면 _selectors와 atoms는 동일한 인터페이스를 가지므로 서로 대체_ 할 수 있다.

**2-1)** `selector` 함수를 사용하여 selector 생성

```jsx
const fontSizeLabelState = selector({
    key: 'fontSizeLabelState',
    get: ({ get }) => {
        const fontSize = get(fontSizeState);
        const unit = 'px';

        return `${fontSize}${unit}`;
    },
});
/* 
    이 예시에서 selector는 fontSizeState라는 하나의 atom에 의존성을 갖음.
    개념적으로 fontSizeLabelState selector는 fontSizeState를 입력으로 사용하고
    형식화된 글꼴 크기 레이블을 출력으로 반환하는 순수 함수처럼 동작함!
*/
```

-   `get` 속성은 계산될 함수
    -   전달되는 `get` 인자를 통해 atoms와 다른 selectors에 접근할 수 있음.
    -   다른 atoms나 selecotrs에 접근하면 자동으로 종속 관계가 생성되므로  
         참조했던 다른 atoms나 selectors가 업데이트되면 이 함수도 다시 실행됨.

**2-2)** `useRecoilValue()`를 사용하여 Selectors를 읽을 수 있음

```jsx
function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const fontSizeLabel = useRecoilValue(fontSizeLabelState);

    return (
        <>
            <div>Current font size: ${fontSizeLabel}</div>

            <button onClick={setFontSize(fontSize + 1)} style={{ fontSize }}>
                Click to Enlarge
            </button>
        </>
    );
}
```

-   `useRecoilValue()`는 하나의 atom이나 selector를 인자로 받아 대응하는 값을 반환.
    -   위 예시 코드에서는 `fontSizeLabelState` selector는 writable하지 않기 때문에  
        `useRecoilState()`를 이용하지 않는다

### **3.** 주요 기능들 요약

-   `RecoilRoot`  
    recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 RecoilRoot 가 필요!  
    보통 App 컴포넌트가 RecoilRoot를 넣기에 가장 좋은 장소임!
-   `atom`  
    Atoms는 상태의 단위이며, 업데이트와 구독이 가능
-   `selector`  
    atoms나 다른 selectors를 입력으로 받아들이는 순수 함수(pure function)
-   `useRecoilState`  
    생성한 atom을 읽고 쓸 수 있음
-   `useRecoilValue`  
    생성한 selector를 읽을 수 있음

### **4.** 아래 링크를 참고하여 설치하고 사용해보기!

-   [Recoil 공식 : 설치](https://recoiljs.org/ko/docs/introduction/installation)
-   [Recoil 공식 : 시작하기](https://recoiljs.org/ko/docs/introduction/getting-started)
