export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveBookingErrors = errors => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
});



