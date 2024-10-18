import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext.js'


export const Navigator = () => {
  const [isDark, setIsDark] = useContext(ThemeContext);

  return (
    <header className={`${isDark?'dark':'' }`}>
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
