export const postGuest = guest => (
    $.ajax({
        method: 'POST',
        url: 'api/guests/',
        data: { guest }
    })
);

export const postBooking = (formBooking, guest_id) => {
    let booking = formBooking;
    booking.guest_id = guest_id;
    return $.ajax({
        method: 'POST',
        url: 'api/bookings/',
        data: { booking }
    });
}; 