require("source-map-support/register");
const serverlessExpress = require("@vendia/serverless-express");
const app = require("./app");

let serverlessExpressInstance;

function asyncTask(event) {
  console.log("First time initialization ...");
  console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2));
  console.log("EVENT\n" + JSON.stringify(event, null, 2));

  return new Promise((resolve) => {
    setTimeout(() => resolve("Connected to database!"), 1000);
  });
}

async function setup(event, context) {
  const asyncValue = await asyncTask(event);
  console.log(asyncValue);

  serverlessExpressInstance = serverlessExpress({ app });
  return serverlessExpressInstance(event, context);
}

function handler(event, context) {
  if (serverlessExpressInstance) {
    return serverlessExpressInstance(event, context);
  }

  return setup(event, context);
}

exports.handler = handler;
