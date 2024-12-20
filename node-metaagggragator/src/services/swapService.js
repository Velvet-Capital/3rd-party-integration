const { ethers } = require('ethers');
const { ETH_ADDRESS, ERROR_MESSAGES } = require('../constants');
const { validateAddress, validateAmount, validateSlippage } = require('../utils/validation');
const { formatTokenAmount } = require('../utils/format');
const GasService = require('./gas/gasService');

class SwapService {
  constructor(signer, tokenService, metaAggregatorService, config, rl) {
    if (!signer) throw new Error('Signer is required');
    if (!tokenService) throw new Error('TokenService is required');
    if (!metaAggregatorService) throw new Error('MetaAggregatorService is required');
    if (!config) throw new Error('Config is required');
    if (!rl) throw new Error('ReadLine interface is required');

    this.signer = signer;
    this.tokenService = tokenService;
    this.metaAggregatorService = metaAggregatorService;
    this.config = config;
    this.rl = rl;
    this.gasService = new GasService(signer.provider);
  }

  async executeSwap(tokenA, tokenB, amount, slippage) {
    const { sellToken, buyToken, amountInWei } = await this.validateAndPrepareInputs(
      tokenA, tokenB, amount, slippage
    );

    // Get swap data
    console.log('\nGetting best swap route...');
    const swapData = await this.metaAggregatorService.getSwapData(
      this.signer.address,
      amountInWei.toString(),
      sellToken,
      buyToken,
      parseFloat(slippage),
      this.config.chainId
    );

    // Display swap details and get confirmation
    await this.displaySwapDetails(swapData, buyToken);
    if (!await this.askForConfirmation()) {
      console.log('Swap cancelled by user');
      return null;
    }

    // Handle token approval if needed
    await this.handleTokenApproval(sellToken, swapData.tx.to, amountInWei);

    // Execute swap
    console.log('\nExecuting swap...');
    return await this.signer.sendTransaction({
      to: swapData.tx.to,
      data: swapData.tx.data,
      value: this.tokenService.isNativeToken(sellToken) ? amountInWei : '0',
      gasLimit: swapData.gasEstimate,
      gasPrice: swapData.tx.gasPrice
    });
  }

  async validateAndPrepareInputs(tokenA, tokenB, amount, slippage) {
    const sellToken = tokenA.toLowerCase() === 'eth' ? ETH_ADDRESS : tokenA;
    const buyToken = tokenB.toLowerCase() === 'eth' ? ETH_ADDRESS : tokenB;
    
    validateAddress(sellToken);
    validateAddress(buyToken);
    const validAmount = validateAmount(amount);
    validateSlippage(slippage);

    const decimals = await this.tokenService.getDecimals(sellToken);
    const amountInWei = ethers.utils.parseUnits(validAmount.toString(), decimals);

    return { sellToken, buyToken, amountInWei };
  }

  async displaySwapDetails(swapData, buyToken) {
    const buyTokenDecimals = await this.tokenService.getDecimals(buyToken);
    console.log('\nSwap Details:');
    console.log(`Protocol: ${swapData.protocol}`);
    console.log(`Amount Out: ${formatTokenAmount(swapData.amountOut, buyTokenDecimals)}`);
    console.log(`Minimum Amount Out: ${formatTokenAmount(swapData.minAmountOut, buyTokenDecimals)}`);
    console.log(`Estimated Gas: ${swapData.gasEstimate}`);
  }

  async handleTokenApproval(sellToken, routerAddress, amountInWei) {
    if (!this.tokenService.isNativeToken(sellToken)) {
      console.log('\nChecking token approval...');
      await this.tokenService.approveIfNeeded(sellToken, routerAddress, amountInWei);
    }
  }

  async askForConfirmation() {
    return new Promise(resolve => {
      this.rl.question('\nDo you want to proceed with the swap? (yes/no): ', answer => {
        resolve(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y');
      });
    });
  }
}

module.exports = SwapService;