require('dotenv').config();

function validateConfig() {
  // Check required environment variables
  const requiredVars = ['RPC_URL', 'PRIVATE_KEY', 'CHAIN_ID'];
  const missing = requiredVars.filter(key => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  }

  // Validate RPC URL
  const rpcUrl = process.env.RPC_URL?.trim();
  if (!rpcUrl) {
    throw new Error('RPC_URL is empty');
  }

  if (!rpcUrl.startsWith('http://') && !rpcUrl.startsWith('https://')) {
    throw new Error('Invalid RPC_URL format. Must start with http:// or https://');
  }

  return {
    rpcUrl,
    privateKey: process.env.PRIVATE_KEY.trim(),
    chainId: parseInt(process.env.CHAIN_ID)
  };
}

module.exports = validateConfig();