---
date: '2021-08-06'
title: '[JavaScript] 싱글톤'
categories: ['JavaScript']
thumbnail: '../images/background_js.png'
summary: '야너두? 야나두~! 싱글!'
---

<div>
    <center>
        <br/>
        <p>이번주에 처음 듣는 단어가 나왔다..  싱글톤?</p>
        <p>그게 대체 무엇일까?</h3>
        <p><del>(분명 예전에 배웠는데 제대로 안들었겠지 🤪)</del></p>
        <br/>
    </center>
    <div>
        <center>
            <img src="https://user-images.githubusercontent.com/33610315/128531560-82670502-b1f4-4bb7-9e61-ab2864d6885e.png" width=400/>
            <h2>다들...</h2>
            <img src="https://user-images.githubusercontent.com/33610315/128532568-9f97aaef-c9df-4b9c-9fa7-af39758ebcfa.png" width=200/>
            <br/><br/>
            <p>
                <strong>장난은 그만하고.. 정리를 해보자!</strong>
            </p>
        </center>
    </div>
</div>

# 🤔 싱글톤?

## **[1]** 싱글톤이란?

> 애플리케이션이 시작될 때 어떤 클래스가 **최초 한번만** 메모리를 할당하고(Static)  
> 그 메모리에 인스턴스를 만들어 사용하는 디자인패턴.

- **싱글톤 패턴은 전체 시스템에서 하나의 인스턴스만 존재하도록 보장하는 객체 생성패턴**  
   (동일 클래스로 new 를 해도 <u>인스턴스 하나만</u> 존재한다는 것)
- 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나고 최초 생성 이후에  
  호출된 생성자는 최초에 생성한 객체를 반환한다.
- 싱글톤 패턴은 단 하나의 인스턴스를 생성해 사용하는 디자인 패턴
  - 인스턴스가 필요 할 때 똑같은 인스턴스를 만들어 내는 것이 아니라,  
     동일(기존) 인스턴스를 사용하게 함

## **[2]** 이 패턴을 쓰는 이유?

- 고정된 메모리 영역을 얻으면서 한번의 `new`로 인스턴스를 사용하기 때문에 메모리 낭비를 방지할 수 있음
- <u>싱글톤</u>으로 만들어진 클래스의 <u>인스턴스는 전역 인스턴스</u>이기 때문에  
   **다른 클래스의 인스턴스들이 데이터를 공유하기 쉬움**.
- [DBCP(DataBase Connection Pool)](https://blue-mina.tistory.com/19)처럼 <u>공통된 객체를 여러개 생성해서 사용해야하는 상황</u>에서 많이 사용.
  - _DBCP 정의_ - 데이터베이스와 애플리케이션을 효율적으로 연결하는 **커넥션 풀 라이브러리**
  - 쓰레드풀, 캐시, 대화상자, 사용자 설정, 레지스트리 설정, 로그 기록 객체 등

> 인스턴스가 절대적으로 **한 개**만 존재하는 것을 보증하고 싶을 경우 사용  
> 두 번째 이용시부터는 <u>객체 로딩시간이 현저히 줄어듬</u>!!

## **[3]** 이 패턴의 문제점

- 싱글톤 인스턴스가 너무 많은 일을 하거나 많은 데이터를 공유시킨다면?  
  다른 클래스의 인스턴스들 간에 결합도가 높아져서 **"개방-폐쇄 원칙"**을 위배하게 된다.  
  (객체 지향 설계 원칙에 어긋남)
- 멀티쓰레드 환경에서 동기화 처리 안하면 인스턴스가 두 개 생성될수도..?  
  (자바에서만 그럴려나..? 자바스크립트는 어떻게 될까?)

## **[4]** 예시 코드 끄적끄적 🤪

- `closure` 활용하여 생성

  ```javascript
  const Singleton = (function () {
    let instance; //	비공개 변수

    // 비공개 메서드 (init)
    function init() {
      return {
        // public 메서드
        getRanoBabo: function () {
          return `RANO IS 1000 JAE`;
        },
        // public 속성
        name: 'RANO SINGLETON',
      };
    }

    //  public 메서드인 sharedInstance 를 정의한 객체
    //	이 메서드를 통해 비공개된 메서드와 변수에 접근 가능 (closure)
    return {
      sharedInstance: function () {
        if (!instance) {
          instance = init();
        }
        return instance;
      },
    };
  })();

  module.exports = Singleton;

  // ======

  const a = Singleton.sharedInstance();
  const b = Singleton.sharedInstance();

  console.log(a === b); // true
  console.log(a.getRanoBabo());
  ```

- **ES7**

  ```javascript
  class Singleton {
    static #instance;

    constructor() {
      if (Singleton.#instance) return Singleton.#instance;
      this.name = 'RANO SINGLETON ES7';
      Singleton.#instance = this;
    }

    static sharedInstance = () => {
      if (Singleton.#instance) return Singleton.#instance;
      return new Singleton();
    };

    getRanoBabo = () => `RANO IS 1000 JAE`;
  }

  export default Singleton;

  // ======

  const a = Singleton.sharedInstance();
  const b = Singleton.sharedInstance();

  console.log(a === b); // true
  console.log(a.getRanoBabo());
  ```

  - 역시 난.. class 문법이 편해..

---

### 참고자료

- [싱글톤 패턴(Singleton pattern)을 쓰는 이유와 문제점](https://jeong-pro.tistory.com/86)
- [[Javascript] Singleton Pattern 싱글톤 패턴](https://heecheolman.tistory.com/40)
- [ES7 이상의 TypeScript와 JavaScript에서 Singleton 패턴은 어떻게 쓸까?](https://techbless.github.io/2020/06/09/ES7-이상의-TypeScript와-JavaScript에서-Singleton-패턴은-어떻게-쓸까/)
- **추후 참고**: [Java: 클래스, 객체, 인스턴스 차이 구분](https://blog.naver.com/good_ray/222069343755)
