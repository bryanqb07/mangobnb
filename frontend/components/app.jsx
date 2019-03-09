import React from 'react';
import { Route,
        Switch
        } from 'react-router-dom';
import NavBar from './navbar/navbar';
import HomePage from './home/home_page';
import BookingIndexContainer from './booking/booking_index_container';
import ConfirmationContainer from './confirmation/confirmation_container';

export default() => (
    <div className="content-wrapper">
        <header>
            <Route exact path="/" component={NavBar} />
        </header>
        <Switch>
            {/* //<AuthRoute exact path="/login" component={LoginFormContainer} />
            //<AuthRoute exact path="/signup" component={SignupFormContainer} />
            // <ProtectedRoute exact path="/admin" component={AdminPageContainer} /> */}
            <Route exact path="/" component={HomePage}/>
            <Route path="/booking" component={BookingIndexContainer} />
            <Route path="/confirmation" component={ConfirmationContainer} />
        </Switch>
    </div>
)
