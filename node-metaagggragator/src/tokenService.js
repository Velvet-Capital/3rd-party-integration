const { ETH_ADDRESS } = require('./constants');

class TokenService {
  constructor(web3, Erc20Abi) {
    this.web3 = web3;
    this.Erc20Abi = Erc20Abi;
  }

  async getDecimals(tokenAddress) {
    if (tokenAddress.toLowerCase() === ETH_ADDRESS) {
      return 18;
    }
    const tokenContract = new this.web3.eth.Contract(this.Erc20Abi, tokenAddress);
    return await tokenContract.methods.decimals().call();
  }

  async getBalance(tokenAddress, userAddress) {
    try {
      if (tokenAddress.toLowerCase() === ETH_ADDRESS) {
        return await this.web3.eth.getBalance(userAddress);
      }
      const tokenContract = new this.web3.eth.Contract(this.Erc20Abi, tokenAddress);
      return await tokenContract.methods.balanceOf(userAddress).call();
    } catch (error) {
      throw new Error(`Failed to get token balance: ${error.message}`);
    }
  }

  async approveToken(tokenAddress, spender, amount, userAddress) {
    const tokenContract = new this.web3.eth.Contract(this.Erc20Abi, tokenAddress);
    const allowance = await tokenContract.methods.allowance(userAddress, spender).call();

    if (this.web3.utils.toBN(allowance).lt(this.web3.utils.toBN(amount))) {
      console.log('Approving token...');
      const approveTx = tokenContract.methods.approve(spender, amount);
      const gasEstimate = await approveTx.estimateGas({ from: userAddress });
      await approveTx.send({ from: userAddress, gas: gasEstimate });
      console.log('Approval successful');
    }
  }
}

module.exports = TokenService;