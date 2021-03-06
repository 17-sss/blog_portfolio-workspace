---
date: '2021-07-16'
title: '[JavaScript] call, apply, bind?'
categories: ['JavaScript']
thumbnail: '../images/background_js.png'
---

# ๐ค `call`, `apply`, `bind`?

## **[1]** `Function.prototype.call()`

`call()` ๋ฉ์๋๋ ์ฃผ์ด์ง this ๊ฐ ๋ฐ ๊ฐ๊ฐ ์ ๋ฌ๋ ์ธ์์ ํจ๊ป ํจ์๋ฅผ ํธ์ถ

### 1. ๊ตฌ๋ฌธ ๋ฐ ๋งค๊ฐ๋ณ์

```js
func.call(thisArg[, arg1[, arg2[, ...]]])
```

- `thisArg`: func ํธ์ถ์ ์ ๊ณต๋๋ this์ ๊ฐ.
- `arg1`, `arg2`, `...`: func์ด ํธ์ถ๋์ด์ผ ํ๋ ์ธ์

### 2. ์์ ์ฝ๋ ๋ฐ ์ค๋ช

```js
let person1 = {
  name: 'Son',
};

let person2 = {
  name: 'Kim',
  study: function () {
    console.log(this.name + '์ด/๊ฐ ๊ณต๋ถ๋ฅผ ํ๊ณ  ์์ต๋๋ค.');
  },
};

// โถ๏ธ ์ผ๋ฐ ํธ์ถ (person2์ study ํจ์)
person2.study(); // Kim์ด/๊ฐ ๊ณต๋ถ๋ฅผ ํ๊ณ  ์์ต๋๋ค.

// โถ๏ธ call()์ ์ฌ์ฉํ์ฌ person2.study() ํธ์ถ
person2.study.call(person1); // Son์ด/๊ฐ ๊ณต๋ถ๋ฅผ ํ๊ณ  ์์ต๋๋ค.
```

- ์ ์์ ์ฝ๋๋ฅผ ๋ณด๋ฉด `call`์ ์ด์ฉํ์ฌ person2์ ํจ์๋ฅผ ํธ์ถํ์ง๋ง  
  `call` ๋ฉ์๋ ์ฒซ ๋ฒ์งธ ๋งค๊ฐ๋ณ์์ person1์ ๋ฃ์ด์ฃผ๊ณ  ์๊ธฐ์ `this`๋ person2๊ฐ ์๋ person1์ ๊ฐ๋ฆฌํค๊ฒ ๋จ.

- `call`์ ์ฒซ ๋ฒ์งธ ๋งค๊ฐ๋ณ์ thisArg๋ ๊ฐ ํจ์์ ์คํ๋ฌธ๋งฅ์ `this`๋ฅผ ํน์ ํ๊ฒ ์ง์ ํ๋ ๋งค๊ฐ๋ณ์์.

  - ๋ ๋ฒ์งธ ๋งค๊ฐ๋ณ์๋ถํฐ๋ ํธ์ถํ  ํจ์์ ์ธ์๋ค์ด ๋ค์ด๊ฐ.
  - ๋๋ฒ์งธ ๋งค๊ฐ๋ณ์๋ถํฐ๋ ๋์ํจ์์ ์ธ์ **์์** ์ฝ์๋จ

  โ ๋ ๋ฒ์งธ ๋งค๊ฐ๋ณ์๋ถํฐ๋ "ํธ์ถํ  ํจ์์ ์ธ์๋ค"์ ์ฌ์ฉํ ์์ ์ฝ๋

  ```js
  let person3 = {
    name: 'Yrano',
  };
  let person4 = {
    name: 'Rano',
    info: function (gender, age) {
      console.log(`this.name: ${this.name}, gender: ${gender}, age: ${age}`);
    },
  };

  person4.info.call(person3, 'Unknown', 2000); // this.name: Yrano, gender: Unknown, age: 2000
  ```

  - ์ด ์์ ์ฝ๋์ `person4.info()`๋ 2๊ฐ์ ๋งค๊ฐ๋ณ์๊ฐ ํ์  
    `person4`์ name์ ๊ธฐ์ค์ผ๋ก ์คํํ๋ ค๋ฉด `person4.info("Unknown", 2000)` ์ด๋ ๊ฒ ํด์ฃผ๋ฉด ๋์ง๋ง,  
    `person3`์ name์ ๊ธฐ์ค์ผ๋ก ์คํํ๋ ค๋ฉด `person4.info.call(person3, 'Unknown', 2000);` ์ด๋ ๊ฒ ์คํ!

