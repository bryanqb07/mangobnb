import merge from 'lodash/merge';

import { START_LOADING_SEARCH } from '../actions/price_action';
import { RECEIVE_ROOMS } from '../actions/room_action';
import { START_LOADING_CONFIRMATION, RECEIVE_BOOKING } from '../actions/booking_action';
import { RECEIVE_ERRORS } from '../actions/error_action';
import { START_LOADING_HOME, RECEIVE_PHOTOS } from '../actions/photos_action';


const initialState = {
    homePageLoading: false,
    searchResultsLoading: false,
    confirmationLoading: false
};

export default (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case START_LOADING_HOME:
            return merge({}, state, { homePageLoading: true });
        case START_LOADING_SEARCH:
            return merge({}, state, { searchResultsLoading: true});
        case START_LOADING_CONFIRMATION:
            return merge({}, state, { confirmationLoading: true });
        case RECEIVE_ROOMS:
            return {};
        case RECEIVE_ERRORS:
            return {};
        case RECEIVE_BOOKING:
            return {};
        case RECEIVE_PHOTOS:
            return {};
        default:
            return state;
    }
};

