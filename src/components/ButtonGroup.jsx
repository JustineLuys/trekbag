/* eslint-disable react/prop-types */
import { useItemsStore } from '../stores/itemsStore'
import Button from './Button'

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete)
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  )
  const resetToInitial = useItemsStore((state) => state.resetToInitial)
  const removeAllItems = useItemsStore((state) => state.removeAllItems)

  const secondaryButtons = [
    {
      text: 'Mark all as complete',
      action: markAllAsComplete,
    },
    {
      text: 'Mark all as incomplete',
      action: markAllAsIncomplete,
    },
    {
      text: 'Rest to initial',
      action: resetToInitial,
    },
    {
      text: 'Remove all items',
      action: removeAllItems,
    },
  ]
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button.text + button.action.toString()}
          type="secondary"
          onclick={button.action}
        >
          {button.text}
        </Button>
      ))}
    </section>
  )
}
