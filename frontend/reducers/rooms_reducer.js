import merge from 'lodash/merge';

import { RECEIVE_ROOMS } from '../actions/room_action';


export default (state = {}, action) => {
    Object.freeze(state);
    if(action.type === RECEIVE_ROOMS){
        return action.rooms;
    }else{
        return state;
    }
};