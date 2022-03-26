import { BigNumber } from 'ethers'
import { NextApiResponse } from 'next'
import lens from '../../../../lib/lens'
import withNeo4j, { ApiRequestWithNeo4j } from '../../../../lib/middleware/neo4j'

const handler = async (req: ApiRequestWithNeo4j, res: NextApiResponse) => {
  const {
    query: { profileId },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const profileIdBignum = BigNumber.from(profileId)
        const profile = await lens.getProfile(profileIdBignum)
        if (profile.handle.length > 0) {
          const lensHubAddress = lens.getLensHubAddress()
          const profileIdInt = profileIdBignum.toBigInt()
          const profileObj = Object.assign({}, profile)
          const pubCount = profileObj.pubCount.toBigInt()
          const writeQuery = `MERGE (p:Profile {
            lensHubAddress: $lensHubAddress,
            profileId: $profileIdInt
           })
           SET
            p.pubCount = $pubCount,
            p.followModule = $profileObj.followModule,
            p.followNFT = $profileObj.followNFT,
            p.handle = $profileObj.handle,
            p.imageURI = $profileObj.imageURI,
            p.followNFTURI = $profileObj.followNFTURI
           RETURN p;`
          req.neo4j.writeTransaction(tx =>
            tx.run(writeQuery, { lensHubAddress, profileIdInt, pubCount, profileObj })
          )
        }
        res.status(200).json(profile || [])
      } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message })
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withNeo4j(handler);
