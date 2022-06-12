# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.
npm install
```shell
npm install --save dotenv

```


Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test test/years.js
npx hardhat node
node scripts/sample-script.js
npx hardhat run scripts/deploy.js --network ropsten #部署合约到ropstem
npx hardhat run scripts/app.js --network rinkeby
npx hardhat run scripts/app.js --network mainnet
npx hardhat help
```
### year合约发布到mainnet网络信息
Deploying contracts with the account: 0x030df8d43BFd03B222B5E1afa40e15CE106Fc5e7
Account balance: 806706365504453877
Token address: 0x333D2Ed270B743A30d680E4f0EAddB6cA05db0DD
deploy transaction: 0x006fc4e00d4a2a1a70db2a655e2cb912f97dd566c93fe4653a9f27ab8e6cee9f

### year合约发布到ropsten网络信息
Deploying contracts with the account: np
Account balance: 4949324753112613223
Token address: 0xD56cDF9EDccb50a76Aa9EBfe3CbB3b55CC97B582

### year合约发布到rinkeby网络信息
Token address: 0xf4272c09b933a2d4db1d916e282ce1394fc2cd60

### year 合约发布到polygon mumbai测试链
Deploying contracts with the account: 0xe725D38CC421dF145fEFf6eB9Ec31602f95D8097
Account balance: 1000000000000000000
Token address: 0x3633e02F4c08131c6c636eC36CC07cF48D253CC7
deploy transaction: 0x7f60d81c8048430b838ce1e468b227c91c414bc5071e9c0aa286cf3aece0d106

### 上传合约源码到etherscan
npx hardhat verify --network <network> <DEPLOYED_CONTRACT_ADDRESS> "Constructor argument 1"
verify的参数必须要和发布合约的参数保持一致，才能通过验证
```shell
npm install --save-dev @nomiclabs/hardhat-etherscan
npx hardhat verify --network mainnet 0x333D2Ed270B743A30d680E4f0EAddB6cA05db0DD "https://nftstorage.link/ipfs/bafybeiek32szlvffaehem5njtt6fzsnorjn2sqssrx5kzx6szfg7ee22ti/"
```

### nft导入到opensea
https://testnets.opensea.io/get-listed/