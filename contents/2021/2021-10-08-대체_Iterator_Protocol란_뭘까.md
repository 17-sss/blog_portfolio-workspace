---
date: '2021-10-08'
title: '[JavaScript] 대체 Iterator Protocol이란 뭘까?'
categories: ['JavaScript']
thumbnail: '../images/background_js.png'
---

<div align="center">

최근에 본 면접에서 `Iterator Protocol`이라는 키워드가 나왔다.  
어디서 들어본 것 같지만 (역시 아니지..)  
정말 완전 처음 듣는 단어라 "모르겠습니다" 라고 답했다.. 😭  
<img src="https://user-images.githubusercontent.com/33610315/136487038-4ac55776-7854-4e56-82fd-e3a6bd753c70.png" width=300 /><br/>
알아야 할 건 끝이 없는 것 같다!  
아쉬운 김에 정리!!

</div>
<br/>

## 🤔 Iteration protocols이 뭐야?

`Iterator Protocol`을 알아보기 전에 `Iteration protocols`을 알아야한다!  
`Iteration protocols`은 ES6에서 추가되었다.  
데이터 컬렉션을 순회하기 위한 프로토콜 (_미리 약속된 규칙_)이다.

<br/>

**이터레이션 프로토콜을 준수한 객체는..**  
`for..of` 문으로 순회할 수 있고 _Spread_ 문법의 피연산자가 될 수 있다.

<br/>

**이터레이션 프로토콜의 종류는?**  
이터러블 프로토콜(_iterable protocol_)과 이터레이터 프로토콜(_iterator protocol_)이 있다.

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/33610315/136503080-24929823-0a8f-4e7f-bb1d-91ac84e320fd.png" width="500"/><br/>
</div>

**이터레이션 프로토콜을 따르는 객체는?**

`for..of`, `spread operator`, `yield*`, `destructuring assignment` 과 같은 문법들을 사용할 수 있다.

<br/>

### [1] 이터러블

이터러블 프로토콜을 따르는 객체는 **이터러블** 객체라 한다.  
이터러블은 `Symbol.iterator` 메소드를 구현하거나, <u>프로토타입 체인에 의해 상속</u>된 객체를 말한다.  
이터러블은 for..of 문에서 순회할 수 있으며 Spread 문법의 대상으로 사용할 수 있다!

#### 1) 배열

배열은 `Symbol.iterator` 을 <u>소유</u>한다. 따라서 배열은 이터러블 프로토콜을 <span style="color: blue">준수한 이터러블</span>이다.

```javascript
const array = [1, 2, 3];

// 배열은 Symbol.iterator 메소드를 소유한다.
// 따라서 배열은 이터러블 프로토콜을 준수한 이터러블이다.
console.log(Symbol.iterator in array); // true

// 이터러블 프로토콜을 준수한 배열은 for..of 문에서 순환 가능하다.
for (const item of array) console.log(item);
```

#### 2) 일반 객체

일반 객체는 `Symbol.iterator`을 <u>소유하지 않는다</u>. 따라서 일반객체는 이터러블 프로토콜을 <span style="color: red">준수한 이터러블이 아니다.</span>

```js
const obj = { a: 1, b: 2 };

// 일반 객체는 Symbol.iterator 메소드를 소유하지 않는다.
// 따라서 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다.
console.log(Symbol.iterator in obj); // false

// 이터러블이 아닌 일반 객체는 for...of 문에서 순회할 수 없다.
// TypeError: obj is not iterable
for (const p of obj) console.log(p);
```

- 일반 객체는 이터레이션 프로토콜을 준수하지 않는다. 그러므로 이터러블이 아니다 (`Symbol.iterator`이 없다)
- 일반 객체는 `for...of`문에서도 순회할 수 없으며 <u>Spread 문법의 대상으로도 사용할 수 없다.</u>
- 일반 객체도 이터러블 프로토콜을 <u>준수하게 만들면</u> 이터러블이 된다. (커스텀 이터러블)

<br/>

### [2] 이터레이터

**이터레이터 프로토콜**은 `next` 메소드를 가지고 있어야하며,  
`next` 메소드를 호출하면 이터러블을 순회하며 `value`, `done` 프로퍼티를 갖는  
이터레이터 리절트 객체를 반환하는 것이며, 이 규약을 준수한 객체가 이터레이터이다.

이터러블 프로토콜을 <span style="color: blue">준수한 이터러블</span>은 `Symbol.iterator` 메소드를 소유한다.  
이 메소드를 호출하면 이터레이터를 반환한다.  
이터레이터 프로토콜을 <u>준수한 이터레이터</u>는 `next` 메소드를 갖는다!

