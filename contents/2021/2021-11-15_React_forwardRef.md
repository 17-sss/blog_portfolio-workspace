---
date: '2021-11-15'
title: 'forwardRef๊ฐ ๋ญ๊น?'
categories: ['JavaScript', 'React']
thumbnail: '../images/background_react.png'
---

## ๐ค forwardRef๊ฐ ๋ญ๊น

### 1. ์ฌ์ฉํ๊ธฐ ์ ์, ์ด๊ฑด ์ ์ฌ์ฉํด์ผ ํ ๊น?

- ๋ฆฌ์กํธ์ ์ปดํฌ๋ํธ๋ ์บก์ํ์ ํน์ง์ ๊ฐ์ง๊ณ  ์๋ค.  
   ์ปดํฌ๋ํธ ์์ฒด์ ์์ง๋๋ฅผ ๋์ด๊ณ  ์์กด๋๋ฅผ ๋ฎ์ถ๊ธฐ ์ํด ์บก์ํ.
- ์บก์ํ๋ฅผ ํตํด ์ปดํฌ๋ํธ์ ๋ด๋ถ ๋ก์ง์ด๋ ์ํ๋ ๋ธ์ถ๋์ง ์๋๋ค.
- ์ผ๋ฐ์ ์ผ๋ก ์ฌ์ฉํ๋ ์ชฝ์ DOM์ ๋ ๋๋ง ๋  HTML๋ง ํ์๋ก ํ๋ฉฐ, ref ๊ฐ์ ๊ฐ์ฒด๋ ํ์๋ก ํ์ง ์๋๋ค.
  - ํจ์๋ฅผ ๊ตฌํํ ๋๋ ๋ถ๋ชจ ์ปดํฌ๋ํธ๋ ์์์ ์ํ๋ฅผ ์์ง ๋ชปํ๊ณ  ํจ์๋ง ๋ด๋ ค์ค ๋ฟ์ด๋ค.
  - ref ๊ฐ์ฒด๋ props์ ๋น์ทํ๊ฒ ์ ๋ฌํ๋ค. ref๋ props์๋ ๋ค๋ฅด๊ฒ key์ ์์ฑ๊ณผ ๋น์ทํ๋ค.
    - key๋ ์ปดํฌ๋ํธ์ ์์ฑ์ผ๋ก ์์ฑํด๋ ๋ด๋ ค๊ฐ์ง ์๋๋ค.
  - ref๋ `React.forwardRef()`๋ฅผ ํตํด ํ์ ์ปดํฌ๋ํธ๋ก ์ ๋ฌ ํ  ์ ์๋ค.

### 2. ์ฌ์ฌ์ฉ์ฑ์ด ๋์ ์ปดํฌ๋ํธ์ธ "NormalGridList" ์ปดํฌ๋ํธ์ ref๋ฅผ ์ ๋ฌํ๊ณ  ์ถ์๋ฐ ์ ์๋ฌ..?

