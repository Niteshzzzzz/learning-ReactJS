import { useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import expensesData from './expensesData'
import useLocalStorage from './Hooks/useLocalStorage'

function App() {
  const [expense, setExpense] = useLocalStorage('expense', {
    title: '',
    category: '',
    price: ''
  })
  const [expenses, setExpenses] = useLocalStorage('expenses', expensesData)
  const [editingId, setEditingId] = useLocalStorage('editingId', '')
  // console.log(expenses)
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingId={editingId} setEditingId={setEditingId} />
        <ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} setEditingId={setEditingId} />
      </div>
    </main>
  )
}

export default App
