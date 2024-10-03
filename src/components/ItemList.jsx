// ItemList.jsx
/* eslint-disable react/prop-types */

import { useMemo, useState } from 'react'
import EmptyView from './EmptyView'
import Select from 'react-select'
import { useItemsStore } from '../stores/itemsStore'

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

export default function ItemList() {
  const items = useItemsStore((state) => state.items)
  const deleteItem = useItemsStore((state) => state.deleteItem)
  const toggleItem = useItemsStore((state) => state.toggleItem)
  const totalNumberOfItems = items.length

  const [sortBy, setSortBy] = useState('default')

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 'packed') {
          return b.packed - a.packed
        }

        if (sortBy === 'unpacked') {
          return a.packed - b.packed
        }

        return 0
      }),
    [sortBy, items]
  )

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
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
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
