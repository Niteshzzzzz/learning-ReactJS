import React from 'react'
import viteLogo from '/vite.svg'

export default function Header() {
    return (
        <header className='flex justify-between px-4 py-4 shadow-md md:px-8'>
            <img src={viteLogo} alt="logo" />
            <ul className='flex justify-between gap-4 text-xl md:gap-6'>
                <li><a href='/home' className='hover:text-cyan-800'>Home</a></li>
                <li><a href='/about' className='hover:text-cyan-800' >About</a></li>
                <li><a href='/contact' className='hover:text-cyan-800' >Contact</a></li>
                <li><a href='/signin' className='hover:text-cyan-800' >SignIn</a></li>
            </ul>
        </header>
    )
}
