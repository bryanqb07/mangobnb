import { RECEIVE_ERRORS } from '../actions/error_action';
import { RECEIVE_GUEST, RECEIVE_BOOKING, CLEAR_BOOKING } from '../actions/booking_action';


export default (state = {}, action) => {
    Object.freeze(state);

    if(action.type === RECEIVE_ERRORS){
        return action.errors;

    }else if(
        action.type === RECEIVE_GUEST ||
        action.type === RECEIVE_BOOKING ||
        action.type === CLEAR_BOOKING ) {
        return {};
    }
    else{
        return state;
    }
};
