import { BigNumber } from 'ethers'
import { NextApiResponse } from 'next'
import withNeo4j, { ApiRequestWithNeo4j } from '../../../../../../lib/middleware/neo4j'

const handler = async (req: ApiRequestWithNeo4j, res: NextApiResponse) => {
  const {
    query: { address, id },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const tokenIdInt = BigNumber.from(id).toBigInt()
        const selectQuery = `MATCH
          (pb: Pub)
          WHERE
            pb.seed_nft_contract_address = $address AND
            pb.seed_nft_token_id = $tokenIdInt
          RETURN pb ORDER BY pb.timestamp DESC;`
        const result = await req.neo4j.run(selectQuery, { address, tokenIdInt })

        const pubs = result.records.map(record => {
          const pub = record.get(0).properties
          return {
            pubId: pub.pubId.toNumber(),
            profileIdPointed: pub.profileIdPointed.toNumber(),
            pubIdPointed: pub.pubIdPointed.toNumber(),
            contentURI: pub.contentURI,
            referenceModule: pub.referenceModule,
            collectModule: pub.collectModule,
            collectNFT: pub.collectNFT,
            type: pub.type,
            message: pub.message,
            handle: pub.handle,
            encrypted: pub.encrypted,
            timestamp: pub.timestamp,
            seed_nft_contract_address: pub.seed_nft_contract_address,
            seed_nft_token_id: pub.seed_nft_token_id?.toNumber(),
            mirrorCount: 0,
            collectCount: 0
          }
        })
        res.status(200).json(pubs || {})
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
