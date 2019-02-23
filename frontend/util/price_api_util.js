export const getPrices = (dates) => (
    $.ajax({
        method: 'GET',
        url: 'api/prices/',
        data: { dates }
    })
); 