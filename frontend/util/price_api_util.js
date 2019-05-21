export const getPrices = (dates) => (
    $.ajax({
        method: 'GET',
        url: `api/prices/`,
        data: { dates }
    })
); 

export const postPrices = (price) => (
    $.ajax({
        method: 'POST',
        url: `api/prices/`,
        data: { price }
    })
); 

export const postPrice = (price) => (
    $.ajax({
        method: 'POST',
        url: `api/prices/`,
        data: { price }
    })
); 