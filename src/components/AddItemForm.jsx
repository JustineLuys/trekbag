import { useRef, useState } from 'react'
import Button from './Button'
import { useItemsStore } from '../stores/itemsStore'
/* eslint-disable react/prop-types */

export default function AddItemForm() {
  const addItem = useItemsStore((state) => state.addItem)
  const [itemText, setItemText] = useState('')
  const inputRef = useRef()
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          if (!itemText) {
            alert('Item name cannot be empty')
            inputRef.current.focus()
            return
          }
          addItem(itemText)
          setItemText('')
        }}
      >
        <h2>Add an item</h2>
        <input
          ref={inputRef}
          type="text"
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
          autoFocus={true}
        />
        <Button type="primary">Add to list</Button>
      </form>
    </>
  )
}
