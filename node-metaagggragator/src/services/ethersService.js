const { ethers } = require('ethers');
const { NetworkError } = require('../utils/errors');

class EthersService {
  constructor(rpcUrl) {
    this.rpcUrl = rpcUrl;
    this.provider = null;
    this.signer = null;
  }

  async initialize(privateKey) {
    try {
      console.log('Connecting to blockchain...');

      // Correct JsonRpcProvider initialization
      this.provider = new ethers.providers.JsonRpcProvider(this.rpcUrl);

      // Test connection with timeout logic
      await Promise.race([
        this.provider.getBlockNumber(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Connection timeout')), 10000)
        ),
      ]);

      // Initialize signer
      this.signer = new ethers.Wallet(privateKey, this.provider);

      console.log('Successfully connected to blockchain');
      return this.signer;
    } catch (error) {
      if (error instanceof NetworkError) {
        throw error;
      }
      throw new Error(`Connection failed: ${error.message}`);
    }
  }

  getProvider() {
    return this.provider;
  }

  getSigner() {
    return this.signer;
  }
}

module.exports = EthersService;
