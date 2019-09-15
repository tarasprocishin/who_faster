import React from 'react';
import uuid from 'uuid/v4';
import './Table.css';

function Table(props) {
    let { table, field } = props;

    // let color = null;
    // color = ((chooseElId) === id) ? color = 'red': null;

    // const style = {background: color}
    
   function chunckArray(arr, chunkSize) {
       let index = 0;
       let arrlength = arr.length;
       let tempArr = [];

       for (index = 0; index < arrlength; index += chunkSize) {
          let myChynk = arr.slice(index, index + chunkSize);
          tempArr.push(<tr key={uuid()}>{myChynk}</tr>);
       }

       return tempArr;
   }

   let htmlTable = chunckArray(table, field);

    return(
        <>
        <table>
            <tbody>
                {htmlTable}
            </tbody>
        </table>
        </>
    )

}

export default Table;

// onClick={(event) => addPoint(event)} style={style}