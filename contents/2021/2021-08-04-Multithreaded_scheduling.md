---
date: '2021-08-04'
title: '[Computer Science] 멀티 스레드 스케줄링 & 스레드 스케줄링 방식'
categories: ['Computer Science']
thumbnail: '../images/background_cs.jpg'
---

# 🤔 멀티 스레드 스케줄링 & 스레드 스케줄링 방식

## **[1]** 멀티 스레드 스케줄링

- 하나의 프로세스에 2가지 이상의 작업을 처리할 수 있는 것
- **동시성**
  멀티 작업을 위해 하나의 코어에서 멀티 스레드가 번갈아가며 실행하는 성질
- **병렬성**
  멀티 작업을 위해 멀티 코어에서 개별 스레드를 동시에 실행하는 성질

## **[2]** 스레드 스케줄링 방식 (+ 운영체제 스레드 동작 방식)

### **1.** 스케줄링 방식

- **우선순위(Priority)방식**  
  우선순위가 높은 스레드가 실행 상태를 더 많이 가지도록 스케줄링 하는 것.  
  스레드 객체에 우선 순위를 부여 할 수 있어 코드 제어가 가능.

- **순환(Round-Robin)방식**  
  시간 할당량을 정해서 하나의 스레드를 정해진 시간만큼 실행. 코드 제어 불가.

- **First-Come,First-Served(FCFS)방식**  
  먼저 온 프로세스가 먼저 코어를 점유하고 실행하는 방식.  
  다른 프로세스가 중간에 끼어들 수 없는 것이 단점.

- **Shortest-Job-First(SJF)방식**  
  가장 짧게 수행되는 프로세스가 가장 먼저 수행되는 방식.  
  프로세스는 많은 변수가 있기 때문에 시간 예측이 어려워 비현실적임.

- **Multilevel Queue 방식**  
  프로세스를 기준에 따라 여러 그룹으로 나눌 수 있음.  
  그 그룹에 따라 큐를 두어 여러 개의 큐를 사용하는 방식.  
  큐마다 우선순위를 지정할 수 있는 장점이 있음.

- **Multilevel Feedback Queue 방식**  
  멀티레벨큐 방식과 비슷하다.  
  가장 위의 큐부터 코어 점유를 대기한다.  
  대기하는 큐에서 시간이 오래 걸린다면, 아래의 다른 큐로 프로세스를 옮기는 방식.

### **2.** 운영체제 스레드 동작 방식

- 대부분 **Multilevel Queue 방식**을 사용  
  큐마다 다른 스케줄링 방식을 사용  
  프로세스 그룹별로 성격에 맞는 스케줄링 방식을 사용하여 효율성을 최대로 높임.

---

### 참고자료

- [Multi Thread](https://2oneweek.dev/common/computer-science/os/multi-thread/)