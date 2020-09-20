import * as React from 'react'
import ListItem from './ListItem'
import { Ad } from '../interfaces/ad'

type Props = {
  items: Ad[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.link}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
