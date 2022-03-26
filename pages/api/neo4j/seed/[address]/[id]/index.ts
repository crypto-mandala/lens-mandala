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
          (pf: Profile)-[:POST]->(pb: Pub)
          WHERE
            pb.seed_nft_contract_address = $address AND
            pb.seed_nft_token_id = $tokenIdInt

          RETURN COUNT(DISTINCT pf) as profile, COUNT(DISTINCT pb) as post, SUM(pb.collectCount) as collect;`
        const result = await req.neo4j.run(selectQuery, { address, tokenIdInt })

        const resData = {
          timestamp_minted: "2022-03-25T23:13:00Z",
          profileCount: result.records[0].get("profile").toNumber(),
          postCount: result.records[0].get("post").toNumber(),
          mirrorCount: 0,
          collectCount: result.records[0].get("collect").toNumber()
        }
        res.status(200).json(resData || {})

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
