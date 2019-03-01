export const getPhotos = () => (
    $.ajax({
        method: 'GET',
        url: `api/photos/`,
    })
); 