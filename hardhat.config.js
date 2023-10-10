require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

module.exports = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    goerli: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: "4bb6e5c3c67da33503ae904d96be0f6a184fd7343a4e875964e2c1da493e2f72"
    }
  },
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./src/contracts",
    artifacts: "./src/abis"
  },
  mocha: {
    timeout: 40000
  }
}