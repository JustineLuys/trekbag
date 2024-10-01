// Counter.jsx
import { useItemsStore } from '../stores/itemsStore'

/* eslint-disable react/prop-types */
export default function Counter() {
  const items = useItemsStore((state) => state.items) // Corrected selector
  const totalNumberOfItems = items.length
  const numbersOfItemsPacked = items.filter((item) => item.packed).length // Added .length to get the count
  return (
    <p>
      <b>{numbersOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  )
}
