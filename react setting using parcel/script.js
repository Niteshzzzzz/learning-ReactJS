import React from 'react'
import ReactDOM from 'react-dom'
let h2 = <div>
    <h2 style= {{
        color: "red",
        fontSize: 70
        }}>hello React Babel</h2>
        <img src="https://www.shutterstock.com/image-illustration/3d-rendering-mythical-babel-tower-600nw-2210788465.jpg"></img>
        <div>
            <div style={{
                height: 200,
                width: 300,
                backgroundColor: "royalblue"
            }}>
                <div><input type="password" style={{
                    backgroundColor: "white"
                }}></input></div>    
            </div>    
        </div>
</div>



let root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(h2);