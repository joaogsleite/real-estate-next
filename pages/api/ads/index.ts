import { NextApiRequest, NextApiResponse } from 'next'
import { adsData } from '../../../utils/ads-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(adsData)) {
      throw new Error('Cannot find ads data')
    }

    res.status(200).json(adsData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
