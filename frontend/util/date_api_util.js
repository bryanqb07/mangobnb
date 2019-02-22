export function getCurrentDate(separator = '') {
    let newDate = new Date();
    // let date = newDate.getDate();
    // let month = newDate.getMonth() + 1;
    // let year = newDate.getFullYear();
    // return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    return newDate;
}


export function getTomorrowsDate(separator = '') {

    let newDate = new Date();
    newDate.setDate(newDate.getDate() + 1);
    // return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    return newDate;
}

export const getCurrentDateStr = (date,separator = '/') => {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${day}`;
};