import * as APIUtil from '../util/room_api_util';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";


const receiveRooms = rooms => ({
    type: RECEIVE_ROOMS,
    rooms
});

export const getRooms = (date) => dispatch => {
    APIUtil.getRooms(date)
        .then(rooms => dispatch(receiveRooms(rooms)));
};