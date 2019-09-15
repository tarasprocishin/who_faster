import React from 'react';

import Td from './Td/Td';
import uuid from 'uuid/v4';
import './Field.css';

class Field extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            whoTookPoint: null,
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
                < Td key={uuid()}/>
                )
            }
            table.push(<tr key={uuid()}>{tr}</tr>)
        }
        return <tbody>{table}</tbody>;
    }

    render() {
        let { gameMode, pointForWinn } = this.props;
        let { whoTookPoint,   } = this.state;
   
        console.log(pointForWinn)
        return (
            <div>
                <p>The point is taken: {whoTookPoint}</p>
                <table>
                    {this.createTable(gameMode.field)}
                </table>
            </div>
        )
    }
    // console.log(gameMode)

}


export default Field;