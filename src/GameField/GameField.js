import React from 'react';
import ReactDOM from 'react-dom';
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
            numbersComputer: 0,
            numbersPlayer: 0,
            play: false,
            isWarnning: false,
        }
    }


    changeMode = (complexity) => {
        let gameMode = {};

        this.setState(() => {
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

            return { gameMode: gameMode }
        })
    }



    handleChangeMode = (event) => {
        this.changeMode( event.target.value );
        this.setState({ complexity: event.target.value });
    }

    handleChangeName = (event) => {
        this.setState({ playerName: event.target.value })
    }

    getPointForWinn = (number) => {
        let point = Math.pow(number, 2)/2;
        this.setState({pointForWinn: point});
    }

    isEmptyForm = () => {
        let { complexity, playerName } = this.state;
        complexity && playerName ? 
        this.setState({play: true, isWarnning: false}) 
        :this.setState({isWarnning: true});
        
    }



    handleSubmit = (event) => {
        this.getPointForWinn(this.state.gameMode.field);
        this.isEmptyForm();
        
        event.preventDefault()
    }

    render() {
        let { gameMode, complexity, playerName, pointForWinn, play, isWarnning } = this.state;
        const worning = isWarnning ? 
       <p>Pleas, put your name and choose mode game </p>
        : null  
        console.log(isWarnning)
        return (
            <div>
                <h1>GameField</h1>
                <Form
                    complexity={complexity}
                    playerName={playerName}
                    handleChangeMode={this.handleChangeMode}
                    handleChangeName={this.handleChangeName}
                    handleSubmit={this.handleSubmit}
                />
            {worning}
                <Field
                    gameMode={gameMode}
                    pointForWinn={pointForWinn}
                />

            </div>
        )
    }

}


export default GameField;