const { ETH_ADDRESS } = require('../constants');

class SwapFlowService {
  constructor(rl, swapService) {
    this.rl = rl;
    this.swapService = swapService;
  }

  async askQuestion(query) {
    return new Promise(resolve => this.rl.question(query, resolve));
  }

  async askForContinue() {
    const answer = await this.askQuestion('\nDo you want to make another swap? (yes/no): ');
    return answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y';
  }

  async executeSwapFlow() {
    let continueSwapping = true;

    while (continueSwapping) {
      try {
        // Get swap parameters
        const tokenA = await this.askQuestion('Enter sell token address (eth or contract address): ');
        const tokenB = await this.askQuestion('Enter buy token address (eth or contract address): ');
        const amount = await this.askQuestion('Enter amount to swap: ');
        const slippage = await this.askQuestion('Enter slippage percentage (e.g., 1 for 1%): ');

        // Execute swap
        const receipt = await this.swapService.executeSwap(
          tokenA,
          tokenB,
          amount,
          parseFloat(slippage)
        );

        if (receipt) {
          console.log('\nSwap successful!');
          console.log('Transaction hash:', receipt.hash);
        }

        // Ask if user wants to continue
        continueSwapping = await this.askForContinue();
        if (!continueSwapping) {
          console.log('\nThank you for using the swap service. Goodbye!');
        }
      } catch (error) {
        console.error('\nError:', error.message);
        continueSwapping = await this.askForContinue();
      }
    }
  }
}

module.exports = SwapFlowService;