import fs from 'fs'

// create scraper data folder
const dir = 'data'
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir)
}

// run scrapers
import './imovirtual'