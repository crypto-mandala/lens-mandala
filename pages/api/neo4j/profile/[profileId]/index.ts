import { BigNumber } from 'ethers'
import { NextApiResponse } from 'next'
// import lens from '../../../../lib/lens'
import withNeo4j, { ApiRequestWithNeo4j } from '../../../../../lib/middleware/neo4j'

const handler = async (req: ApiRequestWithNeo4j, res: NextApiResponse) => {
  const {
    query: { profileId },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const profileIdInt = BigNumber.from(profileId).toBigInt()
        const selectQuery = `MATCH (pf: Profile {profileId: $profileIdInt}) RETURN pf LIMIT 1;`
        const result = await req.neo4j.run(selectQuery, { profileIdInt })
        if (result.records.length > 0) {
          const profile = result.records[0].get(0).properties
          const resData = {
              profileId: profile.profileId.toNumber(),
              pubCount: profile.pubCount.toNumber(),
              followModule: profile.followModule,
              followNFT: profile.followNFT,
              handle: profile.handle,
              imageURI: profile.imageURI,
              followNFTURI: profile.followNFTURI
            }
          res.status(200).json(resData || {})
        } else {
          res.status(200).json({})
        }
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
