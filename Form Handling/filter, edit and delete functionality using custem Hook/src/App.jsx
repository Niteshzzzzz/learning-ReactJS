import { useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import expensesData from './expensesData'

function App() {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    price: ''
  })
  const [expenses, setExpenses] = useState(expensesData)
  const [editingId, setEditingId] = useState('')
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
