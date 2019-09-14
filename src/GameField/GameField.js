import React from 'react';
import Form from './components/Form/Form';
import Field from './components/Field/Field';


class GameField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            complexity: 'select',
            gameMode: this.props.gameModes.easyMode,
            play: false,
            playerName: '',
            numbersComputer: 0,
            numbersPlayer: 0
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

    handleChange = (event) => {
        this.changeMode( event.target.value )
        this.setState({ complexity: event.target.value })
    }

    render() {
        let { gameModes } = this.props;
        let { gameMode, complexity } = this.state;



        return (
            <div>
                <h1>GameField</h1>
                <Form
                    complexity={complexity}
                    handleChange={this.handleChange}
                />
                <Field
                    gameMode={gameMode}
                />

            </div>
        )
    }

}


export default GameField;