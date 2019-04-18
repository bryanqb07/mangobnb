import React from 'react';
import { Route,
        Switch
        } from 'react-router-dom';
import NavBar from './navbar/navbar';
import HomePage from './home/home_page';
import BookingIndexContainer from './booking/booking_index_container';
import ConfirmationContainer from './confirmation/confirmation_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';


export default () => (
  <div className="content-wrapper">
    <header>
      <Route exact path="/" component={NavBar} />
    </header>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <AuthRoute exact path="/admin" component={LoginFormContainer} />
      {/* <AuthRoute exact path="/signup" component={SignupFormContainer} />  */}
      {/* <ProtectedRoute exact path="/admin" component={AdminPageContainer} /> */}
      <Route path="/booking" component={BookingIndexContainer} />
      <Route path="/confirmation" component={ConfirmationContainer} />
    </Switch>
  </div>
);
