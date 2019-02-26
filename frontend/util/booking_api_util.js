export const postGuest = guest => (
    $.ajax({
        method: 'POST',
        url: 'api/guests/',
        data: { guest }
    })
);


export const postBooking = (booking) => (
    $.ajax({
        method: 'POST',
        url: 'api/bookings/',
        data: { booking }
    })
);