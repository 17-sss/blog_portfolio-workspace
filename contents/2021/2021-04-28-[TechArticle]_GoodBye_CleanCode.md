---
date: '2021-04-28'
title: '[Tech Article] 잘 가, 클린 코드'
categories: ['Tech Article']
thumbnail: '../images/background_tech_article.jpg'
---

# 기술 문서 읽기 챌린지 [2021년 4월 28일]

## **잘 가, 클린 코드**

**누가봐도 클린 코드인데? (물론 내가 봤을 때..?)**

-   이 글을 읽으면서 초반부에 예시를 들어 코드를 리팩토링하고 더 깔끔하게 만들었는데,  
     팀 리더와 다른 사람들의 반응이 좋지 않았다고 한다.  
     나도 읽으면서 글쓴가 생각했던 것처럼 글쓴이가 새로 짠 코드가 훨씬 깔끔하다고 느꼈었다.
-   반전은 그들이 옳았다는 것을 깨닫는 데는 몇 년이 걸렸다한다..

**하나의 단계일 뿐이다**

-   많은 사람들이 “클린 코드”나 중복 제거에 얽매이는 시기를 겪는다.  
     이 시기에는 본인이 짠 코드에 자신이 없을 경우,  
     측정할 수 있는 무언가를 통해 자신감이나 만족감을 얻고 싶은 욕구를 느끼게 된다.
    대표적으로 엄격한 lint 규칙, naming 규칙, 폴더 구조, 중복 제거 등이 그렇다.

    -   **나도 약간 그런 것 같다...**

-   중복 제거를 자동화할 수는 없지만 연습을 통해 능력을 개선시킬 수는 있음.

    -   중복을 제거한 것은 코드에 대한 객관적인 지표를 개선시킨 것처럼 느끼게 만든다.
    -   더 심한 경우엔, <span style="color: gray">“난 코드를 깔끔하게 짜는 훌륭한 개발자야!”</span> 라는 결론에 이르게 될 수도 있다.
    -   이는 **자기기만** 만큼이나 **안 좋은 결과**를 가져다 줄 수 있음!!

-   글 초반의 리팩토링은 두가지 재앙이었다.
    -   **1)** 코드를 작성한 사람과 변경에 대해 논의하지 않았던 것
        -   협업에서 이런식으로 업무를 처리하는 것은 최악.
        -   훌륭한 엔지니어링 팀은 끊임없이 신뢰를 만들어 나감.  
             별다른 상의 없이 동료의 코드를 변경하는 것은 언젠가 후폭풍을 불러 올 것!!
    -   **2)** 완벽한 개선이란 없다는 것

**정리**

-   코딩은 하나의 여정이다.
-   함수나 클래스를 통해 로직을 분리시켜 코드를 심플하게 만드는 것은 처음엔 정말 즐거운 일이었을 것.  
     자신의 코드가 깔끔하고 멋져보이는 순간, 그 깔끔함에 매료됐을 것이며, 한동안은 계속 그렇게 해도 됨.
    > **하지만!!!** 여기서 멈춰 클린코드충이 되지는 말자.  
    > 클린 코드는 목표가 아님 (단지 프로그램의 복잡성을 줄이고자 하는 시도일 뿐)  
    > 코드가 어떻게 바뀔지 모르는 상황에서, 피해를 최소한으로 줄이고자 하는 방어 전략 중 하나일뿐이니까.

<br/>

**참고 링크**

-   [Overreacted : 잘가, 클린 코드](https://overreacted.io/ko/goodbye-clean-code/)