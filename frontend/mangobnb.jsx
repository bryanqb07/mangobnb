import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// WINDOW TESTING ///////

// import { getRooms } from './util/room_api_util';
// window.getRooms = getRooms;

import { getRooms } from './actions/room_action';
window.getRooms = getRooms;


import { getCurrentDateStr } from './util/date_api_util';
window.getCurrentDateStr = getCurrentDateStr;
// window.getCurrentDate = getCurrentDate;
// window.getTomorrowsDate = getTomorrowsDate;
// window.getTimeValues = getTimeValues;


import { postGuest, postBooking } from './util/booking_api_util';

window.postGuest = postGuest;
window.postBooking = postBooking;

window.testGuest = {
    name: "Bryan L",
    email: "b@mail.com",
    gender: "M"
};

window.testBooking = {
    num_guests: 1,
    start_date: "Apr 15 2019",
    end_date: "Apr 20 2019",
    guest_id: 11,
    room_id: 1,
    comments: "top-bunk please"
};


// import { getPrices } from './util/price_api_util';

import { getPrices } from './actions/price_action';
import { getAvgPrice } from './reducers/selectors';

window.getAvgPrice = getAvgPrice;

window.getPrices = getPrices;

window.testDate = {
    start_date: "Mar 1 2019",
    end_date: "Mar 4 2019"
};

/////////////////////////

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");
    const store = configureStore();
    // WINDOW TESTING ///////

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    /////////////////////////

    ReactDOM.render(<Root store={store}/>, root);
});