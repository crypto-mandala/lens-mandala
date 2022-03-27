import axios from 'axios'

class ApiClient {
  async getPosts({ nftContractAddress, nftTokenId }) {
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
    try {
      const res = await axios.get(`/api/neo4j/seed/${nftContractAddress}/${nftTokenId}/pub`)
      if (!res.data) {
        return res.data.filter((pub: any) => {
          return pub.type === 'post'
        }).map((pub: any) => {
          if (!pub.imageURI) {
            pub.imageURI = imageURIs[Math.floor(Math.random() * imageURIs.length)]
          }
          return pub
        })
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
    // TODO: Replace mock
    return [
      {
        id: 1,
        handle: 'user1',
        imageURI: imageURIs[Math.floor(Math.random() * imageURIs.length)],
        pubId: 2,
        message: 'Hello',
      },
      {
        id: 2,
        handle: 'user2',
        imageURI: imageURIs[Math.floor(Math.random() * imageURIs.length)],
        pubId: 9,
        message: 'gm',
      },
    ]
  }
}

export default new ApiClient()
