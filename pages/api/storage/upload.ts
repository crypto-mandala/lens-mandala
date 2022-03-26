import { NextApiRequest, NextApiResponse } from 'next'
import lighthouse from '../../../lib/lighthouse'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body: { json }, method } = req

  switch (method) {
    case 'POST':
      // eslint-disable-next-line no-case-declarations
      const cid = await lighthouse.upload(json.toString())
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