// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
    // 1.获取钱包，会从配置文件hardhat.config.js获取私钥
    const [deployer,account] = await ethers.getSigners();
    // 2.与已经发布的合约交互
    // const TokenAddr = process.env.RINKEBY_TOKEN_ADDR;
    const TokenAddr = process.env.MAINET_TOKEN_ADDR;
    const Years = await ethers.getContractFactory("Years");
    const Token = new ethers.Contract(TokenAddr, Years.interface, deployer);

    // 3. 调用view,prue方法，直接使用eth_call(),不产生交易
    console.log(`token addr: ${Token.address}`);
    let currentValue = await Token.TOTAL_SUPPLY();
    console.log(`currentValue:${currentValue}`);
    let baseURI = await Token.baseURI();
    console.log(`baseURI:${baseURI}`);
    let balance = await Token.balanceOf(deployer.address);
    console.log(`account:${deployer.address},balanceof:${balance}`);
    // let approver = await Token.getApproved(1);
    // console.log(`tokenid:1,approver:${approver}`);
    // let owner = await Token.ownerOf(1);
    // console.log(`tokenid:1,owner:${owner}`);
    // let tokenURI = await Token.tokenURI(1);
    // console.log(`tokenid:1,tokenURI:${tokenURI}`);

    // 4. 通过交易调用合约方法
    // 4.1 通过静态调用，免费的在本地测试一下交易是否成功，防止直接调用发生失败
    // let t = await Token.callStatic.approve(account.address, 3);
    // console.log(t)
    // let approveTx = await Token.approve(account.address, 1);
    // console.log(`Waiting for transaction :${approveTx.hash}`)
    // await approveTx.wait()
    
    console.log(`tx sender: ${deployer.address}, token address: ${Token.address}`);
    let t = await Token.callStatic.teamMintFor(deployer.address, 10000);
    console.log(t);
    // let mintTx = await Token.teamMintFor(deployer.address, 10000);
    // console.log(`mintTx: ${mintTx.hash}`);
    // await mintTx.wait();

    // 5. 使用其他账户调用tx
    // let tx = await Token.connect(account).approve(account.address, 1);
    // console.log(`Waiting for transaction :${tx.hash}`)
    // await tx.wait()

  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
