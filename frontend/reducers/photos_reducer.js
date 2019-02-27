import { RECEIVE_PHOTOS } from '../actions/photos_action';

export default (state = [], action) => {
    Object.freeze(state);
    if (action.type === RECEIVE_PHOTOS) {
        return action.photos;
    } else {
        return state;
    }
};