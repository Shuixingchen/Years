require("@nomiclabs/hardhat-waffle"); //引入waffle插件（这个插件包含了Ethers.js）
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
dotenv.config({path: __dirname + '/.env'});


//手动新增一个task, npx hardhat account
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const PRIVATE_KEY_ONE = process.env.PRIVATE_KEY_ONE;
const PRIVATE_KEY_TWO = process.env.PRIVATE_KEY_TWO;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const PRIVATE_KEY_ONLINE = process.env.PRIVATE_KEY_ONLINE;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.11",
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY_ONLINE}`],
      gasPrice: 20000000000
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY_ONE}`],
      gasPrice: 11000000000
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY_ONE}`,`0x${PRIVATE_KEY_TWO}`],
      gasPrice: 11000000000
    },
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/v1/0aef2a33937a03dc04746e653c2e985d8246174f`,
      accounts: [`0x${PRIVATE_KEY_ONE}`]
    }
  },

  etherscan: {
    apiKey: {
      mainnet: `${ETHERSCAN_API_KEY}`,
      ropsten: `${ETHERSCAN_API_KEY}`,
      rinkeby: `${ETHERSCAN_API_KEY}`,
      polygonMumbai: `${POLYGONSCAN_API_KEY}`
    }
  }
  
};
