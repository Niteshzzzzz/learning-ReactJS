import AppleBasket from "./Components/AppleBasket";
import Button from "./Components/Button";
import './style.css'
import {createRoot} from 'react-dom/client'

let allApples = 10;
let rightApple = 0;
let leftApple = allApples-rightApple;
let root = createRoot(document.querySelector('.root'))

const App = () => {
    let leftEvent = () => {
        if (rightApple>0) {
            rightApple--;
            leftApple++;
            root.render(<App/>)
        }
       
    }
    let rightEvent = () => {
        if (leftApple>0) {
            rightApple++;
            leftApple--;
            root.render(<App/>)
        }    }

    return (
        <div className="main">
            <AppleBasket count={leftApple} basketName="Basket 1"/>
            <Button clickHendler={leftEvent} arrow="&#8676;" title="left arrow" className="btn"/>
            <Button clickHendler={rightEvent} arrow="&#8677;" title="Right arrow" className="btn"/>
            <AppleBasket count={rightApple} basketName="Basket 2" />
        </div>

    )
}

export default App;