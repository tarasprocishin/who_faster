
function changeMode(complexity, gameModes ){
    let gameMode = {};

        switch (complexity) {
            case 'easy':
                gameMode = gameModes.easyMode;
                break;
            case 'normal':
                gameMode = gameModes.normalMode;
                break;
            case 'hard':
                gameMode = gameModes.hardMode;
                break;
            default:
                gameMode = gameModes.easyMode;
        }

      return gameMode;

}

export default changeMode;