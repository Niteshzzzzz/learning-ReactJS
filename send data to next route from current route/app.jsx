import { Outlet } from "react-router-dom";
import React from "react";
import { useState } from 'react'
import { Navigator } from "./Components/Navigator";
import { ThemeContext } from "./contexts/ThemeContext.js";

const App = () => {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return (
        <>
            <ThemeContext.Provider value={[isDark, setIsDark]}>
                <Navigator />
                <Outlet />
            </ThemeContext.Provider>
        </>
    )
}

export default App;
