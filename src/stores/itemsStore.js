import { create } from 'zustand'
import { initialItems } from '../lib/constants'
import { persist } from 'zustand/middleware'

export const useItemsStore = create(
  persist((set) => ({
    items: initialItems,

    addItem: (newItemText) => {
      const newItem = {
        id: new Date().getTime(),
        name: newItemText,
        packed: false,
      }
      set((state) => ({ items: [...state.items, newItem] }))
    },
    deleteItem: (id) => {
      set((state) => {
        const newItem = state.items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        )
        return { items: newItem }
      })
    },
    toggleItem: (id) => {
      set((state) => {
        const newItem = state.items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        )
        return { items: newItem }
      })
    },
    removeAllItems: () => {
      set(() => ({ items: [] }))
    },
    resetToInitial: () => {
      set(() => ({ items: initialItems }))
    },
    markAllAsComplete: () => {
      set((state) => {
        const newItems = state.items.map((item) => ({ ...item, packed: true }))
        return { items: newItems }
      })
    },
    markAllAsIncomplete: () => {
      set((state) => {
        const newItems = state.items.map((item) => ({ ...item, packed: false }))
        return { items: newItems }
      })
    },
  }))
)
