const { Webhooks } = require("@octokit/webhooks");
const childProcess  = require("child_process");
const webhooks = new Webhooks({
  secret: "mysecret193",
  path:'/webhooks'
});

webhooks.on("*", ({ id, name, payload }) => {
  console.log(name, "event received");
childProcess.spawn('sh', ['./deploy.sh'])
});

require("http").createServer(webhooks.middleware).listen(6000);
