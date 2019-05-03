export const fetchBookings = (start_date, end_date) => (
    $.ajax({
        method: 'GET',
        url: 'api/bookings/',
        data: { 
                start_date,  
                end_date
            }
    })
);


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

export const destroyBooking = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/bookings/${id}`,
        data: { id }
    })
);