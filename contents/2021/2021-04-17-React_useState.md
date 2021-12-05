---
date: '2021-04-17'
title: '[React] useState?'
categories: ['JavaScript', 'React']
thumbnail: '../images/background_react.png'
---

# React - useState

## **[1]** useState?

-   리액트의 컴포넌트에서 동적인 값을 상태(**state**)라고 부름.
-   사용자 인터랙션을 통해 컴포넌트의 상태값이 동적으로 바뀔 경우에는 상태를 관리하는 것이 필요
-   React Hooks 가 나오기 이전에는 상태값을 관리하기 위해 class 기반의 클래스 컴포넌트를 작성해야 했다.  
     클래스 컴포넌트는 간단한 상태 관리 조차도 함수형 컴포넌트에 비해 복잡하여 유지 보수가 힘들었다.
    -   하지만 리액트 16.8 버전부터 Hooks 라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 됨!!
-   Hooks 중에 `useState()` 함수가 있는데, 이를 통해 함수형 컴포넌트에서도 상태를 관리할 수 있다.

## **[2]** useState의 사용 예시

### **1**. 일반

```jsx
import React, { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);

    const onIncrease = () => setNumber((preNum) => preNum + 1);
    const onDecrease = () => setNumber((preNum) => preNum - 1);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;
```

-   `const [number, setNumber] = useState(0);`  
     useState 함수를 호출하면 배열을 반환하는데,
    1번째 원소 number는 현재 상태 값 변수,  
     2번째 원소 setNumber는 상태 값을 갱신해주는 Setter 함수.  
     useState 괄호 안의 값은 상태의 초기 값임.
-   `const onIncrease = () => setNumber(preNum => preNum + 1);`  
     상태 값 갱신 함수 setNumber는 파라미터로 전달받은 preNum을 최신 상태로 설정해준다.
    -   `setNumber(number + 1)`는  
         원래 setNumber 파라미터에는 위와 같이 업데이트 할 새로운 값을 넣어주는데  
         `setNumber(preNum => preNum + 1)`  
         위와 같이 기존 값을 값을 업데이트 하는 함수를 넣어 값을 업데이트 할 수도 있다.
        > setNumber(set함수)는 콜백함수의 인자 값은 무조건 같이 정의한 number(state) 가르키는 듯 함!!)
    -   이와 같은 함수형 업데이트는 컴포넌트를 최적화 할 때 주로 사용한다.
-   `{number}`  
     갱신된 현재 상태 값을 렌더링

<br/>

### **2**. useState() 함수로 여러 개의 상태 값 관리 (onChange 이벤트)

**1)** Input 태그 하나일 경우

```jsx
import React, { useState } from 'react';

const InputTest = () => {
    const [text, setText] = useState('');

    const onChange = (e) => setText(e.target.value);
    const onReset = () => setText('');
    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b> 내용: {text}</b>
            </div>
        </div>
    );
};
export default InputTest;
```

-   `const onChange = (e) => setText(e.target.value);`  
     이벤트가 일어나는 타겟의 value를 text 값으로 업데이트 해줌
-   `const onReset = () => setText('');`  
     text(state) 값을 공백으로 업데이트
-   `<input onChange={onChange} value={text} />`  
     input 태그에 onChange 이벤트를 등록하고 value 값으로 text 상태 값을 줌  
     value 값을 설정해주지 않으면 상태가 바뀌었을 때 input 내용이 업데이트 되지 않음!!

**2)** Input 태그 여러 개의 경우  
**_코드 내의 주석 참고_**

```jsx
import React, { useState } from 'react';

const InputSample = () => {
    // 객체 형태로 두 Input 태그의 name 속성의 초기 값을 설정
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    // inputs(state) 상태값을 비구조화 할당을 통해 속성 값들을 추출.
    const { name, nickname } = inputs;

    const onChange = (e) => {
        // 이벤트 타겟의 속성 value & name 추출
        const { value, name } = e.target;

        // ▼ 아래 글 참고
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
    };

    return;
    <div>
        <input
            name="name"
            placeholder="이름"
            onChange={onChange}
            value={name}
        />

        <input
            name="nickname"
            placeholder="닉네임"
            onChange={onChange}
            value={nickname}
        />

        <button onClick={onReset}>초기화</button>

        <div>
            <b> 소개: </b>
            {name} ({nickname})
        </div>
    </div>;
};

export default InputSample;
```

