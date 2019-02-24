export const RECEIVE_GUEST = "RECEIVE_GUEST";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";

import * as APIUtil from '../util/booking_api_util';

// export const receiveGuest = guest => ({
//     type: RECEIVE_GUEST,
//     guest
// });

export const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
});


// export const createGuest = (guest) => dispatch => {
//     APIUtil.postGuest(guest)
//         .then(guest => dispatch(receiveGuest(guest)));
// };


export const submitGuestBooking = (formGuest, formBooking) => dispatch => {
    APIUtil.postGuest(formGuest)
        .then(guest => APIUtil.postBooking(formBooking, guest.id))
        .then(booking => dispatch(receiveBooking(booking)));
};




// export const createBooking = (booking) => dispatch => {
//     APIUtil.postBooking(booking)
//         .then(booking =>));
// };

// export const submit


