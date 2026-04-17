const fs = require("fs");
const path = require("path");
const hre = require("hardhat");

function writeDeploymentArtifacts(deployment) {
  const deploymentsDir = path.join(__dirname, "..", "deployments");
  const frontendLibDir = path.join(__dirname, "..", "frontend", "lib");

  fs.mkdirSync(deploymentsDir, { recursive: true });
  fs.mkdirSync(frontendLibDir, { recursive: true });

  const jsonPath = path.join(deploymentsDir, "localhost.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(deployment, null, 2)}\n`, "utf8");

  const tsPath = path.join(frontendLibDir, "deployment.ts");
  const tsContents = `export const deployment = ${JSON.stringify(deployment, null, 2)} as const;\n`;
  fs.writeFileSync(tsPath, tsContents, "utf8");

  console.log("Deployment artifacts written to:");
  console.log(`- ${jsonPath}`);
  console.log(`- ${tsPath}`);
}

async function main() {
  const { ethers, network } = hre;

  const [deployer] = await ethers.getSigners();

  console.log("Deploying with:", deployer.address);
  console.log("Target network:", network.name);

  const MembershipNFT = await ethers.getContractFactory("MembershipNFT");
  const membershipNFT = await MembershipNFT.deploy(deployer.address);
  await membershipNFT.waitForDeployment();

  console.log("MembershipNFT deployed to:", membershipNFT.target);

  const Poll = await ethers.getContractFactory("Poll");
  const poll = await Poll.deploy(
    membershipNFT.target,
    "What should we build next?",
    ["DAO", "NFT", "DeFi"]
  );
  await poll.waitForDeployment();

  console.log("Poll deployed to:", poll.target);

  writeDeploymentArtifacts({
    chainId: Number(network.config.chainId ?? 31337),
    network: network.name,
    rpcUrl: "http://127.0.0.1:8545",
    deployer: deployer.address,
    membershipAddress: membershipNFT.target,
    pollAddress: poll.target,
    deployedAt: new Date().toISOString(),
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
