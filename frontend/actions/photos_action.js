export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});