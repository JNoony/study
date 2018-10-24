<h2>스터디</h2>
<p>스터디한걸 정리하기위한 공간</p>

```bash
-Git upload-------------------------------------------
$ git init
$ git add .
$ git remote add orign http://
$ git config user.name jnoony
$ git config user.email tarot0312@nate.com
$ git commit -m "내용"
$ git push -u origin master
-----------------------------------------------------
```

<h3>git오류 해결</h3>
>1. ! [rejected] master -> master (fetch first) <br>
error: failed to push some refs to 'https://github.com/JNoony/study.git'
```bash
$ git fetch origin master:tmp
$ git rebase tmp
$ git push origin HEAD:master
$ git branch -D tmp
```
