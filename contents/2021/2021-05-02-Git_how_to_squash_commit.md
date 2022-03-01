---
date: '2021-05-02'
title: '[Git] 삽질의 추억 - 스쿼시커밋'
categories: ['Git']
thumbnail: '../images/background_git.png'
---

# Git 삽질의 추억 - 스쿼시커밋

학원에서 예전에 했던 프로젝트를 다시 이어서 작업할 일이 있어 방법을 찾다가 쓰게된 글  
스쿼시 커밋을 안했다면.. 내 예전 커밋로그는 어디로 ㅠㅠ

## **[1]** 작업로그

### **1**. 이렇게 하니 PR이 안됨..

```sh
# clone
$ git clone -b Rano --single-branch https://github.com/17-sss/fe-w5-searchUI.git
$ cd fe-w5-searchUI\

# 이전 3주차 쇼핑하우 저장소 remote
$ git remote add shoppingHowOrigin https://github.com/17-sss/fe-w3-shopping.git
$ git remote -v

# 이번 미션 5주차용 첫 branch 생성 (searchUI-step1)
$ git checkout -b searchUI-step1

# 3주차 미션의 마지막 브랜치 pull
$ git pull shoppingHowOrigin shoppinghow-step5

# 이번 미션의 로컬저장소에 3주차 미션의 마지막 브랜치 기반으로 브랜치 생성
$ git checkout -b shoppinghow-step5 --track shoppingHowOrigin/shoppinghow-step5

# rebase할 브랜치로 checkout (최종 기준이 되는 branch)
$ git checkout searchUI-step1

# rebase: rebase 재료를 써줌
$ git rebase shoppinghow-step5

# conflict 수정
$ git add .
$ git rebase --continue

# upstream 설정 및 Push
$ git remote add upstream https://github.com/codesquad-members-2021/fe-w5-searchUI.git
$ git push --set-upstream origin searchUI-step1
```

### **2**. PR 가능하도록 다시 작업

```sh
# clone
$ git clone -b Rano --single-branch https://github.com/17-sss/fe-w5-searchUI.git
$ cd fe-w5-searchUI\

# 이전 3주차 쇼핑하우 저장소 remote
$ git remote add shoppinghow https://github.com/17-sss/fe-w3-shopping.git
$ git remote -v

# 이번 미션 5주차용 첫 branch 생성 (searchUI-step1)
$ git checkout -b searchUI-step1

# 3주차 미션의 마지막 브랜치 pull
$ git pull shoppinghow shoppinghow-step5 --allow-unrelated-histories

# confilct 해결 후
$ git add .
$ git commit

# upstream 설정 및 Push
$ git remote add upstream https://github.com/codesquad-members-2021/fe-w5-searchUI.git
$ git push --set-upstream origin searchUI-step1

# 하나의 커밋으로 합치기위해 rebase
$ git rebase -i 7094f2af    # git rebase -i [기준점 커밋ID]
## 최상단에 있는 commit 로그는 pick으로. 나머지는 s(squash)로.
    ## 달라질 수 있음

# confilct가 있다면 해결 후
$ git add .
$ git rebase --continue      # 커밋 로그 수정

# 마지막으로 --force push
$ git push origin searchUI-step1 --force
```

---

### **참고 링크**

-   remote
    -   [리모트 저장소 저장소 추가하는 법](https://velog.io/@leyuri/Git-remote-리모트-저장소-저장소-추가하는-법)
    -   [GitHub 깃허브 원격 remote origin 삭제하는 방법](https://0urtrees.tistory.com/41)
    -   [1.5: upstream 원격 저장소 설정하기](https://nochoco-lee.tistory.com/6)
-   pull
    -   [[git 기본 ] git pull 시 특정 branch 를 pull 해오기](https://potensj.tistory.com/90)
    -   [Git push가 안되는 경우 (fatal: refusing to merge unrelated histories)](https://gdtbgl93.tistory.com/63)
-   reset
    -   [git. commit, add, pull, merge 취소](https://mrgamza.tistory.com/593)
-   rebase
    -   [rebase 로 병합하기](https://backlog.com/git-tutorial/kr/stepup/stepup2_8.html)
    -   [[Git] 이미 Push한 Commit 메세지 변경하기](https://ssoco.tistory.com/56)
-   push
    -   [Git branch의 push, --set-upstream 설정 생략하기](https://blog.aaronroh.org/120)
-   fork
    -   [[Git] fork 해온 repository를 최신 상태로 동기화하기](https://yj-oh.tistory.com/5)
