# 프로젝트 생성
$ npm init

# 디펜던시 설치
$ npm install

# Express 설치
$ npm install express

# 실행
$ node app.js

# 도커라이징하기(local dockerizing)
$ docker build . -f DockerFile copilot/sample

# AWS Copilot
https://aws.github.io/copilot-cli/docs/getting-started/first-app-tutorial/

https://github.com/aws-samples/aws-copilot-sample-service

[Deploying]
To deploy this app, clone this repo and then run:

$ copilot init --app demo \
  --name api \
  --type "Load Balanced Web Service" \
  --dockerfile "./Dockerfile" \
  --deploy

[Copilot will set up the following resources in your account:]

A VPC
Subnets/Security Groups
Application Load Balancer
Amazon ECR Repositories
ECS Cluster & Service running on AWS Fargate

[CI/CD Pipeline auto-creation]
$ copilot pipeline init
$ git add copilot/pipeline.yml copilot/buildspec.yml copilot/.workspace && git commit -m "Adding pipeline artifacts" && git push
$ copilot pipeline update

[Cleaning up]
Since this demo sets up resources in your account, let's delete them so you don't get charged:

copilot app delete