### 3. `apply()`์ ์ฐจ์ด

- ์ด ํจ์ ๊ตฌ๋ฌธ์ `apply()`์ ๊ฑฐ์ ๋์ผํ์ง๋ง,  
  `call()`์ **์ธ์ ๋ชฉ๋ก**์, (๋ฐฐ์ด์ ์ ๊ฐ์ฐ์ฐ์๋ฑ์ ์ฌ์ฉํ์ฌ ๊ฐ์ ๋ฃ์ ์ ์์)  
  ๋ฐ๋ฉด์ `apply()`๋ **์ธ์ ๋ฐฐ์ด ํ๋**๋ฅผ ๋ฐ๋๋ค๋ ์ ์ด ์ค์ํ ์ฐจ์ด.

## **[2]** `Function.prototype.apply()`

`apply()` ๋ฉ์๋๋ ์ฃผ์ด์ง `this` ๊ฐ๊ณผ ๋ฐฐ์ด (๋๋ ์ ์ฌ ๋ฐฐ์ด ๊ฐ์ฒด) ๋ก ์ ๊ณต๋๋ `arguments` ๋ก ํจ์๋ฅผ ํธ์ถ

### 1. ๊ตฌ๋ฌธ ๋ฐ ๋งค๊ฐ๋ณ์

```js
func.apply(thisArg, [argsArray]);
```

- `thisArg`: func ํธ์ถ์ ์ ๊ณต๋๋ this์ ๊ฐ
- `argsArray`: func์ด ํธ์ถ๋์ด์ผ ํ๋ ์ธ์๋ฅผ ์ง์ ํ๋ ์ ์ฌ ๋ฐฐ์ด ๊ฐ์ฒด

### 2. ์์ ์ฝ๋ ๋ฐ ์ค๋ช

```js
let fruit1 = { name: '์ฌ๊ณผ' };
function fruitInfo(price, color) {
  return console.log(`${this.name}์/๋ ${price}์์ด๋ฉฐ ${color}์์๋๋ค`);
}

const arrFruit1Info = [2000, '๋นจ๊ฐ'];
fruitInfo.apply(fruit1, arrFruit1Info); // "์ฌ๊ณผ์/๋ 2000์์ด๋ฉฐ ๋นจ๊ฐ์์๋๋ค"
```

- ์ฒซ ๋ฒ์งธ ๋งค๊ฐ๋ณ์ thisArg๋ `Function.prototype.call()`๊ณผ ๊ฐ์ด `this`๋ฅผ ์ง์ ํ๋ค.  
  ํ์ง๋ง `call()`๊ณผ ๋ค๋ฅด๊ฒ `apply()`๋ ๋ ๋ฒ์งธ ๋งค๊ฐ๋ณ์๋ฅผ ๋ฐฐ์ด ํํ๋ก ๋ฃ๊ฒ๋๋ค๋ ์ฐจ์ด์ ์ด ์๋ค.  
  (๋ฐฐ์ด ๋๋ ์ ์ฌ๋ฐฐ์ด ๊ฐ์ฒด)

### 3. `call()`์ ์ฐจ์ด

- ์ด ํจ์์ ๊ตฌ๋ฌธ์ ๊ฑฐ์ `call()` ๊ตฌ๋ฌธ๊ณผ ์ ์ฌ.  
   ์ฐจ์ด์ ์ `call()` ์ ํจ์์ ์ ๋ฌ๋  ์ธ์ ๋ฆฌ์คํธ๋ฅผ ๋ฐ๋๋ฐ ๋นํด,  
  `apply()` ๋ ์ธ์๋ค์ ๋จ์ผ ๋ฐฐ์ด์ ๋ฐ์

