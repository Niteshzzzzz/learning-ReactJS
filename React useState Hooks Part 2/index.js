import {createRoot} from 'react-dom/client';
// import App from './app';
import Counterfun from "./counterfun.js";


let root = createRoot(document.querySelector('.root'));
// root.render(<App/>)
root.render(<Counterfun><h1>I an react props child.</h1></Counterfun>)
