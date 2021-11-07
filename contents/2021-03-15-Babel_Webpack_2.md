---
date: '2021-03-15'
title: '[Webpack] Babel & Webpack ② : Babel'
categories: ['JavaScript', 'Webpack']
thumbnail: './background_webpack.png'
---

# Babel & Webpack ② : Webpack

## **1.** Webpack 설치

```sh
$ npm i --save-dev webpack webpack-cli
```

## **2.** babel-loader 설치

Webpack이 모듈을 번들링할 때 Babel을 사용하여 ES6+ 코드를 ES5코드로 트랜스파일링하도록 `babel-loader` 설치

```sh
$ npm i --save-dev babel-loader
```

## **3.** webpack.config.js

`webpack.config.js`은 Webpack이 실행될 때 참조하는 설정 파일

-   프로젝트 폴더 루트에 `webpack.config.js`를 생성

    ```js
    import path from 'path';

    const __dirname = path.resolve();
    const config = {
        // entry file
        entry: './public/js/index.js',
        // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
        output: {
            path: path.resolve(__dirname, './public/dist/js'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [path.resolve(__dirname, 'public/js')],
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                            ],
                        },
                    },
                },
            ],
        },
        devtool: 'source-map',
        // https://webpack.js.org/concepts/mode/#mode-development
        mode: 'development',
    };

    export default config;
    ```

    여기까지 작성했다면, **Webpack**을 실행하여 트랜스파일링 및 번들링을 실행.

    _현재 package.json의 scripts 부분_

    ```json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon app.js",
        "build:babel": "babel public/js -w -d dist/js",
        "build:webpack": "webpack -w"
    }
    ```

    -   `npm run build:webpack` 으로 실행  
         테스트 이미지 (아주 잘됨)  
         <br/>
        <img src="https://user-images.githubusercontent.com/33610315/111123729-0980ac80-85b3-11eb-942a-3b1b901b0273.png" width="500">
    -   이 코드는 참고 자료(링크)와 **다른 코드**.  
         현재 package.json의 type에 module을 쓰고있기에 그에 따라 변경함.

## **4.** babel-polyfill

Babel을 사용하여 ES6+ 코드를 ES5 이하로 트랜스파일링하여도 브라우저가 지원하지 않는 코드가 남아 있을 수 있음.  
ES6에서 추가된 _Promise, Object.assign, Array.from_ 등은  
ES5 이하로 트랜스파일링하여도 대체할 ES5 기능이 없기 때문에 그대로 남아 있다.

그러므로, 오래된 브라우저에서도 ES6+에서 새롭게 추가된 객체나 메소드를  
사용하기 위해서 `@babel/polyfill`을 설치해야한다.

```sh
$ npm i @babel/polyfill
```

-   **[!!]** `@babel/polyfill`은 개발 환경에서만 사용하는 것이 아님!!  
     실제 환경에서도 사용하여야 하므로 --save-dev 옵션으로 개발 설치하면 안됨!
-   ES6의 import를 사용하는 경우에는 _진입점의 선두_ 에서 먼저 폴리필을 로드해야함!

    -   일반 (babel만 사용 시)
        ```js
        // public/js/index.js
        import '@babel/polyfill';
        // ...
        ```
    -   webpack 사용 시 (entry 배열에 추가)

        ```js
        // webpack.config.js
        import path from 'path';
        const __dirname = path.resolve();

        module.exports = {
        // entry files
        entry: ['@babel/polyfill', './public/js/index.js'],
        // ...
        ```

    -   테스트 이미지 (webpack 사용)  
         <img src="https://user-images.githubusercontent.com/33610315/111125366-e525cf80-85b4-11eb-9e52-b302ef764c18.png" width="700">

## **5.** Sass 컴파일

Webpack을 통해 Sass를 컴파일하는 방법?

-   Sass를 컴파일한 결과물인 css를 bundle.js 파일에 포함시키는 방법과 별도의 css 파일로 분리하는 방법이 있음.

**1)** 컴파일된 css를 bundle.js 파일에 포함시키는 방법  
1-1) 설치

```sh
$ npm i node-sass style-loader css-loader sass-loader --save-dev
```

-   필요한 패키지는 `node-sass`, `style-loader`, `css-loader`, `sass-loader`
-   node-sass는 node.js 환경에서 사용할 수 있는 Sass 라이브러리.  
     실제로 Sass를 css로 컴파일하는 것은 node-sass.
    -   **[!!]** 난 `sass` 모듈을 사용하고 있었는데, `node-sass`를 대신 할 수 있을지도?  
         실험 결과, node-sass 없어도 됨!!
-   style-loader, css-loader, sass-loader는 Webpack 플러그인

1-2) webpack.config.js 파일 수정

```js
import path from 'path';

const __dirname = path.resolve();
const config = {
    // entry file
    entry: [
        '@babel/polyfill',
        './public/js/index.js',
        './public/sass/index.scss',
    ],
    // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
    output: {
        path: path.resolve(__dirname, './public/dist/js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'public/js')],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
                exclude: /node_modules/,
            },
        ],
    },
    devtool: 'source-map',
    // https://webpack.js.org/concepts/mode/#mode-development
    mode: 'development',
};

export default config;
```

-   테스트 이미지
    <br/>
    <img src="https://user-images.githubusercontent.com/33610315/111130433-8fecbc80-85ba-11eb-94a4-8012588342a5.png" width="700"/>  
     <br/>
    아주 잘된다!

<br/>

**2)** 컴파일된 css를 별도의 CSS 파일로 분리하는 방법  
Sass 파일이 방대해지면 자바스크립트 파일에서 분리하는 것이 효율적임  
bundle.js 파일에 컴파일된 css를 포함시키지 말고 별도의 css 파일로 분리해서 하나의 파일로 번들링함.  
이때 사용하는 플러그인은 ` mini-css-extract-plugin`

2-1) 설치

```sh
$ npm i --save-dev mini-css-extract-plugin
```

2-2) webpack.config.js 파일 수정

```js
import path from 'path';
// MiniCssExtractPlugin, 컴파일된 css를 별도의 CSS 파일로 분리할 때 사용
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = path.resolve();
const config = {
    // entry file
    entry: [
        '@babel/polyfill',
        './public/js/index.js',
        './public/sass/index.scss',
    ],
    // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'js/bundle.js',
    },
    plugins: [
        // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
        new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'public/js')],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    // 'style-loader', // creates style nodes from JS strings   (컴파일된 css를 bundle.js 파일에 포함시킬때 사용)
                    MiniCssExtractPlugin.loader, // 컴파일된 css를 별도의 CSS 파일로 분리할 때 사용
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
                exclude: /node_modules/,
            },
        ],
    },
    devtool: 'source-map',
    // https://webpack.js.org/concepts/mode/#mode-development
    mode: 'development',
};

export default config;
```

-   테스트 이미지

      <img src="https://user-images.githubusercontent.com/33610315/111134290-d17f6680-85be-11eb-8002-67a8878dfd81.png" width="600"/>      
      <br/>
      <img src="https://user-images.githubusercontent.com/33610315/111134522-0db2c700-85bf-11eb-9078-867a1ddbca26.png" />

    아주 잘된다. 이제 CSS 파일 HTML에 로드하면 깔끔!  
     <img src="https://user-images.githubusercontent.com/33610315/111134120-a4cb4f00-85be-11eb-8ed0-7368b8df28dd.png"/>

<hr/>

### 참고 자료

-   [Babel과 Webpack을 이용한 ES6 환경 구축 ②](https://poiemaweb.com/es6-babel-webpack-2)
