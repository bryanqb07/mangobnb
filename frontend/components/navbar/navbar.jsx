import React from 'react';
import { NavLink } from 'react-router-dom';

export default() => (
    <div className="nav-bar">
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/payment" activeClassName="active">Payment</NavLink>
        <NavLink to="/amenities" activeClassName="active">Amenities</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </div>
);