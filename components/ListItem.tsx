import React from 'react'
import Link from 'next/link'

import { Ad } from '../interfaces/ad'

type Props = {
  data: Ad
}

const ListItem = ({ data }: Props) => (
  <Link href="/ads/[id]" as={`/ads/${data.id}`}>
    <a>
      {data.name}: {data.price}
    </a>
  </Link>
)

export default ListItem
