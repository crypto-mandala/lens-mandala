import React from 'react'
import { FaRegComment } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { Button } from '@chakra-ui/react'
import lens from '../lib/lens'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Post = ({ handle, imageURI, pubId, message, signer, currentHandle }) => {
  const comment = async () => {
    alert('This feature is currently not available')
  }

  const mirror = async () => {
    const profileId = await lens.getProfileIdByHandle(currentHandle)
    const profileIdPointed = await lens.getProfileIdByHandle(handle)
    const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
    const mirrorData = {
      profileId,
      profileIdPointed,
      pubIdPointed: pubId,
      referenceModule: ZERO_ADDRESS,
      referenceModuleData: [],
    }
    await lens.mirror(signer, mirrorData)
  }

  const collect = async () => {
    const profileId = await lens.getProfileIdByHandle(currentHandle)
    const args = {
      profileId,
      pubId,
      data: [],
    }
    await lens.collect(signer, args)
  }

  return (
    <>
      <div className="hover:bg-slate-100 border-b-2 cursor-pointer pt-4 pb-2">
        <div className="flex flex-row px-5 mt-1 ">
          <img src={imageURI} className="w-12 h-12 rounded-full" alt="" />

          <div>
            <p className="font-semibold ml-3 flex flex-row">{handle} </p>
            <div className="ml-3 flex flex-col"> {message}</div>
          </div>
        </div>

        <div className="flex flex-row justify-around ml-4  mt-8 m-2 ">
          <Button variant="ghost" size="md" onClick={comment}>
            <FaRegComment size={20} />
          </Button>

          <Button variant="ghost" size="md" onClick={mirror}>
            <FaRetweet size={20} />
          </Button>

          {/* <Button variant='ghost' size='md' onClick={collect}>
            <FcLikePlaceholder size={20} />
          </Button> */}

          <Button variant="ghost" size="md" onClick={collect}>
            <FiDownload size={20} />
          </Button>
        </div>
      </div>
    </>
  )
}

export default Post
