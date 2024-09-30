/* eslint-disable react/prop-types */

import { useState } from 'react'
import EmptyView from './EmptyView'
import Select from 'react-select'

const sortingOptions = [
  {
    label: 'Sort by default',
    value: 'default',
  },
  {
    label: 'Sort by packed',
    value: 'packed',
  },
  {
    label: 'Sort by unpacked',
    value: 'unpacked',
  },
]

export default function ItemList({
  items,
  totalNumberOfItems,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState('default')

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'packed') {
      return b.packed - a.packed
    }

    if (sortBy === 'unpacked') {
      return a.packed - b.packed
    }

    return
  })
  return (
    <ul className="item-list">
      {!totalNumberOfItems && <EmptyView />}

      {totalNumberOfItems > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  )
}

export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onClick={() => onToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
