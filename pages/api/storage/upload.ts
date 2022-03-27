import { NextApiRequest, NextApiResponse } from 'next'
import pinata from '../../../lib/pinata'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const {
    body: { json },
    method,
  } = req

  switch (method) {
    case 'POST':
      // eslint-disable-next-line no-case-declarations
      const cid = await pinata.upload(JSON.parse(json))
      res.status(200).json(cid)
      // eslint-disable-next-line no-console
      console.log(cid)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default handler
