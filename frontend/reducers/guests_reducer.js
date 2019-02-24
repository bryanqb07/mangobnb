import { RECEIVE_GUEST } from '../actions/booking_action';

export default (state = {}, action) => {
    Object.freeze(state)
    if (action.type === RECEIVE_GUEST) {
        window.guest_id = action.guest.id; // bootstrapping for booking
        return action.guest;
    } else {
        return state;
    }
};

