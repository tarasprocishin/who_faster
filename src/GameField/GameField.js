import React from 'react';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Counter from './components/Counter/Counter';
import { fetchWinner }  from '../servises/fetchData';

// import Modal from './components/Modal/Modal';



class GameField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            complexity: '',
            gameMode: this.props.gameModes.easyMode,
            play: false,
            playerName: '',
            table: [],
            isWarnning: false,
            chooseTd: null,
            useTds: [],
            cliked: [],
            pointsComputer: 0,
            pointsPlayer: 0,
            winner:'',

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

    restarGame = (el) => {
        el[0].disabled = false;
        el[1].disabled = false; 
        this.setState({
            play: false,
            chooseTd: null,
            useTds: [],
            table: [],
            cliked: [],
            pointsComputer: 0,
            pointsPlayer: 0, })
    }

    isEmptyForm = (el) => {
        let { complexity, playerName } = this.state;
        if(complexity && playerName){
            el[0].disabled = true;
            el[1].disabled = true; 
            this.setState({play: true, isWarnning: false}) 
        }else{
            this.setState({isWarnning: true});
        }    
    }

    handleSubmit = (event) => {
        this.getPointForWinn(this.state.gameMode.field);
        this.isEmptyForm(event.target);
        this.createTable()
        if(this.state.play) this.restarGame(event.target);
        this.startGame(event.target)
        event.preventDefault()
    }

    startGame = (form) => {
        let interval = setInterval(() => {
            this.chooseItem(interval); 
            this.addPointComputer(); 
            this.getWinner();
            
            if(this.state.winner){
                fetchWinner(this.state.winner);
                this.restarGame(form);
            }
            
        }, 700);
        
        // this.state.gameMode.delay
    }
    
    createTable = () => {
        let  field = this.state.gameMode.field;
        const table = [];
        for(let i = 0; i < Math.pow(field, 2); i++){
            table.push('')
        }
        this.setState({table:table});
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
      }

    chooseItem = (interval) => {
        let { gameMode, useTds, play, chooseTd } = this.state;
        let maxInt = Math.pow(gameMode.field, 2);
        
        
        this.setState(()=> {
            let useTd = this.getRandomInt(maxInt);

            if(useTds.length === maxInt ){
                return{ chooseTd: null, useTds: useTds.concat(null)}
            } 
            
            for(let i = 0; i < maxInt; i++){
                if(useTds.length === maxInt)return;
                if(useTds.indexOf(useTd) !== -1){
                    useTd=this.getRandomInt(maxInt);
                    continue;
                }
                useTds = useTds.concat(useTd);
                break;   
            }
                console.log(useTds.length)
            if( (useTds.length === maxInt + 1 && !chooseTd) || !play){
                return clearInterval(interval)
            }
            
            
            return{
                chooseTd: useTd,
                useTds: useTds,
            }
        })

      
        
    }
    
    
    
    addPointComputer = ()=>{
        let { useTds, cliked } = this.state;
        let points = useTds.length - cliked.length - 1;
        this.setState({pointsComputer: points});
    }


    addPoint = (event) => {
        let { pointsPlayer, cliked, chooseTd } = this.state;
        let Id = +event.target.id // + приводить значення до числа
        if(cliked[cliked.length - 1] === Id)return;
        if(chooseTd === Id ){
            cliked = cliked.concat(Id);
            pointsPlayer += 1;
            this.setState({pointsPlayer: pointsPlayer, cliked: cliked });
            
        }

    }

    getWinner = () => {
       let {pointsComputer, pointsPlayer, pointForWinn} = this.state;
       let isWinner;
        if(pointsComputer > pointForWinn ){
            isWinner = 'Computer';
        }else if(pointsPlayer === pointsComputer === pointForWinn){
            isWinner = "A draw";
        }else if(pointsPlayer > pointForWinn){
            isWinner = "Player";
        }

        this.setState({winner: isWinner})
      
    }



    render() {
        let { 
            useTds, 
            chooseTd, 
            gameMode, 
            complexity, 
            playerName, 
            pointForWinn, 
            play, 
            isWarnning, 
            table,
            cliked,
            pointsComputer,
            pointsPlayer,
            winner } = this.state;
      
        const warning = isWarnning ? 
            <p>Pleas, put your name and choose mode game </p>
            : null;

        // const winnerAlert = winner ? <div>{winner}</div>:null;
        
            // console.log(useTds)

    
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

                 {play ?
                 <Counter
                    pointsComputer={pointsComputer}
                    pointsPlayer={pointsPlayer}
                    pointForWinn={pointForWinn}
                    />
                    : null }
                    {/* {winnerAlert} */}

                <Table
                    gameMode={gameMode}
                    pointForWinn={pointForWinn}
                    play={play}
                    table={table}
                    chooseTd={chooseTd}
                    useTds={useTds}
                    addPoint={this.addPoint}
                    cliked={cliked}
                    pointsComputer={pointsComputer}
                    pointsPlayer={pointsPlayer}
                />

            </div>
        )
    }

}


export default GameField;