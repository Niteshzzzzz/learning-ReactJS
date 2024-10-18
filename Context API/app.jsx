import { Outlet } from "react-router-dom";
import React from "react";
import { Navigator } from "./Components/Navigator";
import { ThemeProvider } from "./contexts/ThemeContext.js";
import Footer from "./Components/Footer.jsx";

const App = () => {
    return (
        <>
            <ThemeProvider>
                <Navigator />
                <Outlet />
                < Footer />
            </ThemeProvider>
        </>
    )
}

export default App;
