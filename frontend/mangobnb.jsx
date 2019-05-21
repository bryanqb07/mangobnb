import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// WINDOW TESTING ///////

// import { getRooms } from './util/room_api_util';
// window.getRooms = getRooms;

import { getPhotos } from './actions/photos_action';

window.getPhotos = getPhotos;

import { getRooms } from './actions/room_action';
window.getRooms = getRooms;


import { getCurrentDateStr, getTimeValues } from './util/date_api_util';
window.getCurrentDateStr = getCurrentDateStr;
// window.getCurrentDate = getCurrentDate;
// window.getTomorrowsDate = getTomorrowsDate;
window.getTimeValues = getTimeValues;


import { postGuest, postBooking, fetchBookings, destroyBooking } from './util/booking_api_util';

import { postUser } from './util/user_api_util';
import { deleteBooking } from './actions/booking_action';

window.destroyBooking = destroyBooking;
window.deleteBooking = deleteBooking;

window.postGuest = postGuest;
window.postBooking = postBooking;
window.postUser = postUser;
// window.fetchBookings = fetchBookings;
// window.receiveBookings = receiveBookings;
// window.fetchGuestBookings = fetchGuestBookings;


window.testGuest = {
    name: "Bryan L",
    email: "b@mail.com",
    gender: "M"
};


window.testUser = {
  email: "bml312@nyu.edu",
  username: "bryanqb07",
  password: "finger69"
};

window.testBooking = {
    num_guests: 1,
    start_date: "Apr 15 2019",
    end_date: "Apr 20 2019",
    guest_id: 11,
    room_id: 1,
    comments: "top-bunk please"
};


import { postPrice } from './util/price_api_util';

import { postPrices } from './actions/price_action';

window.postPrice = postPrice;
window.postPrices = postPrices;

window.testPrice = {
  price_date: "May 05 2019",
  price: 1133,
  room_id: 1
};

window.testPrices = {
  start_date: "May 10 2020",
  end_date: "May 15 2020",
  price: 1234,
  room_id: 1
};

import { getPrices } from './util/price_api_util';
import { getAvgPrice } from './reducers/selectors';

window.getAvgPrice = getAvgPrice;

window.getPrices = getPrices;

window.testDate = {
    start_date: "May 17 2019",
    end_date: "Nov 4 2019"
};


/////////////////////////

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");

    let store;
    if(window.currentUser){
      const preLoadedState = {
        entities: { users: { [window.currentUser.id]: window.currentUser } },
        session: { id: window.currentUser.id }
      };
      store = configureStore(preLoadedState);
    }else{
      store = configureStore();
    }

    // WINDOW TESTING ///////

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    /////////////////////////

    ReactDOM.render(<Root store={store}/>, root);
});