- ์ด ์ปดํฌ๋ํธ๋ฅผ ํธ์ถํ๋ ์ปดํฌ๋ํธ์์ ref๋ฅผ ์ ๋ฌํ๋ คํ๋๋ ์๋ฌ.  
   (**๋ถ๋ชจ ์ปดํฌ๋ํธ๋ก๋ถํฐ ํ์ ์ปดํฌ๋ํธ๋ก ref๋ฅผ ์ ๋ฌํ๋ คํ  ๋ ๋ฐ์**)

  - `forwardRef`๋ฅผ ์ฌ์ฉํ๋ผ๋ ์๋ฌ๋ฉ์ธ์ง๊ฐ ๋ฐ์
  - ์ ๋ฐ์ํ๋๊ฑธ๊น? (๋ ํจ์ํ ์ปดํฌ๋ํธ๋ง์ ์ฌ์ฉํ์ฌ ์์ํ๋ค. ์์๋ณด๋..)

    - **"ํจ์ํ ์ปดํฌ๋ํธ"๋ ์ ์ด์ ref ๊ฐ ์กด์ฌํ์ง ์๋๋ค!!! ๐ญ**
    - "ํด๋์คํ ์ปดํฌ๋ํธ"์ ๊ฒฝ์ฐ ref ๊ฐ์ฒด๋ ๋ง์ดํธ๋ ์ปดํฌ๋ํธ์ ์ธ์คํด์ค๋ฅผ _current_ ํ๋กํผํฐ ๊ฐ์ผ๋ก์ ๋ฐ๋๋ค.
    - ์ฐธ๊ณ  ์ด๋ฏธ์ง ([React ๊ณต์ : Ref์ DOM](https://ko.reactjs.org/docs/refs-and-the-dom.html))

    > ์ด๋ฌํ ๊ฒฝ์ฐ ๋๋ฌธ์ `forwardRef` ๋ฅผ ์ฌ์ฉํ๋ผ๋ ๊ฒ ๊ฐ๋ค!

- `forwardRef`?

  - ์ผ๋ถ ์ปดํฌ๋ํธ์์ ์์ฑํ <u>ref</u>๋ฅผ ์กฐ๊ธ ๋ ์๋๋ก ์ ๋ฌ(์ ์ก)ํ  ์ ์๋ ์ตํธ์ธ ๊ธฐ๋ฅ
  - `forwardRef`๋ฅผ ์ฌ์ฉํ๋ฉด ๋ถ๋ชจ ์ปดํฌ๋ํธ๋ก๋ถํฐ ํ์ ์ปดํฌ๋ํธ๋ก <u>ref</u>๋ฅผ ์ ๋ฌํ  ์ ์์!
  - ์ ๋ฌ๋ฐ์ ref๋ฅผ HTML ์์์ ์์ฑ์ผ๋ก ๋๊ฒจ์ค์ผ๋ก์จ ํจ์ ์ปดํฌ๋ํธ ์ญ์ <u>ref</u>๋ฅผ ํตํ ์ ์ด๊ฐ ๊ฐ๋ฅ!

- "NormalGridList" ์ปดํฌ๋ํธ ๋ฆฌํฉํ ๋ง

  - ์์  ์ฝ๋

    ```tsx
    import { FunctionComponent } from 'react';
    import * as S from './style';

    const NormalGridList: FunctionComponent = function ({ children, ...props }) {
      return <S.NormalGridListLayout {...props}>{children}</S.NormalGridListLayout>;
    };

    export default NormalGridList;
    ```

  - ๋ฆฌํฉํ ๋ง

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

    - ํ์์คํฌ๋ฆฝํธ๋ฅผ ์ฌ์ฉํ๋ค๋ณด๋ ๋ ํด๋งธ๋ค. forwardRef๋ก ๊ฐ์ธ์ ์ปดํฌ๋ํธ ๋ฆฌํดํ์ง๋ง props๊ฐ ๊ณ์ ๋ฐ์์ง์ง ์๋ ํ์์ด ์์๋ค.
      - ๋น์ `forwardRef<HTMLUListElement>` ์ด๋ ๊ฒ๋ง ์ฌ์ฉํ์๋๋ฐ ์์๋ณด๋ `forwardRef`์ ์ ๋ค๋ฆญ์ ๋๋ฒ์งธ ์ธ์๋ก Prop์ ํ์์ด ๋ค์ด๊ฐ์ผ ์ํํ ๋์ํ๋ค!

  - ๋ฆฌํฉํ ๋ง (์ถ๊ฐ)

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

    - `NormalGridListProps` ๋ `React.HTMLProps<HTMLUListElement>` ์ผ๋ก  
      ์ค์ ๋์ด์์๋๋ฐ, ์ด๋ ๊ฒํ๋ฉด `{...props}`๋ฅผ ์ ๋๋ก ์ ๋ฌํ์ง ๋ชปํ๋ ํ์์ด ์๋ค..
    - `HTMLProps` ๊ฐ ์๋ **`HTMLAttributes`** ๋ก ๋ณ๊ฒฝํ์ฌ ์ ์ฉํ์๋๋ ํด๊ฒฐ๋จ!

<br/>

> ์ด๋ ๊ฒ ๋ฆฌํฉํ ๋งํ์์ง๋ง.. ์ธ ํ์๊ฐ ๊ฐ์๊ธฐ ์์ด์ก์ง. ๋ค์์ ํ๋ฒ ์จ๋ณด๊ธฐ์ํด์ ๋ฉ๋ชจ!

---

**์ฐธ๊ณ ์๋ฃ**

- React
  - [React ๊ณต์ : Ref์ DOM](https://ko.reactjs.org/docs/refs-and-the-dom.html)
  - [React ๊ณต์ : Forwarding Refs](https://ko.reactjs.org/docs/forwarding-refs.html)
  - [Using a forwardRef component with children in TypeScript](https://stackoverflow.com/questions/54654303/using-a-forwardref-component-with-children-in-typescript)
  - [Forwarding React Refs with TypeScript](https://www.carlrippon.com/react-forwardref-typescript/)
  - [Ref Forwarding](https://jooonho.com/react/2020-09-20-refForwarding/)
