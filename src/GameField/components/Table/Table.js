import React from 'react';
import Counter from '../Counter/Counter'
import Td from './Td/Td';
import uuid from 'uuid/v4';
import './Table.css';

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

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
                tr.push(<td key={id}></td>)
                id++;
            }
            table.push(<tr key={uuid()}>{tr}</tr>)
        }

        return <table><tbody>{table}</tbody></table>;
    }


    render() {
        const {
            gameMode,
            play,
            table,
            chooseTd,
            useTds,
            cliked,
            addPoint } = this.props;

        let htmlTable = [];
        //    console.log(useTds);
        if (play) {
            let arrWithTd = table.map((el, index) => {
                return <Td
                    key={index}
                    id={index}
                    chooseTd={chooseTd}
                    useTds={useTds}
                    cliked={cliked}
                    addPoint={addPoint}
                >{el}</Td>
            })

            htmlTable = this.chunckArray(arrWithTd, gameMode.field);
        }

        return (
            <div>
                {play ? <table><tbody>{htmlTable}</tbody></table>
                    : this.createPlaseholderTable(gameMode.field)}
            </div>
        )
    }

}


export default Table;