import { RECEIVE_BOOKING } from '../actions/booking_action';

export default (state = {}, action) => {
    Object.freeze(state)
    if(action.type === RECEIVE_BOOKING){
        return action.booking;
    }else{
        return state;
    }
};

