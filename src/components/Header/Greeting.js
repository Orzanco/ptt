import React from 'react';
import './Greeting.css';

function Greeting({greeting}) {
    return (
        <div className="greeting">
         <h1>{greeting}</h1>
        </div>
    )
}

export default Greeting;
