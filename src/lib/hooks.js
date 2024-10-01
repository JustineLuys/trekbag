import { useContext } from 'react'
import ItemsContextProvider from '../contexts/ItemsContextProvider'

export const useItemsContext = () => {
  const context = useContext(ItemsContextProvider)
  if (!context) {
    throw new Error(
      'UseItemsContext must be used within an ItemsContextProvider'
    )
  }
  return context
}
