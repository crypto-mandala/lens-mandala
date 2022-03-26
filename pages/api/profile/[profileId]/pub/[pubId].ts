import { BigNumber } from 'ethers'
import { NextApiRequest, NextApiResponse } from 'next'
import lens from '../../../../../lib/lens'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { profileId, pubId },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const pub = await lens.getPub(
          BigNumber.from(profileId),
          BigNumber.from(pubId)
        )

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

export default handler
