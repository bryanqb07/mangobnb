export const getRooms = (dates) => (
    $.ajax({
        method: 'GET',
        url: 'api/rooms/',
        data: { dates }
    })
); 