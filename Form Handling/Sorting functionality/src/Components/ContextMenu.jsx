import React from 'react'

export default function ContextMenu({ menuPosition, setMenuPosition, rowId, setExpenses, expenses, setExpense, setEditingId}) {
  if (!menuPosition.left) return;
  return (
    <div className='context-menu' style={{ left: menuPosition.left, top: menuPosition.top }}>
      <div onClick={() => {
        setEditingId(rowId)
        setMenuPosition({})
        const {title, category, price} = expenses.find((expense) => expense.id === rowId)
        // console.log(editData)
        setExpense({title, category, price})
      }}>Edit</div>
      <div onClick={() => {
        console.log('Deleting')
        setMenuPosition({})
        setExpenses((prevState => prevState.filter(expense => expense.id != rowId)))
      }}>Delete</div>
    </div>
  )
}
