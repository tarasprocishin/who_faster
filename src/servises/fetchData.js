
const URL = 'http://starnavi-frontend-test-task.herokuapp.com';

function getData(target) {
    return fetch(URL + target)
    .then(response => response.json());
}


export default getData;