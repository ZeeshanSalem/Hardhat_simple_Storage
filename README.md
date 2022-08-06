# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

yarn add --dev dotenv

// Checking node
yarn hardhat node

// Hardhat Console
yarn hardhat console --network localhost

// Delete Artifacts and cacher by
yarn hardhat clean

// Run Test
yarn hardhat test
// specific test
yarn hardhat test --grep (specific key word)

// For Gas Report
yarn add hardhat-gas-reporter --dev

// Add solidity Coverage
yarn add --dev solidity-coverage

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
