import React from 'react';
import uuid from 'uuid/v4';

function createPlaseholderTable (number) {
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

export default createPlaseholderTable;
