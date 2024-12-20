const { ethers } = require('ethers');
const { ETH_ADDRESS } = require('../constants');
const Erc20Abi = require('../../Erc20Abi.json');

class TokenService {
  constructor(signer) {
    this.signer = signer;
  }

  async getDecimals(tokenAddress) {
    if (this.isNativeToken(tokenAddress)) {
      return 18;
    }
    const contract = new ethers.Contract(tokenAddress, Erc20Abi, this.signer);
    return await contract.decimals();
  }

  isNativeToken(tokenAddress) {
    return tokenAddress.toLowerCase() === ETH_ADDRESS.toLowerCase();
  }

  async approveIfNeeded(tokenAddress, spender, amount) {
    if (this.isNativeToken(tokenAddress)) return;
    
    const contract = new ethers.Contract(tokenAddress, Erc20Abi, this.signer);
    const allowance = await contract.allowance(this.signer.address, spender);
    
    if (allowance.lt(amount)) {
      console.log('Approving tokens...');
      // Only approve the exact amount needed
      const tx = await contract.approve(spender, amount);
      await tx.wait();
      console.log('Token approval successful');
    } else {
      console.log('Token approval not needed');
    }
  }
}

module.exports = TokenService;