const ERROR_CODES = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  PROVIDER_ERROR: 'PROVIDER_ERROR',
  CONNECTION_TIMEOUT: 'CONNECTION_TIMEOUT',
  GAS_ESTIMATION_ERROR: 'GAS_ESTIMATION_ERROR',
  SWAP_ERROR: 'SWAP_ERROR',
  API_ERROR: 'API_ERROR'
};

class SwapError extends Error {
  constructor(message, code, details = {}) {
    super(message);
    this.name = 'SwapError';
    this.code = code;
    this.details = details;
  }
}

class NetworkError extends Error {
  constructor(message, code, details = {}) {
    super(message);
    this.name = 'NetworkError';
    this.code = code;
    this.details = details;
  }
}

module.exports = {
  SwapError,
  NetworkError,
  ERROR_CODES
};