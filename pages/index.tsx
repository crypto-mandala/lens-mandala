import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers } from 'ethers'
import Web3Modal from '@0xsequence/web3modal'
import { sequence } from '0xsequence'
import { configureLogger } from '@0xsequence/utils'
import Head from 'next/head'
import { useCallback, useEffect, useReducer, useState } from 'react'
import { Button, IconButton, Input, Center, Box } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import { ellipseAddress, getChainData } from '../lib/utilities'
import lens from '../lib/lens'
import { CreateProfileDataStruct } from '../lib/typechain-types/LensHub'
import MainPage from '../components/MainPage'

configureLogger({ logLevel: 'DEBUG' })

const INFURA_ID = '6ae5bd1d600f40048725736711ef4acb'
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

const providerOptions = {
  sequence: {
    options: {
      appName: 'Sequence',
      defaultNetwork: 'polygon',
      chainId: 137,
    },
    package: sequence,
    connector: async () => {
      const wallet = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(wallet)
      if (wallet.sequence) {
        (provider as any).sequence = wallet.sequence
      }
      return provider
    },
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
}

let web3Modal
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

type StateType = {
  provider?: any
  web3Provider?: any
  address?: string
  chainId?: number
}

type ActionType =
  | {
      type: 'SET_WEB3_PROVIDER'
      provider?: StateType['provider']
      web3Provider?: StateType['web3Provider']
      address?: StateType['address']
      chainId?: StateType['chainId']
    }
  | {
      type: 'SET_ADDRESS'
      address?: StateType['address']
    }
  | {
      type: 'SET_CHAIN_ID'
      chainId?: StateType['chainId']
    }
  | {
      type: 'RESET_WEB3_PROVIDER'
    }

const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
}

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

