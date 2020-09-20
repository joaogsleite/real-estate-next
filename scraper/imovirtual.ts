import path from 'path'
import Xray from 'x-ray'

const xray = Xray({
  filters: {
    number: (value: string) => {
      return Number((value.match(/\d+/g) || []).join(''))
    },
    location: (value: string, index: any) => {
      return value.split(': ')[1].split(', ')[index]
    },
    id: (value: string) => {
      return 'ID' + value.split('-ID')[1].split('.html')[0]
    }
  },
})

const date = new Date().toISOString().slice(0, 10).split('-').join('')

function fetch (url: string, name: string) {
  const entrySpec = {
    id: 'h3 a@href | id',
    name: 'h3 a span span',
    area: 'h3 a strong | number',
    freguesia: 'h3 + p.text-nowrap | location:0',
    concelho: 'h3 + p.text-nowrap | location:1',
    distrito: 'h3 + p.text-nowrap | location:2',
    topology: '.offer-item-rooms | number',
    price: '.offer-item-price | number',
    link: 'h3 a@href'
  }
  xray(url, 'article', [entrySpec])
    .paginate('.pager-next a@href')
    .limit(2)
    .write(path.join('data', `${date}.${name}.imovirtual.json`))
}

const concelhos = {
  sintra: 'https://www.imovirtual.com/comprar/apartamento/sintra/?search%5Bregion_id%5D=11&search%5Bsubregion_id%5D=158&search%5Border%5D=created_at_first%3Adesc',
  cascais: 'https://www.imovirtual.com/comprar/apartamento/cascais/?search%5Border%5D=created_at_first%3Adesc&search%5Bregion_id%5D=11&search%5Bsubregion_id%5D=152',
  oeiras: 'https://www.imovirtual.com/comprar/apartamento/oeiras/?search%5Border%5D=created_at_first%3Adesc&search%5Bregion_id%5D=11&search%5Bsubregion_id%5D=157',
  amadora: 'https://www.imovirtual.com/comprar/apartamento/amadora/?search%5Border%5D=created_at_first%3Adesc&search%5Bregion_id%5D=11&search%5Bsubregion_id%5D=162',
  mafra: 'https://www.imovirtual.com/comprar/apartamento/mafra/?search%5Border%5D=created_at_first%3Adesc&search%5Bregion_id%5D=11&search%5Bsubregion_id%5D=156'
}
for(const entry of Object.entries(concelhos)) {
  fetch(entry[1], entry[0])
}