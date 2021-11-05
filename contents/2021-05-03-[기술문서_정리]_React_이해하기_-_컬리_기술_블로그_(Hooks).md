---
date: '2021-05-03'
title: '[Tech Article] React 이해하기 - 컬리 기술 블로그 : Hooks'
categories: ['Tech Article']
thumbnail: './_background_tech_article.jpg'
---

# 기술 문서 읽기 챌린지 [2021년 5월 3일]

## **React 이해하기 - 컬리 기술 블로그 : Hooks**

**리액트의 functional 컴포넌트에서 state를 사용하기 위해서는..?**

-   useState hook을 사용하면 됨

    ```jsx
    function TextField() {
        const [text, setText] = useState('');
        const [isBlank, setIsBlank] = useState(false);

        function handleChange(e) {
            setText(e.target.value);
            setIsBlank(e.target.value !== '');
        }

        return (
            <>
                <input type="text" onChange={handleChange} />
                <span>{text}</span>
                <HelperText isBlank={isBlank} />
            </>
        );
    }
    ```

**보통 class 컴포넌트에서 상태 관련 로직을 여러 컴포넌트에서 재사용하기 위해서는..**

-   high-order component(HOC)와 render props를 이용해야 함.
-   HOC와 render props는 컴포넌트를 감싸는 wrapper를 새로 생성해야 하는 단점이 있음.  
    그렇다 보니 아래 예제 코드처럼 HOC로 감싸고,  
    render props wrapper 컴포넌트로 또 감싸는 wrapper hell이 되는 경우가 발생

    ```jsx
    function with1(WrappedComponent) {
        return class extends React.Component {
            componentDidUpdate(prevProps) {
                // do something
            }
            render() {
                return <WrappedComponent {...this.props} />;
            }
        };
    }

    const EnhancedComponent = with1(with2(with3(WrappedComponent)));
    ```

    -   그래서 **Hook은 별도의 wrapper 없이 상태 관련 로직을 공유할 수 있도록 구현**되었다 함.

**hooks의 useReducer**

-   redux의 reducer를 좋아하는 사람을 위해 useReducer도 사용할 수 있게 만듬  
     (reducer를 구현한 custom hook을 기본 API로 제공)

    ```jsx
    function reducer(state, action) {
        switch (action.type) {
            case 'changeText':
            const text = action.payload;
            return { text, isBlank: text !== '' };
            default:
            throw new Error();
        }
    }

    function TextField() {
        const [state, dispatch] = React.useReducer(reducer, { text: "", isBlank: false });

        function handleChange(e) {
            dispatch({ type: 'changeText', payload: e.target.value });
        }

        return (...);
    }
    ```

**useMemo를 사용해서 최적화하는 방식을 사용할 수도 있음**

```jsx
function TextField() {
    const [text, setText] = useState('');
    const isBlank = React.useMemo(() => text !== '', [text]);

    function handleChange(e) {
        setText(e.target.value);
    }

    return (...);
}
```

-   class 컴포넌트에서 사용한 PureComponent는 memo를 사용하면 props 얕은 비교를 통해 동일하게 동작.
    ```jsx
    const HelperText = React.memo(function HelperText({ isBlank }) {
        return <span>{isBlank ? '작성 중' : '작성해 주세요'}</span>;
    });
    ```

### 느낀점

-   class형 컴포넌트에서 쓰이는 모든 것들은 아직은 모르겠다. 항상 hooks만 써서 그러나..?  
     이 기술문서에서는 대체적으로 class형과 functional 컴포넌트를 비교하는 기술문서 같다!  
     대략적으로 어떻게 돌아가는지 조금이나마 알 수 있었던 문서이지만,
    `useReducer` `useMemo` 에 대해선 한번 공부해보자!!

<br/>

**참고 링크**

-   [React 이해하기 - 컬리 기술 블로그 : Hooks](https://helloworld.kurly.com/blog/thinking-in-react/#hook)
-   [React Hooks vs. Redux: Do Hooks and Context replace Redux?](https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/)
    -   Dico가 준 참고용 블로그!
    -   `useContext`랑 `useReducer`에 대한 예시가 잘 나와있음!
