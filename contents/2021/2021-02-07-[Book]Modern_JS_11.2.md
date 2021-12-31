---
date: '2021-02-07'
title: '[JavaScript] 모던 자바스크립트 - 11장 프로미스와 비동기 프로그래밍 (2)'
categories: ['JavaScript']
thumbnail: '../images/background_js.png'
---

# 책) 모던 자바스크립트 - 11장 프로미스와 비동기 프로그래밍 (2)

## **11.2** 프로미스 기초

Promise는 비동기 연산의 결과를 위한 PlaceHolder다.  
아래 예제처럼 이벤트를 구독하거나 함수에 콜백을 전달하는 대신, Promise를 반환할 수 있다.

```js
// readFile이 앞으로 어떤 시점에 완료할 것을 약속함
let promise = readFile('exemple.txt');
```

-   이 코드에서 `readFile()`은 즉시 읽기를 시작하지 않음. 나중에 읽는다.  
     대신, 함수는 비동기 읽기 연산을 나타내는 프로미스 객체를 반환하므로 나중에 그 작업을 실행할 수 있다.  
     그 결과와 함께 언제 작업할 수 있는지는 전적으로 프로미스의 생명주기가 어떻게 종료되는지에 달려 있다.

<br/>

### **11.2.1** 프로미스 생명주기

각 프로미스는 비동기 연산이 아직 완료되지 않았음을 가리키는 보류(<span style="color: skyblue">pending</span>)상태에서 시작하여 짧은 생명주기를 통과한다.  
보류 프로미스는 미확정(un-settled) 상태로 간주된다.

-   _11.2_ 의 예제의 `readFile()`함수가 그 프로미스를 반환하는 시점에 보류 상태에 있게 된다.  
     비동기 연산이 완료되면 이 프로미스는 확정(settled)상태로 간주되고 _두 가지의 가능한 상태_ 중 하나가 된다.
    -   성공(<span style="color: green">Fulfilled</span>): 프로미스의 비동기 연산이 성공적으로 완료되었다.
    -   실패(<span style="color: magenta">Rejected</span>): 프로미스의 비동기 연산이 에러나 다른 이유 때문에 성공적으로 완료되지 않았다.
-   프로미스 내부의 `[[promiseState]]` 속성은 프로미스의 상태를 반영하여 "pending"이나 "fulfilled", "rejected"로 설정된다.  
     이 프로퍼티는 프로미스 객체에 노출되지 않으므로 프로그램적으로 어떤 상태를 정할 수 없다!  
     그러나 `then()`메서드를 사용하여 프로미스이 상태가 변경될 때 특정 동작을 취하도록 할 수 있다.

#### **1.** `then()` 메서드

then() 메서드는 모든 프로미스에 존재. 두 개의 인자를 받음.

-   **첫**번째, 프로미스가 성공했을 때 호출할 함수.  
     비동기 연산과 관련된 추가적인 데이터는 성공 함수로 전달된다.
-   **두**번째, 프로미스가 실패했을 시 호출할 함수.
    실패와 관련된 추가적인 데이터가 전달된다.
-   ▼ 예제의 3개의 `then()`은 모두 같은 프로미스에서 호출된다.

    ```js
    let promise = readFile('exemple.txt');

    // 성공과 실패를 모두 처리.
    promise.then(
        (contents) => {
            // 성공 시
            console.log(contents);
        },
        (err) => {
            // 실패 시
            console.error(err.message);
        },
    );

    // 성공만 처리
    promise.then((contents) => {
        // 성공 시
        console.log(contents);
    });

    // 실패만 처리
    promise.then(null, (err) => {
        // 실패 시
        console.error(err.message);
    });
    ```

#### **2.** `catch()` 메서드

프로미스는 실패 핸들러만 받는 `then()`과 동일하게 동작하는 `catch()`메서드를 가진다.  
`catch()`와 `then()`은 기능적으로 동일하다.

```js
promise.catch((err) => {
    // 실패 시
    console.error(err.message);
});

// 다음과 같음
promise.then(null, (err) => {
    // 실패 시
    console.error(err.message);
});
```

#### **3.** `then()` & `catch()` 메서드는 비동기 연산의 결과를 적절히 처리하기 위해 조합하여 사용하도록 의도되었다.

-   이 시스템은 연산이 성공했는지 실패했는지 명확하게 나타내기 때문에 이벤트와 콜백을 사용하는 것보다 낫다.  
     (이벤트는 에러가 있으면 발생하지 않고, 콜백은 항상 에러 인자 검사를 수행해야만 함..)
-   실패에 대한 로그만 남긴다하더라도 실패 핸들러는 항상 추가해야 한다!!  
     (실패 핸들러를 추가하지 않으면 실패 시 아무런 처리도 안되기에..)

#### **4.** 프로미스가 이미 확정 상태가 된 후 작업큐에 추가되었더라도 성공이나 실패 핸들러는 여전히 실행됨.

