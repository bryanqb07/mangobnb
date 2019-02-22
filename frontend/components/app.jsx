import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './navbar/navbar';
import HomePage from './home/home_page';


export default() => (
    <div>
        <header>
            <div className="left-nav">
                <h1>MangoBnb</h1>
                <img src="" alt="image"/>
            </div>
            <div className="right-nav">
                <Route path="/" component={NavBar} />
                <Route exact path="/" component={HomePage} />
            </div>
        </header>
    </div>
)
