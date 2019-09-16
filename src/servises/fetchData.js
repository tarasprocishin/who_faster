
const URL = 'http://starnavi-frontend-test-task.herokuapp.com';

function getData(target) {
    return fetch(URL + target)
    .then(response => response.json());
}

function getCurrentDate() {
    let d = new Date;

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
    let currDate = `${currHours}: ${currMinuts}; ${d.getDate()} ${ months[d.getMonth()]} ${d.getFullYear()}`;
    return currDate;
}

function fetchWinner(winner) {

   let date = getCurrentDate();
  
    let content = {
        date: date,
        winner: winner,
    }

    fetch(URL + '/winners', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      })
}


export  {getData, fetchWinner};