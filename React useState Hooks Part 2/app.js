import { useState } from "react";
import AppleBasket from "./Components/AppleBasket";
import Button from "./Components/Button";
import './style.css'


const App = () => {
    let allApples = 10;

    const [rightApples, setRightApples] = useState(0);

    const [leftApples, setLeftApples] = useState(allApples-rightApples);

    let leftEvent = () => {
        if (rightApples>0) {
            setLeftApples(leftApples+1);
            setRightApples(rightApples-1);
        }
       
    }
    let rightEvent = () => {
        if (leftApples>0) {
            setLeftApples(leftApples-1);
            setRightApples(rightApples+1);
        }    }

    return (
        <div className="main">
            
            <AppleBasket count={leftApples} basketName="Basket 1"/>
            <Button clickHendler={leftEvent} arrow="&#8676;" title="left arrow" className="btn"/>
            <Button clickHendler={rightEvent} arrow="&#8677;" title="Right arrow" className="btn"/>
            <AppleBasket count={rightApples} basketName="Basket 2" />
        
        </div>

    )
}

export default App;