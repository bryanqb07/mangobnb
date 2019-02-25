import { RECEIVE_GUEST, CLEAR_BOOKING } from '../actions/booking_action';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_GUEST:
            return action.guest;
        case CLEAR_BOOKING:
            return {};
        default:
            return state;
    }
};

