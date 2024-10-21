import { useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import expensesData from './expensesData'

function App() {
  const [expenses, setExpenses] = useState(expensesData)
  // console.log(expenses)
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses = {setExpenses}/>
        <ExpenseTable  expenses={expenses}/>
      </div>
    </main>
  )
}

export default App
