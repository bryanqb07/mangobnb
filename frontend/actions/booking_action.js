import { receiveBookingErrors } from './error_action';
export const RECEIVE_GUEST = "RECEIVE_GUEST";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const CLEAR_BOOKING = "CLEAR_BOOKING";
export const DELETE_BOOKING = "DELETE_BOOKING";
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

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const deleteBooking = (id) => ({
    type: DELETE_BOOKING,
    id
});


export const clearBooking = () => ({
    type: CLEAR_BOOKING
});


export const startLoadingConfirmation = () => ({
    type: START_LOADING_CONFIRMATION
});

export const destroyBooking = id => dispatch => {
    APIUtil.destroyBooking.then( () => dispatch(deleteBooking(id)));
};

export const submitGuestBooking = (formGuest, formBooking) => dispatch => {
    dispatch(startLoadingConfirmation());
    return APIUtil.postGuest(formGuest)
        .then(guest => { //successful user creation
            formBooking.guest_id = guest.id;
            return APIUtil.postBooking(formBooking).then(
                booking => dispatch(receiveBooking(booking)),
                errors => dispatch(receiveBookingErrors(errors.responseJSON))
            );
        },
        errors => dispatch(receiveBookingErrors(errors.responseJSON)));
};

export const fetchBookings = (start_date, end_date) => dispatch => {
    APIUtil.fetchBookings(start_date, end_date).then(
            bookings => dispatch(receiveBookings(bookings)),
            errors => dispatch(receiveBookingErrors(errors.responseJSON))
        );
};





