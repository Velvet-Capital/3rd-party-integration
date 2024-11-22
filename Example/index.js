import { Wallet,  providers } from 'ethers'
import {  providerUrl } from './constant/contract.js'
import { Erc20Abi } from './abi/erc20Abi.js'


const privateKey = process.env.PRIVATE_KEY
const provider = new providers.JsonRpcProvider(
  process.env.RPC_URL || providerUrl
)
const wallet = new Wallet(privateKey, provider)
const gasPrice = await provider.getGasPrice()

async function main() {
  try {

    const endpoint = 'https://eventsapi.velvetdao.xyz/api/v3/portfolio/deposit'

    const payload = {
      portfolio: '0xe1c949d4b3228624bb1647c680adad0b50f7d3b9', // portfolio address
      depositAmount: 1, // amount to deposit
      depositToken: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // deposit token address
      user: wallet.address, // wallet address
      depositType: 'batch', 
      tokenType: 'erc20', // if erc20 token type = erc20 else native
    }
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`)
    }

    const data = await response.json()


    const erc20Contract = new Contract(
      '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      Erc20Abi,
      wallet
    )

    //check balance of token 

    const balance = await erc20Contract.balanceOf(wallet?.address)

    console.log('🚀  balance:', balance.toString())

    // get gas limit 

    const gasLimit = await erc20Contract.estimateGas.approve(
      '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
      balance
    )
    console.log('🚀 ~ main ~ gasLimit:', gasLimit)

    // Send the approve transaction
    const tx = await erc20Contract.approve("0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", balance, {
      gasLimit: BigNumber.from(gasLimit),
      gasPrice: gasPrice,
    });

    console.log("Transaction hash:", tx?.hash);

     // Send the deposit transaction
    const transactionResponse = await wallet.sendTransaction(data);
    console.log("🚀 ~ main ~ transactionResponse:", transactionResponse.hash)

 
  } catch (e) {
    console.error(e)
  }
}

main()
