import React from 'react';
import { Route,
        Switch
        } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import HomePage from './home/home_page';
import BookingIndexContainer from './booking/booking_index_container';
import ConfirmationContainer from './confirmation/confirmation_container';

export default() => (
    <div className="content-wrapper">
        <header>
            <Route path="/" component={NavBarContainer} />
        </header>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/booking" component={BookingIndexContainer} />
            <Route path="/confirmation" component={ConfirmationContainer} />
        </Switch>
    </div>
)
