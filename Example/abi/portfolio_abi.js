export const Portfolio = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AlreadyInitialized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AmountCannotBeZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'BalanceOfVaultIsZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerNeedToMaintainMinTokenAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerNotHavingGivenPortfolioTokenAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerNotPortfolioManager',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerNotRebalancerContract',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallerNotSuperAdmin',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ClaimFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CoolDownPeriodNotPassed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'DivisionByZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficientAllowance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidCastToUint160',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidDepositInputLength',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidExemptionTokens',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidExemptionTokensLength',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidMintAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSpender',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTokenAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MintedAmountIsNotAccepted',
    type: 'error',
  },
  {
    inputs: [],
    name: 'PortfolioTokenNotInitialized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ProtocolIsPaused',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TokenAlreadyExist',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'limit',
        type: 'uint256',
      },
    ],
    name: 'TokenCountOutOfLimit',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TokenNotEnabled',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TokenNotWhitelisted',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TransferFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Transferprohibited',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UserNotAllowedToDeposit',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WithdrawalAmountIsSmall',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'portfolio',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'mintedAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userBalanceAfterDeposit',
        type: 'uint256',
      },
    ],
    name: 'Deposited',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'portfolio',
        type: 'address',
      },
    ],
    name: 'PublicSwapEnabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'depositedAmounts',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'portfolioTokens',
        type: 'address[]',
      },
    ],
    name: 'UserDepositedAmounts',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'burnedAmount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'portfolio',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'portfolioTokens',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'userBalanceAfterWithdrawal',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'userWithdrawalAmounts',
        type: 'uint256[]',
      },
    ],
    name: 'Withdrawn',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: '_lastDepositTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: '_lastWithdrawCooldown',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'accessController',
    outputs: [
      {
        internalType: 'contract IAccessController',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'assetManagementConfig',
    outputs: [
      {
        internalType: 'contract IAssetManagementConfig',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_claimCalldata',
        type: 'bytes',
      },
    ],
    name: 'claimRewardTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_portfolioTokenAmount',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: '_exemptionTokens',
        type: 'address[]',
      },
    ],
    name: 'emergencyWithdrawal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_withdrawFor',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tokenReceiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_portfolioTokenAmount',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: '_exemptionTokens',
        type: 'address[]',
      },
    ],
    name: 'emergencyWithdrawalFor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeModule',
    outputs: [
      {
        internalType: 'contract IFeeModule',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'portfolioTokens',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: '_vault',
        type: 'address',
      },
    ],
    name: 'getTokenBalancesOf',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'vaultBalances',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTokens',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IPriceOracle',
        name: '_oracle',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_totalSupply',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_vault',
        type: 'address',
      },
    ],
    name: 'getVaultValueInUSD',
    outputs: [
      {
        internalType: 'uint256',
        name: 'vaultValue',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: '_name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: '_symbol',
            type: 'string',
          },
          {
            internalType: 'address',
            name: '_vault',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_module',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_tokenExclusionManager',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_accessController',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_protocolConfig',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_assetManagementConfig',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_feeModule',
            type: 'address',
          },
        ],
        internalType: 'struct FunctionParameters.PortfolioInitData',
        name: 'initData',
        type: 'tuple',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
    ],
    name: 'initToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'mintShares',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'depositAmounts',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256',
        name: '_minMintAmount',
        type: 'uint256',
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint160',
                name: 'amount',
                type: 'uint160',
              },
              {
                internalType: 'uint48',
                name: 'expiration',
                type: 'uint48',
              },
              {
                internalType: 'uint48',
                name: 'nonce',
                type: 'uint48',
              },
            ],
            internalType: 'struct IAllowanceTransfer.PermitDetails[]',
            name: 'details',
            type: 'tuple[]',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'sigDeadline',
            type: 'uint256',
          },
        ],
        internalType: 'struct IAllowanceTransfer.PermitBatch',
        name: '_permit',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: '_signature',
        type: 'bytes',
      },
    ],
    name: 'multiTokenDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_depositFor',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'depositAmounts',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256',
        name: '_minMintAmount',
        type: 'uint256',
      },
    ],
    name: 'multiTokenDepositFor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_portfolioTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'multiTokenWithdrawal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_withdrawFor',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tokenReceiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_portfolioTokenAmount',
        type: 'uint256',
      },
    ],
    name: 'multiTokenWithdrawalFor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'permit2',
    outputs: [
      {
        internalType: 'contract IAllowanceTransfer',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocolConfig',
    outputs: [
      {
        internalType: 'contract IProtocolConfig',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
    ],
    name: 'pullFromVault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'safeModule',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenExclusionManager',
    outputs: [
      {
        internalType: 'contract ITokenExclusionManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
    ],
    name: 'updateTokenList',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'userCooldownPeriod',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'userLastDepositTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vault',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];