import abi from './abis/src/contracts/Adulam.sol/Adulam.json'
import address from './abis/contractAddress.json'
import { getGlobalState, setGlobalState } from './store'
import { ethers } from 'ethers'

const { ethereum } = window
const contractAddress = address.address
const contractAbi = abi.abi
const opensea_uri = `https://testnets.opensea.io/assets/goerli/${contractAddress}/`


let provider = null;
let signer = null;

const getEtheriumContract = () => {
  const connectedAccount = getGlobalState('connectedAccount')

  if (connectedAccount) {
    const contract = new ethers.Contract(contractAddress, contractAbi, signer)
    provider = new ethers.providers.Web3Provider(ethereum)
    signer = provider.getSigner()
    return contract
  } else {
    return getGlobalState('contract')
  }
}


const isWallectConnected = async () => {
  try {
    const accounts = await ethereum.request({ method: 'eth_accounts' })

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload()
    })

    window.ethereum.on('accountsChanged', async () => {
      setGlobalState('connectedAccount', accounts[0])
      await isWallectConnected()
    })

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0])
    } else {
    }
  } catch (error) {
    reportError(error)
  }
}

const connectWallet = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setGlobalState('connectedAccount', accounts[0])
  } catch (error) {
    reportError(error)
  }
}

const mintNFT = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const connectedAccount = getGlobalState('connectedAccount')
    const contract = getEtheriumContract()
    const amount = ethers.utils.parseEther('0.001')

    const curl = window.location.href;
    const url = new URL(curl);
    const q = url.searchParams.get('referal');


    const message = "Tao là thằng mint nè"
    const signature = await signer.signMessage(message);


    await contract.mintNFT({
      from: connectedAccount,
      value: amount._hex,
    })

    window.location.reload()
  } catch (error) {
    reportError(error)
  }
}

const loadNfts = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')

    const contract = getEtheriumContract()
    const nfts = await contract.getAllMyNFT()

    setGlobalState('nfts', structuredNfts(nfts))
  } catch (error) {
    reportError(error)
  }
}

const reportError = (error) => {
  throw new Error('No ethereum object.')
}

const structuredNfts = (nfts) =>
  nfts
    .map((nft) => ({
      id: Number(nft.tokenId),
      Rank: nft.rank
      // url: opensea_uri + nft.id,
      // buyer: nft.buyer,
      // imageURL: nft.imageURL,
      // cost: parseInt(nft.cost._hex) / 10 ** 18,
      // timestamp: new Date(nft.timestamp.toNumber()).getTime(),
    }))
    .reverse()

export {
  isWallectConnected,
  connectWallet,
  mintNFT,
  loadNfts
}
