import { receiveErrors } from './error_action';

export const RECEIVE_GUEST = "RECEIVE_GUEST";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const CLEAR_BOOKING = "CLEAR_BOOKING";

export const START_LOADING_CONFIRMATION = "START_LOADING_CONFIRMATION";


import * as APIUtil from '../util/booking_api_util';

const receiveGuest = booking => ({
    type: RECEIVE_GUEST,
    guest: booking.guest
});

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
});



export const clearBooking = () => ({
    type: CLEAR_BOOKING
});


export const startLoadingConfirmation = () => ({
    type: START_LOADING_CONFIRMATION
});


// export const createGuest = (formGuest) => dispatch => {
//     APIUtil.postGuest(formGuest).then(guest => {
//         dispatch(receiveGuest(guest));
//         return guest.id;
//     });
// };


export const submitGuestBooking = (formGuest, formBooking) => dispatch => {
    dispatch(startLoadingConfirmation());
    return APIUtil.postGuest(formGuest)
        .then(guest => {
            //dispatch(receiveGuest(guest));
            formBooking.guest_id = guest.id;
            return APIUtil.postBooking(formBooking);
        },
            errors => dispatch(receiveErrors(errors))
        )
        .then(booking => dispatch(receiveBooking(booking)),
            errors => dispatch(receiveErrors(errors))
        );
};

// export const createBooking = (formBooking) => dispatch => {
//     APIUtil.postBooking(formBooking)
//         .then(booking => {
//             dispatch(receiveBooking(booking));
//             return "success";
//         });
// };




