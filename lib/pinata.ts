const axios = require('axios');

class Pinata {
  async upload(JSONBody: any) {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    const response = await axios.post(url, JSONBody, {
      headers: {
        Authorization: `Bearer ${process.env.PINATA_API_KEY}`
      }
    })
    // eslint-disable-next-line no-console
    console.log(response.data)
    return response.data.IpfsHash
  }
}

export default new Pinata()
