/* eslint-disable */
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { useSession } from 'next-auth/react'
import lens from '../lib/lens'
const addrs = require('../lib/addresses.json')

function homesection({ profile, signer }) {
  const { data: session } = useSession()

  console.log(session)
  const [post, setPost] = useState([])

  useEffect(
    () =>
      // TODO: update testdata
      setPost([
        {
          id: 1,
          displayName: 'Ara',
          username: 'https://pbs.twimg.com/profile_images/1435621053812801542/cAc0-dsn_400x400.jpg',
          text: 'Hello'
        }
      ]),
    []
  )

  const [tweetmessage, setTweetmessage] = useState('')
  const handleNew = async (e) => {
    e.preventDefault()
    
    const profileId = await lens.getProfileIdByHandle(profile.handle)
    const emptyCollectModuleAddr = addrs['empty collect module']
    const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
    const postData = {
      profileId,
      contentURI:
        'https://ipfs.fleek.co/ipfs/plantghostplantghostplantghostplantghostplantghostplantghos',
      collectModule: emptyCollectModuleAddr,
      collectModuleData: [],
      referenceModule: ZERO_ADDRESS,
      referenceModuleData: [],
    };
    await lens.post(profileId, signer, postData)
    setTweetmessage('')
  }
  return (
    <>
      <div className="ml-23 border-l-2 overflow-y-scroll scrollbar-hide scroll-smooth max-h-screen">
        <div className="flex">
          <img
            src={'https://pbs.twimg.com/profile_images/1435621053812801542/cAc0-dsn_400x400.jpg'}
            className="rounded-full w-12 h-12  mt-5 ml-7"
            alt=""
          />

          <input
            type="text"
            onChange={(e) => setTweetmessage(e.target.value)}
            value={tweetmessage}
            placeholder="What`s happening?"
            required
            className="mt-6 ml-3 outline-0 text-zinc-500 text-xl font-semibold"
          />
        </div>
        <div className="border-b-2">
          <div className="flex flex-row ml-11 mt-9 justify-end mr-4">
            <button
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-10 rounded-full  mb-3"
              onClick={handleNew}
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
        {post.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
          />
        ))}
      </div>
    </>
  )
}
export default homesection
