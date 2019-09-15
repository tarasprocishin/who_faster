import React from 'react';
import Td from './Td/Td';
import Counter from './Counter/Counter'
import uuid from 'uuid/v4';
import './Field.css';

class Field extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pointsComputer: 0,
            pointsPlayer: 0,
        }

     
    }


    createTable = (number) => {
      
        let table = [];
        for (let i = 0; i < number; i++) {
            let tr = [];
            for (let i = 0; i < number; i++) {
                tr.push(
                < Td 
                key={uuid()}
                
                />
                )
            }
            table.push(<tr key={uuid()}>{tr}</tr>)
        }
        return <tbody>{table}</tbody>;
    }

    render() {
        let { gameMode, pointForWinn, play } = this.props;
        let { pointsComputer, pointsPlayer  } = this.state;

   
        console.log(play)
        return (
            <div>
                {play ?
                 <Counter
                    pointsComputer={pointsComputer}
                    pointsPlayer={pointsPlayer}
                    pointForWinn={pointForWinn}
                />
                : null }
           
                <table>
                    {this.createTable(gameMode.field)}
                </table>
            </div>
        )
    }
    // console.log(gameMode)

}


export default Field;