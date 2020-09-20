import { Ad } from '../interfaces/ad'
import fs from 'fs'

const ads: Ad[] = []

const files = fs.readdirSync('data/')
const latestDate = files[0].substring(0, 8)

const CONCELHOS = ['mafra', 'sintra', 'cascais', 'oeiras', 'amadora']
for (const concelho of CONCELHOS) {
  const contents = fs.readFileSync(`data/${latestDate}.${concelho}.imovirtual.json`, 'utf-8') as string
  (JSON.parse(contents) as Ad[]).forEach((ad) => {
    ads.push(ad)
  })
}

/** Ads data. */
export const adsData = ads
