// Token addresses
exports.ETH_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

// API endpoints
exports.META_AGGREGATOR_API_URL = 'http://arbitrumcentral.velvetdao.xyz:3000/best-quotes';

// Transaction constants
exports.DEFAULT_GAS_LIMIT_BUFFER = 1.2; // 20% buffer for gas limit
exports.MAX_APPROVAL_AMOUNT = '115792089237316195423570985008687907853269984665640564039457584007913129639935'; // uint256 max

// Error messages
exports.ERROR_MESSAGES = {
  INVALID_ADDRESS: 'Invalid token address provided',
  INSUFFICIENT_BALANCE: 'Insufficient balance for swap',
  APPROVAL_FAILED: 'Token approval failed',
  SWAP_FAILED: 'Swap transaction failed',
  NO_QUOTES: 'No swap quotes available'
};