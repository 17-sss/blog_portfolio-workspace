---
date: '2021-05-17'
title: '[Tech Article] 우리가 TypeScript로 갈아탄 이유'
categories: ['Tech Article']
thumbnail: './_background_tech_article.jpg'
---

# 기술 문서 읽기 챌린지 [2021년 5월 17일]

## **우리가 TypeScript로 갈아탄 이유**

**1. Javascript의 한계와 Typescript**  
- Javascript는 **프로젝트가 진행될수록 Javascript만으로 작성된 프로그램이 개발자의 의도대로 동작하는 지 확인하기 힘들다**
- Javscript로 만든 프로그램이 왜 버그가 많을까?
    - Javascript라는 언어 자체의 요상하고 독특한 의미 구조
        - 다른 언어에서 사용되는 `class` 기반의 OOP가 아닌, `prototype` 기반의 OOP를 가지고 있음
        - 함수와 문맥 파악이 힘들다는 점 (`this` 라는 키워드가 함수 호출 방법에 따라 달라짐)
        - 비동기 함수 호출과 독특한 런타임
        - 이 외에도 값이 연산 과정에서 시시때때로 바뀐다는 점
    - `static type checking`의 부재에서 찾을 수 있다.
        - 이것 때문에 Typescript가 등장을 하였다고 함!

### 느낀점

-   이 아티클은 Typescript를 코드에 안정성을 주고 싶어서 적용했던 것 같다.  
     많은 개발자들이 쓰는 언어들과는 javascript는 약간 불친절하기에  
     Typescript가 만들어진게 아닐까?  
     현업에서는 Typescript가 좋을 것 같다.  
     확실히 일반적으로 쓰면 무슨 타입이 들어가는지 알 수가 없으니까..
-   더 디테일한 내용을 참고하고 싶다면 참고 링크로 봐서 더 훑어보자!!

<br/>

**참고 링크**

-   [우리가 TypeScript로 갈아탄 이유](https://brunch.co.kr/@redwit/1)
