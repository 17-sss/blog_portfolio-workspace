---
date: '2021-04-16'
title: '[React] useContext 사용하기'
categories: ['JavaScript', 'React']
thumbnail: './background_react.png'
---

# React - useContext 사용하기

## useContext?
- context는 리액트 버전에 따라 정말 많이 변경된 API임  
    한 때는 쓰지 말라고 공식문서에서 말하기까지..  
    요즘은 React.createContext와 useContext가 나오면서 활발히 사용되고 있음
- Redux를 useContext로 대체하려는 움직임도 보임

## useContext 왜 사용하려고??
- 기존에 컴포넌트 간에 데이터를 전달하려면 props를 이용해야 했음
- 만약 A, B, C, D, E 컴포넌트가 있을 때 A에서 E로 데이터를 내려보내주려면  
    중간 B, C, D 컴포넌트를 거쳐야 함. ***엄청난 비효율***

## 시나리오 및 예시 코드 
### 시나리오
- 어떠한 Container에서 데이터가 수정되거나 추가 / 삭제 등 될 때
    다른 Container도 변경되어야 함.  
    이 때 상태가 변경됨을 알릴 flag(상태)가 필요한데 (여기선 `isDataUpdate`)  
    너무 해당 상태 값이 너무 깊숙히 있음.  
    이 때 prop-drilling을 하지 않고 가져오고 싶을 때!

### 예시 코드
먼저 상태가 저장될 파일을 생성 (Store 느낌의 파일을 생성,  
    util에다 넣어도 좋고 약간 컴포넌트 느낌이라 다른 곳에 놓아도 될 듯)  
```js
// ./src/lib/utility/TodoStore.js

// TodoContext, TodoStore 정의
import React, { createContext, useState, useMemo } from 'react';

export const TodoContext = createContext({
    /* 
        - Context의 기본값 지정 
            (Provider의 value안에 해당 속성들이 없으면 요놈들이 기본값으로 됨!)
            굳이 해주지 않아도 되지만 TodoContext를 import 할 때 유용!
    */
    isDataUpdate: null,
    setIsDataUpdate: () => {},
});

const TodoStore = ({ children }) => {
    // Provider의 value에 들어갈 state 생성
    const [isDataUpdate, setIsDataUpdate] = useState(false);
    // value 객체는 객체이므로 리렌더링의 원인이 됨, useMemo로 캐싱
    const value = useMemo(() => ({ isDataUpdate, setIsDataUpdate }), [
        isDataUpdate,
        setIsDataUpdate,
    ]);

    // 이 예제에선 TodoContext 컴포넌트 사용 시,  
    // Parent가 아닌 GrandParent 느낌의 최상단에 위치함
    // children으로 다른 컴포넌트들을 가져옴
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoStore;
```

리액트 앱의 최상단 `App.js` 수정  
```js
// ./src/App.js

// 여기선 TodoStore를 가져옴
import React from 'react';
import './App.css';
import TopbarContainer from './containers/topbar/TopbarContainer';
import MainContainer from './containers/main/MainContainer';
import TodoStore from "./lib/utility/TodoStore";

const App = () => {
    return (
        // TodoStore를 요로코롬 감싸줌
        <TodoStore>
            <TopbarContainer />
            <MainContainer />
        </TodoStore>
    );
};
```

어떠한 Container (`CardContainer`) 에서 데이터가 수정되거나 추가 / 삭제 등 될 때  
TodoContext에 정의해준 `setIsDataUpdate` 사용하여 `IsDataUpdate` 업데이트  
(여기선 서버로 삭제 요청)  
```js
// ./src/containers/main/column/card/CardContainer.js

import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from "axios";
import Card from "../../../../components/main/column/card/Card";
import PopupModal from "../../../../components/common/PopupModal";
import { TodoContext } from "../../../../lib/utility/TodoStore";

const CardContainer = ({ title, body, index, columnId, cardId, previousCardId, isZanSang, setColumnData}) => {
    const { setIsDataUpdate } = useContext(TodoContext);

    /* --- 생략 --- */

    // Popup Events
    // 팝업에서 확인버튼 -> 카드 삭제 (서버로 delete 요청)
    const onClickPopupConfirm = () => {
        setColumnData((data)=>{
            const newData = [...data]
            newData[columnId-1].cards = newData[columnId-1].cards.filter((_, i) => i !== index)
            return newData;
        });
        axios.delete(`api/columns/${columnId}/cards/${cardId}`);
        setIsDataUpdate(true);  //  TodoContext의 Provider value의 IsDataUpdate를 업데이트
    };

    /* --- 생략 --- */

    return (
        <>
            <Card data={data} flags={flags} onEvents={onEventsCard} />
            <PopupModal />
        </>
    );
};

export default CardContainer;
```

변경되어야 하는 다른 Container인 `TopbarContainer` 수정  
```js
// ./src/containers/topbar/TopbarContainer.js

import React, { useEffect, useState, useContext } from 'react';
import { TodoContext } from '../../lib/utility/TodoStore';
import { calcPastTime, fetchData } from '../../lib/utility/util';
import TopbarTemplate from '../../components/topbar/TopbarTemplate';

const TopbarContainer = () => {
    // useContext를 사용하여 TodoContext를 가져옴 & 비구조화 할당을 통해  
    // TodoContext.Provider의 value 값을 가져와줌
    const { isDataUpdate, setIsDataUpdate } = useContext(TodoContext);

    /* --- 생략 --- */

    // 요로코롬 사용해줌! (isDataUpdate 상태 체크 후 -> 다시 서버에 get 요청!)
    useEffect(() => {
        if (isDataUpdate) {
            getActivityData();
            setIsDataUpdate(false);
        }
    }, [isDataUpdate, setIsDataUpdate]);

    /* --- 생략 --- */

    return <TopbarTemplate />
};

export default TopbarContainer;
```

## 마지막으로.. useContext 사용 시 주의사항
- useContext를 쓸 때 주의할 사항은, Provider에 제공한 value가 달라지면  
    useContext를 쓰고 있는 모든 컴포넌트가 리렌더링 된다는 것..
- 지금 value 안에는 `isDataUpdate`, `setIsDataUpdate` 들어있는데  
    앞으로 개수가 더 늘어날 가능성이 높음.  
    그 중 하나라도 바뀌면 객체로 묶여있으므로 전체가 리렌더링 되어버림..  
    ***따라서 잘못 쓰면 엄청난 렉을 유발할 수 있음!!***

---

### **참고 링크**
- [React Hooks! useContext편(React 17)](https://www.zerocho.com/category/React/post/5fa63fc6301d080004c4e32b)
- [[React hooks 이해] #4편​. Context API와 useContext](https://youtu.be/NHYC-KIri34)
- [프로퍼티 내리꽂기 (prop drilling)](https://edykim.com/ko/post/prop-drilling/)
- [Prop drilling 해결을 위해 context를 사용하기 전에 구조를 생각해보자.](https://yceffort.kr/2020/10/react-prop-drilling-may-slow-down)