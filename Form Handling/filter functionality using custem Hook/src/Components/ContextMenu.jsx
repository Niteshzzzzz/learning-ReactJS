import React from 'react'

export default function ContextMenu({ menuPosition, setMenuPosition, rowId, setExpenses }) {
  if (!menuPosition.left) return;
  return (
    <div className='context-menu' style={{ left: menuPosition.left, top: menuPosition.top }}>
      <div onClick={() => {
        console.log('Editing')
        setMenuPosition({})
      }}>Edit</div>
      <div onClick={() => {
        console.log('Deleting')
        setMenuPosition({})
        setExpenses((prevState => prevState.filter(expense => expense.id != rowId)))
      }}>Delete</div>
    </div>
  )
}
