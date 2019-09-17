import getCurrentDate from './getCurrentData';

const URL = 'http://starnavi-frontend-test-task.herokuapp.com';

function getData(target) {
    return fetch(URL + target)
        .then(response => response.json());
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

export { getData, fetchWinner };