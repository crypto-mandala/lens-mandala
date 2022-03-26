/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import Post from './Post'
import lens from '../lib/lens'

const addrs = require('../lib/addresses.json')

const uploadContent = async (profileId, handle, message) => {
  const contentJson = {
    type: 'post',
    lens_hub_contract_address: addrs['lensHub proxy'],
    profileId,
    handle,
    pubId: 1,
    message,
    encrypted: false,
    timestamp: new Date().toISOString(),
    seed_nft_contract_address: "0x12345",
    seed_nft_token_id: 1,
    // tx_hash: "0x123456678"
  }
  const ipfsCID = await axios.post('/api/storage/upload', {
    json: JSON.stringify(contentJson)
  })
  return ipfsCID
}

const homesection = ({ profile, signer }) => {
  const { data: session } = useSession()

  console.log(session)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // TODO: update testdata
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
    setPosts([
      {
        id: 1,
        handle: 'user1',
        imageURI: imageURIs[Math.floor(Math.random() * imageURIs.length)],
        pubId: 2,
        message: 'Hello'
      }
    ])
  }, [])

  const [tweetMessage, settweetMessage] = useState('')
  const post = async (e) => {
    e.preventDefault()

    const profileId = await lens.getProfileIdByHandle(profile.handle)
    const ipfsCID = await uploadContent(profileId, profile.handle, tweetMessage)

    const emptyCollectModuleAddr = addrs['empty collect module']
    const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
    const postData = {
      profileId,
      contentURI: `https://gateway.lighthouse.storage/ipfs/${ipfsCID}`,
      collectModule: emptyCollectModuleAddr,
      collectModuleData: [],
      referenceModule: ZERO_ADDRESS,
      referenceModuleData: [],
    };
    const { txHash, pub } = await lens.post(profileId, signer, postData)
    
    settweetMessage('')
  }
  return (
    <>
      <div className="ml-23 border-l-2 overflow-y-scroll scrollbar-hide scroll-smooth max-h-screen">
        <div className="flex">
          <img
            src={profile.imageURI}
            className="rounded-full w-12 h-12  mt-5 ml-7"
            alt=""
          />

          <input
            type="text"
            onChange={(e) => settweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What`s happening?"
            required
            className="mt-6 ml-3 outline-0 text-zinc-500 text-xl font-semibold"
          />
        </div>
        <div className="border-b-2">
          <div className="flex flex-row ml-11 mt-9 justify-end mr-4">
            <button
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-10 rounded-full  mb-3"
              onClick={post}
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
        {posts.map((post) => (
          <Post
            key={post.id}
            handle={post.handle}
            imageURI={post.imageURI}
            pubId={post.pubId}
            message={post.message}
            currentHandle={profile.handle}
            signer={signer}
          />
        ))}
      </div>
    </>
  )
}
export default homesection
