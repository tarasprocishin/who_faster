function getCurrentDate() {
    let d = new Date();

    let months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ];
    let currMinuts = `${d.getMinutes() < 10 ? '0' + d.getMinutes(): d.getMinutes() }`
    let currHours = `${d.getHours() < 10 ? '0' + d.getHours(): d.getHours() }`
    let currDate = `${currHours}:${currMinuts}; ${d.getDate()} ${ months[d.getMonth()]} ${d.getFullYear()}`;
    return currDate;
}

export default getCurrentDate;