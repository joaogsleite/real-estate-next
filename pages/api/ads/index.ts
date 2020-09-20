import { NextApiRequest, NextApiResponse } from 'next'
import { getAds } from '../../../utils/ads-data'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const adsData = await getAds()
    if (!Array.isArray(adsData)) {
      throw new Error('Cannot find ads data')
    }

    res.status(200).json(adsData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
