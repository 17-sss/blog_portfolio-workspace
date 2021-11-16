---
date: '2021-11-15'
title: 'forwardRef가 뭘까?'
categories: ['JavaScript', 'React']
thumbnail: './background_react.png'
---

## 🤔 forwardRef가 뭘까

### [1] 사용하기 전에, 이건 왜 사용해야 할까?

- 리액트의 컴포넌트는 캡슐화의 특징을 가지고 있다.  
   컴포넌트 자체의 응집도를 높이고 의존도를 낮추기 위해 캡슐화.
- 캡슐화를 통해 컴포넌트의 내부 로직이나 상태는 노출되지 않는다.
- 일반적으로 사용하는 쪽은 DOM에 렌더링 될 HTML만 필요로 하며, ref 같은 객체는 필요로 하지 않는다.
  - 함수를 구현할때도 부모 컴포넌트는 자식의 상태를 알지 못하고 함수만 내려줄 뿐이다.
  - ref 객체도 props와 비슷하게 전달한다. ref는 props와는 다르게 key의 속성과 비슷하다.
    - key는 컴포넌트의 속성으로 작성해도 내려가지 않는다.
  - ref는 `React.forwardRef()`를 통해 하위 컴포넌트로 전달 할 수 있다.

### [2] 재사용성이 높은 컴포넌트인 "NormalGridList" 컴포넌트에 ref를 전달하고 싶은데 왜 에러..?

- 이 컴포넌트를 호출하는 컴포넌트에서 ref를 전달하려했더니 에러.  
   (**부모 컴포넌트로부터 하위 컴포넌트로 ref를 전달하려할 때 발생**)

  - `forwardRef`를 사용하라는 에러메세지가 발생
  - 왜 발생하는걸까? (난 함수형 컴포넌트만을 사용하여 작업한다. 알아보니..)

    - **"함수형 컴포넌트"는 애초에 ref 가 존재하지 않는다!!! 😭**
    - "클래스형 컴포넌트"의 경우 ref 객체는 마운트된 컴포넌트의 인스턴스를 _current_ 프로퍼티 값으로서 받는다.
    - 참고 이미지 ([React 공식 : Ref와 DOM](https://ko.reactjs.org/docs/refs-and-the-dom.html))

    > 이러한 경우 때문에 `forwardRef` 를 사용하라는 것 같다!

- `forwardRef`?

  - 일부 컴포넌트에서 생성한 <u>ref</u>를 조금 더 아래로 전달(전송)할 수 있는 옵트인 기능
  - `forwardRef`를 사용하면 부모 컴포넌트로부터 하위 컴포넌트로 <u>ref</u>를 전달할 수 있음!
  - 전달받은 ref를 HTML 요소의 속성으로 넘겨줌으로써 함수 컴포넌트 역시 <u>ref</u>를 통한 제어가 가능!

- "NormalGridList" 컴포넌트 리팩토링

  - 예전 코드

    ```tsx
    import { FunctionComponent } from 'react';
    import * as S from './style';

    const NormalGridList: FunctionComponent = function ({ children, ...props }) {
      return <S.NormalGridListLayout {...props}>{children}</S.NormalGridListLayout>;
    };

    export default NormalGridList;
    ```

  - 리팩토링

    ```tsx
    import { forwardRef } from 'react';
    import * as S from './style';

    export type NormalGridListProps = React.HTMLProps<HTMLUListElement>;
    export const NormalGridList = forwardRef<HTMLUListElement, NormalGridListProps>((props, ref) => {
      return (
        <S.NormalGridListLayout {...{ props }} ref={ref}>
          {props.children}
        </S.NormalGridListLayout>
      );
    });
    export default NormalGridList;
    ```

    - 타입스크립트를 사용하다보니 또 해맸다. forwardRef로 감싸서 컴포넌트 리턴하지만 props가 계속 받아지지 않는 현상이 있었다.
      - 당시 `forwardRef<HTMLUListElement>` 이렇게만 사용했었는데 알아보니 `forwardRef`의 제네릭의 두번째 인자로 Prop의 타입이 들어가야 원활히 동작한다!

  - 리팩토링 (추가)

    ```tsx
    import { forwardRef } from 'react';
    import * as S from './style';

    export type NormalGridListProps = React.HTMLAttributes<HTMLUListElement>;
    export const NormalGridList = forwardRef<HTMLUListElement, NormalGridListProps>((props, ref) => {
      return (
        <S.NormalGridListLayout {...props} ref={ref}>
          {props.children}
        </S.NormalGridListLayout>
      );
    });
    export default NormalGridList;
    ```

    - `NormalGridListProps` 는 `React.HTMLProps<HTMLUListElement>` 으로  
      설정되어있었는데, 이렇게하면 `{...props}`를 제대로 전달하지 못하는 현상이 있다..
    - `HTMLProps` 가 아닌 **`HTMLAttributes`** 로 변경하여 적용하였더니 해결됨!

<br/>

> 이렇게 리팩토링하였지만.. 쓸 필요가 갑자기 없어졌지. 다음에 한번 써보기위해서 메모!

---

**참고자료**

- React
  - [React 공식 : Ref와 DOM](https://ko.reactjs.org/docs/refs-and-the-dom.html)
  - [React 공식 : Forwarding Refs](https://ko.reactjs.org/docs/forwarding-refs.html)
  - [Using a forwardRef component with children in TypeScript](https://stackoverflow.com/questions/54654303/using-a-forwardref-component-with-children-in-typescript)
  - [Forwarding React Refs with TypeScript](https://www.carlrippon.com/react-forwardref-typescript/)
  - [Ref Forwarding](https://jooonho.com/react/2020-09-20-refForwarding/)
