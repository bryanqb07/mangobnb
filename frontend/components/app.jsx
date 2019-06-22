import React from 'react';
import { Route,
        Switch
        } from 'react-router-dom';
import NavBar from './navbar/navbar';
import HomePageContainer from './home/home_container';
import BookingIndexContainer from './booking/booking_index_container';
import ConfirmationContainer from './confirmation/confirmation_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './forms/login_form_container';
import ProfileContainer from './profile/profile_container';


export default () => (
  <div className="content-wrapper">
    <header>
      <Route path="https://mangobnb.herokuapp.com/" component={NavBar} />
    </header>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <AuthRoute exact path="/admin" component={LoginFormContainer} />
      <ProtectedRoute path="/profile" component={ProfileContainer} />
      <Route path="/booking" component={BookingIndexContainer} />
      <Route path="/confirmation" component={ConfirmationContainer} />
    </Switch>
  </div>
);