export const Home = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { provider, web3Provider, address, chainId } = state
  const [isLoading, setLoading] = useState(false)
  const [handle, setHandle] = useState('')
  const [nftContractAddress, setNftContractAddress] = useState('0x41db8e68b817abe104cced933c9d8c5030ba1879')
  const [nftTokenId, setNftTokenId] = useState('1')
  const [profile, setProfile] = useState(null)

  const connect = useCallback(async function () {
    const provider = await web3Modal.connect()
    const web3Provider = new ethers.providers.Web3Provider(provider)
    if (provider.sequence) {
      (provider as any).sequence = provider.sequence
    }
    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()
    const network = await web3Provider.getNetwork()
    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    })
  }, [])

  const disconnect = useCallback(
    async function () {
      setProfile(null)
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        if (provider && (provider as any).sequence) {
          const wallet = (provider as any).sequence as sequence.Wallet
          wallet.disconnect()
        } else {
          await provider.disconnect()
        }
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    },
    [provider]
  )

  const createProfile = async () => {
    const imageURIs = [
      'https://openseauserdata.com/files/f175198e5ee2c5326211d4f6e1300e3e.svg',
      'https://openseauserdata.com/files/64275135762f54bcf92771b8b4f9a75d.svg',
      'https://openseauserdata.com/files/c0e89af4ff7cf2bdbd2bb39c7f48736a.svg',
      'https://openseauserdata.com/files/145bdd5fa737ad4b004cb83237ec2c88.svg',
      'https://openseauserdata.com/files/c92b996e1592228b010fed800f107245.svg',
      'https://openseauserdata.com/files/d97a43bc3061fcc154ef0fbbbc752202.svg',
      'https://openseauserdata.com/files/b99bb2b877ba491edc313c6c7b0d6c09.svg',
      'https://openseauserdata.com/files/d892b4b3d49104b0f6dd3cbae356e000.svg',
      'https://openseauserdata.com/files/e94108e2961d09dac81333ce55cca621.svg',
      'https://openseauserdata.com/files/6e11b1c3688c940c99a3dec8bddffd54.svg',
      'https://openseauserdata.com/files/09cb4dc0ceaf02d7807fc6eaf12adf81.svg',
      'https://openseauserdata.com/files/e7c3db61f4a957956e455517b4922788.svg',
    ]
    const imageURI = imageURIs[Math.floor(Math.random() * imageURIs.length)]
    const profile: CreateProfileDataStruct = {
      to: address,
      handle,
      imageURI,
      followModule: ZERO_ADDRESS,
      followModuleData: [],
      followNFTURI:
        'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
    }
    return await lens.createProfile(web3Provider.getSigner(), profile)
  }

  const loginLens = async () => {
    if (!address) {
      alert('Please connect wallet')
      return
    }
    if (!handle) {
      alert('Please input handle')
      return
    }
    setLoading(true)
    try {
      const res = await createProfile()
      // eslint-disable-next-line no-console
      console.log({ res })
      setProfile(res)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload()
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  const chainData = getChainData(chainId)

  return (
    <>
      <div className="container font-body">
        <Head>
          <title>Lens Mandala</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          {address && (
            <div className="grid">
              <div>
                {profile ? (
                  <div>
                    <p className="mb-1">🌱 {profile?.handle}</p>
                  </div>
                ) : null}
                <div>
                  <p className="mb-1">
                    👤 {ellipseAddress(address)}{' '}
                    <IconButton
                      aria-label="Copy"
                      fontSize="12px"
                      size="xs"
                      icon={<CopyIcon />}
                      className="mb-1"
                      onClick={() => navigator.clipboard.writeText(address)}
                    />
                  </p>
                </div>
                <div>
                  <p className="mb-1">
                    🔌 {chainData?.name || web3Provider?.network?.name}
                  </p>
                </div>
              </div>
              <div>
                <Button
                  colorScheme="red"
                  variant="solid"
                  size="md"
                  onClick={disconnect}
                >
                  Disconnect
                </Button>
              </div>
            </div>
          )}
        </header>

        <main className="section">
          {web3Provider && !profile ? (
            <>
              <Center className="mt-12 mb-4">
                <Box textStyle='h2'>
                  Handle
                </Box>
              </Center>
              <Center>
                <Input
                  maxWidth="310px"
                  value={handle}
                  onChange={(event) => setHandle(event.target.value)}
                  placeholder="Your Handle"
                  size="md"
                  variant="outline"
                />
              </Center>

              <Center className="mt-6 mb-4">
                <Box textStyle='h2'>
                  Community NFT Info
                </Box>
              </Center>
              <Center className="mt-2 mb-8">
                <Input
                  maxWidth="200px"
                  value={nftContractAddress}
                  onChange={(event) => setNftContractAddress(event.target.value)}
                  placeholder="NFT Contract address"
                  size="md"
                  variant="outline"
                />
                <Input
                  maxWidth="100px"
                  value={nftTokenId}
                  onChange={(event) => setNftTokenId(event.target.value)}
                  placeholder="NFT Token ID"
                  size="md"
                  variant="outline"
                  className='ml-2'
                />
              </Center>

              <Button
                isLoading={isLoading}
                colorScheme="red"
                variant="solid"
                onClick={loginLens}
                size="lg"
              >
                Sign In/Up
              </Button>
            </>
          ) : web3Provider && profile ? (
            <div className="mt-8 mb-8">
              <MainPage
                profile={profile}
                signer={web3Provider.getSigner()}
                nftContractAddress={nftContractAddress}
                nftTokenId={nftTokenId}
              />
            </div>
          ) : !web3Provider ? (
            <>
              <div className="p-8 title">Lens Mandala</div>

              <Button
                colorScheme="red"
                variant="solid"
                onClick={connect}
                size="lg"
              >
                Connect Wallet
              </Button>
            </>
          ) : null}
        </main>

        <style jsx>{`
          main {
            text-align: center;
          }

          p {
            margin-top: 0;
          }

          .container {
            padding: 2rem;
            margin: 0 auto;
          }

          .grid {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: space-between;
          }

          .mb-0 {
            margin-bottom: 0;
          }
          .mb-1 {
            margin-bottom: 0.25rem;
          }
        `}</style>
      </div>
      <footer></footer>
    </>
  )
}

export default Home
