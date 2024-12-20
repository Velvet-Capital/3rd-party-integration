# Details For Meta Aggregator

1. Dev doc: Link (https://docs.google.com/document/d/1xUjNFUcZ7WTVKNHl7sKq-96Xe4kqzSgtSRI1_u38KKQ/edit#heading=h.borgagl1k05d)

# Details for Node MetaAggregator

A secure token swapping application using a meta-aggregator to find the best swap routes across multiple DEXs.

## Features

- Best price discovery across multiple DEXs
- Secure token approvals
- Gas price optimization
- Automatic slippage protection
- Retry mechanism for API calls
- Comprehensive error handling

## Setup

1. Clone the repository and navigate to the `node-metaagggragator` directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Update `.env` with your configuration:
   - `PRIVATE_KEY`: Your wallet private key
   - `RPC_URL`: Your Ethereum RPC URL
   - `CHAIN_ID`: Chain ID for the network (e.g., 1 for mainnet)

## Security Notes

- Never commit your `.env` file
- Keep your private keys secure
- Always verify transaction details before confirming
- Review token approvals carefully

## Usage

Run the script:
```bash
npm start
```

Follow the prompts to:
1. Enter token A address (sell token)
2. Enter token B address (buy token)
3. Enter amount to swap
4. Enter slippage percentage
5. Confirm the swap details

## For Developers

### Project Structure

```
src/
├── config.js                 # Configuration validation and loading
├── constants.js              # Global constants and configuration
├── services/
│   ├── api/
│   │   └── metaAggregatorApi.js    # API integration with retry logic
│   ├── gas/
│   │   └── gasService.js           # Gas price estimation and optimization
│   ├── ethersService.js            # Ethereum provider and signer management
│   ├── metaAggregatorService.js    # DEX aggregator integration
│   ├── swapFlowService.js          # User interaction flow
│   ├── swapService.js              # Core swap logic
│   └── tokenService.js             # Token operations (approvals, balances)
└── utils/
    ├── async.js              # Async utilities (sleep, retry)
    ├── errors.js             # Error handling and custom errors
    ├── format.js             # Formatting utilities
    └── validation.js         # Input validation
```

### Key Components

#### Services

- **EthersService**: Manages blockchain connection and wallet integration
  - Provider initialization
  - Signer management
  - Network connectivity checks

- **TokenService**: Handles ERC20 token operations
  - Token approvals
  - Balance checks
  - Decimals retrieval

- **SwapService**: Core swap execution logic
  - Transaction preparation
  - Gas optimization
  - Error handling

- **MetaAggregatorService**: DEX aggregator integration
  - Quote fetching
  - Best route selection
  - Price optimization

- **SwapFlowService**: User interaction management
  - Input collection
  - Confirmation flow
  - Error reporting

#### Utilities

- **errors.js**: Custom error classes and error handling
  - SwapError for swap-related errors
  - NetworkError for connection issues
  - Detailed error messages

- **validation.js**: Input validation utilities
  - Address validation
  - Amount validation
  - Slippage validation

- **format.js**: Formatting utilities
  - Token amount formatting
  - Display value formatting

- **async.js**: Async operation utilities
  - Sleep function
  - Retry mechanisms

### Error Handling

The application implements comprehensive error handling:
- Network connectivity issues
- Invalid token addresses
- Insufficient balances
- Failed transactions
- API timeouts and retries

### Gas Optimization

Gas prices are optimized using:
- Dynamic gas price estimation
- Safety multipliers for gas limit
- Base fee consideration
- Priority fee adjustment

### Best Practices

- Comprehensive input validation
- Secure token approvals
- Retry mechanism for API calls
- Error boundary implementation
- Gas price optimization
- Clean code structure
- Modular design
- Detailed logging
