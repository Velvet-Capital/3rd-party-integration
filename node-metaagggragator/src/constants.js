const { ethers } = require('ethers');

// API configuration
exports.API_CONFIG = {
  TIMEOUT_MS: 30000,
  MAX_RETRIES: 3,
  BASE_DELAY_MS: 1000
};

// Gas configuration
exports.GAS_CONFIG = {
  GAS_MULTIPLIER: 1.2, // 20% buffer for gas price
  GAS_LIMIT_BUFFER: 1.2 // 20% buffer for gas limit
};

// Token constants
exports.ETH_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
exports.META_AGGREGATOR_API_URL = 'https://metasolvertest.velvetdao.xyz/best-quotes';
exports.MAX_APPROVAL_AMOUNT = ethers.constants.MaxUint256;

// Error messages
exports.ERROR_MESSAGES = {
  INVALID_ADDRESS: 'Invalid token address provided',
  INSUFFICIENT_BALANCE: 'Insufficient balance for swap',
  APPROVAL_FAILED: 'Token approval failed',
  SWAP_FAILED: 'Swap transaction failed',
  NO_QUOTES: 'No swap quotes available',
  API_ERROR: 'API request failed',
  GAS_ESTIMATION_ERROR: 'Failed to estimate gas'
};