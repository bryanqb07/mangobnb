export const getRooms = () => (
    $.ajax({
        method: 'GET',
        url: 'api/rooms/'
    })
); 