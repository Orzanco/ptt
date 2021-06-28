import React from 'react';
import NavBarItem from './NavBarItem';
import './NavBar.css';
import CartWidget from './../CartComponent/CartWidget';

function NavBar() {
    return (
        <div className="nav-menu">
            <NavBarItem href="https://www.youtube.com/watch?v=ap6wJGVcsm0" label="Albums"/>
            <NavBarItem href="https://www.youtube.com/watch?v=ap6wJGVcsm0" label="Photocards"/>
            <NavBarItem href="https://www.youtube.com/watch?v=ap6wJGVcsm0" label="Lightsticks"/>
            <CartWidget />
        </div>
    )
}

export default NavBar;
