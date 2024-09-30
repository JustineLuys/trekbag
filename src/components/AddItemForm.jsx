import { useRef, useState } from 'react'
import Button from './Button'
/* eslint-disable react/prop-types */

export default function AddItemForm({ onAddItem }) {
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
          onAddItem(itemText)
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
