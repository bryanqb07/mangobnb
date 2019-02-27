import { RECEIVE_BOOKING, CLEAR_BOOKING } from '../actions/booking_action';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKING:
            return action.booking.guest;
        case CLEAR_BOOKING:
            return {};
        default:
            return state;
    }
};

