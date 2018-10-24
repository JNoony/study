스터디
------------
<p>스터디한걸 정리하기위한 공간</p>

```bash
upload-----------------------------------------------
$ git init
$ git add .
$ git remote add orign http://
$ git config user.name jnoony
$ git config user.email tarot0312@nate.com
$ git commit -m "내용"
$ git push -u origin master
-----------------------------------------------------
```

git오류 해결
---------
>1. ! [rejected] master -> master (fetch first) <br>
error: failed to push some refs to 'https://-------
```bash
$ git fetch origin master:tmp
$ git rebase tmp
$ git push origin HEAD:master
$ git branch -D tmp

$ git push origin master --force

$ git push origin master -f
```
