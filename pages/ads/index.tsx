import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Ad } from '../../interfaces/ad'
import { getAds } from '../../utils/ads-data'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { useCallback, FormEvent, useState } from 'react'

type Props = {
  items: Ad[]
}

const WithStaticProps = ({ items }: Props) => {
  const [selected, setSelected] = useState<string>('')
  const handleChange = useCallback((event: FormEvent<HTMLSelectElement>) => {
    setSelected(event.currentTarget.value)
  }, [setSelected])
  items = items.filter((item) => {
    return selected ? item.concelho === selected : true
  })
  return (
    <Layout title="Ads List | Next.js + TypeScript Example">
      <h1>Ads List</h1>
      <p>
        Ads fetched from imovirtual
      </p>
      <select onChange={handleChange}>
        <option value="" selected>(select concelho)</option>
        <option>Mafra</option>
        <option>Sintra</option>
        <option>Cascais</option>
        <option>Oeiras</option>
        <option>Amadora</option>
      </select>
      <List items={items} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const adsData = await getAds()
  const items: Ad[] = adsData
  return { props: { items } }
}

export default WithStaticProps
