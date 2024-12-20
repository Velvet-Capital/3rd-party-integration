const { ethers } = require('ethers');

const validateAddress = (address) => {
  if (!ethers.utils.isAddress(address)) {
    throw new Error('Invalid token address');
  }
};

const validateAmount = (amount) => {
  const num = parseFloat(amount);
  if (isNaN(num) || num <= 0) {
    throw new Error('Invalid amount');
  }
  return num;
};

const validateSlippage = (slippage) => {
  const num = parseFloat(slippage);
  if (isNaN(num) || num <= 0 || num > 100) {
    throw new Error('Invalid slippage (must be between 0 and 100)');
  }
  return num; // Return as percentage (1 = 1%)
};

module.exports = {
  validateAddress,
  validateAmount,
  validateSlippage
};