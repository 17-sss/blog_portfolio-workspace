---
date: '2021-04-09'
title: '[Tech Article] React Hook은 실제로 어떻게 동작할까?'
categories: ['Tech Article']
thumbnail: './background_tech_article.jpg'
---

# 기술 문서 읽기 챌린지 [2021년 4월 9일]

## **심층 분석: React Hook은 실제로 어떻게 동작할까?**

Hooks는 UI의 상태 관련 동작 및 부수 작용(side effects)을 캡슐화하는 가장 간단한 방법  
Hooks가 내세우는 많은 장점 중 하나는 클래스와 고차 컴포넌트의 복잡성을 피할 수 있다.

하지만 hooks를 사용하면 그 문제가 그저 다른 문제로 바뀐 것처럼 느껴진다.  
bind된 컨텍스트에 대해 걱정할 필요가 없는 대신 클로저에 대해 걱정해야 하기 때문..

**클로저..?**

```
클로저는 함수가 속한 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때에도 이 스코프에 접근할 수 있게 하는 기능을 뜻한다. (카일 심슨)
(이는 렉시컬 스코핑의 개념과 밀접한 관련이 있다고 함)

+ 지인분들의 의견
    제이슨: 함수가 함수를 리턴할때 그 함수가 클로저이다.
```

<br/>

**참고 링크** (**_더 읽어보기!!_**)

-   [[번역] 심층 분석: React Hook은 실제로 어떻게 동작할까?](https://hewonjeong.github.io/deep-dive-how-do-react-hooks-really-work-ko/)
