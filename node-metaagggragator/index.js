require('dotenv').config();
const readline = require('readline');
const { ethers } = require('ethers');
const config = require('./src/config');
const EthersService = require('./src/services/ethersService');
const TokenService = require('./src/services/tokenService');
const SwapService = require('./src/services/swapService');
const MetaAggregatorService = require('./src/services/metaAggregatorService');
const SwapFlowService = require('./src/services/swapFlowService');
const { ETH_ADDRESS } = require('./src/constants');

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    // Initialize services
    const ethersService = new EthersService(config.rpcUrl);
    const signer = await ethersService.initialize(config.privateKey);
    const tokenService = new TokenService(signer);
    const metaAggregatorService = new MetaAggregatorService(signer);
    const swapService = new SwapService(signer, tokenService, metaAggregatorService, config, rl);
    const swapFlowService = new SwapFlowService(rl, swapService);
    
    console.log(`\nConnected wallet address: ${signer.address}`);
    console.log(`Note: For ETH, you can use either "eth" or "${ETH_ADDRESS}"\n`);

    // Start the swap flow
    await swapFlowService.executeSwapFlow();
  } catch (error) {
    console.error('\nFatal error:', error.message);
  } finally {
    rl.close();
  }
}

main();