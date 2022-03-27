/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Spinner, Checkbox } from '@chakra-ui/react'
import axios from 'axios'
import Post from './Post'
import lens from '../lib/lens'
import apiClient from '../lib/apiClient'
import lit from '../lib/lit'

const addrs = require('../lib/addresses.json')

const homesection = ({ profile, signer, nftContractAddress, nftTokenId }) => {
  const [posts, setPosts] = useState([])
  const [posting, setPosting] = useState(false)
  const [tweetMessage, setTweetMessage] = useState('')
  const [wantEncrypt, setWantEncrypt] = useState(false)

  useEffect(() => {
    apiClient.getPosts({ nftContractAddress, nftTokenId }).then(posts => setPosts(posts))
  }, [])

  const uploadContent = async (profileId, handle, message) => {
    const contentJson = {
      type: 'post',
      lens_hub_contract_address: addrs['lensHub proxy'],
      profile_id: profileId.toNumber(),
      handle,
      message,
      encrypted: wantEncrypt,
      encryptedSymmetricKey: '',
      timestamp: new Date().toISOString(),
      seed_nft_contract_address: nftContractAddress,
      seed_nft_token_id: nftTokenId,
    }

    if (wantEncrypt) {
      const { encryptedString, encryptedSymmetricKey } = await lit.encrypt(message, nftContractAddress)
      // await lit.decrypt(encryptedString, encryptedSymmetricKey, nftContractAddress)
      contentJson.encryptedSymmetricKey = encryptedSymmetricKey
      contentJson.message = encryptedString
    }

    const res = await axios.post('/api/storage/upload', {
      json: JSON.stringify(contentJson),
    })
    const ipfsCID = res.data
    return { ipfsCID, contentJson }
  }

  const post = async (e) => {
    e.preventDefault()

    setPosting(true)
    try {
      const profileId = await lens.getProfileIdByHandle(profile.handle)
      const { ipfsCID, contentJson } = await uploadContent(profileId, profile.handle, tweetMessage)

      const emptyCollectModuleAddr = addrs['empty collect module']
      const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
      const postData = {
        profileId,
        contentURI: `https://gateway.pinata.cloud/ipfs/${ipfsCID}`,
        collectModule: emptyCollectModuleAddr,
        collectModuleData: [],
        referenceModule: ZERO_ADDRESS,
        referenceModuleData: [],
      }
      const { pubId } = await lens.post(profileId, signer, postData)

      setTweetMessage('')
      setPosts([
        {
          id: posts.length + 1,
          handle: contentJson.handle,
          imageURI: profile.imageURI,
          pubId,
          message: contentJson.message,
          encrypted: contentJson.encrypted,
          encryptedSymmetricKey: contentJson.encryptedSymmetricKey,
        },
        ...posts,
      ])
    } finally {
      setPosting(false)
    }
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
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            required
            className="mt-6 ml-3 outline-0 text-zinc-500 text-xl font-semibold"
          />
        </div>
        <div className="border-b-2">
          <div className="flex flex-row ml-11 mt-9 justify-between mr-4">
            <Checkbox
              isChecked={wantEncrypt}
              onChange={(e) => setWantEncrypt(e.target.checked)}
              className='mb-4'
            >
              Enable Encryption (NFT holders only)
            </Checkbox>

            <button
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-10 rounded-full  mb-3"
              onClick={post}
              type="submit"
            >
              {!posting ? (
                <div>Post</div>
              ) : (
                <Spinner size='sm' className='mt-1' />
              )}
            </button>
          </div>
        </div>
        {posts.map((post) => (
          <Post
            key={post.pubId || post.id }
            handle={post.handle}
            imageURI={post.imageURI}
            pubId={post.pubId}
            message={post.message}
            encrypted={post.encrypted}
            encryptedSymmetricKey={post.encryptedSymmetricKey}
            nftContractAddress={nftContractAddress}
            currentHandle={profile.handle}
            signer={signer}
          />
        ))}
      </div>
    </>
  )
}
export default homesection
