import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan"
import '@typechain/hardhat'

const ALCHEMY_API_KEY = "_";

const GOERLI_PRIVATE_KEY = '_'

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  etherscan: {
    apiKey: "_"
  },
  networks: {
    goerli: {
      url:  `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};

export default config;
