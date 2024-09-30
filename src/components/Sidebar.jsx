/* eslint-disable react/prop-types */
import AddItemForm from './AddItemForm'
import ButtonGroup from './ButtonGroup'

export default function Sidebar({
  handleAddItem,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleResetToInitial,
  handleRemoveAllItems,
}) {
  return (
    <aside className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleResetToInitial={handleResetToInitial}
        handleRemoveAllItems={handleRemoveAllItems}
      />
    </aside>
  )
}
