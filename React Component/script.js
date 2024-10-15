import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
n = 1
function MakeCard(props) {
    let { key, image, title, brand, price } = props;
    return (
        <div key={key} className='card'>
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
        root.render(
            data.products.map((product) => {
                return (
                    <MakeCard key={product.id} title={product.title} image={product.thumbnail} brand={product.brand} price={product.price} />
                );

            })
        )
    });
