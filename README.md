# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test test/years.js
npx hardhat node
node scripts/sample-script.js
npx hardhat run scripts/deploy.js --network ropsten #部署合约到ropstem
npx hardhat help
```
### 上传合约源码到etherscan
npx hardhat verify --network <network> <DEPLOYED_CONTRACT_ADDRESS> "Constructor argument 1"
verify的参数必须要和发布合约的参数保持一致，才能通过验证
```shell
npm install --save-dev @nomiclabs/hardhat-etherscan
npx hardhat verify --network ropsten 0xD56cDF9EDccb50a76Aa9EBfe3CbB3b55CC97B582 "http://baidu.com"
```

### year合约发布到ropsten网络信息
Deploying contracts with the account: 0xe725D38CC421dF145fEFf6eB9Ec31602f95D8097
Account balance: 4949324753112613223
Token address: 0xD56cDF9EDccb50a76Aa9EBfe3CbB3b55CC97B582

### year合约发布到rinkeby网络信息
Deploying contracts with the account: 0xe725D38CC421dF145fEFf6eB9Ec31602f95D8097
Account balance: 2776815602018429661
Token address: 0xf4272c09B933a2d4Db1d916E282cE1394fc2cd60
deploy transaction: 0x8aa478d785ee7a7072ef62df72f2e32acbbdaa659f425b0f1d6285aa6614958a

### year 合约发布到polygon mumbai测试链
Deploying contracts with the account: 0xe725D38CC421dF145fEFf6eB9Ec31602f95D8097
Account balance: 1000000000000000000
Token address: 0x3633e02F4c08131c6c636eC36CC07cF48D253CC7
deploy transaction: 0x7f60d81c8048430b838ce1e468b227c91c414bc5071e9c0aa286cf3aece0d106

### nft导入到opensea
https://testnets.opensea.io/get-listed/