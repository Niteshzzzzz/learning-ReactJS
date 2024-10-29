import React, { useState } from 'react'

export default function ExpenseForm({ setExpenses }) {

    const [expense, setExpense] = useState({
        title: '',
        category: '',
        price: 0
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        // const expense = {...expense, }
        setExpenses(prevState => [...prevState, {...expense, id: crypto.randomUUID()}])
        
        console.log(expense)
    }
    
    // const getFormData = (form) => {
    //     const formData = new FormData(form)
    //     const data = {}
    //     for (const [key, value] of formData.entries()) {
    //         data[key] = value
    //     }
    //     return data;
    // }

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input id="title" name='title' value={expense.title} onChange={(e) => setExpense((prevState) => ({...prevState, title: e.target.value}))}/>
            </div>
            <div className="input-container">
                <label htmlFor="category">Category</label>
                <select id='category' name='category' value={expense.category} onChange={(e) => setExpense((prevState) => ({...prevState, category: e.target.value}))}>
                    <option value="" hidden>Select Categories</option>
                    <option value="grocery">Grocery</option>
                    <option value="clothes">Clothes</option>
                    <option value="bills">Bills</option>
                    <option value="education">Education</option>
                    <option value="medicine">Medicine</option>
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="amount">Amount</label>
                <input id="amount" name='amount' value={expense.price} onChange={(e) => setExpense((prevState) => ({...prevState, price: e.target.value}))}/>
            </div>
            <button className="add-btn">Add</button>
        </form>)
}
