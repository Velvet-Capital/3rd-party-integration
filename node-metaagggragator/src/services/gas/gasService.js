const { ethers } = require('ethers');
const { SwapError, ERROR_CODES } = require('../../utils/errors');
const { GAS_CONFIG, ERROR_MESSAGES } = require('../../constants');

class GasService {
  constructor(provider) {
    if (!provider) throw new Error('Provider is required');
    this.provider = provider;
  }

  async getOptimalGasPrice() {
    try {
      const gasPrice = await this.provider.getGasPrice();
      return {
        gasPrice: gasPrice.mul(Math.floor(GAS_CONFIG.GAS_MULTIPLIER * 100)).div(100).toString()
      };
    } catch (error) {
      throw new SwapError(
        ERROR_MESSAGES.GAS_ESTIMATION_ERROR,
        ERROR_CODES.GAS_ESTIMATION_ERROR,
        { originalError: error }
      );
    }
  }

  calculateGasLimit(estimatedGas) {
    return ethers.BigNumber.from(estimatedGas)
      .mul(Math.floor(GAS_CONFIG.GAS_LIMIT_BUFFER * 100))
      .div(100)
      .toString();
  }
}

module.exports = GasService;