import React from 'react';
import './Header.css';

import NavBar from './NavBar';

function Header({title}) {

    return (
        <div className="header-container">
            <div className="brand">
   
                <h1>{title}</h1>   
            </div>
            <NavBar />
        </div>
    )
}

export default Header;
