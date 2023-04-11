# Introduction
This project demo the usage of serverless-express to create a serverless express application using AWS Lambdas  

# Install serverless-express package
```
npm install @vendia/serverless-express
```

# Simple packaging for AWS Lambda
```
zip -r dist.zip . -x './nodejs/*' './node_modules/*'
```
# Create AWS Lambda layer for nodejs
zip -r nodejs.zip './nodejs'