이는 언제나 새로운 성공 or 실패 핸들러를 추가할 수 있고 그에 대한 호출을 보장한다는 의미.

```js
let promise = readFile('exemple.txt');

// 원본 성공 핸들러
promise.then((contents) => {
    console.log(contents);

    // 또 다른 성공 핸들러 추가
    promise.then((contents) => {
        console.log(contents);
    });
});
```

-   이 코드는 성공 핸들러는 같은 프로미스에 또 다른 성공 핸들러를 추가함.  
     그 시점에 프로미스는 이미 성공했으므로 새로운 성공 핸들러는 작업큐에 추가.
    -   큐에서 다른 모든 실행중인 작업이 완료될 때 호출한다. (실패도 마찬가지)

<br/>

### **11.2.2** 미확정 프로미스 만들기

#### **1.** Promise 생성자 사용

이 생성자는 프로미스 초기화 코드를 포함하는 실행자(executor) 함수 하나를 인자로 받는다.  
이 실행자에는 `resolve()` 와 `reject()` 라 명명된 두 함수가 인자로 전달된다.

-   `resolve()` 함수는 프로미스의 실행자가 성공적으로 실행 완료되었을 때 처리될 준비가 되었다는 신호를 보내기 위해 호출됨
-   `reject()` 함수는 실행자가 실패했음을 나타냄.
-   ▼ 예제는 비동기 호출인 Node.js와 fs.readFile()를 프로미스가 감싸고 있음.  
     실행자는 `reject()` 함수에 에러 객체를 전달하거나 `resolve()` 함수에 파일 콘텐츠를 전달함.

    ```js
    // Node.js 예제
    let fs = require('fs');
    function readFile(filename) {
        return new Promise((resolve, reject) => {
            // 비동기 연산 수행
            fs.readFile(filename, { encoding: 'utf8' }, (err, contents) => {
                // 에러검사
                if (err) {
                    reject(err);
                    return;
                }
                // 성공시 수행
                resolve(contents);
            });
        });
    }

    let promise = readFile('exemple.txt');
    // 성공과 실패 모두 대응
    promise.then(
        (contents) => {
            // 성공 시
            console.log(contents);
        },
        (err) => {
            // 실패 시
            console.error(err.message);
        },
    );
    ```

    -   `readFile()`이 호출되는 즉시 실행자가 실행된다.
    -   `resolve()` 나 `reject()`가 실행자 내에서 호출되면 프로미스를 처리하기 위해 작업큐에 작업이 추가된다.  
         이를 **작업 스케줄링**이라고 부른다.  
         `setTimeout()` `setInteval()`과 약간 유사.  
         작업 스케줄링에서는 "지금 바로 실행하는 게 아니라 나중에 실행해"라고 하기 위해 작업큐에 새로운 작업을 추가한다.

-   `resolve()`는 비동기 연산을 작동시킨다.  
     `then()`과 `catch()`에 전달된 함수는 작업큐에 추가되기에 비동기로 실행됨.

    ```js
    let promise = new Promise((resolve, reject) => {
        console.log('Promise');
        resolve();
    });

    promise.then(() => {
        console.log('Resolved.');
    });
    console.log('HI');

    /* 
        - 출력 순서
            Promise
            HI
            Resolved.
    */
    ```

    -   `then()` 호출이 `console.log('HI')`보다 앞에 있지만, (실행자와 달리) 바로 실행되지 않음!!  
         그 이유는 **실행자가 실행을 완료한 후 성공과 실패 핸들러가 항상 작업큐 맨 뒤에 추가되기 때문**.

<br/>

### **11.2.3** 확정 프로미스 만들기

Promise 생성자는 미확정 프로미스를 만들기 위한 최적의 방법이며, 이는 프로미스 실행자가 실행을 동적으로 하는 특징 때문이다.  
그러나 프로미스가 한가지 값만 표현하기를 원한다면, 단순히 `resolve()` 함수에 값을 전달하는 작업을 스케줄링하는 것은 의미가 없음.  
대신 특정 값이 주어진 확정 프로미스를 만들기 위해 두 메서드 중 하나를 선택하여 사용할 수 있다.

#### **1.** Promise.resolve() 사용하기

`Promise.resolve()` 메서드는 하나의 인자를 받고 성공 상태의 프로미스를 반환한다.  
이는 작업 스케줄링이 일어나지 않는다는 의미. 값을 얻기 위해서는 프로미스에 하나 이상의 성공 핸들러를 추가할 필요가 있다.

```js
let promise = Promise.resove(42);

promise.then((value) => {
    console.log(value); // 42
});
```

-   이 코드는 성공한 프로미스를 만들기 때문에 성공 핸들러는 value에서 42를 얻는다.  
     만약 실패 핸들러가 이 프로미스에 추가되었다면, 절대로 실패한 상태가 되지 않기에 호출되지 않을 것.

