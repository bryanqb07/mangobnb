// import merge from 'lodash/merge';

import { RECEIVE_ROOMS } from '../actions/room_action';
import { CLEAR_BOOKING } from '../actions/booking_action';


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ROOMS:
            return action.rooms;    
        case CLEAR_BOOKING:
            return {};
        default:
            return state;
    }
};