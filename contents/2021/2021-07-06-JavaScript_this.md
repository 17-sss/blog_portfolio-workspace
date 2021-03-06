---
date: '2021-07-06'
title: '[JavaScript] JSμμμ this..?'
categories: ['JavaScript']
thumbnail: '../images/background_js.png'
---

# π€ JSμμμ this..?

## **[1]** JavaScriptμμμ thisμ call, apply, bind λ©μλ

### **1.** thisλ?

- `JS`μμ ν¨μμ this ν€μλλ λ€λ₯Έ μΈμ΄λ€κ³Ό λΉκ΅νμ¬ μ‘°κΈ λ€λ₯΄κ² λμ.
- `strict mode`μ `non-strict mode` μ¬μ΄μμλ μ‘°κΈ λ€λ¦.
- `this`μ κ°μ ν¨μλ₯Ό νΈμΆνλ λ°©λ²μ μν΄ κ²°μ 
  - μ€ννλ λμ ν λΉμ μν΄ μ€μ λ  μ μμΌλ©° ν¨μκ° νΈμΆλ  λ λ§λ€ λ€λ₯Ό μ μμ
- ES5μμ  `this`κ°μ΄ ν¨μκ° μ΄λ»κ² νΈμΆλμλμ§ μ€μ ν  μ μλ `bind` λ©μλκ° λμ΄

### **2.** thisμ μ΄ν΄

- λ°μΈλ©μ΄λ?  
  `this`μ νΈμΆ λ°©μμ λ°λΌ `this`κ° νΉμ  _κ°μ²΄_ μ μ°κ²°λ¨.
