import { BigNumber } from 'ethers'
import { NextApiResponse } from 'next'
import lens from '../../../../../../lib/lens'
import withNeo4j, { ApiRequestWithNeo4j } from '../../../../../../lib/middleware/neo4j'
import axios from 'axios'

const handler = async (req: ApiRequestWithNeo4j, res: NextApiResponse) => {
  const {
    query: { profileId, pubId },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const profileIdBignum = BigNumber.from(profileId)
        const pubIdBignum = BigNumber.from(pubId)
        const pub = await lens.getPub(
          profileIdBignum,
          pubIdBignum
        )
        if (pub.contentURI.length > 0) {
          const lensHubAddress = lens.getLensHubAddress()
          const profileIdInt = profileIdBignum.toBigInt()
          const pubIdInt = pubIdBignum.toBigInt()
          const pubObj = Object.assign({}, pub)
          const profileIdPointed = pubObj.profileIdPointed.toBigInt()
          const pubIdPointed = pubObj.pubIdPointed.toBigInt()
          let content = {}
          try {
            const res = await axios.get(pub.contentURI)
            content = {
              type: res.data.type || '',
              lens_hub_contract_address: res.data.lens_hub_contract_address || '',
              profileId: res.data.profileId || '',
              handle: res.data.handle || '',
              pubId: res.data.pubId || '',
              message: res.data.message || '',
              encrypted: res.data.encrypted,
              timestamp: res.data.timestamp || '',
              seed_nft_contract_address: res.data.seed_nft_contract_address ? res.data.seed_nft_contract_address.toLowerCase() : '',
              seed_nft_token_id: BigNumber.from(res.data.seed_nft_token_id).toBigInt(),
              tx_hash: res.data.tx_hash || ''
            }
          } catch (e) {
            content = {}
          }
          let collectCount = BigNumber.from(0).toBigInt()
          if (pubObj.collectNFT !== '0x0000000000000000000000000000000000000000') {
            try {
              collectCount = BigNumber.from(await lens.collectNFT_totalSupply(pubObj.collectNFT)).toBigInt()
            } catch (e) {
              collectCount = BigNumber.from(0).toBigInt()
            }
          }
          const writeQuery = `
          MERGE
            (pf:Profile {
              lensHubAddress: $lensHubAddress,
              profileId: $profileIdInt
            })
          MERGE
            (pb:Pub {
              lensHubAddress: $lensHubAddress,
              profileId: $profileIdInt,
              pubId: $pubIdInt
            })
           SET
            pb.profileIdPointed = $profileIdPointed,
            pb.pubIdPointed = $pubIdPointed,
            pb.contentURI = $pubObj.contentURI,
            pb.referenceModule = $pubObj.referenceModule,
            pb.collectModule = $pubObj.collectModule,
            pb.collectNFT = $pubObj.collectNFT,
            pb.type = $content.type,
            pb.message = $content.message,
            pb.handle = $content.handle,
            pb.encrypted = $content.encrypted,
            pb.timestamp = $content.timestamp,
            pb.seed_nft_contract_address = $content.seed_nft_contract_address,
            pb.seed_nft_token_id = $content.seed_nft_token_id,
            pb.tx_hash = $content.tx_hash,
            pb.collectCount = $collectCount
          MERGE
            (pf)-[:POST]->(pb)
           RETURN pb;`
          await req.neo4j.writeTransaction(tx =>
            tx.run(writeQuery, { lensHubAddress, profileIdInt, pubIdInt, profileIdPointed, pubIdPointed, pubObj, content, collectCount })
          )
        }

        res.status(200).json(pub || {})
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
