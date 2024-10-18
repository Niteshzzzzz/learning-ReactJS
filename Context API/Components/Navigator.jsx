import React from 'react'
import { useTheme } from '../Hooks/useTheme.js';


export const Navigator = () => {
  const [isDark, setIsDark] = useTheme();

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
