import React from 'react';
import Table from './Table/Table';
import Counter from './Counter/Counter'
import uuid from 'uuid/v4';
import './Field.css';

class Field extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            table: [],
            pointsComputer: 0,
            pointsPlayer: 0,
        }
    }

    // addPoint = (event) => {
    //     let {pointsComputer, pointsPlayer } = this.state;
    //     const { play } = this.props;
    //     if(play){
    //         pointsPlayer += 1;
    //         let elId = +event.target.id // + приводить значення до числа
    //         this.setState({pointsPlayer: pointsPlayer, chooseElId: elId});
            
    //     }
    // }

    checkRandomTD = () => {

    }

    createTable = (number) => {
        const table = [];
        let id = 0;
        for (let i = 0; i < number; i++) {
            let tr = [];
            for (let j = 0; j < number; j++) {
                tr.push(<td key={id}></td> )
                id++;
            }
            table.push(<tr key={uuid()}>{tr}</tr>)
        }

        return <table><tbody>{table}</tbody></table>;
    }

    
 
    render() {
        const { gameMode, pointForWinn, play, table } = this.props;
        const { pointsComputer, pointsPlayer } = this.state;
        // console.log(table)


           
        return (
            <div>
                {play ?
                <>
                 <Counter
                    pointsComputer={pointsComputer}
                    pointsPlayer={pointsPlayer}
                    pointForWinn={pointForWinn}
                    />
                <Table
                    table={table}
                    field={gameMode.field}
                />
                </>
                : this.createTable(gameMode.field) }
           
            
            </div>
        )
    }

}


export default Field;