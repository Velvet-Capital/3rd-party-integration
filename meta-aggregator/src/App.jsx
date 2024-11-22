import axios from 'axios'
import { useEffect, useState } from 'react'
import {  ethers } from 'ethers';

import { useConnect, useAccount, useDisconnect, useBalance, useWalletClient } from 'wagmi'
import Web3 from 'web3'
import { Erc20Abi } from './erc20Abi'
import { parseUnits } from 'ethers';
import { formatUnits } from 'viem'


const ETH = {
  address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  name: 'ETH',
  symbol: 'ETH',
  image: {
    native: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  },
  key: 'eth',
  price: {
    USD: 2413,
  },
  apy: '-',
  handler: '-',
  tokens: [
    {
      platformName: 'Base',
      platformKey: 'base',
      platformSlug: 'base',
      explorerUrl: 'https://basescan.org/token/',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    },
  ],
  baseAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
}

function App() {
  const { connect, connectors } = useConnect()
  const web3data = useWalletClient();
  const { isConnected, address, chain } = useAccount()

  const { disconnect } = useDisconnect()

  const balance = useBalance({
    address: address,
  })
  
  const [selectedSellToken, setSelectedSellToken] = useState('')
  const [selectedBuyToken, setSelectedBuyToken] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [inputValueToWei, setInputValueToWei] = useState('')
  const [tokenList, setTokenList] = useState([])

  const [buyTokenValue, setBuyTokenValue] = useState('0.00')
  const [responseData, setResponseData] = useState(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const connectWallet = async () => {
    try {
      await connect({ connector: connectors[0] })
    } catch (error) {
      console.error('Error connecting wallet:', error)
    }
  }

  const handleSelectChange = (event) => {
    setSelectedSellToken(event.target.value)
  }

  const handleBuyTokenChnage = (event) => {
    setSelectedBuyToken(event.target.value)
  }

  const handleInputChange = (event) => {
    // Get the input value
    const value = event.target.value

    if (/^\d*\.?\d*$/.test(value)) {
      setInputValue(value)
    }
  }

  const fetchQuotes = async () => {
    const web3 = new Web3("https://base.meowrpc.com")
    let sellTokenDecimal
    if (selectedSellToken.toLowerCase() !== '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
      const SellTokenErc20Instance = new web3.eth.Contract(Erc20Abi, selectedSellToken)
      sellTokenDecimal = await SellTokenErc20Instance.methods.decimals().call()
    } else {
      sellTokenDecimal = 18
    }

    const convertedAmount = parseUnits(inputValue, sellTokenDecimal).toString()
    setInputValueToWei(convertedAmount)

    const url = 'https://metasolvertest.velvetdao.xyz/best-quotes'
    const payload = {
      amount: convertedAmount,
      chainId: 8453,
      receiver: address,
      sender: address,
      slippage: '1',
      tokenIn: selectedSellToken,
      tokenOut: selectedBuyToken,
    }
  

    try {
      setLoading(true)
      const response = await axios.post(url, payload)
      setResponseData(response.data)
      console.log(response?.data?.quotes?.[1]?.amountOut.toString(),"amountOut",selectedBuyToken);
      let buyTokenDecimal
      if (selectedBuyToken.toLowerCase() !== '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
        const buyTokenErc20Instance = new web3.eth.Contract(Erc20Abi, selectedBuyToken)
        buyTokenDecimal = await buyTokenErc20Instance.methods.decimals().call()
      } else {
        buyTokenDecimal = 18
      }

      const convertedBuyAmount = formatUnits(response?.data?.quotes?.[0]?.amountOut.toString(), +(buyTokenDecimal.toString())).toString()
    
      setBuyTokenValue(convertedBuyAmount)
      console.log(inputValue,sellTokenDecimal);
    } catch (err) {
      console.error('Error fetching best quotes:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const trade = async()=>{
    // Check if data is defined before using it

    const providers = new ethers.providers.Web3Provider(web3data?.data);
    const signer = providers.getSigner();
    console.log("🚀 ~ trade ~ signer:", signer)
    const web3 = new Web3 (web3data?.data);
    const gasPrice = await web3.eth.getGasPrice();

    if (selectedSellToken.toLowerCase() !== '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {

    const Erc20Instance = new web3.eth.Contract(Erc20Abi, selectedSellToken);
  

    await Erc20Instance.methods
      .approve(responseData?.approvalAddress, inputValueToWei)
      .send({
        from: address,
        gas:
          '18000000',
        gasPrice: gasPrice.toString(),
      });

    }
    const txData = {
      to: responseData?.quotes?.[0].to,
      data: responseData?.quotes?.[0].data,
      value: responseData?.quotes?.[0] ? ethers.BigNumber.from(responseData.quotes[0].value) : ethers.BigNumber.from(0),
      gasLimit: parseInt((+responseData?.quotes?.[0].gasEstimate * 1.5).toString()),
    };

    try {

    const txReceipt = await web3.eth.sendTransaction(txData);

    // Wait for the transaction to be mined
    const receipt = await web3.eth.getTransactionReceipt(txReceipt.transactionHash);
    
    return receipt;
    
    } catch (error) {
      console.error("Transaction failed:", error);
      throw error; // Rethrow error for further handling
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.portals.fi/v2/tokens?ids=base%3A0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913%2Cbase%3A0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb%2Cbase%3A0x4200000000000000000000000000000000000006&platforms=native&platforms=basic&platforms=aavev2&networks=base&sortDirection=asc&limit=25&page=0',
        headers: {
          accept: 'application/json',
          authorization: 'Bearer <YOUR_TOKEN>',
        },
      }

      try {
        const response = await axios.request(options)
  
        if (
          response &&
          response.data &&
          Array.isArray(response.data.tokens) &&
          response.data.tokens.length > 0
        ) {
          setTokenList([ETH, ...response.data.tokens])
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflowY: 'hidden',
          gap: '25px',
          flexDirection: 'column',
          paddingTop: '100px',
        }}
      >
        {isConnected ? (
          <p>Address: {address}</p>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}

        {isConnected ? (
          <>
            {' '}
            <button onClick={() => disconnect()}>Disconnect</button>{' '}
            {'Balance: ' + parseFloat(balance?.data?.formatted).toFixed(5)} {chain?.nativeCurrency.symbol}
          </>
        ) : null}

        {/* sell token */}

        <div
          style={{
            display: 'flex',
          }}
        >
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter sell token amount'
            style={{ marginRight: '10px' }}
          />
          <select value={selectedSellToken} onChange={handleSelectChange}>
            <option value=''>Select a token</option>
            {tokenList.map((token) => (
              <option key={token.address} value={token.address}>
                {token.name} ({token.symbol})
              </option>
            ))}
          </select>
        </div>

        {/* Buy Token */}
        <div
          style={{
            display: 'flex',
          }}
        >
          <input
            type='text'
            value={buyTokenValue}
            placeholder='Buy token value'
            style={{ marginRight: '10px' }}
            disabled
          />
          <select value={selectedBuyToken} onChange={handleBuyTokenChnage}>
            <option value=''>Select a token</option>
            {tokenList.map((token) => (
              <option key={token.address} value={token.address}>
                {token.name} ({token.symbol})
              </option>
            ))}
          </select>
        </div>
        <div style={{
          display:"flex"
        }}>
        <button onClick={fetchQuotes} style={{ marginRight: '10px' }}>Get Route</button>
        <button onClick={trade}>Trade</button>
        </div>
      </div>
    </>
  )
}

export default App