```js
// 배열은 이터러블 프로토콜을 준수한 이터러블!
const array = [1, 2, 3];

// Symbol.iterator 메소드는 이터레이터를 반환한다.
const iterator = array[Symbol.iterator]();

// 1)이터레이터 프로토콜을 준수한 이터레이터는 next 메소드를 갖는다.
console.log('next' in iterator); // true

// 2) 이터레이터의 next 메소드를 호출하면 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환.
let iteratorResult = iterator.next();
console.log(iteratorResult); // {value: 1, done: false}

// 3) next 메소드를 호출할 때 마다 이터러블을 순회하며 이터레이터 리절트 객체를 반환.
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

1. 이터레이터의 `next` 메소드를 호출하면 `value`, `done` 프로퍼티를 갖는 **이터레이터 리절트 객체를 반환.**
2. 이터레이터의 `next` 메소드는 이터러블의 각 요소를 순회하기 위한 포인터의 역할  
   `next` 메소드를 호출하면 이터러블을 순차적으로 한 단계씩 순회하며 이터레이터 리절트 객체를 반환.
3. 이터레이터의 next 메소드가 반환하는 이터레이터 리절트 객체의 프로퍼티들
   - `value` 프로퍼티는 현재 순회 중인 이터러블의 값을 반환
   - `done` 프로퍼티는 이터러블의 순회 완료 여부를 반환.

<br/>

### [3] 빌트인 이터러블

<span id="iterlist" style="font-weight: bold; color: brown">ES6에서 제공하는 빌트인 이터러블 목록</span>

- `Array`, `String`, `Map`, `Set`, `Arguments`
- TypedArray
  - `Int8Array`, `Int16Array`, `Int32Array`
  - `Uint8Array`, `Uint16Array`, `Uint32Array`
  - `Uint8ClampedArray`
  - `Float32Array`, `Float64Array`
- DOM data structure
  - `NodeList`, `HTMLCollection`

**String을 활용한 예시**

```js
// 문자열은 이터러블이다.
const str = 'hello';

// 이터러블은 Symbol.iterator 메소드를 소유한다.
// Symbol.iterator 메소드는 이터레이터를 반환한다.
strIter = str[Symbol.iterator]();

// 이터레이터는 next 메소드를 소유한다.
console.log(strIter.next()); // {value: "h", done: false}
console.log(strIter.next()); // {value: "i", done: false}
console.log(strIter.next()); // {value: undefined, done: true}

// 이터러블은 for ... of 문으로 순회 가능하다.
for (const char of str) console.log(char);
```

**Arguments을 활용한 예시**

```js
(function () {
  // 이터러블은 Symbol.iterator 메소드를 소유한다.
  // Symbol.iterator 메소드는 이터레이터를 반환한다.
  iter = arguments[Symbol.iterator]();

  // 이터레이터는 next 메소드를 소유한다.
  // next 메소드는 이터레이터 리절트 객체를 반환한다.
  console.log(iter.next()); // {value: 1, done: false}
  console.log(iter.next()); // {value: 2, done: false}
  console.log(iter.next()); // {value: undefined, done: true}

  // 이터러블은 for...of 문으로 순회 가능하다.
  for (const arg of arguments) {
    console.log(arg);
  }
})(1, 2);
```

<br/>

### [4] 이터레이션 프로토콜의 필요성

데이터 소비자( _Data consumer_ )인 for...of 문, spread 문법은  
다양한 데이터 소스(<a href="#iterlist">ES6에서 제공하는 빌트인 이터러블 목록</a>)를 사용한다.

데이터 소스는 모두 이터레이션 프로토콜을 준수하는 이터러블.  
즉, 이터러블은 데이터 공급자( _Data provider_ )의 역할을 한다.

만약 다양한 데이터 소스가 각자 순회 방식을 갖는다면  
데이터 소비자는 다양한 데이터 소스의 순회 방식을 모두 지원해야 한다. 이는 효율적이지 않다!!  
하지만 다양한 데이터 소스가 이터레이션 프로토콜을 준수하도록 규정하면  
데이터 소비자는 이터레이션 프로토콜만을 지원하도록 구현하면 된다.

즉, <u>이터레이션 프로토콜</u>은 다양한 데이터 소스가 하나의 순회 방식을 갖도록 규정하여 데이터 소비자가 효율적으로  
다양한 데이터 소스를 사용할 수 있도록 **데이터 소비자와 데이터 소스를 연결하는 인터페이스 역할을 한다!**

<br/>
<div align="center">
	<img src="https://user-images.githubusercontent.com/33610315/136513648-d59f22b0-0fe3-49d9-a9e0-a2fe00615001.png" width=600 />  
</div>

이터러블을 지원하는 데이터 소비자는 내부에서 `Symbol.iterator`메소드를 호출해 이터레이터를 생성 →  
이터레이터의 `next`메소드를 호출하여 이터러블을 순회 →  
`next` 메소드가 반환한 이터레이터 리절트 객체의 `value` 프로퍼티 값을 취득한다.

---

어떻게보면.. 진짜 지나가다가 봤을수도 있다.  
근데 익숙하지 않은 단어가 들려오니 전혀 모르겠더라  
그래도 이렇게 찾아보니까 성장 +1 한거 같다!  
다음엔 이터레이션 프로토콜에 뒤이은 글을 조금 더 써보도록 하자.

---

### 참고자료

- [poiemaweb - 이터레이션과 for...of 문](https://poiemaweb.com/es6-iteration-for-of) ⭐️
- [mozilla : Iteration protocols](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
- [[Javascript] 이터레이션 프로토콜(Iteration Protocol)](https://equal-blog.tistory.com/entry/%EC%9D%B4%ED%84%B0%EB%A0%88%EC%9D%B4%EC%85%98-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9CIteration-Protocol)
