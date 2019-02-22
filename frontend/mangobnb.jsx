import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// WINDOW TESTING ///////

// import { getRooms } from './util/room_api_util';
// window.getRooms = getRooms;

import { getRooms } from './actions/room_action';
window.getRooms = getRooms;


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