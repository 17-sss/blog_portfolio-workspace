---
date: '2021-04-18'
title: '[React] customHook: useFetch & useInput'
categories: ['JavaScript', 'React']
thumbnail: '../images/background_react.png'
---

# React - customHook: useFetch & useInput

**customHook?**  
여러 컴포넌트에서 비슷한 기능을 공유할 경우, 이를 나만의 Hook으로 작성하여 로직을 재사용할 수 있음

## **[1]** useFetch

-   리액트에서는 Fetch (비동기 통신)을 사용하기 좀 까다로움.  
     그래서 customHook 만들어서 씀

### **1**. 코드 및 설명

**useFetch**

```jsx
import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetch = (url) => {
    // payload: 가져온 데이터를 넣을 state
    const [payload, setPayload] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const callUrl = async () => {
        try {
            const res = await Axios.get(url);
            const data = res.data;
            setPayload(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => callUrl(), []);

    return { payload, loading, error };
};

export default useFetch;
```

-   `const [payload, setPayload] = useState(null);`
    -   Axios를 통해 가져온 결과 값을 넣어주기위해 선언
-   `const [loading, setLoading] = useState(true);`
    -   데이터를 가져오는 중엔 `loading`은 true 상태.  
         (최초 선언 때는 true)
    -   데이터 가져오기가 완료되거나 에러가 발생하면 `loading`은 false 상태가 됨.
-   `const [error, setError] = useState('');`
    -   데이터를 가져오는 중에 오류가 발생하면 오류메시지를 넣을 state
-   `callUrl` 함수의 `finally` 부분은 try ~ catch 부분이 끝나면 마지막에 무조건 실행할 구문
-   `useEffect(() => callUrl(), [])`
    -   fetch 요청은 초기 렌더링 될 때만 할 때만 하면 됨.  
         그래서 useEffect의 두번째 인자에 빈 배열을 넣어줌
-   `return { payload, loading, error }`
    -   반환 값은 { payload, loading, error }  
         선언했던 모든 state를 반환해줌

**CustomFetchContainer**

```jsx
import React from 'react';
import CustomFetch from '../component/CustomFetch';
import useFetch from '../lib/customHook/useFetch';

const CustomFetchContainer = () => {
    const { payload, loading, error } = useFetch('https://aws.random.cat/meow');
    return <CustomFetch {...{ payload, loading, error }} />;
};

export default CustomFetchContainer;
```

-   useFetch를 써서 반환된 { payload, loading, error }를  
     프레젠테이션 컴포넌트인 CustomFetch에 전달

**CustomFetch**

```jsx
import React from 'react';

const CustomFetch = ({ payload, loading, error }) => {
    return (
        <div>
            {loading && <span>loading your cat</span>}
            {!loading && error && <span>{error}</span>}
            {!loading && payload && (
                <img src={payload.file} alt="cat" width="150" />
            )}
        </div>
    );
};

export default CustomFetch;
```

-   컨테이너 컴포넌트에서 보내준 { payload, loading, error }를 기반으로  
     상황에 따라 렌더링해주는 코드를 작성
    -   `loading`이 true일 시, loading 중이라는 문구를 렌더링
    -   `loading`이 false이며 `error`가 있을 시 error 메세지를 렌더링
    -   `loading`이 false이며 `payload`(데이터)가 있을 시 가져온  
         데이터 기반으로(파일명으로) 이미지를 렌더링

## **[2]** useInput

-   리액트에서 input 태그의 상태를 관리할 떄 약간 번거로움. customHook 생성

### **1**. 코드 및 설명

**useInput**

```jsx
import { useState } from 'react';

const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const onChange = ({ target }) => setValue(target.value);
    return { value, onChange };
};

export default useInput;
```

-   `const [value, setValue] = useState(defaultValue);`
    -   input 태그에 value 속성에 들어갈 state를 생성  
         (이 state는 input 태그의 value가 되는 것임.)
-   `const onChange = ({target}) => setValue(target.value);`
    -   input 태그의 onChange 이벤트에 들어갈 state 생성  
         (이 state는 input 태그의 onChange 이벤트가 되는 것임.)

**CustomInputContainer**

```jsx
import React from 'react';
import useInput from '../lib/customHook/useInput';
import CustomInput from '../component/CustomInput';

const CustomInputContainer = () => {
    const customHookInput = useInput('');
    return <CustomInput customHookInput={customHookInput} />;
};

export default CustomInputContainer;
```

-   `const customHookInput = useInput("");`
    -   useInput을 사용해 프레젠테이션 컴포넌트의 input 태그에 들어갈 속성을 생성

**CustomInput**

```jsx
import React from 'react';

const CustomInput = ({ customHookInput }) => {
    return <input name="custom" {...customHookInput} />;
};

export default CustomInput;
```

-   `<input name="custom" {...customHookInput} />`
    -   컨테이너 컴포넌트에서 보내준 customHookInput를 등록
    -   `<input name="custom" value={customHookInput.value} onChange={customHookInput.onChange} />`  
         풀어쓰면 이런 형태임!

---

### **참고 링크**

-   [리액트 Hooks 실제 사용 예시를 알아보자! | React Hooks for daily use!](https://youtu.be/sZDvByH2mNU)