```jsx
setInputs({
    ...inputs,
    [name]: value,
});
```

-   리액트 상태에서 객체를 수정할 때는 inputs[name] = value 와 같이 직접 수정하면 안됨!  
     대신 spread 문법을 사용하여 `...inputs,` 기존 객체를 복사하여 새로운 객체를 만들고,  
     이 새로운 객체에서 상태를 업데이트 [name]: value 해줘야함!!
    -   여기서 [name]과 같이 대괄호를 사용하는 것은 변수로서  
         name이 들어올 수도 있고 nickname이 들어올 수도 있다.
-   이렇게 기존 객체를 복사하여 새로운 객체에 업데이트 작업을 하는 것을 "불변성을 지킨다" 는 것  
     불변성을 지켜줘야만 리액트가 컴포넌트의 상태가 업데이트 됐음을 감지할 수 있고  
     필요한 부분만을 리렌더링 할 수 있기 때문.  
     _기존 상태를 직접 수정하는 경우 리렌더링이 되지 않는다._

<br/>

### **3**. Container Component에서 useState, 이벤트 정의 후 Presentational Component에서 가져와서 쓰기

**Presentational Component** (Test)

```jsx
import React from 'react';
import styled from 'styled-components';

const StyledTest = styled.div`
    width: 1280px;
    height: 720px;
    margin: 0 auto;
`;

const Test = (props) => {
    const { count, onIncrease } = props;
    return (
        <StyledTest>
            <p>{count}</p>
            <button onClick={onIncrease}>증가</button>
        </StyledTest>
    );
};
```

**Container Component** (TestContainer)

```jsx
import React, { useState } from 'react';
import Test from './Test.js';

const TestContainer = () => {
    const [count, setCount] = useState(0);
    const onIncrease = () => setCount((value) => value+1);
    return <Test count={count} onIncrease={onIncrease}>
}
```

**App.js**

```jsx
import React from 'react';
import TopbarContainer from './containers/TestContainer';

const App = () => {
    return <TestContainer />;
};

export default App;
```

<br/>

### **4**. 배열 State에 값 추가하기

**Presentational Component** (TodoList)

```jsx
import React from 'react';
import styled from 'styled-components';

const StyledTodoList = styled.div`
    width: 1280px;
    height: 720px;
    margin: 0 auto;
`;

const TodoList = ({ changeInputData, addTodo, todoList }) => {
    return (
        <StyledTodoList>
            <form action="">
                <input type="text" name="subject" onChange={changeInputData} />
                <button type="button" onClick={addTodo}>
                    추가
                </button>
            </form>
            <ul>{todoList}</ul>
        </StyledTodoList>
    );
};
```

**Container Component** (TodoListContainer)

```jsx
import React, { useState } from 'react';
import Test from './TodoList.js';

const TodoListContainer = () => {
    const [todos, setTodos] = useState(['공부하자']);
    const [subject, setSubject] = useState();

    const changeInputData = (e) => setSubject(e.target.value);
    const addTodo = (e) => {
        e.preventDefault(); // form 태그 안에 있어서 클릭하면 form태그의 이벤마저 실행되기에 추가
        setTodos([...todos, subject]);
    };

    const todoList = todos.map((todo) => <li>{todo}</li>);

    return (
        <TodoList
            todoList={todoList}
            changeInputData={changeInputData}
            addTodo={addTodo}
        />
    );
};
```

**App.js**

```jsx
import React from 'react';
import TodoListContainer from './containers/TodoListContainer';

const App = () => {
    return <TodoListContainer />;
};

export default App;
```

---

### **참고 링크**

-   [[React hooks 이해] #1편​. useState, useEffect](https://youtu.be/y52Av3JxNW4)
-   [React Hooks : useState() 함수](https://xiubindev.tistory.com/97)
