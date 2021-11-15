---
date: '2021-07-08'
title: '[상태관리] Redux와 Recoil..?'
categories: ['JavaScript', 'State Management']
thumbnail: './background_redux.jpeg'
summary: '리덕스와 리코일의 차이는 무엇일까?'
---

# 🤔 Redux와 Recoil..?

- Redux 그리고 Recoil은 react를 위한 상태관리 라이브러리
- redux 는 **Flux 아키텍쳐** 기반
- recoil 은 **Atomic 모델** 기반  
  (Atom 이라는 작은 상태 단위로 관리하고 Atom 을 결합하여 데이터를 가공)

## **[1]** Redux

<img src="https://user-images.githubusercontent.com/33610315/124876878-74903c00-e005-11eb-9562-ef1a89a777c7.png" width=500 />

- flux 아키텍쳐의 데이터 흐름은 단방향
- Action 은 Action 을 생성하여(type, payload) 이를 Dispatcher 에게 전달
- Dispatch 는 모든 Action 을 전달받아 Store에 전달
- Store 는 State 를 가지고 있고 State 를 변경
- Store 에서 State 변경 시, change 이벤트가 발생하고 View 에게 State 가 변경되었다는걸 알려줌.  
   (이때 View 에서 사용하는 State 는 업데이트가 일어난다 -> Rerender)

> redux는 중앙집중식으로 상태관리가 이루어짐. 실제로 전체 모델은 복잡한 편이 아님  
>  (여태 복잡한줄 알고 있었다..)

### **1.** 언제 Redux가 필요할까?

**1)** 리덕스를 사용한 개발 스타일이 너무 마음에 들 때

- 적당한 상황에서 쓰면 정말 편하고 좋은 도구이고, 불필요한 상황이면 번거롭고 불편할 수도 있음.
- 처음 공부하는 과정에서 사용해야 하는 이유를 정확히 이해하지 못하고  
   무조건 사용하는 경우엔 불편하게 느껴질 것.
- 모든 상태 업데이트를 액션으로 정의, 액션 정보에 기반하여 리듀서에서 상태를 업데이트하기에  
   상태를 더욱 쉽게 예측 가능하게 하여 유지보수 측면에 긍정적인 효과가 있음.

**2)** 미들웨어

- 리덕스는 다른 라이브러리와는 다르게 많은 미들웨어가 존재.
- 특정 액션이 디스패치 됐을 때 상태 업데이트외의 다른 작업들을 따로 처리 가능.
- 보통 API 요청을 할 때 미들웨어를 사용함.
  - **[!]** 이전에는 API 요청을 위하여 리덕스와 미들웨어를 사용하는 것이 당연했지만  
     이제는 [SWR](https://swr.vercel.app/) 과 [react-query](https://swr.vercel.app/) 같은 라이브러리가 있기에  
     단순 API 요청을 위하여 미들웨어를 사용 할 필요는 없음
  - 비동기 작업에 대한 플로우에 대하여 더 많은 컨트롤을 필요로 할 때는  
    미들웨어가 유용하게 사용될 수 있음.

**3)** 기타 이유

- 그냥 많이 사용 돼서: 유지보수하고 있는 프로젝트가 리덕스를 사용할 확률이 높다거나..
- 서버사이드 렌더링, 더 쉬운 테스팅, 컴포넌트가 아닌 글로벌 상태를 사용하거나 업뎃 할 때

> 이 이유들이 아니라면 굳이 Redux를 사용할 필요는 없음

## **[2]** Recoil

<img src="https://user-images.githubusercontent.com/33610315/124880731-8d9aec00-e009-11eb-9e4a-56986bfbc6dd.png" width=500 />

- ContextAPI 만을 사용하여 글로벌 상태 관리를 하는 것이 어느정도 제한이 있어서 만들어진 라이브러리
- recoil 은 다른 개념을 제시.  
  Atom 이라는 상태 단위로 상태를 관리하며 컴포넌트는 이 Atom 을 구독하기만 하면 됨.
- 저장소 개념보다는 작은 상태 단위(Atom)로 관리
- recoil 은 redux 와 비교했을때 학습곡선 비용이 적으며 동시모드를 지원
- 상태 변경으로 인한 불필요한 렌더링이 발생하지 않음 (상태를 구독한 컴포넌트만 리랜더링 발생)
- selector 를 통해 캐싱 (기본적으로 값을 캐싱함)

### **1.** Atom & Selector?

- `Atom`: 상태(state)의 일부를 나타내며, Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있음. (상태 조각)
- `Selector`: Selector는 파생된 상태(derived state)의 일부를 나타냄. 파생된 상태는 상태의 변화
  - 파생된 상태를 어떤 방법으로든 주어진 상태를 수정하는 순수함수에 전달된 상태의 결과물.  
    (아톰에서 파생된 데이터 조각이며 데이터를 반환하는 순수함수)

### **2.** 흠.. Recoil?

- 아직 실험적인 단계에 있는 라이브러리
  - 보수적으로 다가가고자한다면 조금 더 지켜봐야..
- 하지만 지금 있는 기능들은 많이 안정화가 되어 있음. (AtomEffect 기능은 개발 중)
- 프로덕션에서 사용해도 큰 문제는 없음  
   (리디에서도 일부 기능을 사용하고 있다하며, 다른 회사에서도 종종 사용되고 있음)
- recoil은 상대적으로 redux보다 적은 학습비용 & 코드량이 적음
- recoil은 성능이점을 얻을 수 있음  
  하지만, 대규모 프로젝트에 적용하기에는 좋은 사례라던가 레퍼런스들이 부족함

---

### 생각 정리

- recoil을 프로젝트에 쓰려면, 소규모의 프로젝트가 좋을 것 같음
  - redux는 나온지도 오래되었고 관련 미들웨어도 많음  
    (하지만 점점 redux를 걷어내고 있다는 말도 들었어서, 고민해봐야함)
  - recoil을 적용하기엔 위에 쓴 것처럼 대규모 프로젝트에 적용하기엔 좋은 레퍼런스가 부족

---

### 참고자료

- [RIDI : 리덕스 잘 쓰고 계시나요?](https://ridicorp.com/story/how-to-use-redux-in-ridi/)
  - 이 글엔 많은 내용이 있음, 더 읽어보기  
     (프리젠테이셔널 & 컨테이너 컴포넌트 더 이상 사용하지 않는 이유라던지..)
- [redux, recoil 내용 정리](https://velog.io/@katanazero86/redux-recoil-내용-정리)
- [Recoil 공식 : Recoil 시작하기](https://recoiljs.org/ko/docs/introduction/getting-started)

### 추가 참고자료

만약 redux, recoil 둘 다 싫다면 예전에 해봤던 react의 ContextAPI + useReducer 조합은 어떨까?

- [리덕스없이 state 관리하기(hooks+context)](https://velog.io/@kimu2370/리덕스없이-상태-관리하기hookscontext)
