---
date: '2021-03-09'
title: '[JavaScript] Throttle와 Debounce'
categories: ['JavaScript']
thumbnail: './background_js.png'
---

# Throttle와 Debounce

### 1. 개념

**1)** **Throttle와 Debounce** 는 자주 사용 되는 이벤트나 함수 들의 실행되는 빈도를 줄여서, **성능 상의 유리함을 가져오기 위함**

-   자주 사용되는 간단한 예로는 자동 완성이 있음.
-   키보드에 1글자씩 입력될 때마다, API로 데이터를 가져오면 사용자의 의도와 무관한 요청이 자주 발생함.  
     이를 줄이기 위해 입력이 끝난 후나 입력되는 중간마다 (약 200ms) api 값을 가져온다면?  
     성능이 매우 좋아진다!

> Throttle는 입력 주기를 방해하지 않고, 일정 시간 동안의 입력을 모아서, 한번씩 출력을 제한.  
> Debounce는 입력 주기가 끝나면 출력.

**2) 예제**  
HTML

```html
<input id="search" type="search" name="search" value="" />
```

JS

```js
let debounce = null;
let throttle = null;
const keyUpEventHandler = ({ target }) => {
    // normal
    console.log('normal', target.value, new Date().getTime());

    // debounce
    clearTimeout(debounce);
    debounce = setTimeout(() => {
        console.log('debounce', target.value, new Date().getTime());
    }, 500);

    // throttle
    if (!throttle) {
        setTimeout(() => {
            console.log('throttle', throttle, new Date().getTime());
            throttle = null;
        }, 500);
    }
    throttle = target.value;
};
// input 에 keyup event listener 를 등록
document.getElementById('search').addEventListener('keyup', keyUpEventHandler);
```

JS (log)

```js
// normal h         1583658583270
// normal he        1583658583582
// normal hel       1583658583878
// normal hell      1583658584182
// throttle hell    1583658584271
// 입력이 끝남
// normal hello     1583658584534
// debounce hello   1583658585036
// throttle hello   1583658585536
```

-   먼저 _search_ 라는 id를 가진 `input` keyup 이벤트 리스너 등록 (keyUpEventHandler)
-   **normal** 부분에서는 키보드입력 발생하면, 그 즉시 value 를 출력.
-   **throttle** 부분에서는 키보드입력 발생하면 500ms 후 가장 최신 value 를 출력 & 초기화 하여, 키보드 입력이 끝날때까지 반복.
-   **debounce** 부분에서는 키보드 입력이 발생하면, 500ms 동안 기다리고 그 안에 키보드 입력이 발생 시 시간을 초기화 하고 다시 기다리다가 가장 최신 value 를 출력

### 2. Throttle

Throttle는 여러 번 발생하는 이벤트를 일정 시간 동안, 한번만 실행 되도록 만드는 개념.

-   위 예제에서 500ms 동안 이벤트 실행을 막음, 한번만 실행하기에 잦은 이벤트 발생을 막아 성능이 좋아진다
-   Debounce와 다른 점은 이벤트 발생 시간 이후에 일정 시간 동안 기다리고, 이벤트를 실행 후 재차 기다린다는 점

### 3. Debounce

Debounce 는 여러 번 발생하는 이벤트에서, 가장 마지막 이벤트 만을 실행 되도록 만드는 개념.

-   위 예제에서 입력이 끝난 500ms 동안 동일한 이벤트가 계속해서 발생 한다면 입력이 끝날 때, 가장 마지막 이벤트만을 실행하여 성능이 좋아진다.
-   Throttle와 다른 점은 마지막 이벤트에서 일정 시간동안 이벤트가 발생한다면 또 일정 시간을 기다린다는 점

### 4. Throttle 와 Debounce 차이점

Throttle와 Debounce 의 차이점은 이벤트를 언제 발생을 시킬지 시점 차이.

-   Debounce는 입력이 끝날 때까지 무한적으로 기다리지만, Throttle 는 입력이 시작되면 일정 주기로 계속 실행한다.
-   Debounce의 시간을 짧게 가져간다면 Throttle와 비슷한 효과가 날 수 있지만 그럼에도 시점에서 차이가 날 수 있음  
     떄문에 작업물의 성격에 따라 사용법이 달라질 수 있다.
-   대표적으로 자동완성을 만들 시 일정 주기로 자동 완성되는 리스트를 보여주는 것에는  
     사용자 측면에서 Throttle가 유리  
     성능상에서는 Debounce가 훨씬 유리할 수 있다.
    -   Throttle은 검색 되는 경험을 주지만, Debounce는 1번만 호출하기에 성능에서 유리.

<hr/>

### 참고자료

-   [Throttle 와 Debounce 개념 정리하기](https://pks2974.medium.com/throttle-와-debounce-개념-정리하기-2335a9c426ff)
