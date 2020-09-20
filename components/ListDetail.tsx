import * as React from 'react'

import { Ad } from '../interfaces/ad'

type ListDetailProps = {
  item: Ad
}

const ListDetail = ({ item }: ListDetailProps) => (
  <div>
    <h1>Detail for {item.id}</h1>
    <p>Name: {item.name}</p>
    <p>Topology: T{item.topology}</p>
    <p>Area: {item.area} m2</p>
    <p>Price: {item.price} €</p>
    <p>Distrito: {item.distrito}</p>
    <p>Concelho: {item.concelho}</p>
    <p>Freguesia: {item.freguesia}</p>
    <p>Link: <a href={item.link}>{item.link}</a></p>
  </div>
)

export default ListDetail
