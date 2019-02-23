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

export const getTimeValues = () => {
    let AM = ["12:00 AM"];
    let PM = ["12:00 PM"];
    for(let i = 1; i <= 11; i++){
        if(i < 10){
            AM.push(`0${i}:00 AM`);
            PM.push(`0${i}:00 PM`);
        }else{
            AM.push(`${i}:00 AM`);
            PM.push(`${i}:00 PM`);
        }
    }
    return AM.concat(PM);
};