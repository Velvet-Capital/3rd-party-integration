# Velvet Integration Checklist

For integration and development, some updates are needed for external developers to integrate the Velvet codebase. The following checklist outlines the necessary improvements:

- [ ] Establish a repeatable testing and development environment
  - [ ] Enable continuous integration using Github Actions
    - [ ] Install the package using npm
    - [ ] Build smart contracts
    - [ ] Run tests
    - [ ] Perform a test deployment on Anvil/Hardhat
    - [ ] Print out the list of deployed contracts and their addresses

- [ ] Create an overview of smart contracts
  - [ ] Develop a UML diagram showing contract interactions

- [ ] Improve smart contract documentation
  - [ ] Add source code comments to contracts explaining:
    1. What the contract is
    2. What it does
    3. How it does it
    4. Which other parts of the system it interacts with

- [ ] Provide example code snippets in developer documentation
  - [ ] How to read the status of one vault
    - [ ] Current assets and weights
  - [ ] How to read all available vaults
  - [ ] How to perform a rebalance
    - [ ] Options to do trades
    - [ ] How to do offline signing and other methods
  - [ ] How to configure vaults and what settings are available
