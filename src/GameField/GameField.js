import React from 'react';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

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
            chooseTd: null,
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

    changeTd = (event) => {
        // let table = this.state.table
        // let td = table.map(el => {

        //     if(el.id === event.target.id){
        //       return  el.style.background = "red"
        //     }
        //     return el
        // })
        event.target.style.background = "red";
        console.dir(event.target);
    //    this.setState({table: td})
    }

    // getTd = () => {
    //     let { table } = this.state;
    //     this.setState({style: 'red'})
    //     console.log(table[0])

    // }



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
        this.createTable()
        if(this.state.play) this.restarGame(event);
        setTimeout(() => {
            this.chooseItem()
        }, 1000);
        event.preventDefault()
    }

    createTable = () => {
        let  field = this.state.gameMode.field;
        const table = [];
        for(let i = 0; i < Math.pow(field, 2); i++){
            table.push('')
        }
        this.setState({table:table});
    }

    chooseItem = () => {
        let tabel = this.state.table;
        this.setState({chooseTd: 0})
    }

    render() {
        let { chooseTd, style, gameMode, complexity, playerName, pointForWinn, play, isWarnning, table } = this.state;
      
        const warning = isWarnning ? 
            <p>Pleas, put your name and choose mode game </p>
            : null;
  


    
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
                <Table
                    gameMode={gameMode}
                    pointForWinn={pointForWinn}
                    play={play}
                    table={table}
                    chooseTd={chooseTd}
                />

            </div>
        )
    }

}


export default GameField;