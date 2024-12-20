const { ETH_ADDRESS } = require('./constants');

class SwapService {
  constructor(web3, tokenService, ensoService, tokenValidator) {
    this.web3 = web3;
    this.tokenService = tokenService;
    this.ensoService = ensoService;
    this.tokenValidator = tokenValidator;
  }

  async executeSwap(userAddress, tokenA, tokenB, amount, slippage) {
    // Validate token pair
    await this.tokenValidator.validateTokenPair(tokenA, tokenB);

    // Get token decimals
    const sellTokenDecimals = await this.tokenService.getDecimals(tokenA);
    const amountInWei = this.web3.utils.toBN((parseFloat(amount) * 10 ** sellTokenDecimals).toFixed(0));

    // Validate balances
    if (this.tokenValidator.isNativeToken(tokenA)) {
      await this.tokenValidator.validateNativeTokenSwap(tokenA, amountInWei, userAddress);
    } else {
      await this.tokenService.checkAndApproveToken(tokenA, amountInWei, userAddress);
    }

    // Get swap data
    console.log('Getting swap data...');
    const swapData = await this.ensoService.getSwapData(
      userAddress,
      amountInWei.toString(),
      tokenA,
      tokenB,
      slippage,
      parseInt(process.env.CHAIN_ID)
    );

    // Execute transaction
    console.log('Executing swap...');
    const txData = swapData.tx;
    const value = this.tokenValidator.isNativeToken(tokenA) ? amountInWei : '0';
    
    const gasEstimate = this.web3.utils.toBN(txData.gas)
      .mul(this.web3.utils.toBN(15))
      .div(this.web3.utils.toBN(10));

    const txReceipt = await this.web3.eth.sendTransaction({
      ...txData,
      value,
      gas: gasEstimate.toString(),
      gasPrice: txData.gasPrice,
    });

    return txReceipt;
  }
}

module.exports = SwapService;