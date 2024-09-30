/* eslint-disable react/prop-types */
import Button from './Button'

export default function ButtonGroup({
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleResetToInitial,
  handleRemoveAllItems,
}) {
  const secondaryButtons = [
    {
      text: 'Mark all as complete',
      action: handleMarkAllAsComplete,
    },
    {
      text: 'Mark all as incomplete',
      action: handleMarkAllAsIncomplete,
    },
    {
      text: 'Rest to initial',
      action: handleResetToInitial,
    },
    {
      text: 'Remove all items',
      action: handleRemoveAllItems,
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
