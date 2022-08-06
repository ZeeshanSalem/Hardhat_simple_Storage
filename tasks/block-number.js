const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    // hre mean headhat runtime enviroment
    async (tasksArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Block Number is ${blockNumber}`)
    }
)

module.exports = {}
