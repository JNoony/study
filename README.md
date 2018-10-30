스터디
------------
<p>스터디한걸 정리하기위한 공간</p>
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
