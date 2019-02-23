import * as APIUtil from '../util/room_api_util';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";

export const receiveRooms = rooms => ({
    type: RECEIVE_ROOMS,
    rooms
});

export const getRooms = () => dispatch => {
    APIUtil.getRooms()
        .then(rooms => dispatch(receiveRooms(rooms)));
};