import React from 'react'
import {useState} from 'react'

export const Navigator = () => {

  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  if (isDark) {
    document.querySelector('body').classList.add('dark')
  }else{
    document.querySelector('body').classList.remove('dark')
  }

  return (
    <header>
      <div className="sub1"><h2>Where is the word?</h2></div>
      <div className="sub2" onClick={() => {
        setIsDark(!isDark)
        localStorage.setItem('isDarkMode', !isDark)
      }}>
        <i className={`fa-solid fa-${isDark?'sun':'moon' }`}/>
        <span>&nbsp; &nbsp;{isDark?'Light':'Dark' } Mode</span>
      </div>
    </header>
  )
}
