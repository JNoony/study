스터디
------------
><p>스터디한걸 정리하기위한 공간</p>
<p> 1. git으로 커밋하기 </p>

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
<p>2. 업로드 설정후 reload시</p>

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

<p>3. 공동작업 할때 git 업로드중  </p>
>-같은 파일 수정 후 업로드 시 push 하기 위한 방법

```bash
---------------------------------------------
$ git stash    //unstaged 상태인 변경사항을 일시적으로 백업하고 워킹디렉토리를 깨끗한 상태로 유지
$ git pull     
$ git stash pop  //워킹 디렉토리에 stash를 다시 적용
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


>2. The file will have its original line endings in your working directory.
<p>맥 또는 리눅스를 쓰는 개발자와 윈도우 쓰는 개발자가 Git으로 협업할 때 발생하는 Whitespace 에러 <br>
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면, 윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로 이루어지기 때문이다. 따라서 어느 한 쪽을 선택할지 Git에게 혼란이 온 것<br>
해답은 core.autocrlf 를 켜는 것!</p>
<br>
```bash
---------------------------------------------
윈도우 사용자의 경우 이러한 변환이 항상 실행되도록 다음과 같은 명령어를 입력
$ git config --global core.autocrlf true

리눅스나 맥을 사용하고 있는 경우
$ git config --global core.autocrlf true input

그냥 에러 메시지 끄고 알아서 작업하고 싶은 경우
$ git config --global core.safecrlf false
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
※ 기본적인 방법 ※
---------------------------------------------
$ git stash    //unstaged 상태인 변경사항을 일시적으로 백업하고 워킹디렉토리를 깨끗한 상태로 유지
$ git pull     
$ git stash pop  //워킹 디렉토리에 stash를 다시 적용
-----------------------------------------------------
```

※Git Stash를 활용하여 충돌 해결하기
>git stash란 unstaged 파일들을 임시 저장하고 HEAD의 상태로 백업을 하는 것입니다.
>임시저장하는 것이기 때문에 다시 불러와서 적용을 할 수 있다.

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



React
------------
>React 작업환경 설정하기

```bash
-----------------------------------------------------
mkdir react-tutorial && cd react-tutorial 

npm init

npm install -g create-react-app
npm install -save create-react-app

npx create-react-app 폴더이름

npm install --save react react-dom
npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 webpack webpack-dev-server
-----------------------------------------------------
```
>[ npm install --save create-react-app ]  -->React 패키지 설치
>[ mkdir react-tutorial && cd react-tutorial ] -->react-tutorial라는 루트폴더 설치후, npm init으로 Node.js 설치.
>[ babel-core babel-loader... ]  -->babel 에서 사용 될 플러그인을 설치 

<p>※추가적으로 설치할것들</p>
>npm install -save axuis   --> ajax같은 기능
>npm install -save react-router-dom    -->{ Link,Router,Route }기능사용

```bash
※ 설치후 React 구조
-----------------------------------------------------
react-tutorial
├── package.json         
├── public            # 서버 public path
│   └── index.html    # 메인 페이지
├── src               # React.js 프로젝트 루트
│   ├── components    # 컴포넌트 폴더
│   │   └── App.js    # App 컴포넌트
│   └── index.js      # Webpack Entry point
└── webpack.config.js # Webpack 설정파일
-----------------------------------------------------
```
