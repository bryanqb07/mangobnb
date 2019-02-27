// export function getCurrentDate(separator = '') {
//     let newDate = new Date();
//     // let date = newDate.getDate();
//     // let month = newDate.getMonth() + 1;
//     // let year = newDate.getFullYear();
//     // return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
//     return newDate;
// }


// export const getTomorrowsDate = (separator = '') => {

//     let newDate = new Date();
//     newDate.setDate(newDate.getDate() + 1);
//     // return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
//     return newDate;
// };


export const getFollowingDate = (date) => {
    let nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate(date) + 1);
    return nextDay;
};

export const getCurrentDateStr = (date, separator = '/') => {
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${day}`;
};

export const getTimeValues = () => {
    let AM = ["12:00 AM"];
    let PM = ["12:00 PM"];
    for (let i = 1; i <= 11; i++) {
        if (i < 10) {
            AM.push(`0${i}:00 AM`);
            PM.push(`0${i}:00 PM`);
        } else {
            AM.push(`${i}:00 AM`);
            PM.push(`${i}:00 PM`);
        }
    }
    return PM.concat(AM); // get full time list with 12:00PM base

};

export const getNumNights = (date1, date2) => (
    date2.getDate() - date1.getDate()
);

// export const timeFormatter = date => {
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     return `${hours}:${minutes}`;
// };

export const timeFormatter = dateTime =>{
    var hr = dateTime.getHours();
    var ampm = "AM";
    if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    }

    if(hr % 12 < 10){
        return `0${hr}:00 ${ampm}`;
    }else{
        return `${hr}:00 ${ampm}`;
    }
     
};

// export const dateFormatter = date => {
//     let dayNum = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
// };

    // let date = newDate.getDate();
    // let month = newDate.getMonth() + 1;
    // let year = newDate.getFullYear();
    // return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`