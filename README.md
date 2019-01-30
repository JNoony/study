스터디
------------
><p>스터디한걸 정리하기위한 공간</p>
<p> git으로 커밋하기 </p>

```bash
upload-----------------------------------------------
$ git init
$ git add .
$ git remote add orign http://
$ git config user.name jnoony
$ git config user.email jnoony@email.com
$ git commit -m "내용"
$ git push -u origin master
-----------------------------------------------------
```
<p>업로드 설정후 reload시</p>

```bash
reload-----------------------------------------------
$ git pull
$ git add .
$ git commit -m "내용"
$ git push
- user.name jnoony
- user.pass ***
-----------------------------------------------------
```

git오류 해결
---------
>1. ! [rejected] master -> master (fetch first) <br>
error: failed to push some refs to 'https://------- <br>
<p>git add . 으로 전체 업로드를 진행해서 기존에 있던 파일과 충돌 나는 바람에 손실생길까봐 깃에서 에러난 것인듯. <br>
강제진행하거나, 업데이트 확인하고 올리면 add . 으로 해도 수정된 파일만  해결.</p>

```bash
강제진행---------------------------------------------
$ git fetch origin master:tmp
$ git rebase tmp
$ git push origin HEAD:master
$ git branch -D tmp
-----------------------------------------------------
$ git push origin master --force  또는, $ git push origin master -f
-----------------------------------------------------
```

```bash
업데이트 확인 ----------------------------------------
$ git pull
-----------------------------------------------------
```


git pull시 오류
---------
>1. Please commit your changes or stash them before you merge. <br>
error: Your local changes to the following files would be overwritten by merge: <br>
<p>git pull 했을때 merge를 하라며 commit이랑 충돌 오류 발생할때<br>
파일을 삭제하고 다시 만드는게 아니라 임시로 저장하고 리셋해서 다시 진행</p>

```bash
Updating dab9a8b..b49cd63
error: Your local changes to the following files would be overwritten by merge:
        bundle.gradle // 충돌난 파일(File)
Please, commit your changes or stash them before you can merge.
```

```bash
---------------------------------------------
$ git stash    //unstaged 상태인 변경사항을 일시적으로 백업하고 워킹디렉토리를 깨끗한 상태로 유지
$ git pull     
$ git stash pop  //워킹 디렉토리에 stash를 다시 적용

$ git merge --abort   // 
-----------------------------------------------------
```

> ※Git Stash를 활용하여 충돌 해결하기
>>git stash란 unstaged 파일들을 임시 저장하고 HEAD의 상태로 백업을 하는 것입니다.
>>임시저장하는 것이기 때문에 다시 불러와서 적용을 할 수 있다.

```bash
---------------------------------------------
$ git status        //unstaged에 파일이 올라가 있는 모습확인  ex) modified:   deploy-source/award/index.html
$ git stash        //ex)Saved working directory and index state WIP on develop: ebab191 QA 세션 연사 추가/수정
$ git stash list   //현재 등록된 stash 확인하기  ex)stash@{1}: WIP on develop: 12145b5
$ git stash pop    // 저장된 stash 다시 적용하기
$ git pull
-----------------------------------------------------
```

※ OR
>1. 로컬 변경 사항을 숨기 십시오.
>2. gitignore를 무시하고 원본으로 하드 재설정 하는 파일 과 디렉토리를 깨끗하게 가져 옵니다 .

```bash
---------------------------------------------
$ git stash --include-untracked
$ git fetch --all
$ git clean -fdx
$ git reset --hard origin/master
-----------------------------------------------------
```
