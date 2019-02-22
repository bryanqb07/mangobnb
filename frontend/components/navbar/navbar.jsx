import React from 'react';
import { NavLink } from 'react-router-dom';

export default() => (
    <div className="right-nav-container">
        <div className="right-nav-top">
            <a href="tel: 5551234567">
                <img src="callme.jpg" alt="image"/>
                +5551234567
            </a>
            <button>English</button>
            <NavLink to="/booking" 
                activeClassName="active"
                className="button">BOOK NOW</NavLink>
        </div>
        <div className="right-nav-bottom">
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/payment" activeClassName="active">Payment</NavLink>
            <NavLink to="/amenities" activeClassName="active">Amenities</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </div>
    </div>
);