> call๊ณผ apply๋ฅผ ์ข ๋ ๊ตฌ๋ถํ์๋ฉด..
>
> - `call`์ ๋ค๋ฅธ ๊ด์ฌ์ฌ์ ์ธ์๋ฅผ ์ฌ๋ฌ๊ฐ ๋ฃ์ ๋
> - `apply`๋ ๊ฐ์ ๊ด์ฌ์ฌ๋ก ๋ฌถ์ธ ์ ์ฌ๋ฐฐ์ด์ ๋ฃ์ ๋

## **[3]** `Function.prototype.bind()`

`bind()`๋ ์๋กญ๊ฒ ๋ฐ์ธ๋ฉํ ํจ์๋ฅผ ๋ง๋ค๊ณ  ๋ฐ์ธ๋ฉํ ํจ์๋ ์๋ณธ ํจ์ ๊ฐ์ฒด๋ฅผ ๊ฐ์ธ๋ ํจ์๋ค.

- `bind()`๋ `call()`, `apply()`์ ๊ฐ์ด ํจ์๊ฐ ๊ฐ๋ฆฌํค๊ณ  ์๋ `this`๋ฅผ ๋ฐ๊พธ์ง๋ง ํธ์ถ๋์ง๋ ์๋๋ค.  
  ๋ฐ๋ผ์ **๋ณ์๋ฅผ ํ ๋นํ์ฌ ํธ์ถํ๋ ํํ๋ก ์ฌ์ฉ**๋๋ค.

### 1. ๊ตฌ๋ฌธ ๋ฐ ๋งค๊ฐ๋ณ์

```js
func.bind(thisArg[, arg1[, arg2[, ...]]])
```

- `thisArg`: ๋ฐ์ธ๋ฉ ํจ์๊ฐ ํ๊ฒ ํจ์์ this์ ์ ๋ฌํ๋ ๊ฐ
- `arg1`, `arg2`, `...`: func์ด ํธ์ถ๋์ด์ผ ํ๋ ์ธ์

### 2. ์์ ์ฝ๋ ๋ฐ ์ค๋ช

```js
let fruit1 = { name: '์ฌ๊ณผ' };
let fruit2 = {
  name: '๋ฐ๋๋',
  fruitInfo: function (price, color) {
    return console.log(`${this.name}์/๋ ${price}์์ด๋ฉฐ ${color}์์๋๋ค`);
  },
};

const arrFruit1Info = [4000, '๋นจ๊ฐ'];

const appleInfo = fruit2.fruitInfo.bind(fruit1, ...arrFruit1Info);
appleInfo(); // "์ฌ๊ณผ์/๋ 4000์์ด๋ฉฐ ๋นจ๊ฐ์์๋๋ค"
```

- ์์์ ์ค๋ชํ๋ฏ ์ฒซ๋ฒ์งธ ๋งค๊ฐ๋ณ์์ `thisArg`  
  ๋๋ฒ์งธ ๋งค๊ฐ๋ณ์๋ ํ๊ฒ ํจ์์์ ํธ์ถ๋์ด์ผ ํ  ์ธ์๋ค.  
  `call`๊ณผ ๊ฐ์ด ๋๋ฒ์งธ ๋งค๊ฐ๋ณ์๋ **์ธ์ ๋ชฉ๋ก**์ ๋ฐ์  
  (๋ฐฐ์ด์ด ์๋ ์ผ๋ฐ์ ์ธ ๊ฐ ์๋ ฅ. ๋ฐฐ์ด์ ๋๋ฒ์งธ ๋งค๊ฐ๋ณ์๋ก ์ฃผ๋ ค๋ฉด ์ ๊ฐ์ฐ์ฐ์ ํ์ฉ)

---

### ์ฐธ๊ณ ์๋ฃ

- [ํจ์ ํธ์ถ call, apply, bind์ ์ฐจ์ด](https://velog.io/@josworks27/ํจ์ํธ์ถ-call-apply-bind-์ฐจ์ด)
- [mozilla : Function.prototype.call()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [mozilla : Function.prototype.apply()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [mozilla : Function.prototype.bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
