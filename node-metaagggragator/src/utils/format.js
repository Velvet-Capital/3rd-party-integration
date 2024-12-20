const { ethers } = require('ethers');

/**
 * Format token amount with proper decimals
 * @param {string|ethers.BigNumber} amount - Amount to format
 * @param {number} decimals - Token decimals
 * @returns {string} Formatted amount
 */
function formatTokenAmount(amount, decimals) {
  try {
    return ethers.utils.formatUnits(amount, decimals);
  } catch (error) {
    return amount.toString();
  }
}

module.exports = {
  formatTokenAmount
};