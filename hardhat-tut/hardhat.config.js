require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: "https://ethereum-goerli.publicnode.com",
      accounts: ["86af082eb388d2d5dccc744dce6eed3bf3c4f63c01e54da948ccf03b5195fd3c"]
    },
    bnb: {
      url: "https://bsc-testnet.publicnode.com",
      accounts: ["86af082eb388d2d5dccc744dce6eed3bf3c4f63c01e54da948ccf03b5195fd3c"]
    },
    fantom: {
      url: "https://fantom-testnet.publicnode.com",
      accounts: ["86af082eb388d2d5dccc744dce6eed3bf3c4f63c01e54da948ccf03b5195fd3c"]
    }
  },

};
require("@nomicfoundation/hardhat-toolbox");
