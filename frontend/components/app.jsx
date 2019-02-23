import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import HomePage from './home/home_page';
import Map from './map/map';
import BookingForm from './booking/booking_form';

export default() => (
    <div className="content-wrapper">
        <header>
            <Route path="/" component={NavBarContainer} />
        </header>
        <Route exact path="/" component={HomePage}/>
        <Route path="/booking" component={BookingForm} />
    </div>
)
