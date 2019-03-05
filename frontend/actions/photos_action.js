export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const START_LOADING_HOME = "START_LOADING_HOME";
import * as APIUtil from '../util/photos_api_util';

const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});

export const homePageLoading = () =>({
    type: START_LOADING_HOME
});




export const getPhotos =  () => dispatch => {
    dispatch(homePageLoading());
    return APIUtil.getPhotos()
        .then(photos => dispatch(receivePhotos(photos)));
};