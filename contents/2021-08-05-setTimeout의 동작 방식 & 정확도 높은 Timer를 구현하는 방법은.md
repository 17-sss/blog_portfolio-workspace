---
date: '2021-08-05'
title: '[JavaScript] setTimeout의 동작 방식 & 정확도 높은 Timer를 구현하는 방법은?'
categories: ['JavaScript']
thumbnail: './background_js.png'
---

# 🤔 setTimeout의 동작 방식 & 정확도 높은 Timer를 구현하는 방법은?

### **1.** setTimeout의 동작 방식

1. 코드블록에서 해당 코드가 실행되면서 **Call Stack** 에 올라온다.
2. **setTimeout** 을 JS의 콜스택에서 실행한다.
   - **setTimeout** 은 **WEB API** 이기에 넘겨짐.
3. JS의 콜스택에서는 setTimeout 에 관련된 **액티브 레코드가 제거된다.**
4. 그리고 브라우저는 **setTimeout** 을 실행한다.
5. 현재는 JS의 콜스택과 QUEUE 에 아무것도 없으므로  
    **EVENT LOOP는 무작정 어디에선가 일이 나오기만을 기다리면서 계속 돌고있는다 == 논블락**
6. 브라우저에서 등록된 setTImeout 실행을 끝냈다  
   그러면 해당 메서드에 전달됐던 **Callback 이 Queue로 넘어간다.**
7. **EVENT LOOP 는 런타임환경을 살펴보다 QUEUE 에 콜백 메서드가 들어온걸 발견했고 여기서 멈춤.**
8. 그리고 JS의 콜스택을 확인한다.  
    **만약 콜스택에서 무언가 실행되고 있다면(비어있지 않다면) EVENT LOOP 는 QUEUE에 대기한채 기다리고 있는다.**
9. JS의 콜스택이 비어졌다.  
   그러면 이제 EVENT LOOP 는 QUEUE 에 있는 콜백메서드를 **JS의 콜스택으로 이동시킨다.**
10. 이동된 콜백메서드는 이제 실행이된다.

### **2.** 정확도 높은 Timer를 구현하는 방법은 뭐가 있을까..?

아무리 검색해도 잘 나오지 않는다... 😭

-  내 생각 끄적끄적..
    - `setInterval`을 활용하여 타이머를 구현 _(1000 ==> 1초)에 한번씩 돌아가도록_
    - `setTimeout` 을 활용한 `sleep` 메소드 생성하여 처리  
        ```jsx
        const sleep = (ms = 1000) => new Promise((resolve, reject) => setTimeout(resolve, ms));
        const exTimer = async (maxSec) => {
            nLoopSec = 0;
            while (maxSec > nLoopSec) {
            await sleep();
            nLoopSec++;
            console.log(nLoopSec);
            }
        };
        const maxSec = 100; // 100초
        exTimer(maxSec);
        ```
-   추가
    - `Date` 클래스를 사용하여 처리하는 것이 더 정확한 방법이란 말이 있음!!

---

### 참고자료

- [setTimeout이 실행되면 어떤 동작이 일어날까?](https://simian114.gitbook.io/blog/undefined/javascript/event-loop/settimeout)