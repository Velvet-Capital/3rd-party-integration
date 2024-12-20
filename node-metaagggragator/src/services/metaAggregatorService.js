const MetaAggregatorApi = require('./api/metaAggregatorApi');
const GasService = require('./gas/gasService');
const { SwapError, ERROR_CODES } = require('../utils/errors');
const { ERROR_MESSAGES } = require('../constants');

class MetaAggregatorService {
  constructor(signer) {
    if (!signer) throw new Error('Signer is required');
    this.api = new MetaAggregatorApi();
    this.gasService = new GasService(signer.provider);
  }

  async getSwapData(userAddress, amountIn, tokenIn, tokenOut, slippage, chainId) {
    try {
      const requestBody = {
        slippage,
        amount: amountIn,
        tokenIn,
        tokenOut,
        sender: userAddress,
        receiver: userAddress,
        chainId,
        skipSimulation: false
      };

      const response = await this.api.fetchQuotes(requestBody);
      
      if (!response.quotes?.length) {
        throw new SwapError(ERROR_MESSAGES.NO_QUOTES, ERROR_CODES.SWAP_ERROR);
      }

      const bestQuote = response.quotes[0];
      const gasPrice = await this.gasService.getOptimalGasPrice();
      const gasLimit = this.gasService.calculateGasLimit(bestQuote.gasEstimate);
      
      return {
        tx: {
          to: bestQuote.to,
          data: bestQuote.data,
          value: bestQuote.value,
          gasLimit,
          ...gasPrice
        },
        amountOut: bestQuote.amountOut,
        minAmountOut: bestQuote.minAmountOut,
        gasEstimate: gasLimit,
        protocol: bestQuote.protocol,
        approvalAddress: bestQuote.allowanceTarget || bestQuote.to
      };
    } catch (error) {
      if (error instanceof SwapError) {
        throw error;
      }
      throw new SwapError(
        `${ERROR_MESSAGES.API_ERROR}: ${error.message}`,
        ERROR_CODES.SWAP_ERROR
      );
    }
  }
}

module.exports = MetaAggregatorService;