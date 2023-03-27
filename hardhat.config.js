const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
task("accounts", "prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    const address = await account.getAddress();
    const balance = await account.getBalance();
    console.log(address + " " + hre.ethers.utils.formatEther(balance) + " ethers");
  }
})

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/dtzDLxbqFfFieroofUAOsDFy6eteCpVM",
      accounts: [private key]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
  }
};
