import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
n=1
function makeCard(n, image, title, brand, price){
    return (
            <div className='card' key={n}>
                <img src={image}></img>
                <h2>{title}</h2>
                <p>{brand}</p>
                <b>$ {price}</b>
            </div>
    )
}

let root = createRoot(document.querySelector('.root'));

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    let container = data.products.map((product) => {
        return makeCard(product.id, product.thumbnail, product.title, product.brand, product.price);
    })
    root.render(container);
});
