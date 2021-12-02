[Sample express]
# Express Generator 설치
$ npm install --global express-generator

# Express Generator 로 myExpressApp이라는 샘플 프로젝트 생성
$ express myExpressApp --view pug

# 생성된 myExpressApp 프로젝트로 이동
$ cd express myExpressApp

# 디펜던시 설치
$ npm install

# express-example 프로젝트 실행
$ npm start

[local dockerizing]
$ docker build . -f DockerFile 