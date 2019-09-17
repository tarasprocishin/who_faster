import React from 'react';
import uuid from 'uuid/v4';
import Td from './Td/Td';
import { chunckArray, createPlaseholderTable } from '../../helpers'
import './Table.css';

function Table (props) {
    const { gameMode, play, table, useTds, cliked, addPoint } = props;
        let htmlTable = [];

        if (play) {
            let arrWithTd = table.map((el, index) => {
                return <Td
                    key={uuid()}
                    id={index}
                    useTds={useTds}
                    cliked={cliked}
                    addPoint={addPoint}
                >{el}</Td>
            })

            htmlTable = chunckArray(arrWithTd, gameMode.field);
        }

        return (
            <div className="game_field__table">
                {play ? <table><tbody>{htmlTable}</tbody></table>
                    : createPlaseholderTable(gameMode.field)}
            </div>
        )
    }




export default Table;