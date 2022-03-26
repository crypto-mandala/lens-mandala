import { FaLeaf } from 'react-icons/fa'
import { Center } from '@chakra-ui/react'
import Homesection from './homesection'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MainPage = ({ profile, signer, nftContractAddress, nftTokenId }) => {
  return (
    <div
      style={{
        border: 'solid',
        borderColor: '#E2E8F0',
        borderBottomStyle: 'none',
      }}
    >
      <div className="grid grid-flow-col">
        <div className="col-span-1">
          <Center className='mt-4'>
            <FaLeaf size={27} />
          </Center>
        </div>
        <div className="col-span-6">
          <Homesection
            profile={profile}
            signer={signer}
            nftContractAddress={nftContractAddress}
            nftTokenId={nftTokenId}
          />
        </div>
      </div>
    </div>
  )
}

export default MainPage
