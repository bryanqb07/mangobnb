export const getPrices = (dates) => (
    $.ajax({
        method: 'GET',
        url: `api/prices/`,
        data: { dates }
    })
); 

export const postPrice = (price) => (
    $.ajax({
        method: 'POST',
        url: `api/prices/`,
        data: { price }
    })
); 