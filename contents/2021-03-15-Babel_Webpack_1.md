---
date: '2021-03-15'
title: '[Webpack] Babel & Webpack ① : Babel'
categories: ['JavaScript', 'Webpack']
thumbnail: './background_webpack.png'
---

# Babel & Webpack ① : Babel

## **1.** Babel CLI 설치

-   `babel-core`, `babel-cli` 설치
    ```sh
    $ npm i --save-dev @babel/core @babel/cli
    ```

## **2.** babelrc 설정 파일 작성

-   env preset 설치
    ```sh
    $ npm i --save-dev @babel/preset-env
    ```
-   지금 설치한 프로젝트 루트에 `.babelrc` 파일 생성
    ```json
    {
        "presets": ["@babel/preset-env"]
    }
    ```

## **3.** 트랜스파일링

-   npm script를 사용하여 트랜스파일링
    ```json
    {
        "scripts": {
            "build:babel": "babel public/js -w -d public/dist/js"
        }
    }
    ```
    -   _package.json의 scripts 부분_
    -   위 npm script는 src/js 폴더(타깃 폴더)에 있는 모든 ES6+ 파일들을 트랜스파일링한 후,  
         그 결과물을 dist/js 폴더에 저장한다.
        -   사용한 옵션의 의미
            ```
            -w
                타깃 폴더에 있는 모든 파일들의 변경을 감지하여 자동으로 트랜스파일한다.
                (--watch 옵션의 축약형)
            -d
                트랜스파일링된 결과물이 저장될 폴더를 지정한다.
                (--out-dir 옵션의 축약형)
            ```

## **4.** Babel 플러그인

-   클래스 필드 정의 제안 플러그인 (Babel 사이트에서 "Class field" 검색)

    -   트랜스파일링 할 때 아래 예시 코드처럼 에러나는 부분이 있음.  
         그럴 경우 플러그인 검색해서 설치 후 해결

    ```js
    // src/js/lib.js
    // ES6 모듈
    export const pi = Math.PI;

    export function power(x, y) {
        // ES7: 지수 연산자
        return x ** y;
    }

    // ES6 클래스
    export class Foo {
        // stage 3: 클래스 필드 정의 제안
        #private = 10; // 여기서 에러발생 (아래 로그 참고) -----------------------

        foo() {
            // stage 4: 객체 Rest/Spread 프로퍼티
            const { a, b, ...x } = { ...{ a: 1, b: 2 }, c: 3, d: 4 };
            return { a, b, x };
        }

        bar() {
            return this.#private;
        }
    }
    ```

    에러 로그

    ```sh
    SyntaxError: C:\Users\Administrator\Desktop\Develop\Develop_File\Study\CodeSquad\FE08\06 (FreeStyle)\fe-w6-free-style\public\js\.babel_test\lib.js: Support for the experimental syntax 'classPrivateProperties' isn't currently enabled (13:5):

    11 | export class Foo {
    12 |     // stage 3: 클래스 필드 정의 제안
    > 13 |     #private = 10;
        |     ^
    14 |
    15 |     foo() {
    16 |         // stage 4: 객체 Rest/Spread 프로퍼티
    ```

    -   이 에러는
        `@babel/preset-env`는 현재 제안 단계에 있는 사양에 대한  
         플러그인을 지원하지 않기 때문에 발생한 에러임.  
         현재 제안 단계에 있는 사양을 지원하려면 별도의 플러그인을 설치해야 함.

    위 에러를 해결하려면..

    ```sh
    $ npm i --save-dev @babel/plugin-proposal-class-properties
    ```

    설치 후, `.babelrc`파일에 추가

    ```json
    {
        "presets": ["@babel/preset-env"],
        "plugins": ["@babel/plugin-proposal-class-properties"]
    }
    ```

## **5.** 브라우저 모듈 로딩 테스트

-   모듈 기능은 node.js 환경에서 동작한 것이고 Babel이 모듈을 트랜스파일링한 것도  
     node.js가 기본 지원하는 CommonJS 방식의 module loading system에 따른 것임.

    ```js
    // dist/js/main.js
    'use strict';

    var _lib = require('./lib');

    console.log(_lib.pi);
    console.log((0, _lib.power)(_lib.pi, _lib.pi));
    var f = new _lib.Foo();
    console.log(f.foo());
    console.log(f.bar());
    ```

    에러 예시

    ```html
    <!DOCTYPE html>
    <html>
        <body>
            <script src="dist/js/lib.js"></script>
            <script src="dist/js/main.js"></script>
        </body>
    </html>
    ```

    -   이 HTML을 브라우저에서 실행하면..

    에러 로그

    ```sh
    Uncaught ReferenceError: exports is not defined
        at lib.js:3
    main.js:3 Uncaught ReferenceError: require is not defined
        at main.js:3
    ```

    이렇게 트랜스파일링된 코드는  
     브라우저에서 CommonJS 방식의 module loading system(require 함수)을  
     지원하지 않으므로 그대로 브라우저에서 실행하면 에러가 발생

<hr/>

### 참고 자료

-   [Babel과 Webpack을 이용한 ES6 환경 구축 ①](https://poiemaweb.com/es6-babel-webpack-1)
