let h2 = React.createElement('h2', { className: 'first' }, 'I am a react element');
let root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(h2);

let container = React.createElement('div', { className: 'container', style: { backgroundColor: 'black', color: 'white' } }, 'i am a div container', React.createElement('button', {}, 'Click Me'), React.createElement('img', { src: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg' },));

root.render(container);