#### **2.** Promise.reject() 사용하기

`Promise.reject()` 메서드를 사용하여 실패한 프로미스를 만들 수 있음.  
이는 실패한 상태로 프로미스를 만드는 것만 제외하면 `Promise.resolve()`와 유사하게 동작함.

```js
let promise = Promise.reject(42);

promise.catch((value) => {
    console.log(value); // 42
});
```

-   이 프로미스에 추가된 실패 핸들러는 어떤 것이든 호출되지만 성공 핸들러는 호출되지 않을 것.
    > Promise.resolve() 나 Promise.reject() 메서드 중 하나에 프로미스를 전달하면 그 프로미스는 변경없이 그대로 반환됨!

#### **3.** 프로미스가 아닌 대너블

`Promise.resolve()`와 `Promise.reject()` 둘 다 인자로 프로미스가 아닌 대너블(thenable)도 받을 수 있다.  
프로미스가 아닌 대너블이 전달되면 이 메서드는 `then()` 함수 이후에 호출되는 새로운 프로미스를 만든다.

-   프로미스가 아닌 대너블은 resolve와 reject 인자를 받는 then() 메서드를 가진 객체임.
    ```js
    let thenable = {
        then: function (resolve, reject) {
            resolve(42);
        },
    };
    // 이 예제에서는 thenable 객체는 `then()` 메서드 외에 프로미스와 관련된 특징이 없다.
    ```
-   thenable을 성공한 프로미스로 변경하기 위해 `Promise.resolve()`를 호출할 수 있다.

    ```js
    let thenable = {
        then: function (resolve, reject) {
            resolve(42);
        },
    };

    let p1 = Promise.resolve(thenable);
    p1.then(function (value) {
        console.log(value); // 42
    });
    ```

    -   이 코드에서 `Promise.resolve()`는 `thenable.then()`을 호출하여 프로미스 상태를 결정할 수 있음.  
         thenable의 프로미스는 성공한 상태가 되는데 이는 `then()`메서드 내에 `resolve(42)`가 호출되기 때문.
    -   p1이라는 새로운 프로미스는 thenable에서 전달받은 값과 함께 성공한 상태로 만들어지며,  
         p1 성공 핸들러는 값으로 42를 받는다.

-   Promise.reject가 아닌 `Promise.resolve()`를 사용하여 같은 방식으로 대너블에서 실패한 프로미스를 만들 수 있다.

    ```js
    let thenable = {
        then: function (resolve, reject) {
            resolve(42);
        },
    };

    let p1 = Promise.resolve(thenable);
    p1.catch(function (value) {
        console.log(value); // 42
    });
    ```

    -   이 코드는 thenable이 실패한 것만 제외하면 위의 예제와 유사.  
         `thenable.then()`을 실행하면 값으로 42를 가지고 실패한 상태인 새로운 프로미스가 만들어진다.  
         이 값은 p1의 실패 핸들러에 전달된다.

이처럼 `Promise.resolve()`와 `Promise.reject()`는 프로미스가 아닌 대너블에서도 잘 동작한다.  
많은 라이브러리가 ES6에 프로미스가 도입되기 전부터 대너블을 사용했으므로, 대너블을 프로미스 형태로 변경해주는 기능은  
이미 존재하는 라이브러리와의 호환을 위해 매우 중요하다.

객체가 프로미스인지 확신하지 못하겠다면, `Promise.resolve()`와 `Promise.reject()`에 _객체를 전달하는 것이 프로미스를 알아내는 좋은 방법_ 이다.  
이유는 프로미스일 경우 변경 없이 전달될 것이기 때문.

</br>

### **11.2.4** 실행자 에러

만약 실행자에서 에러가 발생하면 프로미스의 실패 핸들러가 호출됨.

```js
let promise = new Promise((resolve, reject) => {
    throw new Error('Explosion!');
});

promise.catch((error) => {
    console.log(error.message); // Explosion!
});
```

이 코드에서 실행자는 의도적으로 에러를 발생시킴.  
모든 실행자는 내부적으로 try-catch를 가지고 있으므로 에러를 잡고 에러 객체를 실패 핸들러에 전달한다.  
아래 코드는 위 코드와 동일.

```js
let promise = new Promise((resolve, reject) => {
    try {
        throw new Error('Explosion!');
    } catch (err) {
        reject(err);
    }
});

promise.catch((error) => {
    console.log(error.message); // Explosion!
});
```

실행자는 일반적인 사용례를 단순화하기 위해 발생한 에러를 처리.  
_실행자에서 발생한 에러는 실패 핸들러가 존재할 때만 전달된다._  
그렇지 않으면 에러는 숨겨진다.

---

### **참고 자료 및 책 링크**

-   [책 - 모던 자바스크립트 (니콜라스 자카스)](http://www.yes24.com/Product/Goods/56029935)