- `this`μ λ°μΈλ© κ·Έλ¦¬κ³  `call`, `apply`, `bind` λ©μλ

  - **1)** μΌλ° ν¨μ λ΄λΆμμμ `this`λ κΈλ‘λ² κ°μ²΄μ λ°μΈλ©λ¨

    ```js
    console.log(this === window); // true

    a = 30;
    console.log(window.a); // 30

    function x() {
      return this;
    }

    x() === window; // true
    ```

  - **2)** λ©μλ λ΄λΆμμμ `this`λ λ©μλλ₯Ό νΈμΆν κ°μ²΄μ λ°μΈλ©

    ```js
    let ranoInfo = {
      name: 'Rano',
      nickName: 'agumon',
      getInfo() {
        return `Name: ${this.name}  NickName: ${this.nickName}`;
      },
    };

    console.log(ranoInfo.getInfo()); // 'Name: Rano  NickName: agumon`
    ```

  - **3)** μμ±μ ν¨μ λ΄λΆμμ `this`λ μμ±μ ν¨μκ° μμ±ν  μΈμ€ν΄μ€μ λ°μΈλ© λ¨.

    ```js
    function ranoInfo() {
      (this.name = 'Rano'), (this.nickName = 'agumon');
      this.getInfo = function () {
        return `Name: ${this.name}  NickName: ${this.nickName}`;
      };
    }

    let ranoInfoTmp = new ranoInfo();
    console.log(ranoInfoTmp); // ranoInfoΒ {name: "Rano", nickName: "agumon", getInfo: Ζ}
    ```

  - **4)** **`Call`**, **`Apply`**, **`Bind`** λ©μλ μ¬μ© μ, λ©μλμ **_μ²« λ²μ§Έ μΈμ_** λ‘ μ λ¬νλ κ°μ²΄μ λ°μΈλ©!

    - `call` & `apply` λ©μλλ κΈ°λ³Έμ μΌλ‘ ν¨μλ₯Ό νΈμΆνλ μ­ν μ ν¨
      - κΈ°μ‘΄ ν¨μ νΈμΆκ³Όμ μ°¨μ΄μ μ?  
         μ΄ λ©μλλ€ (`call` & `apply`)μ μ¬μ©ν΄ ν¨μλ₯Ό μ€ννλ©΄ ν¨μμ μ²« λ²μ§Έ μΈμλ‘ μ λ¬νλ κ°μ²΄μ `this`λ₯Ό λ°μΈλ© ν  μ μμ.  
         μ΄λ₯Ό ν΅ν΄μ μ μ¬ λ°°μ΄ arguments κ°μ²΄μ λ°°μ΄ λ©μλλ₯Ό μ¬μ©ν  μ μμ.
    - `bind`λ μ²« λ²μ§Έ μΈμλ₯Ό `this`μ λ°μΈλ©νμ§λ§ **ν¨μλ₯Ό μ€ννμ§ μμ**, _μλ‘μ΄ ν¨μλ₯Ό λ°ν_

  - **4-1)** **`Call`**  
    `call`μ μ¬μ©νλ©΄ ν¨μλ₯Ό μ€ννκ³  ν¨μμ μ²« λ²μ§Έ μΈμλ‘ μ λ¬νλ κ°μ `this`λ₯Ό λ°μΈλ©

    ```js
    function logInfo(num1, num2, num3) {
      console.log('name:', this.name);
      console.log('gender:', this.gender);
      console.log('money:', num1 + num2 + num3);
    }

    const rano = {
      name: 'Rano',
      gender: 'Unknown',
    };

    logInfo.call(rano, 0, 1, -1);
    /*
    - logInfoμ console.log
        name: Rano
        gender: Unknown
        money: 0    (num1 + num2 + num3)
    */
    ```

  - **4-2)** **`Apply`**  
    `apply`λ₯Ό μ¬μ©νλ©΄ ν¨μλ₯Ό μ€ννκ³  ν¨μμ μ²« λ²μ§Έ μΈμλ‘ μ λ¬νλ κ°μ `this`λ₯Ό λ°μΈλ©  
    **>** `call`κ³Ό μ°¨μ΄μ μ μΈμλ₯Ό λ°°μ΄ ννλ‘ μ λ¬νλ κ². (μΈμλ‘ λ°°μ΄ μμ²΄κ° μ λ¬νλ κ²μ΄ μλ λ°°μ΄μ μμλ€ κ°μΌλ‘ μ λ¬.)

    ```js
    function logInfo(num1, num2, num3) {
      console.log('name:', this.name);
      console.log('gender:', this.gender);
      console.log('money:', num1 + num2 + num3);
    }

    const rano = {
      name: 'Rano',
      gender: 'Unknown',
    };

    const nums = [0, 1, -1];

    logInfo.apply(rano, nums); // μμ¦μ apply μ¬μ©μν¨!!
    logInfo.call(rano, ...nums); // μμ¦μ call()κ³Ό μ κ° μ°μ°μ νμ©νμ¬ μ¬μ©ν¨!
    /*
    - logInfoμ console.log
        name: Rano
        gender: Unknown
        money: 0    (nums -> num1 + num2 + num3)
    */
    ```

  - **4-3)** **`Bind`**  
    `bind`λ ν¨μμ μ²« λ²μ§Έ μΈμμ `this`λ₯Ό λ°μΈλ©νλ€λ μ μ κ°μ.  
    νμ§λ§ ν¨μλ₯Ό μ€ννμ§ μκ³  _μλ‘μ΄ ν¨μλ₯Ό λ°ν_  
    **>** λ°νλ μλ‘μ΄ ν¨μλ₯Ό μ€νν΄μΌ μλ³Έ ν¨μκ° μ€νλ¨!!

    ```js
    function logInfo(num1, num2, num3) {
      // μλ³Έ ν¨μ
      console.log('name:', this.name);
      console.log('gender:', this.gender);
      console.log('money:', num1 + num2 + num3);
    }

    const rano = {
      name: 'Rano',
      gender: 'Unknown',
    };

    const RanoLogInfo = logInfo.bind(rano, 0); // μλ‘μ΄ ν¨μ!
    RanoLogInfo(-1, 1); // RanoLogInfo(-1)(1)μ μλ!!

    /*
    - logInfoμ console.log
        name: Rano
        gender: Unknown
        money: 0    ( 0 | -1, 1 -> num1 + num2 + num3)
    */
    ```

    λ°λ‘ μ `RanoLogInfo`λ₯Ό `bind` ν¨μλ₯Ό ν΅ν΄ μμ±ν  λ μ°¨λΌλ¦¬..

    ```js
    // μ΄κ²λ³΄λ€λ
    const RanoLogInfo = logInfo.bind(rano, 0);
    // μ΄κ² λ«μ§ μμκΉ?
    const RanoLogInfo = logInfo.bind(rano, ...[0, 1, -1]);
    ```

### **3.** μ λ¦¬

- **`this`**  
  `this`λ **ν¨μ νΈμΆ λ°©μμ λ°λΌ λμ μΌλ‘ κ²°μ λ¨**

  - μΌλ° ν¨μλ‘ νΈμΆ -> thisλ κΈλ‘λ² κ°μ²΄
  - λ©μλλ‘ νΈμΆ -> μ΄λ₯Ό νΈμΆν κ°μ²΄
  - μμ±μ ν¨μλ‘ νΈμΆ -> μμ±μ ν¨μκ° μμ±ν  μΈμ€ν΄μ€
  - `Call`, `Apply`, `Bind` λ©μλ μ¬μ© -> λ©μλμ μ²« λ²μ§Έ μΈμλ‘ μ λ¬νλ κ°μ²΄μ λ°μΈλ©

- **`Call`**, **`Apply`**, **`Bind`** λ©μλ
  - **`Call`** λ©μλλ ν¨μλ₯Ό μ€ν  
    μ²«λ²μ§Έ μΈμμ `this`λ₯Ό λ°μΈλ©, μ΄ν κ°μ ν¨μμ μΈμλ‘ μ λ¬
  - **`Apply`** λ©μλλ ν¨μλ₯Ό μ€ν  
    μ²«λ²μ§Έ μΈμμ `this`λ₯Ό λ°μΈλ©, μ΄ν _κ°μ λ°°μ΄μ νν_ λ‘ λ°μ μ°¨λ‘λ‘ ν¨μμ μΈμλ‘ μ λ¬.
  - **`bind`** λ©μλλ ν¨μλ₯Ό _μ€ννμ§ μμ_  
    μ²«λ²μ§Έ μΈμμ `this`λ₯Ό λ°μΈλ©ν _μλ‘μ΄ ν¨μλ₯Ό λ°ν._
  - **_κ° λ©μλλ₯Ό ν΅ν΄ μ λ¬ν  μ μλ μΈμμ κ°―μμ μ νμ΄ μμ!!_**

## **[2]** JavaScriptμμμ thisλ ν¨μλ₯Ό νΈμΆνλ λ°©λ²μ λ°λΌ κ²°μ  (μμ μ λ¦¬)

(**_ν¨μλ₯Ό νΈμΆ ν  λ λ§λ€ thisκ° κ°λ¦¬ν€λ κ°μ΄ λ€λ₯Ό μ μμ_**)

- **1)** μ μ­μμ `this`λ₯Ό νΈμΆ

  ```js
  console.log(this); // window
  ```

  - μ μ­μμμ `this`λ κΈ°λ³Έμ μΌλ‘ `window`λ₯Ό κ°λ₯΄ν΄.

- **2)** ν¨μ μμμ `this`λ₯Ό νΈμΆ

  ```js
  function doSomething() {
    return this;
  }

  console.log(doSomething()); // window
  console.log(window.doSomething()); // window
  ```

  - thisλ₯Ό κ²°μ νλ κ±΄ ν¨μκ° νΈμΆ λ  λ μ΄λ£¨μ΄μ§  
    **_(bind ν¨μ & νμ΄ν ν¨μ μ μΈ)_**
  - ν¨μλ₯Ό νΈμΆν κ°μ²΄κ° λ¬΄μμ΄λμ λ°λΌ `this`κ° κ²°μ 

- **3)** λ©μλμμ `this`λ₯Ό νΈμΆ νμ κ²½μ°

  ```js
  function doSomething() {
    return this;
  }

  var obj = {
    doSomething: doSomething,
  };

  console.log(doSomething()); // window
  console.log(obj.doSomething()); // obj
  ```

  - `this`λ₯Ό κ²°μ νλ κ²μ ν¨μλ₯Ό νΈμΆν κ°μ²΄κ° λ¬΄μμ΄λμ λ°λΌ λ¬λΌμ§.  
     `doSomething` ν¨μλ₯Ό objμ λ©μλλ‘ λ±λ‘νκ³  `obj.doSomething()`μ νΈμΆ νκΈ° λλ¬Έμ `this`λ `obj`.
  - μ μ­μμ μ μΈλμμ κ²½μ° ν¨μλΌ λΆλ₯΄κ³ , κ°μ²΄μ μν ν¨μλ₯Ό λ©μλλΌκ³  λΆλ¦.

  ```js
  var a = 10;
  var obj = {
    a: 20,
    doSomething: function () {
      function func() {
        console.log(this.a); // 10
      }

      func();

      console.log(this.a); //20
    },
  };

  obj.doSomething();
  ```

  - `doSomething` λ©μλ μμμ μ μΈλ `func()` ν¨μμ§λ§ νΈμΆν΄λ³΄λ©΄ `console.log(this.a)`μ 10.  
     (`obj` κ°μ²΄μ `func` ν¨μλ μλ¬΄λ° κ΄λ ¨μ΄ μλ ν¨μμ΄κΈ°μ)

  ```js
  var a = 10;
  var obj = {
    a: 20,
    doSomething: function () {
      var self = this; // obj thisλ₯Ό μ μ₯

      function func() {
        console.log(self.a); // 20
      }
      func();
      console.log(this.a); //20
    },
  };

  obj.doSomething();
  ```

  - λ©μλ λ΄ ν¨μμμ `this`λ₯Ό κ°λ¦¬ν€λ €λ©΄ `self` λ³μμ κ°μ²΄μ `this`λ₯Ό μ μ₯ν΄μ μ κ·Ό

- **4)** μμ±μμμ `this`λ₯Ό νΈμΆ

  ```js
  var age = 10;

  function Person() {
    console.log(this.age);
  }

  var p = new Person(); // μΆλ ₯: undefined / thisλ μμ±ν κ°μ²΄λ₯Ό κ°λ¦¬ν΄ (μλ μ€λͺ μ°Έκ³ )
  Person(); // μΆλ ₯: 10  /   μ μ­ windowμ 10μ
  ```

  - `Person`ν¨μλ `window`κ°μ²΄μ μν ν¨μ  
     κ·Έλ₯ νΈμΆνλ©΄ `this.age`λ μ μ­ λ³μμ `age` κ°μ κ°λ¦¬ν€κ² λ¨.
  - `Person` ν¨μλ₯Ό `new` ν€μλλ₯Ό ν΅ν΄ μμ±νλ©΄ μλ‘μ΄ κ°μ²΄κ° λ§λ€μ΄μ§λ©΄μ  
    `this`λ `window`κ° μλ μμ±ν κ°μ²΄λ₯Ό κ°λ¦¬ν€κ² λκ³ , ν¨μμ λ΄μ©μ μμ±μκ° λ¨.

- **5)** `bind` λ©μλ  
  `bind` λ©μλλ ν¨μ λ΄μ `this`λ₯Ό μκ΅¬μ μΌλ‘ μ§μ νλ λ©μλ.

  ```js
  var a = 10;
  function func() {
    console.log(this.a);
  }
  func(); // 10

  //funcν¨μμ thisλ₯Ό obj κ°μ²΄λ‘ λ°μΈλ©.
  var obj = { a: 20 };
  var new_func = func.bind(obj);

  new_func(); // 20

  var obj2 = { a: 30 };
  var new_func2 = new_func.bind(obj2); // objλ‘ λ°μΈλ© λ ν¨μλ₯Ό λ€μ obj2λ‘ λ°μΈλ©.

  // μ΄λ―Έ λ°μΈλ© λ ν¨μμ thisλ λ³νμ§ μμ (λ€μ λ°μΈλ©ν΄λ μ΅μ΄λ‘ λ°μΈλ©ν κ°μ κ°λ₯΄ν΄)
  new_func2(); // 20
  ```

- **6)** νμ΄ν ν¨μ  
  νμ΄ν ν¨μμμ `this`λ μμ μ κ°μΌ _λ μμ»¬ μ»¨νμ€νΈ_. μ μ­μμλ `window`λ₯Ό κ°λ¦¬ν΄.

  ```js
  var func = () => {
    console.log(this);
  };
  func(); // window

  //objμ func λ©μλλ‘ λμ
  var obj = { func: func };
  obj.func(); // window

  //obj κ°μ²΄λ‘ thisλ₯Ό λ°μΈλ©
  var new_func = func.bind(obj);
  new_func(); // window
  ```

  - `bind`λ νμ΄ν ν¨μλ `this`λ₯Ό μ§μ νλ©΄ λ³νμ§ μμ.

---

### μ°Έκ³ μλ£

- [[JavaScript] thisλ?](https://velog.io/@realryankim/JavaScript-thisλ)
- [[javascript] this λ](https://bamdule.tistory.com/188)
