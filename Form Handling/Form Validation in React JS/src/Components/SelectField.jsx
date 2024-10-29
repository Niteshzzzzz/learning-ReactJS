import React from 'react'

export default function SelectField({id, label, name, value, onChange, heading, allOption, error}) {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name} value={value} onChange={onChange}>
                {
                    heading && (<option value="" hidden>{heading}</option>)
                }
                {
                    allOption.map((option, i) => 
                         <option key={i} value={option}>{option}</option>
                    )
                }
            </select>
            <p className='err'>{error}</p>
        </div>
    )
}
