// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // 1.获取钱包，会从配置文件hardhat.config.js获取私钥
  const [deployer] = await ethers.getSigners();
  
  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // 2. 需要部署的合约
  const NFTIPFS_URI = process.env.NFTIPFS_URI;
  const Token = await ethers.getContractFactory("Years");
  const token = await Token.deploy(NFTIPFS_URI);

  console.log("Token address:", token.address);
  console.log("deploy transaction:", token.deployTransaction.hash);

  await token.deployed()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
