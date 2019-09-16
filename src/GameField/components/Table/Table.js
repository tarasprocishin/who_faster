import React from 'react';
import Counter from './Counter/Counter'
import Td from './Td/Td';
import uuid from 'uuid/v4';
import './Table.css';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pointsComputer: 0,
            pointsPlayer: 0,
            table: [],
        }
    }

    addPoint = (event) => {
        let {pointsComputer, pointsPlayer } = this.state;
        const { play } = this.props;
        if(play){
            pointsPlayer += 1;
            let elId = +event.target.id // + приводить значення до числа
            this.setState({pointsPlayer: pointsPlayer, chooseElId: elId});
            
        }
    }

    // getkRandomTD = () => {
       
    //     let td = Math.floor(Math.random() * Math.floor(max));
        
    // }

  chunckArray = (arr, chunkSize) => {
        let index = 0;
        let arrlength = arr.length;
        let tempArr = [];
 
        for (index = 0; index < arrlength; index += chunkSize) {
           let myChynk = arr.slice(index, index + chunkSize);
           tempArr.push(<tr key={uuid()}>{myChynk}</tr>);
        }
 
        return tempArr;
    }


    createPlaseholderTable = (number) => {
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
        const { gameMode, pointForWinn, play, table, chooseTd, usedTds  } = this.props;
        const { pointsComputer, pointsPlayer } = this.state;
        let htmlTable = [];
        if(play){
            let arrWithTd = table.map((el, index) => {
                return  <Td
                          key={index}
                          id={index} 
                          chooseTd={chooseTd}
                          usedTds={usedTds}
                          >{el}</Td>
              })
    
             htmlTable = this.chunckArray(arrWithTd, gameMode.field); 
        }
   
        return (
            <div>
                {play ?
                 <Counter
                    pointsComputer={pointsComputer}
                    pointsPlayer={pointsPlayer}
                    pointForWinn={pointForWinn}
                    />
                    : null }
 
                 {play ? 
                   <table>
                     <tbody>
                        {htmlTable}
                        </tbody>
                    </table>
                : this.createPlaseholderTable(gameMode.field)}
            </div>
        )
    }

}


export default Table;