import { BigNumber } from 'ethers'
import { NextApiRequest, NextApiResponse } from 'next'
import lens from '../../../../lib/lens'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { profileId },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const profile = await lens.getProfile(BigNumber.from(profileId))

        res.status(200).json(profile || {})
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
