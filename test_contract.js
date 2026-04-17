const fs = require("fs");
const path = require("path");
const ethers = require("ethers");

async function test() {
  const deploymentPath = path.join(__dirname, "deployments", "localhost.json");
  const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));
  const provider = new ethers.JsonRpcProvider(deployment.rpcUrl);
  const pollAbi = [
    {
      "type": "function",
      "name": "question",
      "stateMutability": "view",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string" }]
    },
    {
      "type": "function",
      "name": "getOptions",
      "stateMutability": "view",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string[]" }]
    }
  ];
  const poll = new ethers.Contract(deployment.pollAddress, pollAbi, provider);
  try {
    const q = await poll.question();
    console.log("Question:", q);
    const o = await poll.getOptions();
    console.log("Options:", o);
  } catch (e) {
    console.error(e);
  }
}

test();
