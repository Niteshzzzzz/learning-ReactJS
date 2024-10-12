import {createRoot} from 'react-dom/client';
import App from './app';

let root = createRoot(document.querySelector('.root'));
root.render(<App/>)