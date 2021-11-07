---
date: '2021-04-17'
title: '[React] useEffect?'
categories: ['JavaScript', 'React']
thumbnail: './background_react.png'
---

# React - useEffect

## **[1]** useEffect?
- `useEffect`는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook.
-   컴포넌트가 마운트 됐을 때 (처음 나타났을 때)  
     언마운트 됐을 때 (사라질 때)  
     업데이트 될 때 (특정 props가 바뀔 때) 특정 작업을 처리하는 Hook.
- `useEffect`를 사용 할 때에는..
    - 첫번째 파라미터에는 함수  
    - 두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣음.
- 만약에 deps 배열을 비우게 된다면? (두번째 파라미터)
    - 컴포넌트가 처음 나타날때에만 useEffect에 등록한 함수가 호출
- useEffect에서는 **함수를 반환(return)** 할 수 있는데 이를 cleanup 함수라고 부름.  
    ***cleanup 함수는 useEffect 에 대한 뒷정리***를 해준다고 보면 됨!

## **[2]** useEffect 예시 코드 및 설명

### **1**. 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행
```jsx
import React, { useState, useEffect } from 'react';

const App = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({
            name, nickname
        });
    });

    const onChangeName = e => setName(e.target.value);
    const onChangeNickname = e => setNickname(e.target.value);

    return (
        <div>
            <input name="name" value={name} onChange={onChangeName} />
            <input name="nickname" value={nickname} onChange={onChangeNickname} />
        </div>
    )
};

export default App;
```
- 테스트 해 본 결과, 설정된 state 값이 변경될 때마다 useEffect가 작동함!

<br/>

### **2**. 마운트될 때만 실행하고 싶을 때
```jsx
import React, { useState, useEffect } from 'react';

const App = () => {
    /* 생략 */
    useEffect(() => console.log('마운트될 때만 실행됩니다'), []);
    /* 생략 */

    return (
        <div>
            {/* 생략 */}
        </div>
    )
};
```
- 위 코드처럼 `useEffect`에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고,  
    업데이트될 때는 실행하지 않으려면 _함수의 두번째 파라미터로 비어있는 배열_ 을 넣어주면 됨!  

<br/>

### **3**. 특정 값이 업데이트될 때만 실행하고 싶을 때
```jsx
import React, { useState, useEffect } from 'react';

const App = () => {
    /* 생략 */
    const [name, setName] = useState('');
    useEffect(() => console.log('state: name이 업데이트 될때마다 실행'), [name]);
    /* 생략 */

    return (
        <div>
            {/* 생략 */}
        </div>
    )
};
```
- 위 코드처럼 특정 값이 변경될 때만 실행하고 싶다면  
    _함수의 두번째 파라미터로 전달되는 배열안에 검사하고 싶은 값_ 을 넣어주면 됨!
    - 배열 안에는 **useState를 통해 관리하고 있는 상태를 넣어주어도** 되고,  
        **props로 전달받은 값**을 넣어주어도 됨!

<br/>

### **4**. 뒷정리하기 (cleanup)
useEffect는 기본적으로 렌더링되고 난 직후마다 실행됨.  
두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라짐.  

**컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하려면**  
useEffect에서 **뒷정리(cleanup)함수를 반환**해 주어야 함  

아래 코드 실습해보기 (Info.jsx & App.js)

#### **코드**

```jsx
// ./Info.jsx
import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, [name]);

    const onChangeName = e => setName(e.target.value);
    const onChangeNickname = e => setNickname(e.target.value);

    return (
        <div>
            <input name="name" value={name} onChange={onChangeName} />
            <input name="nickname" value={nickname} onChange={onChangeNickname} />
        </div>
    )
};

export default Info;
```

```js
// ./App.js
import React, { useState } from 'react';
import Info from './Info';

const App = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr />
            {visible && <Info />}
        </div>
    );
};

export default App;
```
- 위 두 코드를 작성 후 `App.js`의 버튼을 눌러 visible 상태를 변경할 때  
    - visible이 **true**라면  
        Info 컴포넌트가 화면에서 보이면서 Info 컴포넌트의 useEffect가 실행됨.  
        return (cleanup)은 실행되지 않음.
    - visible이 **false**라면
        Info 컴포넌트가 화면에서 사라지면서 Info 컴포넌트의  
        useEffect안의 return(cleanup)이 실행됨.  
        - 예시코드에선 cleanup이 실행될 때, 업데이트되기 직전의 값을 보여줌  
            (Info가 사라지면, 안에 있던 input태그의 값도 사라지는게 맞는 듯)  

<br/>

### **5**. 오직 언마운트 될 때 뒷정리 함수를 호출하고 싶다면
```jsx
import React, { useState, useEffect } from 'react';

const App = () => {
    /* 생략 */
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('unmount');
        }
    }, []);
    /* 생략 */

    return (
        <div>
            {/* 생략 */}
        </div>
    )
};
```
- 이 예시코드처럼 useEffect 함수의 두 번째 파라미터에 비어 있는 배열을 넣으면 됨!

---

### **참고 링크 및 자료**
- [useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기](https://react.vlpt.us/basic/16-useEffect.html)
- 책: 리액트를 다루는 기술  (8장, 8.2 useEffect)