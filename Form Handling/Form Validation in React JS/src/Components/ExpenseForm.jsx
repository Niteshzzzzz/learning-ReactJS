import React, { useState } from 'react'
import InputField from './InputField'
import SelectField from './SelectField'

export default function ExpenseForm({ setExpenses }) {

    const [expense, setExpense] = useState({
        title: '',
        category: '',
        price: '',
        email: ''
    })

    const [errors, setErrors] = useState({})
    const validateConfig = {
        title: [{required: true, message: 'Please enter a title.'}, {minLength: 5, message: 'Title should be atleast 5 characters long.'}],
        category: [{required: true, message: 'Please select a category.'}],
        price: [{required: true, message: 'Please enter a price.'}],
        email: [{required: true, message: 'Please enter an email.'}, {pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Invalid email, please enter correct email.'}]
    }

    const validate = (formData) => {
        const errorData = {}

        Object.entries(formData).forEach(([key, value]) => {
            validateConfig[key].some((rule) => {
                if(rule.required && !value){
                    errorData[key] = rule.message
                    return true
                }

                if (rule.minLength && value.length < rule.minLength) {
                    errorData[key] = rule.message
                    return true
                }

                if(rule.pattern && !rule.pattern.test(value)){
                    errorData[key] = rule.message
                }
            })
        })

        setErrors(errorData)
        return errorData
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validateResult = validate(expense)
        if(Object.keys(validateResult).length) return

        setExpenses(prevState => [...prevState, { ...expense, id: crypto.randomUUID() }])
        setExpense({
            title: '',
            category: '',
            price: '',
            email:''
        })
    }

    const handleEvent = (e) => {
        const {name, value} = e.target
        setExpense((prevState) => ({ ...prevState, [name]: value }))
    } 


    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            
            <InputField id='title' label='Title' name='title' value={expense.title} onChange={handleEvent} error={errors.title} />

            <SelectField id='category' label='Category' name='category' value={expense.category} onChange={handleEvent} heading='Select Categories' error={errors.category} allOption={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']} />
            
            <InputField id='amount' label='Amount' name='price' value={expense.price} onChange={handleEvent} error={errors.price} />
            
            <InputField id='email' label='Email' name='email' value={expense.email} onChange={handleEvent} error={errors.email} />

            <button className="add-btn">Add</button>
        </form>)
}
