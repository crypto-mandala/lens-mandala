// import { BigNumber } from 'ethers'
import { NextApiResponse } from 'next'
// import lens from '../../../../lib/lens'
import withNeo4j, { ApiRequestWithNeo4j } from '../../../../lib/middleware/neo4j'

const handler = async (req: ApiRequestWithNeo4j, res: NextApiResponse) => {
  const {
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const selectQuery = `MATCH (pf: Profile) RETURN pf ORDER BY pf.profileId;`
        const result = await req.neo4j.run(selectQuery)
        const profiles = result.records.map(record => {
          const profile = record.get(0).properties
          return {
            profileId: profile.profileId.toNumber(),
            pubCount: profile.pubCount.toNumber(),
            followModule: profile.followModule,
            followNFT: profile.followNFT,
            handle: profile.handle,
            imageURI: profile.imageURI,
            followNFTURI: profile.followNFTURI
          }
        })
        res.status(200).json(profiles || {})
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
