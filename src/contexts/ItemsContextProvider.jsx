/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useEffect, useState } from 'react'
import { initialItems } from '../lib/constants'

const ItemsContext = createContext()
export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem('items')) || initialItems
  )

  // Derived states

  const totalNumberOfItems = items.length
  const numbersOfItemsPacked = items.filter((item) => item.packed).length

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  // Functions
  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    }
    setItems((prev) => [...prev, newItem])
  }

  const handleDeleteItem = (id) => {
    // Longer way to remove an item in an array
    // const index = items.findIndex((item) => item.id === id)
    // const newItems = [...items.slice(0, index), ...items.slice(index + 1)]
    // setItems(newItems);

    // Shorter way to remove an item in an array
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const handleToggleItem = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    )

    setItems(newItem)
  }

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }))
    setItems(newItems)
  }

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }))
    setItems(newItems)
  }

  const handleResetToInitial = () => {
    setItems(initialItems)
  }

  const handleRemoveAllItems = () => {
    setItems([])
  }

  return (
    <ItemsContext.Provider
      value={{
        items,
        numbersOfItemsPacked,
        totalNumberOfItems,
        setItems,
        handleAddItem,
        handleDeleteItem,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleRemoveAllItems,
        handleResetToInitial,
        handleToggleItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}
