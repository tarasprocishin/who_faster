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
            isWarning: false,
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
        this.setState({play: true, isWarning: false}) 
        :this.setState({isWarning: true});
        
    }



    handleSubmit = (event) => {
        this.getPointForWinn(this.state.gameMode.field);
        this.isEmptyForm();
        
        event.preventDefault()
    }

    render() {
        let { gameMode, complexity, playerName, pointForWinn, play, isWarning } = this.state;
        const warning = isWarning ? 
       <p>Pleas, put your name and choose mode game </p>
        : null  
        console.log(play)
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
                />

            </div>
        )
    }

}


export default GameField;