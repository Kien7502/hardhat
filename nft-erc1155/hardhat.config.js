/**
 * @type import('Hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const EVN_KEY = process.env.SECRET_KEY
module.exports = {
  solidity: "0.8.1",
  networks: {
    goerli: {
      url: "https://ethereum-goerli.publicnode.com",
      accounts: [EVN_KEY]
    },
    bnb: {
      url: "https://bsc-testnet.publicnode.com",
      accounts: [EVN_KEY]
    },
    fantom: {
      url: "https://fantom-testnet.publicnode.com",
      accounts: [EVN_KEY]
    }
  },

};