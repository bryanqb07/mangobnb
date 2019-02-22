import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import HomePage from './home/home_page';


export default() => (
    <div className="content-wrapper">
        <header>
            <Route path="/" component={NavBarContainer} />
        </header>
        <Route exact path="/" component={HomePage}/>
    </div>
)
