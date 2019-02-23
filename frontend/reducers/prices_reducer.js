import merge from 'lodash/merge';

import { RECEIVE_PRICES } from '../actions/price_action';


export default (state = {}, action) => {
    Object.freeze(state);
    if (action.type === RECEIVE_PRICES) {
        return action.prices;
    } else {
        return state;
    }
};