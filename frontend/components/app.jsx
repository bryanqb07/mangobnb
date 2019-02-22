import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './navbar/navbar';


export default() => (
    <div>
        <header>
            <div className="left-nav">
                <h1>MangoBnb</h1>
                <img src="" alt="image"/>
            </div>
            
            <Route path="/" component={NavBar} />
        </header>
    </div>
)
