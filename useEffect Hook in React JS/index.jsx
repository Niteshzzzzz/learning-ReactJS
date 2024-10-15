import {createRoot} from 'react-dom/client';
import App from './app.jsx';

let root = createRoot(document.querySelector('#root'));
root.render(<App/>)