import { Ad } from '../interfaces/ad'
import { promises as fs } from 'fs'

const ads: Ad[] = []

export async function getAds() {
  if (ads.length === 0) {
    const files = await fs.readdir('data/')
    const latestDate = files[0].substring(0, 8)
    const CONCELHOS = ['mafra', 'sintra', 'cascais', 'oeiras', 'amadora']
    for (const concelho of CONCELHOS) {
      const contents = await fs.readFile(`data/${latestDate}.${concelho}.imovirtual.json`, 'utf-8') as string
      (JSON.parse(contents) as Ad[]).forEach((ad) => {
        ads.push(ad)
      })
    }
  }
  return ads
}