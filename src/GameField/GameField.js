import React from 'react';
import Form from './components/Form/Form';
import Field from './components/Field/Field';
// import Modal from './components/Modal/Modal';



class GameField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            complexity: '',
            gameMode: this.props.gameModes.easyMode,
            play: false,
            playerName: '',
            isWarnning: false,
            table: [],
        }
    }


    changeMode = (complexity) => {
        let gameMode = {};

            switch (complexity) {
                case 'easy':
                    gameMode = this.props.gameModes.easyMode;
                    break;
                case 'normal':
                    gameMode = this.props.gameModes.normalMode;
                    break;
                case 'hard':
                    gameMode = this.props.gameModes.hardMode;
                    break;
                default:
                    gameMode = this.props.gameModes.easyMode;
            }

          return gameMode;

    }

    createTable = () => {
        let  field = this.state.gameMode.field;
        const table = [];
        for(let i = 0; i < Math.pow(field, 2); i++){
            table.push(<td key={i}></td>)
        }
        this.setState({table:table});
    }

    handleChangeMode = (event) => {
        let gameMode = this.changeMode( event.target.value );
        this.setState({ complexity: event.target.value, gameMode: gameMode }); 
    }

    handleChangeName = (event) => {
        this.setState({ playerName: event.target.value })
    }

    getPointForWinn = (number) => {
        let point = Math.pow(number, 2)/2;
        this.setState({pointForWinn: point});
    }

    restarGame = (event) => {
        event.target[0].disabled = false;
        event.target[1].disabled = false; 
        this.setState({play: false})
    }

    isEmptyForm = (event) => {
        let { complexity, playerName } = this.state;
        if(complexity && playerName){
            event.target[0].disabled = true;
            event.target[1].disabled = true; 
            this.setState({play: true, isWarnning: false}) 
        }else{
            this.setState({isWarnning: true});
        }    
    }

    handleSubmit = (event) => {
        this.getPointForWinn(this.state.gameMode.field);
        this.isEmptyForm(event);
        if(this.state.play) this.restarGame(event);
        this.createTable();
        event.preventDefault()
    }

    render() {
        let { gameMode, complexity, playerName, pointForWinn, play, isWarnning, table } = this.state;
        const warning = isWarnning ? 
       <p>Pleas, put your name and choose mode game </p>
        : null  
    
        return (
            <div>
                <h1>GameField</h1>
                <Form
                    complexity={complexity}
                    playerName={playerName}
                    play={play}
                    handleChangeMode={this.handleChangeMode}
                    handleChangeName={this.handleChangeName}
                    handleSubmit={this.handleSubmit}
                />
                 {warning}
                <Field
                    gameMode={gameMode}
                    pointForWinn={pointForWinn}
                    play={play}
                    table={table}
                />

            </div>
        )
    }

}


export default GameField;