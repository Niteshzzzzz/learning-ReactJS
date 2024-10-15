import { Outlet } from "react-router-dom";
import React from "react";
import { Navigator } from "./Components/Navigator";

const App = () => {

    return (
        <>
            <Navigator/>
            <Outlet/>
        </>
    )
}

export default App;
