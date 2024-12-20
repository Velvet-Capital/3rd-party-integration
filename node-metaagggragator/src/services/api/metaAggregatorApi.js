const axios = require('axios');
const { 
  META_AGGREGATOR_API_URL, 
  API_CONFIG,
  ERROR_MESSAGES 
} = require('../../constants');
const { SwapError, ERROR_CODES } = require('../../utils/errors');
const { sleep } = require('../../utils/async');

class MetaAggregatorApi {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: META_AGGREGATOR_API_URL,
      timeout: API_CONFIG.TIMEOUT_MS,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  async fetchQuotes(params, retryCount = 0) {
    try {
      console.log('\nFetching quotes...');
      
      const response = await this.axiosInstance.post('', params);
      
      if (!response.data?.quotes?.length) {
        throw new SwapError(ERROR_MESSAGES.NO_QUOTES, ERROR_CODES.API_ERROR);
      }

      return response.data;
    } catch (error) {
      if (this._shouldRetry(error) && retryCount < API_CONFIG.MAX_RETRIES) {
        const delay = Math.pow(2, retryCount) * API_CONFIG.BASE_DELAY_MS;
        console.log(`\nRetrying in ${delay/1000} seconds... (Attempt ${retryCount + 1}/${API_CONFIG.MAX_RETRIES})`);
        
        await sleep(delay);
        return this.fetchQuotes(params, retryCount + 1);
      }

      throw new SwapError(
        `API request failed after ${retryCount} retries: ${error.message}`,
        ERROR_CODES.API_ERROR,
        { originalError: error }
      );
    }
  }

  _shouldRetry(error) {
    return (
      error.code === 'ECONNABORTED' || 
      error.code === 'ECONNRESET' || 
      error.message.includes('socket hang up') ||
      error.message.includes('timeout') ||
      (error.response?.status >= 500 && error.response?.status < 600)
    );
  }
}

module.exports = MetaAggregatorApi;