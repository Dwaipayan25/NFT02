require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/eyoxJkmZpXOfJmP_SfhY8zBmGrTmAWIj",
      accounts: ["f1d03b696fba3c9955f1ec42e9a1b523b241d95075abefa1e98660051b79d6e8"],
    }
  }
};
