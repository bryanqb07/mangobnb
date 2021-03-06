import merge from "lodash/merge";

import { RECEIVE_BOOKING, RECEIVE_BOOKINGS, CLEAR_BOOKING, DELETE_BOOKING } from '../actions/booking_action';


export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_BOOKINGS:
            return action.bookings;
        case RECEIVE_BOOKING:
            return action.booking;
        case DELETE_BOOKING:
            let new_state = Object.assign(state, {});
            delete new_state[action.id];
            return new_state;
        case CLEAR_BOOKING:
            return {};
        default:
            return state;
    }
};

