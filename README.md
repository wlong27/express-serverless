npm install @vendia/serverless-express

zip -r lambda.zip . -x './lambda-layer/*' './node_modules/*'

zip -r lambda-layer.zip lambda-layer/nodejs
