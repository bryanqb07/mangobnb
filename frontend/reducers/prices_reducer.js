import merge from 'lodash/merge';

import { RECEIVE_PRICES, RECEIVE_PRICE } from '../actions/price_action';
import { CLEAR_BOOKING } from '../actions/booking_action';


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRICES:
            return action.prices;
        case RECEIVE_PRICE:
            return merge({}, state, action.price);
        case CLEAR_BOOKING:
            return {};
        default:
            return state;
    }
};